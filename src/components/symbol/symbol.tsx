import { Attributes, Element, Property, host, styles, toUnit } from '@htmlplus/element';

import { getBasePath, getConfig } from '@app/config';

import { SYMBOL_SIZES } from './symbol.constants';
import { SymbolFlip, SymbolName, SymbolRotate, SymbolSize } from './symbol.types';

/**
 * @part svg - The svg element.
 */
@Element()
export class Symbol {
  /**
   * TODO
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * TODO
   */
  @Property({ reflect: true })
  flip?: SymbolFlip;

  /**
   * TODO
   */
  @Property()
  name?: SymbolName;

  /**
   * TODO
   */
  @Property({ reflect: true })
  rotate?: SymbolRotate;

  /**
   * TODO
   */
  @Property({ reflect: true })
  size?: SymbolSize;

  @Attributes()
  get attributes() {
    const size = SYMBOL_SIZES.includes(this.size as any) ? null : toUnit(this.size);
    return {
      style: styles({
        color: this.color ? `color: ${this.color}` : null,
        height: size,
        width: size
      })
    };
  }

  get nodes() {
    return getConfig('asset', 'symbol', this.name);
  }

  update() {
    host(this).shadowRoot.querySelector('svg')?.remove();

    const div = document.createElement('div');

    div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        part="svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        ${this.nodes
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

  updatedCallback() {
    if (this.nodes) return this.update();

    const file = `${getBasePath()}/${this.name}.js`;

    import(/* @vite-ignore */ file)

      .then(() => {
        this.update();
      })
      .catch(() => {
        throw new Error(
          [
            `Failed to fetch '${file}' file.`,
            `The "symbol" component load dynamically the dependency files,`,
            `It seems that the given file name is wrong or the assets path is not set correctly.`,
            `Refer to the document to set the assets path correctly.`
          ].join(' ')
        );
      });
  }
}
