import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

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
