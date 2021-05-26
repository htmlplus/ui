import { Component, Host, Prop, State, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { Inject } from '../tabs/tabs.link';

/**
 * TODO
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs-tab',
  styleUrl: 'tabs-tab.scss',
  shadow: true,
})
export class TabsTab {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  value?: any;

  @GlobalConfig('tabsTab')
  config?;

  @State()
  @Inject()
  tunnel?: any;

  @Inject()
  change?: Function = () => console.log('TODO: can not use out of tabs');

  get attributes() {
    return {
      'active': this.tunnel && this.tunnel === this.value,
      'onClick': () => !this.disabled && this.change(this.value)
    }
  }

  render() {
    return (
      <Host {...this.attributes}>
        <span>
          <slot />
        </span>
      </Host>
    )
  }
}