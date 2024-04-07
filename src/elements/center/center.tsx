import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @stable
 *
 * @slot default - The default slot.
 */
@Element()
export class Center extends PlusCore {
  /**
   * Converts the `display` CSS property from `flex` to `inline-flex`.
   */
  @Property({ reflect: true })
  inline?: boolean;

  render() {
    return <slot />;
  }
}
