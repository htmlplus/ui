import {
	Bind,
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
 * TODO: Tabs make it easy to switch between different views.
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusTabsTab extends PlusCore {
	/**
	 * A Tab can be disabled by setting disabled property.
	 */
	@Property({ reflect: true })
	disabled?: boolean;

	/**
	 * Provides your own value.
	 */
	@Property()
	value?: string;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

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
	overrides?: OverridesConfig<PlusBreakpoint>;

	@State()
	@Consumer('tabs')
	parent?: Context;

	@Bind()
	onClick() {
		// TODO: Verify whether `this.value` check is necessary
		if (!this.disabled && this.value) {
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
