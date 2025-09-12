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

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class DialogContent extends PlusCore {
	/**
	 * It makes the user able to scroll the content by adding a scroll beside it.
	 */
	@Property({ reflect: true })
	scrollable?: boolean;

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
