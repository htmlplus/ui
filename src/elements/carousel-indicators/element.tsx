import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant,
	classes
} from '@htmlplus/element';

import type { EmblaEventType } from 'embla-carousel';

import type { PlusBreakpoint } from '@/types';

import { CarouselChild } from '../carousel/child';

/**
 * @subset
 */
@Element()
export class PlusCarouselIndicators extends CarouselChild {
	/**
	 * Controls what happens when you click an indicator.
	 * If `true`, it smoothly moves to the slide,
	 * and if set to `jump`, it instantly jumps without animation.
	 */
	@Property({ reflect: true })
	clickable: boolean | 'jump' = false;

	/**
	 * Allows indicators to wrap around the carousel when reaching the beginning or end.
	 */
	@Property({ reflect: true })
	infinity: boolean = false;

	/**
	 * Displays slide numbers inside the indicators.
	 */
	@Property({ reflect: true })
	numbers: boolean = false;

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

	get indexes(): number[] {
		return this.api?.slideNodes().map((_, index) => index) || [];
	}

	get selected(): number {
		return this.api?.selectedScrollSnap() ?? 0;
	}

	scrollTo(index: number) {
		if (this.clickable) {
			this.api?.scrollTo(index, this.clickable === 'jump');
		}
	}

	@Style()
	get style() {
		return {
			':host': {
				'--plus-carousel-indicators-selected': this.selected
			}
		};
	}

	getClass(index: number) {
		const selected = this.selected;
		return classes(
			{
				selected: selected === index,
				prev: selected > index ? Math.abs(selected - index) : false,
				next: selected < index ? Math.abs(selected - index) : false
			},
			true
		);
	}

	render() {
		return (
			<div className="root" part="root">
				{this.indexes.map((index) => (
					<button
						part="indicator"
						type="button"
						className={this.getClass(index)}
						onClick={() => this.scrollTo(index)}
					>
						{this.numbers ? index + 1 : ''}
					</button>
				))}
			</div>
		);
	}
}
