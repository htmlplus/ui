import { Element } from '@htmlplus/element';

import { PlusBase } from '@app/core';

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
export class CardBody extends PlusBase {
  render() {
    return <slot />;
  }
}
