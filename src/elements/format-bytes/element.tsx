import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

import { FORMAT_BYTES_STANDARD } from './constants';

/**
 * Converts bytes to a human-readable string. [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) standard are supported.
 *
 * @stable
 *
 * @examples default, standard, formatting, decimals, unit, display, separator, signed, locale
 */
@Element()
export class PlusFormatBytes extends PlusCore {
	/**
	 * Specifies the unit will be shown as an abbreviation or not.
	 */
	@Property()
	display?: 'long' | 'short' = 'short';

	/**
	 * Localizes the result. [More](https://mdn.io/number-format/constructor).
	 */
	@Property()
	locale?: string | string[];

	/**
	 * Specifies the number of decimal places.
	 * Use an array to specify the minimum and maximum.
	 */
	@Property()
	decimals?: number | [number, number] = [0, 1];

	/**
	 * Specifies the separator between number and unit.
	 */
	@Property()
	separator?: string = ' ';

	/**
	 * Shows plus sign for positive numbers.
	 * If the difference is exactly zero a space character will be prepended instead for better alignment.
	 */
	@Property()
	signed?: boolean;

	/**
	 * Specifies the standard of units.
	 * [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) are supported.
	 */
	@Property()
	standard?: 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET' = 'METRIC';

	/**
	 * Specifies the unit in which the result will be returned.
	 */
	@Property()
	unit?: 'auto' | 'base' | 'kilo' | 'mega' | 'giga' | 'tera' | 'peta' | 'exa' | 'zetta' | 'yotta' =
		'auto';

	/**
	 * The bytes value to convert.
	 */
	@Property()
	value?: number;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	get formatted() {
		if (this.value === undefined || Number.isNaN(this.value)) return null;

		const bytes = Math.abs(this.value);

		const standard = this.standard && FORMAT_BYTES_STANDARD[this.standard];

		if (!standard) return null;

		const { base, unit, units } = standard;

		// biome-ignore lint: TODO
		let found;

		for (let index = 0; index < units.length; index++) {
			const [short, long] = units[index];

			const from = index ? base ** index : 0;

			const to = base ** (index + 1);

			found = { from, long, short, to };

			if (this.unit === 'base') break;

			if (this.unit !== 'auto') {
				if (this.unit === long) break;
				if (units.some(([, long]) => this.unit === long)) continue;
			}

			if (bytes >= from && bytes < to) break;
		}

		const decimals = [this.decimals].flat();

		const formatter = new Intl.NumberFormat(this.locale, {
			style: 'decimal',
			minimumFractionDigits: decimals[0],
			maximumFractionDigits: decimals[1] || decimals[0]
		});

		let result = '';

		result += this.value < 0 ? '-' : this.signed ? (this.value === 0 ? ' ' : '+') : '';

		result += formatter.format(bytes / (found?.from || 1));

		result += this.separator || '';

		result += (found && this.display && this.display in found && found[this.display]) || '';

		result += this.display === 'long' ? unit : '';

		return result;
	}

	render() {
		return this.formatted;
	}
}
