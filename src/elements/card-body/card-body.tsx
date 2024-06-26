import { Element } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @development
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class CardBody extends PlusCore {
  render() {
    return <slot />;
  }
}
