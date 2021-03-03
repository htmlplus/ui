import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import { TransitionDirection, TransitionDuration, TransitionRepeat } from './transition.types';

/**
 * This component allows you to apply animation on your components such as fade or other animations. 
 * Click [here](ROUTE:COMPONENT:TRANSITION:NAME) to see and choose your favorite animation from a wide range of animations we provide for you. 
 * @development
 */
@Component({
  tag: 'plus-transition',
  styleUrl: 'transition.scss',
  shadow: true
})
export class Transition {

  /**
   * Specifies the amount of delay before starting the animation to play. This may be specified in either seconds (s) or milliseconds (ms).
   */
  @Prop()
  delay?: string;

  /**
   * TODO
   */
  @Prop()
  direction?: TransitionDirection;

  /**
   * TODO
   */
  @Prop()
  duration?: TransitionDuration = 'normal';

  /**
   * TODO
   */
  @Prop({ reflect: true })
  name: string;

  /**
   * TODO
   */
  // @Prop({ reflect: true })
  // pause?: TransitionPause;

  /**
   * TODO
   */
  // @Prop({ reflect: true })
  // start?: TransitionStart;

  /**
   * TODO
   */
  @Prop()
  repeat?: TransitionRepeat;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusCancel!: EventEmitter;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusEnd!: EventEmitter;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusIteration!: EventEmitter;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true
  })
  plusStart!: EventEmitter;

  @GlobalConfig('transition', {
    duration: 'normal'
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
