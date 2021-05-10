import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/utils';
import { ScrollIndicatorSource } from './scroll-indicator.types';

/**
 * With this component, you can build a progress bar displaying how far a user has scroll down the page or tag.
 * @part indicator - TODO
 * @examples default
 */
@Component({
  tag: 'plus-scroll-indicator',
  styleUrl: 'scroll-indicator.scss',
  shadow: true
})
export class ScrollIndicator {

  /**
   * Disable event
   */
  @Prop()
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  source?: ScrollIndicatorSource = 'document';

  /**
   * Scroll vertical.
   */
  @Prop({ reflect: true })
  vertical?: boolean;

  /**
   * When the children is scrolled this event trigger,
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

  get $container() {
    // TODO
    return document;
  }

  get $source() {
    // TODO
    return document.documentElement;
  }

  get attributes() {
    return {
      // 'role': 'TODO'
    }
  }

  get progress() {

    const {
      scrollTop,
      scrollLeft,
      scrollHeight,
      scrollWidth,
      clientHeight,
      clientWidth,
    } = this.$source;

    const offset = this.vertical ? scrollLeft : scrollTop;

    const overflow = this.vertical ? scrollWidth - clientWidth : scrollHeight - clientHeight;

    return Math.round(offset / overflow * 100);
  }

  /**
   * Internal Methods
   */

  bind() {

    if (this.disabled) return;

    this.$container.addEventListener('scroll', this.onScroll);

    this.onScroll();
  }

  unbind() {
    this.$container.removeEventListener('scroll', this.onScroll);
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
