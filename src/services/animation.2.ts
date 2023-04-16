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

  private destroy = [];

  private get animations() {
    return this.source.getAnimations();
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
    this.unbind();
  }

  public enter(parameters?: any) {
    if (this.state == 'leaving') return this.reverse();

    this.update('enter');

    this.config.onEnter?.(parameters);

    this.next(() => {
      this.update('entering');

      this.config.onEntering?.(parameters);

      this.bind(parameters);
    });
  }

  public initialize(state?: Animation2State) {
    this.update(state);
  }

  public leave(parameters?: any) {
    if (this.state == 'entering') return this.reverse();

    this.update('leave');

    this.config.onLeave?.(parameters);

    this.next(() => {
      this.update('leaving');

      this.config.onLeaving?.(parameters);

      this.bind(parameters);
    });
  }

  private bind(parameters) {
    this.unbind();

    const callback = () => {
      switch (this.state) {
        case 'entering':
          this.update('entered');
          this.config.onEntered?.(parameters);
          break;
        case 'leaving':
          this.update('leaved');
          this.config.onLeaved?.(parameters);
          break;
      }
    };

    if (!this.animations.length) return callback();

    this.animations.forEach((animation) => {
      const destroy = () => {
        animation.removeEventListener('finish', callback);
      };

      this.destroy.push(destroy);

      animation.addEventListener('finish', callback, { once: true });
    });
  }

  private next(callback) {
    requestAnimationFrame(() => setTimeout(() => callback(), 5));
  }

  private reverse() {
    this.update(this.state == 'entering' ? 'leaving' : 'entering');
    for (const animation of this.animations) {
      animation.reverse();
    }
  }

  private unbind() {
    for (const callback of this.destroy) {
      callback();
    }
  }

  private update(state: Animation2State) {
    this.state = state;

    const value = this.config.states[this.state];

    this.target.setAttribute(this.config.key, value);
  }
}
