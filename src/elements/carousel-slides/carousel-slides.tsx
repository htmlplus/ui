import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
} from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import type { Breakpoint } from '@/types';

import { CarouselChild } from '../carousel/carousel.child';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class CarouselSlides extends CarouselChild {
	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	events: EmblaEventType[] = ['init', 'reInit'];

	render() {
		return (
			<div className="container" part="container">
				<slot />
			</div>
		);
	}
}
