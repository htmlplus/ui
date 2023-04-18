import { Attributes, Element, Property, getConfig, host, styles, toUnit } from '@htmlplus/element';

import { ICON_SIZES } from './icon2.constants.js';
import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon2.types.js';

/**
 * @part svg - The svg element.
 */
@Element()
export class Icon2 {
  /**
   * Adjusts the color of the icons.(All main web color formats are accepted)
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * Flips the icon.
   */
  @Property({ reflect: true })
  flip?: AvatarFlip;

  /**
   * Specifies the name of the icon.
   */
  @Property()
  name?: AvatarName;

  /**
   * Rotates the icon.
   */
  @Property({ reflect: true })
  rotate?: AvatarRotate;

  /**
   * Specifies the size of the icon.
   */
  @Property({ reflect: true })
  size?: AvatarSize;

  @Attributes()
  get attributes() {
    const size = ICON_SIZES.includes(this.size as any) ? null : toUnit(this.size);
    return {
      style: styles({
        color: this.color ? `color: ${this.color}` : null,
        height: size,
        width: size
      })
    };
  }

  updatedCallback() {
    host(this).shadowRoot.querySelector('svg')?.remove();

    const div = document.createElement('div');

    div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        part="svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        ${getConfig('asset', 'icon', this.name)
          .map(
            ([tag, attributes]) =>
              `<${tag} ${Object.keys(attributes)
                .map((key) => `${key}="${attributes[key]}"`)
                .join(' ')}/>`
          )
          .join('')}
      </svg>
    `;

    host(this).shadowRoot.appendChild(div.firstElementChild);
  }
}
