import { Element, Property } from '@htmlplus/element';

@Element()
export class Spacer {
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
