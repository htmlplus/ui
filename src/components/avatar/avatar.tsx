import { Element, Property, isRTL, toUnit } from '@htmlplus/element';

import { AVATAR_SIZES } from './avatar.constants';
import { AvatarShape, AvatarSize } from './avatar.types';

/**
 * @stable
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

  get placements() {
    const offset = this.shape == 'circle' ? '14.64466%' : '0';
    return {
      'bottom': {
        bottom: 0,
        [isRTL(this) ? 'right' : 'left']: '50%',
        transform: 'translate(-50%, +50%)'
      },
      'center': {
        top: '50%',
        [isRTL(this) ? 'right' : 'left']: '50%',
        transform: 'translate(-50%, -50%)'
      },
      'end': {
        top: '50%',
        [isRTL(this) ? 'left' : 'right']: 0,
        transform: 'translate(+50%, -50%)'
      },
      'end-bottom': {
        bottom: offset,
        [isRTL(this) ? 'left' : 'right']: offset,
        transform: 'translate(+50%, +50%)'
      },
      'end-top': {
        top: offset,
        [isRTL(this) ? 'left' : 'right']: offset,
        transform: 'translate(+50%, -50%)'
      },
      'left': {
        top: '50%',
        left: 0,
        transform: 'translate(-50%, -50%)'
      },
      'left-bottom': {
        bottom: offset,
        left: offset,
        transform: 'translate(-50%, +50%)'
      },
      'left-top': {
        top: offset,
        left: offset,
        transform: 'translate(-50%, -50%)'
      },
      'right': {
        top: '50%',
        right: 0,
        transform: 'translate(+50%, -50%)'
      },
      'right-bottom': {
        bottom: offset,
        right: offset,
        transform: 'translate(+50%, +50%)'
      },
      'right-top': {
        top: offset,
        right: offset,
        transform: 'translate(+50%, -50%)'
      },
      'start': {
        top: '50%',
        [isRTL(this) ? 'right' : 'left']: 0,
        transform: 'translate(-50%, -50%)'
      },
      'start-bottom': {
        bottom: offset,
        [isRTL(this) ? 'right' : 'left']: offset,
        transform: 'translate(-50%, +50%)'
      },
      'start-top': {
        top: offset,
        [isRTL(this) ? 'right' : 'left']: offset,
        transform: 'translate(-50%, -50%)'
      },
      'top': {
        top: 0,
        [isRTL(this) ? 'right' : 'left']: '50%',
        transform: 'translate(-50%, -50%)'
      }
    };
  }

  get style() {
    if (AVATAR_SIZES.includes(this.size as any)) return;
    return `--plus-avatar-size: ${toUnit(this.size)}`;
  }

  render() {
    return (
      <host style={this.style}>
        <slot />
        {Object.keys(this.placements).map((placement) => (
          <div className={placement} style={this.placements[placement]}>
            <slot name={placement} />
          </div>
        ))}
      </host>
    );
  }
}
