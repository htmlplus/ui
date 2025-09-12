import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant,
	toCSSUnit
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import type { StackAlign, StackGap, StackJustify } from './stack.types';

/**
 * A container for arranging elements vertically or horizontally.
 *
 * @slot default - The default slot.
 *
 * @examples default, vertical, divider
 */
@Element()
export class Stack extends PlusCore {
	/**
	 * The gap between items.
	 */
	@Property()
	gap?: StackGap;

	/**
	 * The alignment of items along the cross axis.
	 */
	@Property()
	items?: StackAlign = 'center';

	/**
	 * The distribution of items along the main axis.
	 */
	@Property()
	justify?: StackJustify = 'center';

	/**
	 * Whether to reverse the order of items.
	 */
	@Property()
	reverse?: boolean;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

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
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	@Style()
	get style() {
		let direction = this.vertical ? 'column' : 'row';

		if (this.reverse) direction += '-reverse';

		return {
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
		};
	}

	render() {
		return <slot />;
	}
}
