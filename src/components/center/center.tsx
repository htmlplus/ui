import { Element, Property } from '@htmlplus/element';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class Center {
  /**
   * Converts the `display` css property from `flex` to `inline-flex`.
   */
  @Property({ reflect: true })
  inline?: boolean; 

  render() {
    return <slot />
  }
}
