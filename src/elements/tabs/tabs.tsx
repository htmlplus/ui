import {
	Element,
	Event,
	type EventEmitter,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Provider,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import type { TabsContext } from './tabs.context';
import type { TabsValue } from './tabs.types';

/**
 * Organizes content across different screens.
 *
 * @development
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, grow, justify, reverse, below, vertical
 */
@Element()
export class Tabs extends PlusCore {
	/**
	 * Provides your own value.
	 */
	@Property()
	value?: TabsValue;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * You can use vertical property for vertical mode.
	 */
	@Property({ reflect: true })
	vertical?: boolean;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

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
