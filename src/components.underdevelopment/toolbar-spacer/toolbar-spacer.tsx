import { Attributes, Element, Property } from '@htmlplus/element';

/**
 * @development 
 */
@Element()
export class ToolbarSpacer {

  /**
   * TODO
   */
  @Property()
  grow?: number = 1;

  @Attributes()
  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    }
  }
}
