import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

/**
 * TODO
 * @development 
 * @slot default - The default slot.
 * @examples default, color, custom-color, size, flip, rotate
 */
@Component({
  tag: 'plus-icon',
  styleUrl: 'icon.scss',
  shadow: true
})
export class Icon {

  /**
   * TODO
   * size (cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%)
   * inverse
   * spin
   * inactive/disabled
   */

  /**
   * TODO
   */
  @Prop({ reflect: true })
  color?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  flip?: 'both' | 'horizontal' | 'vertical';

  /**
   * TODO
   */
  // @Prop()
  hidden?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  label?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  name?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  rotate?: 0 | 90 | 180 | 270;

  /**
   * TODO
   * `xs`, `sm`, `lg` and `1x` to `10x`.
   */
  @Prop({ reflect: true })
  size?: string;

  @GlobalConfig('icon')
  config?;

  get attributes() {
    return {
      'aria-hidden': this.hidden ? 'true' : 'false',
      'aria-label': this.label ?? null,
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
