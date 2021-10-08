import { Component, GlobalConfig, Host, Property } from '@app/decorators';
import { Portal as PortalCore, PortalStrategy, PortalTarget } from '@app/services';

/**
 * @experimental 
 * @slot default - The default slot.
 */
@Component()
export class Portal {

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

  @GlobalConfig('portal', {
    strategy: 'append',
    target: 'body',
  })
  config?;

  @Host()
  $host!: HTMLElement;

  instance?: PortalCore;

  get $nodes() {
    return Array.from(this.$host.children);
  }

  /**
   * Internal Methods
   */

  initialize() {

    if (typeof window === 'undefined') return;

    if (this.disabled) return;

    this.instance = new PortalCore({
      source: this.$nodes,
      strategy: this.strategy,
      target: this.target,
    })
  }

  terminate() {
    this.instance?.revert();
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    const value = this[name];

    switch (name) {

      case 'disabled':
        value ? this.terminate() : this.initialize();
        break;

      case 'strategy':
      case 'target':
        this.terminate();
        this.initialize();
        break;
    }
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <>
      </>
    )
  }
}
