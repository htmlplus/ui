import { Element, Property } from '@htmlplus/element';

import { PlusBase } from '@app/core';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class Center extends PlusBase {
  /**
   * Converts the `display` CSS property from `flex` to `inline-flex`.
   */
  @Property({ reflect: true })
  inline?: boolean;

  render() {
    return <slot />;
  }
}
