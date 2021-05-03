import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import { GlobalConfig, Portal as PortalCore, PortalStrategy, PortalTarget } from '@app/utils';

/**
 * TODO
 * @internal 
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
   * TODO
   */
  @Prop()
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  strategy?: PortalStrategy = 'append';

  /**
   * TODO
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
      target: this.target,
      strategy: this.strategy,
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
