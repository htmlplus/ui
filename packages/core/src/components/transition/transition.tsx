import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import { TransitionDirection, TransitionDuration, TransitionRepeat } from './transition.types';

/**
 * This component allows you to apply an animation on your component such as fade or other animations. 
 * click [here](ROUTE:COMPONENT:TRANSITION:PROPERTY:NAME) to see and choose your favorite animation from a wide range of animation we provide for you.
 * @examples default, name, duration
 */
@Component({
  tag: 'plus-transition',
  styleUrl: 'transition.scss',
  shadow: true
})
export class Transition {

  /**
   * Specifies the amount of delay before starting the animation to play. 
   * This may be specified in either seconds `s` or milliseconds `ms`.
   */
  @Prop()
  delay?: string = '0s';

  /**
   * Defines whether an animation should be played forwards, backwards or in alternate cycles.
   */
  @Prop()
  direction?: TransitionDirection = 'normal';

  /**
   * Specifies the length of time it will take to complete one cycle between two defined states.
   * You can also use the reservation values `slower`, `slow`, `normal`, `fast` and `faster`.
   */
  @Prop()
  duration?: TransitionDuration = 'normal';

  /**
   * Specifies what kind of animation you want to play. 
   * click [here](ROUTE:COMPONENT:TRANSITION:PROPERTY:NAME) to see the list of available animations.
   */
  @Prop({ reflect: true })
  name: string;

  /**
   * Specifies the time that animation should be paused.
   */
  // @Prop({ reflect: true })
  // pause?: TransitionPause;

  /**
   * Specifies the time that animation will start.
   */
  // @Prop({ reflect: true })
  // start?: TransitionStart;

  /**
   * Specifies the number of times the animation should be repeated after one complete cycle.
   */
  @Prop()
  repeat?: TransitionRepeat = 1;

  /**
   * This event is fired any time the animation has been canceled.
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusCancel!: EventEmitter<void>;

  /**
   * This event is fired when animation has been completed.
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusEnd!: EventEmitter<void>;

  /**
   * This event is fired any time a new cycle has been started. 
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusIteration!: EventEmitter<void>;

  /**
   * This event is fired when animation has been started.
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
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

  get styles() {
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

  @Bind
  onCancel() {
    this.plusCancel.emit();
  }

  @Bind
  onEnd() {
    this.plusEnd.emit();
  }

  @Bind
  onIteration() {
    this.plusIteration.emit();
  }

  @Bind
  onStart() {
    this.plusStart.emit();
  }

  connectedCallback() {
    this.events.map(({ event, handler }) => this.$host.addEventListener(event, handler));
  }

  disconnectedCallback() {
    this.events.map(({ event, handler }) => this.$host.removeEventListener(event, handler));
  }

  render() {
    return (
      <Host style={this.styles}>
        <slot />
      </Host>
    )
  }
}
