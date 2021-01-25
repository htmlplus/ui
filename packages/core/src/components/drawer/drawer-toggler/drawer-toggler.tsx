import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DrawerLink, Inject, rebind } from '../drawer/drawer.link';

/**
 * @group drawer
 * @slot - The default slot
 */
@Component({
  tag: 'plus-drawer-toggler',
  styleUrl: 'drawer-toggler.scss',
  shadow: true,
})
export class DrawerToggler {

  /**
   * TODO
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
