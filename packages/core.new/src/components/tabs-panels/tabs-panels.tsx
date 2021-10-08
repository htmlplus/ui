import { Attributes, Component, GlobalConfig, Property } from '@app/decorators';
import { createLink } from '@app/services';

const { Inject } = createLink('Tabs');

/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
@Component()
export class TabsPanels {

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
   */
  @Property()
  connector?: string;

  // TODO: it's bridge
  @Inject()
  tunnel?: any;

  @GlobalConfig('tabsPanels')
  config?;

  @Attributes()
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
      <slot />
    )
  }
}
