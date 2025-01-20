import { Element, Event, EventEmitter, Property, Provider } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { TabsContext } from './tabs.context';
import { TabsValue } from './tabs.types';

/**
 * @development
 *
 * @slot default - The default slot.
 */
@Element()
export class Tabs extends PlusCore {
  /**
   * Provides your own value.
   */
  @Property()
  value?: TabsValue;

  /**
   * You can use vertical property for vertical mode.
   */
  @Property({ reflect: true })
  vertical?: boolean;

  /**
   * Fired when the value changes.
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<TabsValue>;

  @Provider('tabs')
  get state(): TabsContext {
    return {
      current: this.value,
      change: this.change.bind(this)
    };
  }

  change(value: TabsValue) {
    const event = this.plusChange(value);

    if (event.defaultPrevented) return;

    this.value = value;
  }

  render() {
    return <slot />;
  }
}
