import {
	Bind,
	Element,
	Event,
	type EventEmitter,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant,
	Watch,
	off,
	on
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import type { ScrollDetectorChangeEvent, ScrollDetectorReference } from './scroll-detector.types';

/**
 * Detects scroll event from an element.
 *
 * @stable
 *
 * @examples default, scroll-indicator
 */
@Element()
export class ScrollDetector extends PlusCore {
	/**
	 * Disables the element functionality.
	 */
	@Property()
	disabled?: boolean;

	/**
	 * Specifies the reference of the scroll.
	 */
	@Property()
	reference?: ScrollDetectorReference = 'document';

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * Indicates which scroll (horizontal or vertical) is to be used as the source.
	 */
	@Property()
	vertical?: boolean;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	/**
	 * Fires when the scroll starts changing.
	 */
	@Event()
	plusChange: EventEmitter<ScrollDetectorChangeEvent>;

	offset?: number;

	get $reference(): Document | Element {
		if (typeof this.reference !== 'string') return this.reference;

		if (this.reference === 'document') return document;

		return document.querySelector(this.reference);
	}

	@Watch(['disabled', 'reference'])
	watcher(next) {
		next ? this.terminate() : this.initialize();
	}

	initialize() {
		if (this.disabled) return;

		if (!this.$reference) return;

		on(this.$reference, 'scroll', this.onScroll);

		this.onScroll();
	}

	terminate() {
		// TODO
		try {
			off(this.$reference, 'scroll', this.onScroll);
		} catch {}
	}

	@Bind()
	onScroll() {
		const target =
			this.$reference instanceof Document ? this.$reference.documentElement : this.$reference;

		if (!target) return;

		const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = target;

		const offset = this.vertical ? scrollTop : scrollLeft;

		const total = this.vertical ? scrollHeight : scrollWidth;

		const viewport = this.vertical ? clientHeight : clientWidth;

		const overflow = total - viewport;

		const progress = overflow ? Math.round((offset / overflow) * 100) : 0;

		if (this.offset === progress) return;

		this.offset = offset;

		this.plusChange({
			offset,
			overflow,
			progress,
			total,
			viewport
		});
	}

	connectedCallback() {
		this.initialize();
	}

	disconnectedCallback() {
		this.terminate();
	}

	render() {
		return null;
	}
}
