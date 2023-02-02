import { Element, Property } from '@htmlplus/element';

import { computePosition } from '@floating-ui/dom';

/**
 * TODO
 */
@Element()
export class Tooltip {
  /**
   * TODO
   */
  @Property()
  disabled?: boolean;

  bind() {}

  unbind() {}

  connectedCallback() {}

  disconnectedCallback() {}

  render() {
    return <slot />;
  }
}
