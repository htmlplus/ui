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
export class PlusSnippet extends PlusCore {
	/**
	 * Specifies the color.
	 */
	@Property({ reflect: true })
	color: OverridableValue<PlusColor> = 'black';

	/**
	 * Specifies the symbol.
	 */
	@Property()
	symbol: string = '';

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
				'--plus-snippet-color': toCSSColor(this.color)
			}
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
