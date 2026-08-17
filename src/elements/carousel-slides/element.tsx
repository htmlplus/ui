import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Preset,
	Property
} from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import type { PlusBreakpoint } from '@/types';

import { CarouselChild } from '../carousel/child';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class PlusCarouselSlides extends CarouselChild {
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

	events: EmblaEventType[] = ['init', 'reInit'];

	render() {
		return (
			<div className="container" part="container">
				<slot />
			</div>
		);
	}
}
