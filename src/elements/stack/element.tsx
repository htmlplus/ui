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
import { toCSSUnit } from '@/helpers';
import type { PlusBreakpoint } from '@/types';

/**
 * A container for arranging elements vertically or horizontally.
 *
 * @slot default - The default slot.
 *
 * @examples default, vertical, divider
 */
@Element()
export class PlusStack extends PlusCore {
	/**
	 * The gap between items.
	 */
	@Property()
	gap?: string | number;

	/**
	 * The alignment of items along the cross axis.
	 */
	@Property()
	items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' = 'center';

	/**
	 * The distribution of items along the main axis.
	 */
	@Property()
	justify?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly' =
		'center';

	/**
	 * Whether to reverse the order of items.
	 */
	@Property()
	reverse?: boolean;

	/**
	 * Whether the stack is vertical.
	 */
	@Property()
	vertical?: boolean;

	/**
	 * Controls whether items should wrap onto multiple lines.
	 */
	@Property()
	wrap?: boolean | 'reverse' = false;

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
		let direction = this.vertical ? 'column' : 'row';

		if (this.reverse) direction += '-reverse';

		return {
			':host': {
				'align-items': this.items?.replace(/start|end/, 'flex-$&'),
				display: 'flex',
				'flex-direction': direction,
				gap: toCSSUnit(this.gap),
				'justify-content': this.justify
					?.replace(/start|end/, 'flex-$&')
					?.replace(/between|around|evenly/, 'space-$&'),
				'flex-wrap': (() => {
					switch (this.wrap) {
						case false:
							return 'nowrap';
						case true:
							return 'wrap';
						case 'reverse':
							return 'wrap-reverse';
					}
				})()
			}
		};
	}

	render() {
		return <slot />;
	}
}
