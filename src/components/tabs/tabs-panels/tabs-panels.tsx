import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { Inject } from '../tabs/tabs.link';

/**
 * TODO: This component contains panels.
 * @group tabs
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-tabs-panels',
  styleUrl: 'tabs-panels.scss',
  shadow: true,
})
export class TabsPanels implements ComponentInterface {

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
   */
  @Prop()
  connector?: string;

  // TODO: it's bridge
  @Inject()
  tunnel?: any;

  @GlobalConfig('tabsPanels')
  config?;

  get attributes() {
    return {
      // TODO
    }
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    switch (name) {

      case 'connector':

        // reconnect(this);

        break;
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
