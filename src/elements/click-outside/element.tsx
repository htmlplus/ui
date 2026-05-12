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
	off,
	on
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

/**
 * Detects when a click event happens outside of itself.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, menu
 */
@Element()
export class PlusClickOutside extends PlusCore {
	/**
	 * A boolean value indicating that events of this type will be dispatched to the registered
	 * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
	 */
	@Property()
	capture: boolean = false;

	/**
	 * Disables the element functionality.
	 */
	@Property({ reflect: true })
	disabled: boolean = false;

	/**
	 * The event fires only once.
	 */
	@Property()
	once: boolean = false;

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
	 * Fires when outside of the element is clicked.
	 */
	@Event({ cancelable: true })
	plusClickOutside!: EventEmitter<void>;

	options?: AddEventListenerOptions;

	initialize() {
		on(this.$host, 'outside', this.onClickOutside, this.options);
	}

	terminate() {
		off(this.$host, 'outside', this.onClickOutside, this.options);
	}

	@Bind()
	onClickOutside() {
		if (this.once) {
			this.terminate();
		}
		this.plusClickOutside();
	}

	updatedCallback() {
		this.terminate();

		this.options = {
			capture: this.capture
		};

		if (this.disabled) return;

		this.initialize();
	}

	disconnectedCallback() {
		this.terminate();
	}

	render() {
		return <slot />;
	}
}
