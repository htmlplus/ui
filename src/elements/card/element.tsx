import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

/**
 * Cards contain content and actions about a single subject.
 *
 * @slot default - The default slot.
 *
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customized
 */
@Element()
export class PlusCard extends PlusCore {
	/**
	 * If you want the card to have shadow, use the elevation property,
	 * And select the property value between `1` and `24`.
	 */
	@Property({ reflect: true })
	elevation?: OverridableValue<number>;

	/**
	 * Use the flat property to neutralize elevation.
	 */
	@Property({ reflect: true })
	flat?: boolean;

	/**
	 * If you want the card to have border, use the outlined property.
	 */
	@Property({ reflect: true })
	outlined?: boolean;

	/**
	 * Use tile property to neutralize border-radius.
	 */
	@Property({ reflect: true })
	tile?: boolean;

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

	render() {
		return <slot />;
	}
}
