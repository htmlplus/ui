import { Element, Property, styles, toUnit } from '@htmlplus/element';

import { PlusCore } from '@app/core';
import { toAxis } from '@app/helpers';

import { FloatingOffset, FloatingPlacement } from './floating.types';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class Floating extends PlusCore {
  /**
   * Positions the element relative to the viewport and prevents it from moving even when scrolled.
   * Otherwise, the element is positioned relative to its nearest ancestor.
   */
  @Property()
  fixed?: boolean;

  /**
   * Specifies the deviation from the center.
   */
  @Property()
  offset?: FloatingOffset = 0;

  /**
   * Specifies the display location.
   */
  @Property()
  placement?: FloatingPlacement = 'end-bottom';

  get style() {
    let placement = this.placement || '';

    if (placement.match(/^(top|bottom)$/)) placement = `-${placement}`;

    let [x, y] = placement.split('-');

    x ||= 'center';
    y ||= 'center';

    x = toAxis(x, this.isRTL);

    const centeredX = x == 'center';
    const centeredY = y == 'center';

    const X = !centeredX ? x : this.isRTL ? 'right' : 'left';
    const Y = !centeredY ? y : 'top';

    const offset = [this.offset].flat().map((offset) => toUnit(offset));

    const offsetX = offset[0];
    const offsetY = offset[1] ?? offset[0];

    const style = {
      position: this.fixed ? 'fixed' : 'absolute'
    };

    style[X] = centeredX ? `calc(50% + ${offsetX})` : `calc(0px + ${offsetX})`;
    style[Y] = centeredY ? `calc(50% + ${offsetY})` : `calc(0px + ${offsetY})`;

    if (centeredX || centeredY) {
      style['transform'] = `translate(${centeredX ? `${this.isRTL ? '' : '-'}50%` : '0'}, ${
        centeredY ? '-50%' : '0'
      })`;
    }

    return styles(style);
  }

  render() {
    return (
      <host style={this.style}>
        <slot />
      </host>
    );
  }
}
