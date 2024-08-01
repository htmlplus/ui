import { Element } from '@htmlplus/element';

import { PlusCore } from '@/core';

@Element()
export class FieldAddon extends PlusCore {
  render() {
    return <slot />
  }
}
