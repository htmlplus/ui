import { Element, Property, toUnit } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Style } from '@/decorators';

import { StackAlign, StackGap, StackJustify } from './stack.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Stack extends PlusCore {
  /**
   * The gap between items.
   */
  @Property()
  gap?: StackGap;

  /**
   * The alignment of items along the cross axis.
   */
  @Property()
  items?: StackAlign = 'center';

  /**
   * The distribution of items along the main axis.
   */
  @Property()
  justify?: StackJustify = 'center';

  /**
   * Whether to reverse the order of items.
   */
  @Property()
  reverse?: boolean;

  /**
   * Whether the stack is vertical.
   */
  @Property()
  vertical?: boolean;

  @Style()
  get style() {
    let direction = this.vertical ? 'column' : 'row';

    if (this.reverse) direction += '-reverse';

    return {
      'align-items': this.items?.replace(/start|end/, 'flex-$&'),
      'display': 'flex',
      'flex-direction': direction,
      'gap': toUnit(this.gap),
      'justify-content': this.justify
        ?.replace(/start|end/, 'flex-$&')
        ?.replace(/between|around|evenly/, 'space-$&')
    };
  }

  render() {
    return <slot />;
  }
}
