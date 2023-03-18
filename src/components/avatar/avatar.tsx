import { Attributes, Element, Property, toUnit } from '@htmlplus/element';

import { AVATAR_SIZES } from './avatar.constants';
import { AvatarShape, AvatarSize } from './avatar.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Avatar {
  /**
   * Specifies the shape of the component.
   */
  @Property({ reflect: true })
  shape?: AvatarShape = 'round';

  /**
   * Specifies the size of the component.
   */
  @Property({ reflect: true })
  size?: AvatarSize = 'md';

  @Attributes()
  get attributes() {
    if (AVATAR_SIZES.includes(this.size as any)) return;
    return {
      style: `--plus-avatar-size: ${toUnit(this.size)}`
    };
  }

  render() {
    return <slot />;
  }
}
