import { Element, Property, Style, toCSSColor } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @part copy    - The copy element.
 * @part default - The default element.
 * @part pre     - The pre element.
 * @part symbol  - The symbol element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
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
