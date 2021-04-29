import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { DividerType, DividerSize, DividerVariant } from './divider.types';

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
  // @Prop()
  size?: DividerSize = 'md';

  /**
   * TODO
   */
  // @Prop({ reflect: true })
  type?: DividerType = 'solid';

  /**
   * TODO
   */
  // @Prop()
  variant?: DividerVariant = 'full';

  /**
   * You can use vertical property for vertical division.
   */
  @Prop({ reflect: true })
  vertical?: boolean;

  @GlobalConfig('divider', {
    size: 'md',
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
