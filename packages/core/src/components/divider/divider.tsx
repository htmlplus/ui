import { Component, Host, Prop, h } from '@stencil/core';
import { Direction, GlobalConfig, IsRTL } from '@app/utils';
import { DividerSize, DividerType } from './divider.types';

/**
 * It's a thin line that can divide the content vertically or horizontally.
 * @examples horizontal, vertical, card, customize
 */
@Component({
  tag: 'plus-divider',
  styleUrl: 'divider.scss',
  shadow: true
})
export class Divider {

  /**
   * TODO
   */
  // @Prop({ reflect: true })
  // placement?: DividerPlacement = 'center';

  /**
   * TODO
   */
  @Prop({ reflect: true })
  size?: DividerSize = 'md';

  /**
   * TODO
   */
  @Prop({ reflect: true })
  type?: DividerType = 'solid';

  /**
   * TODO
   */
  // @Prop({ reflect: true })
  // variant?: DividerVariant = 'full';

  /**
   * You can use vertical property for vertical division.
   */
  @Prop({ reflect: true })
  vertical?: boolean;

  @GlobalConfig('divider', {
    // placement: 'center',
    size: 'md',
    type: 'solid',
    variant: 'full',
  })
  config?;

  @Direction()
  direction;

  @IsRTL()
  isRTL: boolean;

  get attributes() {
    return {
      'role': 'separator',
      'aria-orientation': this.orientation,
    }
  }

  // get classes() {
  //   return {
  //     'root': true,
  //     [this.direction]: true,
  //   }
  // }

  // get hasBefore() {
  //   return Helper.fromAxis(this.placement, this.isRTL) !== 'start';
  // }

  // get hasAfter() {
  //   return Helper.fromAxis(this.placement, this.isRTL) !== 'end';
  // }

  get orientation() {
    return this.vertical ? 'vertical' : 'horizontal';
  }

  render() {
    return (
      <Host {...this.attributes}>
        {/* <div class={this.classes}>
          {this.hasBefore && (
            <div class="before" />
          )}
          <div class="content">
            <slot />
          </div>
          {this.hasAfter && (
            <div class="after" />
          )}
        </div> */}
      </Host>
    )
  }
}
