import {Element, Component, Host, Prop, State, Watch, h} from '@stencil/core';
import {TooltipPlacement, TooltipReturnPlacement, TooltipTrigger} from './tooltip.types';
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
  placement?: TooltipPlacement = 'auto';

  /*
  * How tooltip is triggered, include click, hover, focus
   */
  @Prop({reflect: true})
  trigger?: TooltipTrigger = 'mouseover';

  /*
  * Vertical & horizontal offset from the target
   */
  @Prop()
  offset?: number;

  /*
  * Horizontal offset from the target
   */
  @Prop()
  offsetX?: number = 0;

  /*
  * Vertical offset from the target
   */
  @Prop()
  offsetY?: number = 0;

  /*
  * Add fixed strategy to popper
  */
  @Prop()
  fixed?: boolean;

  /*
  * Tooltip disable
  */
  @Prop()
  disabled?: boolean = false;

  @GlobalConfig('tooltip')
  config;

  @Element()
  $host!: HTMLElement;
  $tooltip!: HTMLElement;
  $parent: HTMLElement = this.$host.children[0] as HTMLElement ?? this.$host.parentElement as HTMLElement;

  @State()
  instance;

  get offsetMaker(): [number, number] {
    let [x, y] = [0, 0];

    if (this.offset)
      return [+this.offset, +this.offset];

    [x, y] = [+this.offsetX || 0, +this.offsetY || 0];

    return [x, y];
  }

  get placementMaker() : TooltipReturnPlacement {
    let placement: string = this.placement;

    if (placement.includes('-top'))
      placement = placement.replace('-top', '-start')

    if (placement.includes('-bottom'))
      placement = placement.replace('-bottom', '-end')

    if (this.isRTL)
      return this.reverse(placement);

    return placement as TooltipReturnPlacement;
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  /**
   * Internal Methods
   */

  @Watch('fixed')
  @Watch('disabled')
  @Watch('placement')
  @Watch('offset')
  bind() {
    if (this.disabled) return;

    this.$parent.addEventListener(this.trigger, () => this.handleAddListener(this.$parent, this.$tooltip));
    this.$parent.addEventListener("mouseleave", () => this.handleRemoveListener(this.$parent, this.$tooltip));
  }

  unbind() {
    this.$parent.removeEventListener("mouseleave", () => this.handleRemoveListener(this.$parent, this.$host));
    this.instance.destroy();
  }

  handleAddListener(parent: HTMLElement, tooltip: HTMLElement) {
    this.instance = createPopper(parent, tooltip, {
      placement: this.placementMaker,
      strategy: this.fixed ? 'fixed' : null,
      modifiers: [
        {name: 'offset', options: {offset: this.offsetMaker}}
      ]
    })
    tooltip.classList.add('show')
  }

  reverse(placement) : TooltipReturnPlacement {
    let position = placement;
    if (placement.match(/^(left|right|start|end)$/)) position = `-${placement}`;

    let [x, y] = position.split('-')
    x = x ? (x === 'right' ? 'left' : x === 'left' ? 'right' : x) : '';

    return `${x}${y ? '-' + y : ''}` as TooltipReturnPlacement;
  }

  handleRemoveListener(parent: HTMLElement, tooltip: HTMLElement) {
    this.$parent.removeEventListener(this.trigger, () => this.handleAddListener(parent, tooltip))
    tooltip.classList.remove('show')
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
        <div class="tooltip" ref={element => (this.$tooltip = element)}>
          <slot/>
        </div>
        <slot name="activator"/>
      </Host>
    )
  }
}
