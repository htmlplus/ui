import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { toCSSColor } from '@/helpers';
import type { PlusBreakpoint, PlusColor } from '@/types';

/**
 * Progress bar expresses an unspecified wait time or display the length of a process.
 *
 * @slot default - The default slot.
 *
 * @examples default, value, color, custom-color, label, custom-label, height,
 *           indeterminate, buffer, min-and-max, aria-label, stacked, sync, customized
 */
@Element()
export class PlusProgressBar extends PlusCore {
	/**
	 * Specifies the secondary progress of the bar by a number between `min` and `max`.
	 */
	@Property()
	buffer?: number;

	/**
	 * Specifies the color of the bar.
	 */
	@Property({ reflect: true })
	color?: OverridableValue<PlusColor>;

	/**
	 * Displays the progress percentage.
	 */
	@Property()
	label?: boolean;

	/**
	 * Specifies the maximum value of the progress.
	 */
	@Property()
	max?: number = 100;

	/**
	 * Specifies the minimum value of the progress.
	 */
	@Property()
	min?: number = 0;

	/**
	 * Eliminates delays in updating value.
	 */
	@Property({ reflect: true })
	sync?: boolean;

	/**
	 * Specifies the progress of the bar by a number between `min` and `max`.
	 */
	@Property()
	value?: number = 0;

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

	@Style()
	get style() {
		return {
			':host': {
				'min-width': this.stacked ? this.percentage : null,
				'--plus-progress-bar-indicator-background-color': toCSSColor(this.color)
			}
		};
	}

	get percentage(): string {
		return `${this.progress}%`;
	}

	get progress(): number {
		return (this.value - this.min) * (100 / Math.abs(this.max - this.min));
	}

	get stacked(): boolean {
		return !!this.$host.parentElement?.nodeName.startsWith(this.$host.nodeName);
	}

	render() {
		return (
			<host
				aria-valuemin={this.min}
				aria-valuemax={this.max}
				aria-valuenow={this.progress}
				role="progressbar"
			>
				<div part="underlay"></div>
				<div
					part="buffer"
					style={{
						width: `${this.buffer || 0}%`
					}}
				></div>
				<div
					part="indicator"
					style={{
						width: this.stacked ? '100%' : this.percentage
					}}
				>
					<slot>{this.label ? this.percentage : null}</slot>
				</div>
			</host>
		);
	}
}
