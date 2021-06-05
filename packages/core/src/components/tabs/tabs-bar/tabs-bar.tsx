import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

/**
 * TODO: Arranges tabs within a bar.
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs-bar',
  styleUrl: 'tabs-bar.scss',
  shadow: true,
})
export class TabsBar implements ComponentInterface {

  /**
   * Grows tabs as much as all available space (occupies all horizontal space).
   */
  @Prop({ reflect: true })
  grow?: boolean;

  /**
   * Specifies how the tabs are aligned.
   */
  @Prop({ reflect: true })
  justify?: 'start' | 'center' | 'end' = 'start';

  /**
   * Reverses the arrangement of the tabs.
   */
  @Prop({ reflect: true })
  reverse?: boolean;

  @GlobalConfig('tabsBar', {
    justify: 'start'
  })
  config?;

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
