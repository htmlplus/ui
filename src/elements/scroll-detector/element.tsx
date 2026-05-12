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
import type { PlusBreakpoint } from '@/types';

import type { PlusScrollDetectorChangeEvent } from './types';

/**
 * Detects scroll event from an element.
 *
 * @stable
 *
 * @examples default, scroll-indicator
 */
@Element()
export class PlusScrollDetector extends PlusCore {
	/**
	 * Disables the element functionality.
	 */
	@Property()
	disabled: boolean = false;

	/**
	 * Specifies the reference of the scroll.
	 */
	@Property()
	reference: Element | 'document' | (string & {}) = 'document';

	/**
	 * Indicates which scroll (horizontal or vertical) is to be used as the source.
	 */
	@Property()
	vertical: boolean = false;

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

	/**
	 * Fires when the scroll starts changing.
	 */
	@Event()
	plusChange!: EventEmitter<PlusScrollDetectorChangeEvent>;

	offset?: number;

	get $reference(): Document | Element | undefined {
		if (typeof this.reference !== 'string') return this.reference;

		if (this.reference === 'document') return document;

		return document.querySelector(this.reference) || undefined;
	}

	@Watch(['disabled', 'reference'])
	watcher(next: unknown) {
		next ? this.terminate() : this.initialize();
	}

	initialize() {
		if (this.disabled) return;

		if (!this.$reference) return;

		on(this.$reference, 'scroll', this.onScroll);

		this.onScroll();
	}

	terminate() {
		if (this.$reference) {
			off(this.$reference, 'scroll', this.onScroll);
		}
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
