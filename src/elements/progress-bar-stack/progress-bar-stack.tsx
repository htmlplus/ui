import { Element } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class ProgressBarStack extends PlusCore {
  render() {
    return <slot />;
  }
}
