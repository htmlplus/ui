import { Element, Property } from '@htmlplus/element';

import { PlusBase } from '@app/core';

@Element()
export class Spacer extends PlusBase {
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
