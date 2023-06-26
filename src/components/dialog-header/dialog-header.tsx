import { Element } from '@htmlplus/element';

import { PlusBase } from '@app/core';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogHeader extends PlusBase {
  render() {
    return <slot />;
  }
}
