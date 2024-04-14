import { Element, Property, isCSSColor, toUnit } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Style } from '@/decorators';
import { isSize } from '@/helpers';

import { AvatarShape, AvatarSize } from './avatar.types';

/**
 * @stable
 *
 * @slot default - The default slot.
 */
@Element()
export class Avatar extends PlusCore {
  /**
   * Specifies the color.
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * Specifies the shape of the element.
   */
  @Property({ reflect: true })
  shape?: AvatarShape;

  /**
   * Specifies the size of the element.
   */
  @Property({ reflect: true })
  size?: AvatarSize;

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

  @Style()
  get style() {
    return {
      '--plus-avatar-color': isCSSColor(this.color) ? this.color : undefined,
      '--plus-avatar-size': isSize(this.color) ? undefined : toUnit(this.size),
    }
  }

  render() {
    return (
      <>
        <slot />
        {Object.keys(this.placements).map((placement) => (
          <slot name={placement} style={this.placements[placement]} />
        ))}
      </>
    );
  }
}
