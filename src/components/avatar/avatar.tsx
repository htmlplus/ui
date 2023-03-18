import { Attributes, Element, Property, toUnit } from '@htmlplus/element';

import { AVATAR_SIZES } from './avatar.constants';
import { AvatarShape, AvatarSize } from './avatar.types';

@Element()
export class Avatar {
  /**
   * TODO
   */
  @Property({ reflect: true })
  shape?: AvatarShape = 'round';

  /**
   * TODO
   */
  @Property({ reflect: true })
  size?: AvatarSize = 'md';

  @Attributes()
  get attributes() {
    if (AVATAR_SIZES.includes(this.size)) return;
    return {
      style: `--plus-avatar-size: ${toUnit(this.size)}`
    };
  }

  render() {
    return <slot />;
  }
}
