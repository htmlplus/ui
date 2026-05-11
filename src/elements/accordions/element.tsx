import {
	Element,
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
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusAccordions extends PlusCore {
	/**
	 * Specifies that only one accordion can be open.
	 */
	@Property()
	persistent: boolean = false;

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

	@Provider('accordions')
	state: Context = {
		open: this.open.bind(this)
	};

	open(target: HTMLElement) {
		if (!this.persistent) return;

		for (const accordion of Array.from(this.$host.children)) {
			if (accordion === target) continue;

			if (!('open' in accordion)) continue;

			if (!accordion.open) continue;

			accordion.shadowRoot?.querySelector<HTMLElement>('[part=header]')?.click?.();
		}
	}

	render() {
		return <slot />;
	}
}
