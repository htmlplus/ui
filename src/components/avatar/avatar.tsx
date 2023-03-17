import { Element, Property } from '@htmlplus/element';

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

  render() {
    return <slot />;
  }
}
