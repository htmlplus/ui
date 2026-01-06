import {
	Bind,
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Query,
	Variant
} from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import type { PlusBreakpoint } from '@/types';

import { CarouselChild } from '../carousel/child';

/**
 * @subset
 */
@Element()
export class PlusCarouselProgress extends CarouselChild {
	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	@Query('div')
	$bar!: HTMLElement;

	events: EmblaEventType[] = ['init', 'reInit', 'scroll', 'slideFocus'];

	@Bind()
	handleUpdate() {
		if (!this.api) return;

		const value = this.api.scrollProgress();

		if (typeof value !== 'number') {
			return this.$bar.removeAttribute('style');
		}

		const progress = Math.max(0, Math.min(1, value)) * 100;

		this.$bar.style.transform = `translate3d(${progress}%, 0px, 0px)`;
	}

	render() {
		return <div className="bar" part="bar" />;
	}
}
