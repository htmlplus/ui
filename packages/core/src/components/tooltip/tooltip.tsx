import { Component, Element, Host, Prop, h } from '@stencil/core';
import { createPopper, Instance } from "@popperjs/core";
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import { TooltipPlacement, TooltipReturnPlacement, TooltipTrigger } from './tooltip.types';

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
  * Tooltip disable
  */
  @Prop()
  disabled?: boolean;

  /*
  * Add fixed strategy to popper
  */
  @Prop()
  fixed?: boolean;

  /*
  * Vertical & horizontal offset from the target
   */
  @Prop()
  offset?: number = 0;

  /*
  * Horizontal offset from the target
   */
  @Prop()
  offsetX?: number;

  /*
  * Vertical offset from the target
   */
  @Prop()
  offsetY?: number;

  /*
  * How to position the tooltip
   */
  @Prop()
  placement?: TooltipPlacement = 'auto';

  /*
  * How tooltip is triggered, include click, hover, focus
   */
  @Prop()
  trigger?: TooltipTrigger = ['focus', 'hover'];

  @GlobalConfig('tooltip', {
    offset: 0,
    placement: 'auto',
    trigger: ['focus', 'hover'],
  })
  config;

  @Element()
  $host!: HTMLElement;

  $tooltip!: HTMLElement;

  instance?: Instance;

  get $parent() {
    return this.$host.children[0] as HTMLElement ?? this.$host.parentElement as HTMLElement;
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  get offsets(): [number, number] {

    const x = this.offsetX ?? this.offset ?? 0;

    const y = this.offsetY ?? this.offset ?? 0;

    return [x, y];
  }

  get options() {
    return {
      placement: this.placementMaker,
      strategy: Utils.toBoolean(this.fixed) ? 'fixed' : 'absolute' as any,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: this.offsets
          }
        }
      ]
    }
  }

  get placementMaker(): TooltipReturnPlacement {
    let placement: string = this.placement;

    if (placement.includes('-top'))
      placement = placement.replace('-top', '-start')

    if (placement.includes('-bottom'))
      placement = placement.replace('-bottom', '-end')

    if (this.isRTL)
      return this.reverse(placement);

    return placement as TooltipReturnPlacement;
  }

  /**
   * Internal Methods
   */

  bind() {
    if (this.disabled) return;
    this.$parent.addEventListener(/*this.trigger*/'mouseover', () => this.handleAddListener(this.$parent, this.$tooltip));
    this.$parent.addEventListener("mouseleave", () => this.handleRemoveListener(this.$parent, this.$tooltip));
  }

  rebind() {
    this.unbind();
    this.bind();
  }

  unbind() {
    this.$parent.removeEventListener("mouseleave", () => this.handleRemoveListener(this.$parent, this.$host));
    this.instance?.destroy();
  }

  handleAddListener(parent: HTMLElement, tooltip: HTMLElement) {
    this.instance = createPopper(parent, tooltip, this.options)
    tooltip.classList.add('show')
  }

  reverse(placement): TooltipReturnPlacement {

    let position = placement;

    if (placement.match(/^(left|right|start|end)$/)) position = `-${placement}`;

    let [x, y] = position.split('-')

    x = x ? (x === 'right' ? 'left' : x === 'left' ? 'right' : x) : '';

    return `${x}${y ? '-' + y : ''}` as TooltipReturnPlacement;
  }

  handleRemoveListener(parent: HTMLElement, tooltip: HTMLElement) {
    this.$parent.removeEventListener(/*this.trigger*/'mouseover', () => this.handleAddListener(parent, tooltip))
    tooltip.classList.remove('show')
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return;

    const value = this[name];

    switch (name) {

      case 'disabled':
        value ? this.unbind() : this.bind();
        break;

      case 'fixed':
      case 'offset':
      case 'offsetX':
      case 'offsetY':
      case 'placement':
      case 'trigger':
        this.rebind();
        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onHide() {
    // tooltip.classList.remove('show')
  }

  @Bind
  onShow() {
    // tooltip.classList.add('show')
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host>
        <slot name="activator" />
        <div class="tooltip" ref={(element) => (this.$tooltip = element)}>
          <slot />
        </div>
      </Host>
    )
  }
}
