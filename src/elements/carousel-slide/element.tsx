import {
	Element,
	Listen,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
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
export class PlusCarouselSlide extends CarouselChild {
	/**
	 * Enables slide navigation when the slide is clicked.
	 *
	 * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
	 * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
	 *
	 * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
	 */
	@Property({ reflect: true })
	clickable?: boolean | 'jump';

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

	events: EmblaEventType[] = ['init', 'reInit', 'select'];

	get index(): number {
		return Array.prototype.indexOf.call(this.api?.slideNodes() || [], this.$host);
	}

	@Listen('click')
	handleClick() {
		if (this.clickable) {
			this.state?.scrollTo(this.index, this.clickable === 'jump');
		}
	}

	render() {
		return <slot />;
	}
}
