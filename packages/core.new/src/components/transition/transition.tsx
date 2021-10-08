import { Bind, Component, Element, Event, EventEmitter, GlobalConfig, Host, Property, Styles } from '@app/decorators';
import { TransitionDirection, TransitionDuration, TransitionRepeat } from './transition.types';

/**
 */
@Component()
export class Transition {

  /**
   * Specifies the amount of delay before starting the animation to play. 
   * This may be specified in either seconds `s` or milliseconds `ms`.
   */
  @Property()
  delay?: string = '0s';

  /**
   * Defines whether an animation should be played forwards, backwards or in alternate cycles.
   */
  @Property()
  direction?: TransitionDirection = 'normal';

  /**
   * Specifies the length of time it will take to complete one cycle between two defined states.
   * You can also use the reservation values `slower`, `slow`, `normal`, `fast` and `faster`.
   */
  @Property()
  duration?: TransitionDuration = 'normal';

  /**
   * Specifies what kind of animation you want to play. 
   * click [here](https://htmlplus.io/component/transition/names) to see the list of available animations.
   */
  @Property({ reflect: true })
  name: string;

  /**
   * Specifies the time that animation should be paused.
   */
  // @Property({ reflect: true })
  // pause?: TransitionPause;

  /**
   * Specifies the time that animation will start.
   */
  // @Property({ reflect: true })
  // start?: TransitionStart;

  /**
   * Specifies the number of times the animation should be repeated after one complete cycle.
   */
  @Property()
  repeat?: TransitionRepeat = 1;

  /**
   * This event is fired any time the animation has been canceled.
   */
  @Event({ cancelable: true })
  plusCancel!: EventEmitter<void>;

  /**
   * This event is fired when animation has been completed.
   */
  @Event({ cancelable: true })
  plusEnd!: EventEmitter<void>;

  /**
   * This event is fired any time a new cycle has been started. 
   */
  @Event({ cancelable: true })
  plusIteration!: EventEmitter<void>;

  /**
   * This event is fired when animation has been started.
   */
  @Event({ cancelable: true })
  plusStart!: EventEmitter<void>;

  @GlobalConfig('transition', {
    delay: '0s',
    direction: 'normal',
    duration: 'normal',
    repeat: 1,
  })
  config?;

  @Element()
  $host!: HTMLElement;

  parser(input) {

    if (!input) return input;

    const regexp = /random\((\d+|(\d+)?\.\d+)(s|ms)(\s+)?(,)(\s+)?(\d+|(\d+)?\.\d+)(s|ms)(\s+)?(,)?(\s+)?(\d+)?\)/g;

    const matches = input.match(regexp);

    if (!matches) return input;

    const [expression] = matches;

    let [from, to, fixed] = expression.replace(/random\(|\)/g, '').split(',').map((value) => value.trim());

    [from, to] = [from, to].map((value) => value.match(/ms/) ? parseFloat(value) / 1000 : parseFloat(value)).sort();

    const value = from + Math.random() * (to - from);

    return typeof fixed !== 'undefined' ? value.toFixed(fixed) : value;
  }

  @Styles()
  get style() {
    return {
      '--plus-transition-delay': this.delay ? this.parser(this.delay) : null,
      '--plus-transition-duration': isNaN(parseFloat(this.duration)) ? null : this.duration,
      '--plus-transition-repeat': this.repeat as any ?? null,
    }
  }

  get events() {
    return [
      {
        event: 'animationcancel',
        handler: this.onCancel
      },
      {
        event: 'animationend',
        handler: this.onEnd
      },
      {
        event: 'animationiteration',
        handler: this.onIteration
      },
      {
        event: 'animationstart',
        handler: this.onStart
      }
    ]
  }

  @Bind()
  onCancel() {
    this.plusCancel();
  }

  @Bind()
  onEnd() {
    this.plusEnd();
  }

  @Bind()
  onIteration() {
    this.plusIteration();
  }

  @Bind()
  onStart() {
    this.plusStart();
  }

  connectedCallback() {
    this.events.map(({ event, handler }) => this.$host.addEventListener(event, handler));
  }

  disconnectedCallback() {
    this.events.map(({ event, handler }) => this.$host.removeEventListener(event, handler));
  }

  render() {
    return (
      <Host style={this.style}>
        <slot />
      </Host>
    )
  }
}
