import { Attributes, Element, Property, State, host, styles, toUnit } from '@htmlplus/element';

import { getConfig, setConfig } from '@app/config';

import { SYMBOL_SIZES } from './symbol.constants';
import {
  SymbolFlip,
  SymbolResolver,
  SymbolRotate,
  SymbolSize,
  SymbolTransformer
} from './symbol.types';

const parser = new DOMParser();

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
  label?: string;

  /**
   * TODO
   */
  @Property()
  name?: string;

  /**
   * TODO
   */
  @Property()
  resolver?: SymbolResolver;

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

  /**
   * TODO
   */
  @Property()
  transformer?: SymbolTransformer;

  @State()
  svg?: SVGElement;

  @Attributes()
  get attributes() {
    const size = SYMBOL_SIZES.includes(this.size as any) ? null : toUnit(this.size);
    return {
      'aria-label': this.label ? this.label : null,
      'aria-hidden': this.label ? null : 'true',
      'role': this.label ? 'img' : null,
      'style': styles({
        color: this.color ? `color: ${this.color}` : null,
        height: size,
        width: size
      })
    };
  }

  get $host() {
    return host(this);
  }

  get cache() {
    return getConfig('asset', 'symbol', this.name);
  }

  updatedCallback() {
    if (this.svg) return;

    this.svg = this.cache?.cloneNode(true);

    if (this.svg) return;

    if (!this.resolver) return console.warn('TODO', this.$host);

    this.resolver(this.name)
      .then((result) => {
        const div = document.createElement('div');

        div.innerHTML = result;

        const element = div.firstElementChild;

        if (element?.tagName?.toLowerCase() != 'svg') throw new Error();

        const parsed = parser
          .parseFromString(element.outerHTML, 'text/html')
          .body.querySelector('svg');

        if (!parsed) throw new Error();

        let svg = document.adoptNode(parsed) as SVGElement;

        svg.part.add('svg');

        svg.setAttribute('xmlns', svg.getAttribute('xmlns') || 'http://www.w3.org/2000/svg');

        svg = this.transformer?.(svg) || svg;

        this.svg = svg.cloneNode(true) as SVGElement;

        setConfig({
          asset: {
            symbol: {
              [this.name]: svg
            }
          }
        });
      })
      .catch((error) => {
        console.warn('TODO', this.$host);
      });
  }

  render() {
    return this.svg || null;
  }
}
