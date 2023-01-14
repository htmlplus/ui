import { Element, Property } from '@htmlplus/element';

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
export class Toolbar {
  /**
   * TODO
   */
  @Property()
  gutter?: number;

  /**
   * TODO
   */
  @Property()
  gutterX?: number;

  /**
   * TODO
   */
  @Property()
  gutterY?: number;

  /**
   * TODO
   */
  @Property({ reflect: true })
  wrap?: boolean = true;

  render() {
    return (
      <div>
        {this.gutterX}
        <slot />
      </div>
    );
  }
}
