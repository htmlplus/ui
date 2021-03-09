import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';

/**
 * TODO
 * @development
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
  @Prop({ reflect: true })
  vertical?: boolean;

  /**
   * TODO
   */
  // @Prop()
  // size?: number | string;

  @GlobalConfig('divider')
  config?;

  get attributes() {
    return {
      role: 'separator',
      'aria-orientation': this.vertical ? 'vertical' : 'horizontal'
    }
  }

  render() {
    return (
      <Host {...this.attributes} />
    )
  }
}
