import { Component, Host, Prop, State, h } from '@stencil/core';
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
  value?: string;

  @State()
  @Inject()
  active?: string;

  @Inject()
  request?: Function = () => console.log('TODO: can not use out of tabs');

  get attributes() {
    return {
      'active': this.active && this.active === this.value,
      'onClick': () => !this.disabled && this.request(this.value)
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