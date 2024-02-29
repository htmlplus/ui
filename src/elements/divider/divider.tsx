import { Element, Property, slots } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';

/**
 * @part line    - The prefix and suffix element.
 * @part prefix  - The prefix element.
 * @part suffix  - The suffix element.
 * 
 * @slot default - The default slot.
 */
@Element()
export class Divider extends PlusCore {
  /**
   * Specifies the location of the default slot.
   */
  @Property({ reflect: true })
  placement?: DividerPlacement = 'center';

  /**
   * Specifies the width of the border.
   */
  @Property({ reflect: true })
  width?: DividerWidth = 'md';

  /**
   * Specifies the style of the border.
   */
  @Property({ reflect: true })
  type?: DividerType = 'solid';

  /**
   * Specifies the amount of indentation.
   */
  @Property({ reflect: true })
  variant?: DividerVariant = 'full';

  /**
   *  Draws the divider in a vertical orientation.
   */
  @Property({ reflect: true })
  vertical?: boolean;

  render() {
    return (
      <host
        aria-orientation={this.vertical ? 'vertical' : 'horizontal'}
        data-empty={`${!slots(this).default}`}
        role="separator"
      >
        <div part="line prefix"></div>
        <slot />
        <div part="line suffix"></div>
      </host>
    );
  }
}
