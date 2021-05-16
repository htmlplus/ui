import { Component, Host, Prop, State, h } from '@stencil/core';
import { Inject } from '../tabs/tabs.link';

/**
 * TODO
 * @group tabs
 * @slot default - The default slot.
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
  @Inject()
  active?: string;

  get attributes() {
    return {
      'active': this.active && this.active === this.value
    }
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host>
    )
  }
}