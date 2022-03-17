import { Element, Property } from '@htmlplus/element';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogBody {

  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Property({ reflect: true })
  scrollable?: boolean;

  render() {
    return (
      <slot />
    )
  }
}
