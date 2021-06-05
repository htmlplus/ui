import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/utils';
import { ScrollIndicatorSource } from './scroll-indicator.types';

/**
 * @part indicator - TODO
 */
@Component({
  tag: 'plus-scroll-indicator',
  styleUrl: 'scroll-indicator.scss',
  shadow: true
})
export class ScrollIndicator implements ComponentInterface {

  /**
   * Disables the component function.
   */
  @Prop()
  disabled?: boolean;

  /**
   * Specifies the source of scroll.
   */
  @Prop()
  source?: ScrollIndicatorSource = 'document';

  /**
   * Indicates which scroll (horizontal or vertical) to be used as its source.
   */
  // @Prop({ reflect: true })
  vertical?: boolean;

  /**
   * When the children is scrolled this event trigger.
   */
  @Event({
    bubbles: true,
    cancelable: false
  })
  plusScroll: EventEmitter<number>;

  @GlobalConfig('scrollIndicator', {
    source: 'document'
  })
  config?;

  @Element()
  $host!: HTMLElement;

  $indicator!: HTMLElement;

  get $source() {

    if (typeof this.source !== 'string') return this.source;

    if (this.source === 'document') return document;

    return document.querySelector(this.source);
  }

  get attributes() {
    return {
      // 'role': 'TODO'
    }
  }

  get progress() {

    // TODO: any type not valid
    let $source = this.$source as any;

    if (!$source) return 0;

    $source = this.$source['documentElement'] ?? $source;

    const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = $source;

    const offset = this.vertical ? scrollLeft : scrollTop;

    const overflow = this.vertical ? scrollWidth - clientWidth : scrollHeight - clientHeight;

    return Math.round(offset / overflow * 100);
  }

  /**
   * Internal Methods
   */

  bind() {

    if (this.disabled) return;

    this.$source?.addEventListener('scroll', this.onScroll);

    this.onScroll();
  }

  unbind() {
    this.$source?.removeEventListener('scroll', this.onScroll);
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    const value = this[name];

    switch (name) {

      case 'disabled':
      case 'source':

        value ? this.unbind() : this.bind();

        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onScroll() {

    const progress = this.progress;

    const property = this.vertical ? 'height' : 'width';

    this.$indicator.style[property] = `${progress}%`;

    this.plusScroll.emit(progress);
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div
          class="indicator"
          part="indicator"
          ref={($element) => this.$indicator = $element}
        />
      </Host>
    )
  }
}
