import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class DialogBody extends PlusCore {
  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Property({ reflect: true })
  scrollable?: boolean;

  render() {
    return <slot />;
  }
}
