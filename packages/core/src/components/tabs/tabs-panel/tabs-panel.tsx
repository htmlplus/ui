import { Component, Host, Prop, State, h } from '@stencil/core';
import { TabsTunnel } from '../tabs/tabs.tunnel';

/**
 * TODO
 * @group tabs
 * @slot - The default slot
 */
@Component({
  tag: 'plus-tabs-panel',
  styleUrl: 'tabs-panel.scss',
  shadow: true,
})
export class TabsPanel {

  /**
   * TODO
   */
  @Prop()
  value?: string;

  @State()
  @TabsTunnel.Inject()
  active?: string;

  render() {
    return (
      <Host active={this.active && this.active === this.value}>
        <slot />
      </Host>
    );
  }
}