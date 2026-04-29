import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

/**
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusTabsBar extends PlusCore {
	/**
	 * Grows tabs as much as all available space (occupies all horizontal space).
	 */
	@Property({ reflect: true })
	grow?: boolean;

	/**
	 * Specifies how the tabs are aligned.
	 */
	@Property({ reflect: true })
	justify?: 'start' | 'center' | 'end' = 'start';

	/**
	 * Reverses the arrangement of the tabs.
	 */
	@Property({ reflect: true })
	reverse?: boolean;

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

	render() {
		return (
			<host role="tablist" value={this}>
				<slot />
			</host>
		);
	}
}
