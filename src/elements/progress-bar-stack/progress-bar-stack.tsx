import { Element } from '@htmlplus/element';

import { PlusCore } from '@/core';

@Element()
export class ProgressBarStack extends PlusCore {
  render() {
    return <slot />;
  }
}
