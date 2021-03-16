import {Element, Component, Host, Prop, Listen, h} from '@stencil/core';
import {TooltipPlacement, TooltipTrigger, TooltipOffset} from './tooltip.types';

import {createPopper} from "@popperjs/core";

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
  trigger?: TooltipTrigger = 'mousemove';

  /*
  * Offset of the tooltip relative to its target
   */
  @Prop()
  offset?: TooltipOffset =  [0, 10];

  /*
  * Include any thing for show in tooltip
   */
  @Prop()
  content?: string = "null";

  // styles :
  /**
   * Specifies the tooltip background color
   */
  @Prop({reflect: true})
  background?: string;

  /**
   * Specifies the tooltip text color
   */
  @Prop({reflect: true})
  textColor?: string;

  /**
   * Specifies the tool tip text font size
   */
  @Prop({reflect: true})
  fontSize?: number = 0;

  /**
   * Specifies the tooltip padding
   */
  @Prop({reflect: true})
  padding?: string;

  /**
   * Specifies the tooltip border radius
   */
  @Prop({reflect: true})
  borderRadius?: number;

  @Element() $host!: HTMLElement;

  $tooltip!: HTMLDivElement;

  @Listen('mousemove', {target: undefined})
  handleEventHover() {
      createPopper(this.$host, this.$tooltip, {
        placement: this.placement,
        modifiers: [
          {name: 'offset', options: {offset: this.offset}}
        ]
      })
  }

  get styles() {
    return {
    '--plus-tooltip-background': this.background ?? null,
    '--plus-tooltip-color': this.textColor ?? null,
    '--plus-tooltip-font-size': this.fontSize ? String(this.fontSize) + 'px' : null,
    '--plus-tooltip-padding': this.padding ?? null,
    '--plus-tooltip-border-radius': this.borderRadius ? String(this.borderRadius) + 'px' : null,
    }
  }
  render() {
    return (
      <Host style={this.styles}>
        <div class="tooltip" ref={element => this.$tooltip = element}>
          {this.content}
        </div>
        <slot/>
      </Host>
    )
  }
}
