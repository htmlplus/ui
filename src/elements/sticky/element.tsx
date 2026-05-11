import {
	Bind,
	Element,
	Event,
	type EventEmitter,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Query,
	State,
	Style,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { toCSSUnit } from '@/helpers';
import type { PlusBreakpoint } from '@/types';

import type { PlusStickyState } from './types';

/**
 * Element content is positioned based on the user's scroll position.
 *
 * @stable
 *
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 *
 * @examples default, top, contacts, state-attribute, slots, sidebar
 */
@Element()
export class PlusSticky extends PlusCore {
	/**
	 * Disables the element functionality.
	 */
	@Property({ reflect: true })
	disabled: boolean = false;

	/**
	 * Specifies the space from top.
	 */
	@Property()
	top?: string | number = 0;

	/**
	 * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
	 */
	@Property()
	watcher: boolean = false;

	/**
	 * Specifies the z-index.
	 */
	@Property()
	zIndex?: number;

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
	 * Fires when the state is changed. To enable, set the `watcher` property to `true`.
	 */
	@Event()
	plusChange!: EventEmitter<PlusStickyState>;

	@Query('.sizer')
	$sizer!: HTMLElement;

	@State()
	state?: PlusStickyState;

	observer?: IntersectionObserver;

	@Style()
	get style() {
		return {
			':host': {
				'--plus-sticky-top': toCSSUnit(this.top),
				'--plus-sticky-z-index': this.zIndex
			}
		};
	}

	initialize() {
		this.observer = new IntersectionObserver(this.onIntersecting, { threshold: [1] });

		this.observer.observe(this.$sizer);
	}

	terminate() {
		this.state = undefined;
		this.observer?.disconnect();
	}

	@Bind()
	onIntersecting(entries: IntersectionObserverEntry[]) {
		const [entry] = entries;

		this.state = entry.intersectionRatio < 1 ? 'stick' : 'normal';

		this.plusChange(this.state);
	}

	updatedCallback() {
		// TODO: run only on `disabled` or `watcher` changes

		this.terminate();

		if (this.disabled) return;

		if (!this.watcher) return;

		this.initialize();
	}

	disconnectedCallback() {
		this.terminate();
	}

	render() {
		return (
			<host state={this.watcher ? this.state : null} value={this}>
				<div className="sizer-wrapper">
					<div className="sizer"></div>
				</div>
				<slot />
				{!!this.state && (
					<div className={this.state}>
						<slot name={this.state} />
					</div>
				)}
			</host>
		);
	}
}
