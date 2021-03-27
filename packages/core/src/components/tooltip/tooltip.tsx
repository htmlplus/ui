import {Element, Component, Host, Prop, State, h} from '@stencil/core';
import {TooltipPlacement, TooltipTrigger, TooltipOffset} from './tooltip.types';
import {createPopper} from "@popperjs/core";
import * as Utils from '@app/utils';
import {GlobalConfig} from '@app/services';

/**
 * It's the often used to specify extra information about something when the user moves the mouse pointer over an element (Hover or Focus)
 * @examples default
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

  @GlobalConfig('tooltip')
  config;

  @Element()
  $host!: HTMLElement;
  $tooltip!: HTMLElement;
  $parent: HTMLElement = this.$host.children[0] as HTMLElement ?? this.$host.parentElement as HTMLElement;

  @State()
  haveChildren = this.$host.children[0] as HTMLElement;
  innerText;

  get offsetMaker() {
    let [x, y] = [0, 0], offset = this.offset;

    if (Array.isArray(offset)) {
      x = offset[0] || 0;
      y = offset[1] || 0;
      return [x, y];
    }
    let [vertical, horizontal] = String(offset).split('-');

    [x, y] = [+vertical || 0, +horizontal || 0];

    return [x, y];
  }

  get placementMaker(): TooltipPlacement {
    let placement = this.placement;
    if (this.isRTL)
      return this.reverse(placement);

    return placement;
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  /**
   * Internal Methods
   */

  bind() {
    this.$parent.addEventListener(this.trigger, () => this.handleAddListener(this.$parent, this.$tooltip));
    this.$parent.addEventListener("mouseleave", () => this.handleRemoveListener(this.$parent, this.$tooltip));
  }

  unbind() {
    this.$parent.removeEventListener("mouseleave", () => this.handleRemoveListener(this.$parent, this.$host));
  }

  handleAddListener(parent: HTMLElement, tooltip: HTMLElement) {
    createPopper(parent, tooltip, {
      placement: this.placementMaker,
      modifiers: [
        {name: 'offset', options: {offset: this.offsetMaker}}
      ]
    })
    tooltip.classList.add('show')
  }

  reverse(placement): TooltipPlacement {
    let position = placement;
    if (placement.match(/^(left|right|start|end)$/)) position = `-${placement}`;

    let [x, y] = position.split('-')
    x = x ? (x === 'right' ? 'left' : x === 'left' ? 'right' : x) : '';
    y = y ? (y === 'start' ? 'end' : y === 'end' ? 'start' : y) : '';

    return `${x}${y ? '-' + y : ''}` as TooltipPlacement;
  }

  handleRemoveListener(parent: HTMLElement, tooltip: HTMLElement) {
    this.$parent.removeEventListener(this.trigger, () => this.handleAddListener(parent, tooltip))
    tooltip.classList.remove('show')
  }

  handleHaveChildren() {
    if (this.haveChildren) {
      console.log(this.$host.children)
      this.innerText = this.$host.innerText;
      // this.$host.innerHTML = "";
      this.$host.appendChild(this.haveChildren);
    }
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.handleHaveChildren();
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host>
        <div class={!this.haveChildren && "tooltip"} ref={element => (this.$tooltip = element)}>
          {this.haveChildren && <div class="tooltip" ref={element => (this.$tooltip = element)}>{this.innerText}</div>}
          <slot/>
        </div>
      </Host>
    )
  }
}
