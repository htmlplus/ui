import { Bind, Consumer, Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { TabsContext } from '../tabs/tabs.context';
import { TabsValue } from '../tabs/tabs.types';

/**
 * TODO: Tabs make it easy to switch between different views.
 * @subset
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
  value?: TabsValue;

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

  @Bind()
  onClick() {
    if (!this.disabled) {
      this.parent?.change(this.value);
    }
  }

  render() {
    return (
      <host onClick={this.onClick}>
        <slot />
      </host>
    );
  }
}
