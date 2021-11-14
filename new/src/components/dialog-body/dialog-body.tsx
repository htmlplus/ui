import { Component, Property } from '@app/decorators';

/**
 * @slot default - The default slot.
 */
@Component()
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
