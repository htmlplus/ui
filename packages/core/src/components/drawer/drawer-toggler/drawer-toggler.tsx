import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DrawerLink, Inject, rebind } from '../drawer/drawer.link';

/**
 * @group drawer
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
@Component({
  tag: 'plus-drawer-toggler',
  styleUrl: 'drawer-toggler.scss',
  shadow: true,
})
export class DrawerToggler {

  /**
   * This property helps you to attach which drawer this toggler controls. 
   * It doesn't matter where the drawer toggler is. 
   * You can put the drawer's toggler inside or outside of the drawer. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  @Inject({ scope: '[connector]' })
  link!: DrawerLink;

  @Watch('connector')
  connectorWatcher() {
    rebind(this);
  }

  render() {
    return (
      <Host
        state={this.link.open ? 'open' : 'close'}
        role="button"
        onClick={() => this.link.toggle()}
      >
        <slot>
          {this.link.open ? 'Close' : 'Open'}
        </slot>
        <slot name="close" />
        <slot name="open" />
      </Host>
    );
  }
}
