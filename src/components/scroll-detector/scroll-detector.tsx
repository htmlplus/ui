import { Bind, Element, Event, EventEmitter, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';

import { ScrollDetectorChangeEvent, ScrollDetectorSource } from './scroll-detector.types';

/**
 * @stable
 */
@Element()
export class ScrollDetector {
  /**
   * Disables the component functionality.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the source of the scroll.
   */
  @Property()
  source?: ScrollDetectorSource = 'document';

  /**
   * Indicates which scroll (horizontal or vertical) is to be used as the source.
   */
  @Property()
  vertical?: boolean;

  /**
   * Fires when the scroll starts changing.
   */
  @Event()
  plusChange: EventEmitter<ScrollDetectorChangeEvent>;

  get $source() {
    if (typeof this.source != 'string') return this.source;

    if (this.source == 'document') return document.documentElement;

    return document.querySelector(this.source);
  }

  offset?: number;
  
  bind() {
    if (this.disabled) return;

    Helpers.on(this.$source, 'scroll', this.onScroll);

    this.onScroll();
  }

  unbind() {
    Helpers.off(this.$source, 'scroll', this.onScroll);
  }

  @Watch(['disabled', 'source'])
  watcher(next) {
    next ? this.unbind() : this.bind();
  }
  
  @Bind()
  onScroll() {
    const {
      scrollTop,
      scrollLeft,
      scrollHeight,
      scrollWidth,
      clientHeight,
      clientWidth,
     } = this.$source;

    const offset = this.vertical ?  scrollTop : scrollLeft;

    const total = this.vertical ? scrollHeight : scrollWidth;

    const viewport = this.vertical ? clientHeight : clientWidth;

    const overflow = total - viewport;

    const progress = Math.round(offset / overflow * 100);

    if (this.offset == progress) return;

    this.offset = offset;

    const detail = {
      offset,
      overflow,
      progress,
      total,
      viewport,
    };

    this.plusChange(detail);
  }

  loadedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return <slot />
  }
}
