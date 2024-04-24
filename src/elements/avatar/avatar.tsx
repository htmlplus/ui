import { Element, Property, isCSSColor, slots, toUnit } from '@htmlplus/element';

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

    return [
      {
        key: 'bottom',
        style: {
          bottom: 0,
          [this.isRTL ? 'right' : 'left']: '50%',
          transform: `translate(${this.isRTL ? '+50%' : '-50%'}, +50%)`
        }
      },
      {
        key: 'center',
        style: {
          top: '50%',
          [this.isRTL ? 'right' : 'left']: '50%',
          transform: `translate(${this.isRTL ? '+50%' : '-50%'}, -50%)`,
        }
      },
      {
        key: 'end',
        style: {
          top: '50%',
          [this.isRTL ? 'left' : 'right']: 0,
          transform: `translate(${this.isRTL ? '-50%' : '+50%'}, -50%)`,
        }
      },
      {
        key: 'end-bottom',
        style: {
          bottom: offset,
          [this.isRTL ? 'left' : 'right']: offset,
          transform: `translate(${this.isRTL ? '-50%' : '+50%'}, +50%)`
        }
      },
      {
        key: 'end-top',
        style: {
          top: offset,
          [this.isRTL ? 'left' : 'right']: offset,
          transform: `translate(${this.isRTL ? '-50%' : '+50%'}, -50%)`
        }
      },
      {
        key: 'left',
        style: {
          top: '50%',
          left: 0,
          transform: 'translate(-50%, -50%)'
        }
      },
      {
        key: 'left-bottom',
        style: {
          bottom: offset,
          left: offset,
          transform: 'translate(-50%, +50%)'
        }
      },
      {
        key: 'left-top',
        style: {
          top: offset,
          left: offset,
          transform: 'translate(-50%, -50%)'
        }
      },
      {
        key: 'right',
        style: {
          top: '50%',
          right: 0,
          transform: 'translate(+50%, -50%)'
        }
      },
      {
        key: 'right-bottom',
        style: {
          bottom: offset,
          right: offset,
          transform: 'translate(+50%, +50%)'
        }
      },
      {
        key: 'right-top',
        style: {
          top: offset,
          right: offset,
          transform: 'translate(+50%, -50%)'
        }
      },
      {
        key: 'start',
        style: {
          top: '50%',
          [this.isRTL ? 'right' : 'left']: 0,
          transform: `translate(${this.isRTL ? '+50%' : '-50%'}, -50%)`
        }
      },
      {
        key: 'start-bottom',
        style: {
          bottom: offset,
          [this.isRTL ? 'right' : 'left']: offset,
          transform: `translate(${this.isRTL ? '+50%' : '-50%'}, +50%)`
        }
      },
      {
        key: 'start-top',
        style: {
          top: offset,
          [this.isRTL ? 'right' : 'left']: offset,
          transform: `translate(${this.isRTL ? '+50%' : '-50%'}, -50%)`
        }
      },
      {
        key: 'top',
        style: {
          top: 0,
          [this.isRTL ? 'right' : 'left']: '50%',
          transform: `translate(${this.isRTL ? '+50%' : '-50%'}, -50%)`
        }
      }
    ];
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
        {this.placements.map((placement) => (
          <slot name={placement.key} style={placement.style} />
        ))}
      </>
    );
  }
}
