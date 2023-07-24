import { Element, Property, toUnit } from '@htmlplus/element';

import { PlusCore } from '@app/core';
import { isSize } from '@app/helpers';

import { AvatarShape, AvatarSize } from './avatar.types';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class Avatar extends PlusCore {
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
        [this.isRTL ? 'right' : 'left']: '50%',
        transform: 'translate(-50%, +50%)'
      },
      'center': {
        top: '50%',
        [this.isRTL ? 'right' : 'left']: '50%',
        transform: 'translate(-50%, -50%)'
      },
      'end': {
        top: '50%',
        [this.isRTL ? 'left' : 'right']: 0,
        transform: 'translate(+50%, -50%)'
      },
      'end-bottom': {
        bottom: offset,
        [this.isRTL ? 'left' : 'right']: offset,
        transform: 'translate(+50%, +50%)'
      },
      'end-top': {
        top: offset,
        [this.isRTL ? 'left' : 'right']: offset,
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
        [this.isRTL ? 'right' : 'left']: 0,
        transform: 'translate(-50%, -50%)'
      },
      'start-bottom': {
        bottom: offset,
        [this.isRTL ? 'right' : 'left']: offset,
        transform: 'translate(-50%, +50%)'
      },
      'start-top': {
        top: offset,
        [this.isRTL ? 'right' : 'left']: offset,
        transform: 'translate(-50%, -50%)'
      },
      'top': {
        top: 0,
        [this.isRTL ? 'right' : 'left']: '50%',
        transform: 'translate(-50%, -50%)'
      }
    };
  }

  get style() {
    if (isSize(this.size)) return;
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
