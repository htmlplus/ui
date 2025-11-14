import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	State,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import { RELATIVE_TIME_UNITS } from './relative-time.constants';

/**
 * Outputs a localized time phrase relative to the provided datetime.
 *
 * @examples default, value, sync, format, numeric, localization, parts
 */
@Element()
export class RelativeTime extends PlusCore {
	/**
	 * The format style for the relative time.
	 */
	@Property()
	format?: 'long' | 'short' | 'narrow' = 'long';

	/**
	 * Determines whether the numeric value should always be displayed.
	 */
	@Property()
	numeric?: 'always' | 'auto' = 'auto';

	/**
	 * Determines whether the relative time should be updated automatically.
	 */
	@Property()
	sync?: boolean = false;

	/**
	 * The date and time to be displayed in a relative format.
	 */
	@Property()
	value?: Date | string = new Date();

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	@State()
	parts: Intl.RelativeTimeFormatPart[] = [];

	timeout: number;

	get isValid() {
		return this.parsed instanceof Date;
	}

	get lang() {
		return `${this.$host.lang || window.document.documentElement.lang || window.navigator.language}`.toLowerCase();
	}

	get parsed() {
		return new Date(this.value);
	}

	refresh() {
		clearTimeout(this.timeout);

		if (!this.isValid) return;

		const difference = this.parsed.getTime() - Date.now();

		const unit = RELATIVE_TIME_UNITS.findLast((unit, index) => {
			return Math.floor(Math.abs(difference) / unit.value) || !index;
		});

		const formatter = new Intl.RelativeTimeFormat(this.lang, {
			numeric: this.numeric,
			style: this.format
		});

		this.parts = formatter.formatToParts(Math.ceil(difference / unit.value), unit.name);

		if (!this.sync) return;

		const interval = (difference > 0 ? 0 : unit.value) + (difference % unit.value);

		this.timeout = window.setTimeout(() => {
			this.forceUpdate();
		}, interval);
	}

	disconnectedCallback() {
		clearTimeout(this.timeout);
	}

	updateCallback() {
		this.refresh();
	}

	render() {
		if (!this.isValid || !this.parts.length) return 'Invalid date';
		return (
			<time dateTime={this.parsed.toISOString()}>
				{this.parts.map((part) => (
					<span part={part.type}>{part.value}</span>
				))}
			</time>
		);
	}
}
