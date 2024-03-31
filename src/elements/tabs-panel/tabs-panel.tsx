import { Consumer, Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { TabsContext } from '../tabs/tabs.context';

/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
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

  /**
   * TODO
   */
  @Property({ reflect: true })
  get active() {
    if (this.parent?.current === null) return false;

    if (this.parent?.current === undefined) return false;

    return this.parent?.current === this.value;
  }

  @State()
  @Consumer('tabs')
  parent?: TabsContext;

  render() {
    return (
      <host>
        <slot />
      </host>
    );
  }
}
