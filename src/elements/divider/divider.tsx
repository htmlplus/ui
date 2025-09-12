import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant,
	toCSSColor
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import type { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';

/**
 * A thin line that divides the content vertically or horizontally.
 *
 * @stable
 *
 * @part line    - The prefix and suffix element.
 * @part prefix  - The prefix element.
 * @part suffix  - The suffix element.
 *
 * @slot default - The default slot.
 *
 * @examples default, width, type, color, variant, placement, horizontal, vertical, icon, sticky
 */
@Element()
export class Divider extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: string;

	/**
	 * Specifies the location of the default slot.
	 */
	@Property({ reflect: true })
	placement?: DividerPlacement = 'center';

	/**
	 * Specifies the width of the border.
	 */
	@Property({ reflect: true })
	width?: DividerWidth = 'md';

	/**
	 * Specifies the style of the border.
	 */
	@Property({ reflect: true })
	type?: DividerType = 'solid';

	/**
	 * Specifies the amount of indentation.
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<DividerVariant> = 'full';

	/**
	 *  Draws the divider in a vertical orientation.
	 */
	@Property({ reflect: true })
	vertical?: boolean;

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
			<host aria-orientation={this.vertical ? 'vertical' : 'horizontal'} role="separator">
				<div part="line prefix"></div>
				<slot />
				<div part="line suffix"></div>
			</host>
		);
	}
}
