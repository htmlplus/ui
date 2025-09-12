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
export class ClickOutside extends PlusCore {
	/**
	 * A boolean value indicating that events of this type will be dispatched to the registered
	 * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
	 */
	@Property()
	capture?: boolean;

	/**
	 * Disables the element functionality.
	 */
	@Property({ reflect: true })
	disabled?: boolean;

	/**
	 * The event fires only once.
	 */
	@Property()
	once?: boolean;

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

	/**
	 * Fires when outside of the element is clicked.
	 */
	@Event({ cancelable: true })
	plusClickOutside!: EventEmitter<void>;

	get options() {
		return {
			capture: this.capture
		};
	}

	@Watch(['capture', 'disabled', 'once'])
	watcher(next, _prev, name) {
		switch (name) {
			case 'disabled':
				next ? this.terminate() : this.initialize();
				break;
			case 'capture':
			case 'once':
				this.terminate();
				this.initialize();
				break;
		}
	}

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

	connectedCallback() {
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
