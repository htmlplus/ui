import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

/**
 * Centers content vertically and horizontally.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, inline
 */
@Element()
export class Center extends PlusCore {
	/**
	 * Converts the `display` CSS property from `flex` to `inline-flex`.
	 */
	@Property({ reflect: true })
	inline?: boolean;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	render() {
		return <slot />;
	}
}
