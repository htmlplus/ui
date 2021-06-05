import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

/**
 * @development
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-icon',
  styleUrl: 'icon.scss',
  shadow: true
})
export class Icon implements ComponentInterface {

  /**
   * TODO
   * size (cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%)
   * inverse
   * spin
   * inactive/disabled
   */

  /**
   * Adjusts the color of the icons.(All main web color formats are accepted)
   */
  @Prop({ reflect: true })
  color?: string;

  /**
   * Flips the icon.
   */
  @Prop({ reflect: true })
  flip?: 'both' | 'horizontal' | 'vertical';

  /**
   * Specifies the name of the icon.
   */
  @Prop({ reflect: true })
  name?: string;

  /**
   * Rotates the icon.
   */
  @Prop({ reflect: true })
  rotate?: 90 | 180 | 270;

  /**
   * Specifies the size of the icon.
   * `xs`, `sm`, `lg` and `1x` to `10x`.
   */
  @Prop({ reflect: true })
  size?: string;

  @GlobalConfig('icon')
  config?;

  get attributes() {
    return {
      'style': this.styles,
    }
  }

  get styles() {
    return {
      'color': this.color || null
    }
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot>
          {this.name}
        </slot>
      </Host>
    )
  }
}
