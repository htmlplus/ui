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
import type { PlusBreakpoint, PlusColorOverrides } from '@/types';

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
export class PlusDivider extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: OverridableValue<string & {}, PlusColorOverrides>;

	/**
	 * Specifies the amount of indentation.
	 */
	@Property({ reflect: true })
	inset?: 'none' | 'start' | 'end' | 'both' | (string & {}) = 'none';

	/**
	 * Draws the divider in a `horizontal` or `vertical` orientation.
	 */
	@Property({ reflect: true })
	orientation?: 'horizontal' | 'vertical' = 'horizontal';

	/**
	 * Specifies the location of the default slot.
	 */
	@Property({ reflect: true })
	placement?: 'start' | 'center' | 'end' = 'center';

	/**
	 * Specifies the thickness of the border.
	 */
	@Property({ reflect: true })
	size?: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = 'md';

	/**
	 * Specifies the style of the border.
	 */
	@Property({ reflect: true })
	stroke?: OverridableValue<
		'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid'
	> = 'solid';

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
				'--plus-divider-color': toCSSColor(this.color)
			}
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
