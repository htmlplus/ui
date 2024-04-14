import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Style } from '@/decorators';

@Element()
export class Spacer extends PlusCore {
  /**
   * TODO
   */
  @Property()
  grow?: number = 1;

  @Style()
  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    };
  }
}
