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
import type { PlusBreakpoint, PlusColor } from '@/types';

import type { PlusSpinnerType } from './types';

/**
 * An indicator of progress and activity.
 *
 * @stable
 *
 * @examples default, size, custom-size, color, type, customized
 */
@Element()
export class PlusSpinner extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: OverridableValue<PlusColor>;

	/**
	 * Specifies the size of the spinner.
	 */
	@Property({ reflect: true })
	size: OverridableValue<'sm' | 'md' | 'lg' | 'inherit'> = 'inherit';

	/**
	 * Specifies which variant of the spinner to use.
	 */
	@Property({ reflect: true })
	type: PlusSpinnerType = 'default';

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
				color: toCSSColor(this.color)
			}
		};
	}

	get elements() {
		const map: Record<PlusSpinnerType, number> = {
			default: 8,
			'double-bounce': 2,
			'dual-ring': 1,
			ring: 1,
			ripple: 1,
			square: 1
		};

		const number = map[this.type || 'default'];

		return Array.from(Array(number).keys());
	}

	render() {
		return (
			<host role="status" value={this}>
				<div className="root">
					{this.elements.map((element) => (
						<div key={element} />
					))}
				</div>
			</host>
		);
	}
}
