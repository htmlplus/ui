import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import { TransitionDirection, TransitionDuration, TransitionPause, TransitionRepeat, TransitionStart } from './transition.types';

/**
 * TODO
 * @development
 */
@Component({
  tag: 'plus-transition',
  styleUrl: 'transition.scss',
  shadow: true
})
export class Transition {

  /**
   * TODO
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
  @Prop({ reflect: true })
  pause?: TransitionPause;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  start?: TransitionStart;

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

  get styles() {
    return {
      '--plus-transition-delay': this.delay ?? null,
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
