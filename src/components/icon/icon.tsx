import { Attributes, Element, Property } from '@htmlplus/element';

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
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

  @Attributes()
  get attributes() {

    if (!this.color) return;

    return {
      'style': `color: ${this.color}`
    }
  }

  render() {
    return (
      <slot>
        {this.name}
      </slot>
    )
  }
}
