import { Bind, Element, Event, EventEmitter, Property, Watch, off, on } from '@htmlplus/element';

import { PlusCore } from '@app/core';

import { ScrollDetectorChangeEvent, ScrollDetectorReference } from './scroll-detector.types';

/**
 * @stable
 */
@Element()
export class ScrollDetector extends PlusCore {
  /**
   * Disables the component functionality.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the reference of the scroll.
   */
  @Property()
  reference?: ScrollDetectorReference = 'document';

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

  offset?: number;

  get $reference() {
    if (typeof this.reference != 'string') return this.reference;

    if (this.reference == 'document') return document as any;

    return document.querySelector(this.reference);
  }

  @Watch(['disabled', 'reference'])
  watcher(next) {
    next ? this.unbind() : this.bind();
  }

  bind() {
    if (this.disabled) return;

    if (!this.$reference) return;

    on(this.$reference, 'scroll', this.onScroll);

    this.onScroll();
  }

  unbind() {
    // TODO
    try {
      off(this.$reference, 'scroll', this.onScroll);
    } catch {}
  }

  @Bind()
  onScroll() {
    const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } =
      this.$reference.documentElement || this.$reference;

    const offset = this.vertical ? scrollTop : scrollLeft;

    const total = this.vertical ? scrollHeight : scrollWidth;

    const viewport = this.vertical ? clientHeight : clientWidth;

    const overflow = total - viewport;

    const progress = overflow ? Math.round((offset / overflow) * 100) : 0;

    if (this.offset == progress) return;

    this.offset = offset;

    this.plusChange({
      offset,
      overflow,
      progress,
      total,
      viewport
    });
  }

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return null;
  }
}
