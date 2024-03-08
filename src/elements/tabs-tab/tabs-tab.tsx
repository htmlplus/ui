import { Bind, Consumer, Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { TabsContext } from '../tabs/tabs.context';

/**
 * TODO: Tabs make it easy to switch between different views.
 *
 * @slot default - The default slot.
 */
@Element()
export class TabsTab extends PlusCore {
  /**
   * A Tab can be disabled by setting disabled property.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * Provides your own value.
   */
  @Property()
  value?: number | string;

  @State()
  @Consumer('tabs')
  parent?: TabsContext;

  /**
   * Events handler
   */
  @Bind()
  onClick() {
    if (!this.disabled) {
      this.parent?.change(this.value);
    }
  }

  render() {
    return (
      <host active={this.parent?.current === this.value} onClick={this.onClick}>
        <span>
          <slot />
        </span>
      </host>
    );
  }
}
