import {
	Consumer,
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	State,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import type { TabsContext } from '../tabs/tabs.context';
import type { TabsValue } from '../tabs/tabs.types';

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
	value?: TabsValue;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	get active() {
		if (this.parent?.current === null) return false;

		if (this.parent?.current === undefined) return false;

		return this.parent?.current === this.value;
	}

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

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
