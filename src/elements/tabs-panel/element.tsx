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
import type { PlusBreakpoint } from '@/types';

import type { Context } from '../tabs/context';

/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusTabsPanel extends PlusCore {
	/**
	 * Provides your own value.
	 */
	@Property()
	value?: string;

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
	 * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * See [Variant](/variant-property) for details.
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	@State()
	@Consumer('tabs')
	parent?: Context;

	render() {
		return (
			<host>
				<slot />
			</host>
		);
	}
}
