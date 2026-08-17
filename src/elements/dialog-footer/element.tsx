import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Preset,
	Property
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusDialogFooter extends PlusCore {
	/**
	 * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * See [Preset](/preset-property) for details.
	 */
	@Property({ reflect: true })
	@Preset()
	preset?: OverridableValue<never>;

	render() {
		return <slot />;
	}
}
