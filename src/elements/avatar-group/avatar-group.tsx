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
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class AvatarGroup extends PlusCore {
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
