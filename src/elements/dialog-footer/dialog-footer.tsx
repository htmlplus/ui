import { Element } from '@htmlplus/element';

import { PlusCore } from '@app/core';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogFooter extends PlusCore {
  render() {
    return <slot />;
  }
}
