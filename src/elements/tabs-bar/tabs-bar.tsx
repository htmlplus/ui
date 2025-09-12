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
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class TabsBar extends PlusCore {
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
		return (
			<host role="tablist">
				<slot />
			</host>
		);
	}
}
