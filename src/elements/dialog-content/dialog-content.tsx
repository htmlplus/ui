import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogContent extends PlusCore {
  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Property({ reflect: true })
  scrollable?: boolean;

  render() {
    return <slot />;
  }
}
