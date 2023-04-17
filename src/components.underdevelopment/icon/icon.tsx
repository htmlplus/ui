import { Attributes, Element, Property, getConfig, host, toUnit } from '@htmlplus/element';

// Imports built-in icons.
import './assets/names/3d-cube-sphere.js';
import './assets/names/plus.js';
import { ICON_SIZES } from './icon.constants.js';
import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon.types.js';

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
    if (!this.color) return;

    return {
      style: `color: ${this.color}`
    };
  }

  updatedCallback() {
    const shadowRoot = host(this).shadowRoot;

    const size = ICON_SIZES.includes(this.size as any) ? 'inherit' : toUnit(this.size);

    shadowRoot.querySelector('svg')?.remove();

    const div = document.createElement('div');

    div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${size}"
        height="${size}"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
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

    shadowRoot.appendChild(div.firstElementChild);
  }
}
