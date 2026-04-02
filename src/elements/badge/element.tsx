import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant,
	slots
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { getCSSColor, toCSSColor } from '@/helpers';
import type { PlusBreakpoint, PlusColor } from '@/types';

import type { BadgePlacement } from './types';

/**
 * Provides a visual indicator for counts, statuses, or notifications.
 *
 * @part container - The container element.
 * @part content   - The content element.
 *
 * @slot container - The container slot.
 * @slot content   - The content slot.
 * @slot default   - The default slot.
 *
 * @examples default, color, size, shape, appearance, dot, inline, overlap, max, placement, invisible, slots, customized, animation
 */
@Element()
export class PlusBadge extends PlusCore {
	/**
	 * Determines how the visual appearance is applied.
	 */
	@Property({ reflect: true })
	appearance?: 'contrast' | 'outline' | 'solid' = 'solid';

	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: OverridableValue<PlusColor> = 'red';

	/**
	 * Specifies the displayed content.
	 */
	@Property()
	content?: number | string;

	/**
	 * Determines whether dot mode is enabled.
	 */
	@Property({ reflect: true })
	dot?: boolean;

	/**
	 * Controls visibility behavior.
	 * - `true`: always hidden
	 * - `false`: always visible
	 * - `auto`: hidden only when there is no displayable content
	 */
	@Property({ reflect: true })
	invisible?: boolean | 'auto';

	/**
	 * Defines the maximum value that can be displayed. Applies only when `content` property is a number.
	 */
	@Property()
	max?: number;

	/**
	 * Determines how overlap with the anchor element is applied.
	 */
	@Property({ reflect: true })
	overlap?: 'circular' | 'rectangular' = 'rectangular';

	/**
	 * Specifies how placement relative to the anchor element is configured.
	 */
	@Property({ reflect: true })
	placement?: BadgePlacement = 'top-end';

	/**
	 * Specifies the shape of the element.
	 */
	@Property({ reflect: true })
	shape?: 'circle' | 'round' | 'tile' = 'circle';

	/**
	 * Specifies the size of the element.
	 */
	@Property({ reflect: true })
	size?: OverridableValue<'sm' | 'md' | 'lg'> = 'md';

	/**
	 * See [Variant](/variant-property) for details.
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * WARNING: Must be async. CSS variable values are not available
	 * immediately, which would lead to incorrect calculations.
	 */
	@Style()
	async style() {
		await new Promise<void>((resolve) => resolve());

		const isLightColor = this.isLightColor(getCSSColor(this.$host, this.color));

		return {
			':host': {
				'--plus-badge-color': toCSSColor(this.color),
				'--plus-badge-color-contrast': `var(--plus-badge-color-${isLightColor ? 'dark' : 'light'})`
			}
		};
	}

	get hasContent() {
		return (
			slots(this).container ||
			slots(this).content ||
			![undefined, null, '', 0].includes(this.content)
		);
	}

	get hide() {
		return this.invisible === true || (this.invisible === 'auto' && !this.hasContent);
	}

	get inline(): boolean {
		return this.placement === 'inline';
	}

	get text() {
		const isNumber = typeof this.content === 'number' && !Number.isNaN(this.content);

		if (isNumber && Number(this.content) > this.max) {
			return `${this.max}+`;
		}

		return this.content;
	}

	isLightColor(color) {
		const canvas = document.createElement('canvas');

		const ctx = canvas.getContext('2d');

		ctx.fillStyle = color;

		ctx.fillRect(0, 0, 1, 1);

		const rgb = ctx.getImageData(0, 0, 1, 1).data.slice(0, 3);

		const [r, g, b] = rgb.map((color) => {
			const value = color / 255;
			return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
		});

		const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

		return luminance > 0.5;
	}

	render() {
		return (
			<>
				{this.inline ? '' : <slot />}
				{this.hide ? (
					''
				) : (
					<div part="container">
						<slot name="container">
							<div part="content">{this.dot ? '' : <slot name="content">{this.text}</slot>}</div>
						</slot>
					</div>
				)}
			</>
		);
	}
}
