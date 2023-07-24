import { Element, Property, styles, toUnit } from '@htmlplus/element';

import { PlusCore } from '@app/core';

import { StackAlignItems, StackJustifyContent } from './stack.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Stack extends PlusCore {
  /**
   * TODO.
   */
  @Property()
  alignItems?: StackAlignItems = 'center';

  /**
   * TODO.
   */
  @Property()
  gap?: string;

  /**
   * TODO.
   */
  @Property()
  justifyContent?: StackJustifyContent = 'center';

  /**
   * TODO.
   */
  @Property()
  reverse?: boolean;

  /**
   * TODO.
   */
  @Property()
  vertical?: boolean;

  get style() {
    let direction = this.vertical ? 'column' : 'row';

    if (this.reverse) direction += '-reverse';

    return styles({
      'align-items': this.alignItems,
      'display': 'flex',
      'flex-direction': direction,
      'gap': toUnit(this.gap),
      'justify-content': this.justifyContent
    });
  }

  render() {
    return (
      <host style={this.style}>
        <slot />
      </host>
    );
  }
}
