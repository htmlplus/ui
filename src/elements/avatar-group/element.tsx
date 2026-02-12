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
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusAvatarGroup extends PlusCore {
	/**
	 * Specifies whether to prominent the avatar when the mouse is entered or not.
	 */
	@Property({ reflect: true })
	hoverable?: boolean;

	/**
	 * Specifies whether avatars should be displayed compressed or not.
	 */
	@Property({ reflect: true })
	stacked?: boolean;

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
		return <slot />;
	}
}
