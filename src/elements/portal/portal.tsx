import { Element, Property, Watch } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Portal as PortalCore, PortalStrategy, PortalTarget } from '@/services';

/**
 * @experimental
 * @slot default - The default slot.
 */
@Element()
export class Portal extends PlusCore {
  /**
   * Disables the portal.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the position of the portal content relative to the target.
   */
  @Property()
  strategy?: PortalStrategy = 'append';

  /**
   * Specifies the position of the portal content, It Can include css selectors,
   * node or any html elements.
   */
  @Property()
  target?: PortalTarget = 'body';

  instance?: PortalCore;

  get $nodes() {
    return Array.from(this.$host.children);
  }

  @Watch(['disabled', 'strategy', 'target'])
  watcher(next, prev, name) {
    switch (name) {
      case 'disabled':
        next ? this.terminate() : this.initialize();
        break;

      case 'strategy':
      case 'target':
        this.terminate();
        this.initialize();
        break;
    }
  }

  initialize() {
    if (typeof window === 'undefined') return;

    if (this.disabled) return;

    this.instance = new PortalCore({
      source: this.$nodes,
      strategy: this.strategy,
      target: this.target
    });
  }

  terminate() {
    this.instance?.revert();
  }

  connectedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }
}
