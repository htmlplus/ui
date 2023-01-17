import { Element, host, Listen, Property } from '@htmlplus/element';

/**
 * TODO
 * @slot default - The default slot.
 */
@Element()
export class ScrollToTop {
  /**
   * Disables the component functionality.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the source of the scroll.
   */
  @Property()
  source?: HTMLElement | 'auto' | 'document' | string = 'auto';

  get $source() {
    if (this.source == 'auto') {
      let element = host(this);

      while (element) {
        element = element.parentElement;

        try {
          const overflow = window.getComputedStyle(element).getPropertyValue('overflow-y');

          const has = ['auto', 'scroll'].includes(overflow);

          if (has) break;
        } catch {}
      }

      return element || document.documentElement;
    }

    if (this.source == 'document') {
      return document.documentElement;
    }

    if (typeof this.source == 'string') {
      return document.querySelector(this.source);
    }

    return this.source;
  }

  @Listen('click')
  onClick() {
    if (this.disabled) return;
    this.$source?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return <slot />;
  }
}
