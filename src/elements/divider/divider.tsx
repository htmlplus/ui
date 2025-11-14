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
import { toCSSColor } from '@/helpers';
import type { Breakpoint } from '@/types';

import type {
	DividerInset,
	DividerOrientation,
	DividerPlacement,
	DividerSize,
	DividerStroke
} from './divider.types';

/**
 * A thin line that divides the content vertically or horizontally.
 *
 * @stable
 *
 * @part line   - The prefix and suffix element.
 * @part prefix  - The prefix element.
 * @part suffix  - The suffix element.
 *
 * @slot default - The default slot.
 *
 * @examples default, size, stroke, color, inset, placement, horizontal, vertical, icon, sticky, customized
 */
@Element()
export class Divider extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: string;

	/**
	 * Specifies the amount of indentation.
	 */
	@Property({ reflect: true })
	inset?: OverridableValue<DividerInset> = 'none';

	/**
	 * Draws the divider in a `horizontal` or `vertical` orientation.
	 */
	@Property({ reflect: true })
	orientation?: DividerOrientation = 'horizontal';

	/**
	 * Specifies the location of the default slot.
	 */
	@Property({ reflect: true })
	placement?: OverridableValue<DividerPlacement> = 'center';

	/**
	 * Specifies the thickness of the border.
	 */
	@Property({ reflect: true })
	size?: OverridableValue<DividerSize> = 'md';

	/**
	 * Specifies the style of the border.
	 */
	@Property({ reflect: true })
	stroke?: OverridableValue<DividerStroke> = 'solid';

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

	@Style()
	get style() {
		return {
			'--plus-divider-color': toCSSColor(this.color)
		};
	}

	render() {
		return (
			<host aria-orientation={this.orientation} role="separator">
				<div part="line prefix"></div>
				<slot />
				<div part="line suffix"></div>
			</host>
		);
	}
}
