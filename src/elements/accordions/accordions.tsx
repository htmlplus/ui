import { Element, Property, Provider } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class Accordions extends PlusCore {
  /**
   * TODO
   */
  @Property()
  persistent?: boolean;

  @Provider('accordions')
  get state(): any {
    return {
      open: this.open.bind(this)
    };
  }

  open(target: HTMLElement) {
    if (!this.persistent) return;

    for (const accordion of Array.from(this.$host.children)) {
      if (accordion === target) continue;

      if (!accordion['open']) continue;

      accordion.shadowRoot.querySelector('[part=header]')['click']();
    }
  }

  render() {
    return <slot />;
  }
}
