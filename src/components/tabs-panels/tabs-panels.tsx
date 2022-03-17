import { Attributes, Element, Property, Watch, createLink } from '@htmlplus/element';

const { Inject, reconnect } = createLink('Tabs');

/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
@Element()
export class TabsPanels {

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
   */
  @Property()
  connector?: string;

  // TODO: it's bridge
  @Inject()
  tunnel?: any;

  @Attributes()
  get attributes() {
    return {
      // TODO
    }
  }

  /**
   * Watchers
   */

  @Watch('connector')
  watcher() {
    reconnect(this);
  }

  render() {
    return (
      <slot />
    )
  }
}
