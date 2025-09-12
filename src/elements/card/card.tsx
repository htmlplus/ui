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

import type { CardElevation } from './card.types';

/**
 * Cards contain content and actions about a single subject.
 *
 * @slot default - The default slot.
 *
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customized
 */
@Element()
export class Card extends PlusCore {
	/**
	 * If you want the card to have shadow, use the elevation property,
	 * And select the property value between `1` and `24`.
	 */
	@Property({ reflect: true })
	elevation?: CardElevation;

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
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	render() {
		return <slot />;
	}
}
