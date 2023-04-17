import { Attributes, Element, Property, getConfig, host } from '@htmlplus/element';

// Imports built-in icons.
import './assets/names/3d-cube-sphere.js';
import './assets/names/plus.js';
import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon.types.js';

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
   * `xs`, `sm`, `lg` and `1x` to `10x`.
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

  get nodes() {
    return getConfig('asset', 'icon', this.name);
  }

  updatedCallback() {
    host(this).shadowRoot.querySelector('svg')?.remove();

    const div = document.createElement('div');

    div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        ${this.nodes.map(
          ([tag, attributes]) =>
            `<${tag} ${Object.keys(attributes)
              .map((key) => `${key}="${attributes[key]}"`)
              .join(' ')}/>`
        )}
      </svg>
    `;

    host(this).shadowRoot.appendChild(div.firstElementChild);
  }
}
