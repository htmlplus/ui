import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

/**
 * @examples default
 */
@Element()
export class PlusSpacer extends PlusCore {
	/**
	 * TODO
	 */
	@Property()
	grow: number = 1;

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

	@Style()
	get style() {
		return {
			':host': {
				'flex-grow': this.grow
			}
		};
	}
}
