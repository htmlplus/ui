import {Element, Component, Host, Prop, State, h} from '@stencil/core';
import {TooltipPlacement, TooltipTrigger, TooltipOffset} from './tooltip.types';

import {createPopper} from "@popperjs/core";
import * as Utils from '@app/utils';

/**
 * It's the often used to specify extra information about something when the user moves the mouse pointer over an element (Hover or Focus)
 * @examples default, animation, trigger, offset, placement
 */

@Component({
  tag: 'plus-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})

export class Tooltip {
  /*
  * How to position the tooltip
   */
  @Prop({reflect: true})
  placement?: TooltipPlacement = 'right';

  /*
  * How tooltip is triggered, include click, hover, focus
   */
  @Prop({reflect: true})
  trigger?: TooltipTrigger = 'mouseover';

  /*
  * Offset of the tooltip relative to its target
   */
  @Prop()
  offset?: TooltipOffset = [0, 10];

  @Element() $host!: HTMLElement;

  @State() parent?: any = this.$host.parentElement as HTMLElement;

  private handleAddListener(parent: HTMLElement, host: HTMLElement) {
    createPopper(parent, host, {
      placement: this.placementMaker,
      modifiers: [
        {name: 'offset', options: {offset: this.offsetMaker}}
      ]
    })
    host.classList.add('show')
  }

  get offsetMaker() {
    let [x, y] = [0, 0],offset = this.offset;

    if (Array.isArray(offset)) {
       x = offset[0] || 0;
       y = offset[1] || 0;
       return [x, y];
    }


    let [vertical, horizontal] = String(offset).split('-');

    [x, y] = [+vertical || 0, +horizontal || 0]

    return [x, y];
  }

  get placementMaker(): TooltipPlacement {
    let placement = this.placement;
    if (this.isRTL)
      return Tooltip.reverse(placement);

    return placement;
  }

  private static reverse(placement): TooltipPlacement {
    let position = placement;
    if (placement.match(/^(left|right|start|end)$/)) position = `-${placement}`;

    let [x, y] = position.split('-')
    x = x ? (x === 'right' ? 'left' : x === 'left' ? 'right' : x) : '';
    y = y ? (y === 'start' ? 'end' : y === 'end' ? 'start' : y) : '';

    return `${x}${y ? '-' + y : ''}` as TooltipPlacement;
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  private handleRemoveListener(parent: HTMLElement, host: HTMLElement) {
    this.parent.removeEventListener(this.trigger, () => this.handleAddListener(parent, host))
    host.classList.remove('show')
  }

  connectedCallback() {
    this.parent.addEventListener(this.trigger, () => this.handleAddListener(this.parent, this.$host))
    this.parent.addEventListener("mouseleave", () => this.handleRemoveListener(this.parent, this.$host))
  }

  disconnectedCallback() {
    this.parent.removeEventListener("mouseleave", () => this.handleRemoveListener(this.parent, this.$host))
  }

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    )
  }
}
