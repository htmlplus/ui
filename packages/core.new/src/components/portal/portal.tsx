import { Component, GlobalConfig, Property, Watch } from '@app/decorators';
import * as Helpers from '@app/helpers';
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

  instance?: PortalCore;

  get $nodes() {
    return Array.from(Helpers.host(this).children);
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

  @Watch('disabled', 'strategy', 'target')
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

  /**
   * Lifecycles
   */

  mount() {
    this.initialize();
  }

  unmount() {
    this.terminate();
  }

  render() {
    return (
      <>
      </>
    )
  }
}
