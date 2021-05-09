import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { GlobalConfig, Portal as PortalCore, PortalStrategy, PortalTarget } from '@app/utils';

/**
 * With a portal, you can render a component in a different place in the DOM tree, 
 * even if this place is not in your app's scope. Portals are very handy when working 
 * with modals, notifications, popups or other elements that are sensitive to where 
 * they’re placed in the DOM tree.
 * @experimental 
 * @slot default - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-portal',
  styleUrl: 'portal.scss',
  shadow: true
})
export class Portal implements ComponentInterface {

  /**
   * Disables the portal.
   */
  @Prop()
  disabled?: boolean;

  /**
   * Specifies the position of the portal content relative to the target.
   */
  @Prop()
  strategy?: PortalStrategy = 'append';

  /**
   * Specifies the position of the portal content, It Can include css selectors, node or any html elements.
   */
  @Prop()
  target?: PortalTarget = 'body';

  @GlobalConfig('portal', {
    strategy: 'append',
    target: 'body',
  })
  config?;

  @Element()
  $host!: HTMLElement;

  instance?: PortalCore;

  get $nodes() {
    return Array.from(this.$host.children);
  }

  /**
   * Internal Methods
   */

  create() {
    this.instance = new PortalCore({
      source: this.$nodes,
      strategy: this.strategy,
      target: this.target,
    })
  }

  destroy() {
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
        value ? this.destroy() : this.create();
        break;

      case 'strategy':
      case 'target':
        this.destroy();
        this.create();
        break;
    }
  }

  /**
   * Lifecycles
   */

  connectedCallback() {

    if (this.disabled) return;

    this.create();
  }

  disconnectedCallback() {
    this.destroy();
  }

  render() {
    return (
      <Host />
    )
  }
}
