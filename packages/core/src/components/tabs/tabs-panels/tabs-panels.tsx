import { Component, Host, Prop, h } from '@stencil/core';
import { Inject } from '../tabs/tabs.link';

/**
 * TODO
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs-panels',
  styleUrl: 'tabs-panels.scss',
  shadow: true,
})
export class TabsPanels {

  /**
   * TODO
   */
  @Prop()
  connector?: string;

  // TODO
  @Inject()
  active?: string;

  get attributes() {
    return {

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
