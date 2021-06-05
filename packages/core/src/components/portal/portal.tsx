import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { GlobalConfig, Portal as PortalCore, PortalStrategy, PortalTarget } from '@app/utils';

/**
 * @experimental 
 * @slot default - The default slot.
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
      <Host />
    )
  }
}
