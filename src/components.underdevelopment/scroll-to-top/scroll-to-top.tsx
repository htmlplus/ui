import { Attributes, Bind, Element, Method, Property, host, off, on } from '@htmlplus/element';

import { ScrollToTopReference } from './scroll-to-top.types';

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

  @Attributes()
  get attributes() {
    return {
      role: 'button'
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
    on(this.$host, 'click', this.scroll);
    on(this.$reference, 'scroll', this.onScroll);
  }

  unbind() {
    off(this.$host, 'click', this.scroll);
    off(this.$reference, 'scroll', this.onScroll);
  }

  scrollable(element: Element) {
    const overflow = window.getComputedStyle(element).getPropertyValue('overflow-y');

    const has = ['auto', 'scroll'].includes(overflow);

    return has;
  }

  @Bind()
  onScroll(e) {
    console.log(123, e);
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
