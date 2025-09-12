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

/**
 * A component that can be used to display inline code snippets.
 *
 * @part copy    - The copy element.
 * @part default - The default element.
 * @part pre     - The pre element.
 * @part symbol  - The symbol element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
 *
 * @examples default, symbol, color, custom-color
 */
@Element()
export class Snippet extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color?: string;

	/**
	 * Specifies the symbol.
	 */
	@Property()
	symbol?: string;

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
			'--plus-snippet-color': toCSSColor(this.color)
		};
	}

	render() {
		return (
			<>
				<pre part="pre">
					<span part="symbol">{this.symbol}</span>
					<slot part="default" />
				</pre>
				<slot name="copy" part="copy" />
			</>
		);
	}
}
