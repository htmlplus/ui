import { Attributes, Element, Property } from '@htmlplus/element';

import { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';

/**
 * @stable
 */
@Element()
export class Divider {
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

  @Attributes()
  get attributes() {
    return {
      'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
      'role': 'separator'
    };
  }

  render() {
    return <slot />;
  }
}
