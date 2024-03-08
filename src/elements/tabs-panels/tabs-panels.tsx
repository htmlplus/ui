import { Element } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * TODO: This element contains panels.
 *
 * @slot default - The default slot.
 */
@Element()
export class TabsPanels extends PlusCore {
  render() {
    return <slot />;
  }
}
