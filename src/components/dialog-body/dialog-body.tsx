import { Element, Property } from '@htmlplus/element';

import { PlusBase } from '@app/core';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogBody extends PlusBase {
  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Property({ reflect: true })
  scrollable?: boolean;

  render() {
    return <slot />;
  }
}
