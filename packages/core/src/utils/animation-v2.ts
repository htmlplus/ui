export type AnimationV2Reflect = 'attribute' | 'class';

export type AnimationV2State = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';

export type AnimationV2Element = HTMLElement | Array<HTMLElement> | any; // TODO

export interface AnimationV2Config {
  key?: string;
  source?: AnimationV2Element;
  target?: AnimationV2Element;
  state?: AnimationV2State,
  states?: {
    [key in AnimationV2State]?: string
  },
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onEnterCanceled?: () => void;
  onLeave?: () => void;
  onLeaving?: () => void;
  onLeaved?: () => void;
  onLeaveCanceled?: () => void;
}

export class AnimationV2 {

  private config: AnimationV2Config;

  private timeout;

  constructor(config: AnimationV2Config) {

    const states = Object.assign(
      {},
      {
        enter: 'enter',
        entering: 'entering',
        entered: 'entered',
        leave: 'leave',
        leaving: 'leaving',
        leaved: 'leaved',
      },
      config.states
    );

    this.config = Object.assign(
      {},
      {
        reflect: 'class',
        states,
        onEnter: () => undefined,
        onEntering: () => undefined,
        onEntered: () => undefined,
        onEnterCanceled: () => undefined,
        onLeave: () => undefined,
        onLeaving: () => undefined,
        onLeaved: () => undefined,
        onLeaveCanceled: () => undefined,
      },
      config
    );

    this.init();
  }

  private get sources() {

    let { source } = this.config;

    try {
      source = source();
    }
    catch { }

    return [source].flat(1);
  }

  private get targets() {

    let { target } = this.config;

    try {
      target = target();
    }
    catch { }

    return [target].flat(1);
  }

  private duration() {

    return this.sources
      .map((item) => {

        try {

          const style = getComputedStyle(item);

          const duration = [
            style.animationDelay,
            style.transitionDelay,
            style.animationDuration,
            style.transitionDuration,
          ]
            .map((item = '0s') => parseFloat(item) * (/ms/g.test(item) ? 1 : 1000));

          return Math.max(...duration.slice(0, 2)) + Math.max(...duration.slice(2));
        }
        catch {
          return 0;
        }
      })
      .sort((a, b) => a - b)
      .pop();
  }

  private init() {

    let { state } = this.config;

    this.update(state);
  }

  private next(callback) {
    requestAnimationFrame(() => setTimeout(() => callback(), 5));
  }

  private update(state: AnimationV2State) {

    const { key, states } = this.config;

    this.targets.map((target) => target.setAttribute(key, states[state]));
  }

  public cancel() {
    clearTimeout(this.timeout);
  }

  public dispose() {
    clearTimeout(this.timeout);
  }

  public enter(config?: AnimationV2Config) {

    this.cancel();

    config = Object.assign({}, this.config, config);

    this.update('enter');

    config.onEnter();

    this.next(() => {

      clearTimeout(this.timeout);

      this.update('entering');

      config.onEntering();

      this.timeout = setTimeout(() => {

        this.update('entered');

        config.onEntered();
      }, this.duration());
    })
  }

  public leave(config?: AnimationV2Config) {

    this.cancel();

    config = Object.assign({}, this.config, config);

    this.update('leave');

    config.onLeave();

    this.next(() => {

      clearTimeout(this.timeout);

      this.update('leaving');

      config.onLeaving();

      this.timeout = setTimeout(() => {

        this.update('leaved');

        config.onLeaved();
      }, this.duration());
    })
  }
}