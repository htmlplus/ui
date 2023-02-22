import {
  Attributes,
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  host,
  off,
  on,
  State
} from '@htmlplus/element';

import { ScrollToTopChangeEvent, ScrollToTopReference } from './scroll-to-top.types';

/**
 * TODO
 * @slot default - The default slot.
 */
@Element()
export class ScrollToTop {
  /**
   * Disables the component functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Property()
  offset?: number = 0;

  /**
   * Specifies the reference of the scroll.
   */
  @Property()
  reference?: ScrollToTopReference = 'auto';

  /**
   * TODO
   */
  @Property()
  smooth?: boolean = true;

  /**
   * TODO
   */
  @Property()
  TODO?: number = 100;

  /**
   * TODO
   */
  @Event()
  plusChange!: EventEmitter<ScrollToTopChangeEvent>;

  @State()
  state: ScrollToTopChangeEvent = 'hide';

  @Attributes()
  get attributes() {
    return {
      role: 'button',
      state: this.state
    };
  }

  get $host() {
    return host(this);
  }

  get $reference() {
    if (this.reference == 'auto') {
      let parent = this.$host;

      while (parent) {
        parent = parent.parentElement;

        if (!parent) break;

        if (this.scrollable(parent)) break;
      }

      return parent || document.documentElement;
    }

    if (this.reference == 'parent') {
      return document.parentElement;
    }

    if (this.reference == 'document') {
      return document.documentElement;
    }

    if (this.reference == 'window') {
      return window;
    }

    if (typeof this.reference == 'string') {
      return document.querySelector(this.reference);
    }

    return this.reference;
  }

  /**
   * TODO
   */
  @Bind()
  @Method()
  scroll() {
    this.$reference?.scrollTo({
      top: this.offset,
      behavior: this.smooth ? 'smooth' : 'auto'
    });
  }

  bind() {
    on(this.$host, 'click', this.onClick);
    on(this.$host, 'keydown', this.onKeyDown);
    on(this.$reference, 'scroll', this.onScroll);
  }

  unbind() {
    off(this.$host, 'click', this.onClick);
    off(this.$host, 'keydown', this.onKeyDown);
    off(this.$reference, 'scroll', this.onScroll);
  }

  scrollable(element: Element) {
    const overflow = window.getComputedStyle(element).getPropertyValue('overflow-y');

    const has = ['auto', 'scroll'].includes(overflow);

    return has;
  }

  @Bind()
  onClick() {
    this.scroll();
  }

  @Bind()
  onScroll(event) {
    const exceeded = event.target.scrollTop >= this.TODO;

    this.state = exceeded ? 'show' : 'hide';

    this.plusChange(this.state);
  }

  @Bind()
  onKeyDown(event) {
    if (event.key != ' ' && event.key != 'Enter') return;
    this.scroll();
  }

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return <slot />;
  }
}
