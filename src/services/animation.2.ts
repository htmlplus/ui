export type Animation2Element = HTMLElement | (() => HTMLElement);

export type Animation2Event = (parameters?: any) => void;

export type Animation2State = 'enter' | 'entering' | 'entered' | 'leave' | 'leaving' | 'leaved';

export interface Animation2Config {
  key: string;
  source: Animation2Element;
  target: Animation2Element;
  states?: {
    [key in Animation2State]?: string;
  };
  onEnter?: Animation2Event;
  onEntering?: Animation2Event;
  onEntered?: Animation2Event;
  onLeave?: Animation2Event;
  onLeaving?: Animation2Event;
  onLeaved?: Animation2Event;
}

export class Animation2 {
  public state: Animation2State = 'leaved';

  private config: Animation2Config;

  private destroy?: Function;

  private get animation() {
    return this.source.getAnimations()[0];
  }

  private get source() {
    const element = this.config.source;

    if (typeof element == 'function') return element();

    return element;
  }

  private get target() {
    const element = this.config.target;

    if (typeof element == 'function') return element();

    return element;
  }

  constructor(config: Animation2Config) {
    this.config = Object.assign({}, this.config, config, {
      states: Object.assign(
        {},
        {
          enter: 'enter',
          entering: 'entering',
          entered: 'entered',
          leave: 'leave',
          leaving: 'leaving',
          leaved: 'leaved'
        },
        config.states
      )
    });
  }

  public dispose() {
    this.destroy?.();
  }

  public enter(parameters?: any): Promise<boolean> {
    return new Promise((resolve) => {
      this.destroy?.();

      this.update('enter');

      this.config.onEnter?.(parameters);

      this.next(() => {
        this.update('entering');

        this.config.onEntering?.(parameters);

        const onCancel = () => {
          resolve(true);
        };

        const onFinish = () => {
          this.update('entered');

          this.config.onEntered?.(parameters);

          resolve(false);
        };

        if (!this.animation) return onFinish();

        this.destroy = () => {
          resolve(true);

          this.animation?.removeEventListener('cancel', onCancel);
          this.animation?.removeEventListener('finish', onFinish);
        };

        this.animation.addEventListener('cancel', onCancel, { once: true });
        this.animation.addEventListener('finish', onFinish, { once: true });
      });
    })
  }

  public initialize(state?: Animation2State) {
    this.update(state);
  }

  public leave(parameters?: any): Promise<boolean> {
    return new Promise((resolve) => {
      this.destroy?.();

      this.update('leave');

      this.config.onLeave?.(parameters);

      this.next(() => {
        this.update('leaving');

        this.config.onLeaving?.(parameters);

        const onCancel = () => {
          resolve(true);
        };

        const onFinish = () => {
          this.update('leaved');

          this.config.onLeaved?.(parameters);

          resolve(false);
        };

        if (!this.animation) return onFinish();

        this.destroy = () => {
          resolve(true);

          this.animation?.removeEventListener('cancel', onCancel);
          this.animation?.removeEventListener('finish', onFinish);
        };

        this.animation.addEventListener('cancel', onCancel, { once: true });
        this.animation.addEventListener('finish', onFinish, { once: true });
      });
    })
  }

  private next(callback) {
    requestAnimationFrame(() => setTimeout(() => callback(), 5));
  }

  private update(state: Animation2State) {
    this.state = state;

    const value = this.config.states[this.state];

    this.target.setAttribute(this.config.key, value);
  }
}
