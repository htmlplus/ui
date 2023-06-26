import { Element } from '@htmlplus/element';

import { PlusBase } from '@app/core';

@Element()
export class ProgressBarStack extends PlusBase {
  render() {
    return <slot />;
  }
}
