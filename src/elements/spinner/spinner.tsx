import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Style,
	Variant,
	toCSSColor
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { Breakpoint } from '@/types';

import type { SpinnerSize, SpinnerType } from './spinner.types';

/**
 * An indicator of progress and activity.
 *
 * @stable
 *
 * @examples default, size, custom-size, color, type, customized
 */
@Element()
export class Spinner extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: string;

	/**
	 * Specifies the size of the spinner.
	 */
	@Property({ reflect: true })
	size?: SpinnerSize = 'inherit';

	/**
	 * Specifies which variant of the spinner to use.
	 */
	@Property({ reflect: true })
	type?: SpinnerType = 'default';

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

	@Style()
	get style() {
		return {
			color: toCSSColor(this.color)
		};
	}

	get elements() {
		const map = {
			default: 8,
			'double-bounce': 2
		};

		const number = map[this.type] ?? 1;

		return Array.from(Array(number).keys());
	}

	render() {
		return (
			<host role="status">
				<div className="root">
					{this.elements.map((element) => (
						<div key={element} />
					))}
				</div>
			</host>
		);
	}
}
