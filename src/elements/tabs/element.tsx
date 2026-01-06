import {
	Element,
	Event,
	type EventEmitter,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Provider,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

import type { Context } from './context';

/**
 * Organizes content across different screens.
 *
 * @development
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, grow, justify, reverse, below, vertical
 */
@Element()
export class PlusTabs extends PlusCore {
	/**
	 * Provides your own value.
	 */
	@Property()
	value?: string;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	/**
	 * You can use vertical property for vertical mode.
	 */
	@Property({ reflect: true })
	vertical?: boolean;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * Fired when the value changes.
	 */
	@Event({ cancelable: true })
	plusChange!: EventEmitter<string>;

	@Provider('tabs')
	get state(): Context {
		return {
			current: this.value,
			change: this.change.bind(this)
		};
	}

	change(value: string) {
		const event = this.plusChange(value);

		if (event.defaultPrevented) return;

		this.value = value;
	}

	render() {
		return <slot />;
	}
}
