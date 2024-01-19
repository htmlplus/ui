import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';

@Element()
export class Spacer extends PlusCore {
  /**
   * TODO
   */
  @Property()
  grow?: number = 1;

  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    };
  }
}
