import { Attributes, Element, Property, getConfig, host, styles, toUnit } from '@htmlplus/element';

import { getPath } from '@app/config/index.js';

import { ICON_SIZES } from './icon2.constants.js';
import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon2.types.js';

/**
 * @part svg - The svg element.
 */
@Element()
export class Icon2 {
  /**
   * TODO
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * TODO
   */
  @Property({ reflect: true })
  flip?: AvatarFlip;

  /**
   * TODO
   */
  @Property()
  name?: AvatarName;

  /**
   * TODO
   */
  @Property({ reflect: true })
  rotate?: AvatarRotate;

  /**
   * TODO
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
    import(`${getPath()}${this.name}.js`)
      .then((result) => {
        console.log('RESOLVE', result);

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
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
  }
}
