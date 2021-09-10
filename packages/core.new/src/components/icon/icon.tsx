import { Component, GlobalConfig, Host, Property } from '@app/decorators';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class Icon {

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
  @Property({ reflect: true })
  color?: string;

  /**
   * Flips the icon.
   */
  @Property({ reflect: true })
  flip?: 'both' | 'horizontal' | 'vertical';

  /**
   * Specifies the name of the icon.
   */
  @Property({ reflect: true })
  name?: string;

  /**
   * Rotates the icon.
   */
  @Property({ reflect: true })
  rotate?: 90 | 180 | 270;

  /**
   * Specifies the size of the icon.
   * `xs`, `sm`, `lg` and `1x` to `10x`.
   */
  @Property({ reflect: true })
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
