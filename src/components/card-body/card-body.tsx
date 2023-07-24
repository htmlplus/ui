import { Element } from '@htmlplus/element';

import { PlusCore } from '@app/core';

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
export class CardBody extends PlusCore {
  render() {
    return <slot />;
  }
}
