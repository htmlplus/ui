import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

/**
 * font-size: cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%
 * inverse
 * spin
 */

/**
 * TODO
 * @development 
 * @slot default - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-icon',
  styleUrl: 'icon.scss',
  shadow: true
})
export class Icon {

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
  @Prop()
  label?: string;

  /**
   * TODO
   */
  @Prop()
  name?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  rotate?: 0 | 90 | 180 | 270;

  /**
   * TODO
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
