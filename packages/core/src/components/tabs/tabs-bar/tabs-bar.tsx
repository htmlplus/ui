import { Component, Host, Prop, h } from '@stencil/core';

/**
 * TODO
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs-bar',
  styleUrl: 'tabs-bar.scss',
  shadow: true,
})
export class TabsBar {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  grow?: boolean;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  justify?: 'start' | 'center' | 'end' = 'start';

  /**
   * TODO
   */
  @Prop({ reflect: true })
  reverse?: boolean;

  get attributes() {
    return {
      'role': 'tablist'
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
