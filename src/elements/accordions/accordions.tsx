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
import type { Breakpoint } from '@/types';

import type { AccordionsContext } from './accordions.context';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class Accordions extends PlusCore {
	/**
	 * Specifies that only one accordion can be open.
	 */
	@Property()
	persistent?: boolean;

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

	@Provider('accordions')
	state: AccordionsContext = {
		open: this.open.bind(this)
	};

	open(target: HTMLElement) {
		if (!this.persistent) return;

		for (const accordion of Array.from(this.$host.children)) {
			if (accordion === target) continue;

			// biome-ignore lint: TODO
			if (!accordion['open']) continue;

			// biome-ignore lint: TODO
			accordion.shadowRoot.querySelector('[part=header]')['click']();
		}
	}

	render() {
		return <slot />;
	}
}
