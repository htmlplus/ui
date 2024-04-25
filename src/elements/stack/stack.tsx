import { Element, Property, toUnit } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Style } from '@/decorators';

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

  @Style()
  get style() {
    let direction = this.vertical ? 'column' : 'row';

    if (this.reverse) direction += '-reverse';

    return {
      'align-items': this.alignItems,
      'display': 'flex',
      'flex-direction': direction,
      'gap': toUnit(this.gap),
      'justify-content': this.justifyContent
    };
  }

  render() {
    return <slot />;
  }
}
