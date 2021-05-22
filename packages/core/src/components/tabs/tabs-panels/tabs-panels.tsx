import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { Inject, reconnect } from '../tabs/tabs.link';

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
