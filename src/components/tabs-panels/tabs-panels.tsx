import { Element, Property, Watch } from '@htmlplus/element';

import { PlusBase } from '@app/core';
import { createLink } from '@app/services';

const { reconnect } = createLink({
  crawl: true,
  namespace: ({ connector }) => (connector ? `Tabs:${connector}` : undefined)
});

/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
@Element()
export class TabsPanels extends PlusBase {
  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
   */
  @Property()
  connector?: string;

  @Watch(['connector'])
  watcher() {
    reconnect(this);
  }

  render() {
    return <slot />;
  }
}
