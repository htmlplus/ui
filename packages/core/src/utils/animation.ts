export interface AnimationConfig {
  name?: string;
  state?: boolean;
  source?: HTMLElement | Array<HTMLElement>;
  target?: HTMLElement;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onEnterCanceled?: () => void;
  onLeave?: () => void;
  onLeaving?: () => void;
  onLeaved?: () => void;
  onLeaveCanceled?: () => void;
}

export class Animation {

  private config: AnimationConfig;

  private timeout: any;

  constructor(config: AnimationConfig) {

    // TODO: auto detect functions
    this.config = Object.assign(
      {},
      {
        onEnter: () => undefined,
        onEntering: () => undefined,
        onEntered: () => undefined,
        onLeave: () => undefined,
        onLeaving: () => undefined,
        onLeaved: () => undefined,
      },
      config
    );

    // TODO
    if (typeof this.config.state !== 'undefined') {
      this.config.target.setAttribute('state', this.config.state ? 'opened' : 'closed')
    }
  }

  private add(...names: string[]) {

    if (!this.config.name) return;

    names.map((item) => this.config.target.classList.add(this.name(item)));
  }

  private duration() {

    return [this.config.source]
      .flat()
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

  private name(input) {
    return this.config.name ? `${this.config.name}-${input}` : input;
  }

  private remove(...names: string[]) {

    if (!this.config.name) return;

    names.map((item) => this.config.target.classList.remove(this.name(item)));
  }

  // TODO
  public cancel() {

    clearTimeout(this.timeout);

    this.remove('enter', 'enter-active');

    this.remove('leave', 'leave-active');
  }

  public dispose() {
    clearTimeout(this.timeout);
  }

  public enter(config?: AnimationConfig) {

    this.cancel();

    config = Object.assign({}, this.config, config);

    config.onEnter();

    this.remove('leave', 'leave-active');

    this.add('enter');

    this.config.target.setAttribute('state', 'open');

    requestAnimationFrame(() => setTimeout(() => {

      this.remove('enter');

      this.add('enter-active');

      this.config.target.setAttribute('state', 'opening');

      config.onEntering();

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {

        this.remove('enter', 'enter-active');

        this.config.target.setAttribute('state', 'opened');

        config.onEntered();
      }, this.duration());
    }, 5));
  }

  public leave(config?: AnimationConfig) {

    this.cancel();

    config = Object.assign({}, this.config, config);

    config.onLeave();

    this.remove('enter', 'enter-active');

    this.add('leave');

    this.config.target.setAttribute('state', 'close');

    requestAnimationFrame(() => setTimeout(() => {

      this.remove('leave');

      this.add('leave-active');

      this.config.target.setAttribute('state', 'closing');

      config.onLeaving();

      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {

        this.remove('leave', 'leave-active');

        this.config.target.setAttribute('state', 'closed');

        config.onLeaved();
      }, this.duration());
    }, 5));
  }
}