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
  value?: any;

  @State()
  @Inject()
  tunnel?: any;

  get attributes() {
    return {
      'active': this.tunnel && this.tunnel === this.value
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