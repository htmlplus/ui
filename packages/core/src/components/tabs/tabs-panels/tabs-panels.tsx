import { Component, Host, Prop, h } from '@stencil/core';

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
