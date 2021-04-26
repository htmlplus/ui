import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { DividerType, DividerVariant } from './divider.types';

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
  type?: DividerType = 'solid';

  /**
   * You can use vertical property for vertical division.
   */
  @Prop({ reflect: true })
  vertical?: boolean;

  /**
   * TODO
   */
  // @Prop()
  // weight/size?: number | string;

  /**
   * TODO
   */
  // @Prop()
  variant?: DividerVariant = 'full';

  @GlobalConfig('divider', {
    type: 'solid',
    variant: 'full',
  })
  config?;

  get attributes() {
    return {
      'role': 'separator',
      'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
    }
  }

  render() {
    return (
      <Host {...this.attributes} />
    )
  }
}
