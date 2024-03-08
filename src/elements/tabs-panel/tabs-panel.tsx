import { Consumer, Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { TabsContext } from '../tabs/tabs.context';

/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 *
 * @slot default - The default slot.
 */
@Element()
export class TabsPanel extends PlusCore {
  /**
   * Provides your own value.
   */
  @Property()
  value?: number | string;

  @State()
  @Consumer('tabs')
  parent?: TabsContext;

  render() {
    return (
      <host active={this.parent?.current === this.value}>
        <slot />
      </host>
    );
  }
}
