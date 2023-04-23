import { Attributes, Element, Property, State, host, styles, toUnit } from '@htmlplus/element';

import { getConfig, setConfig } from '@app/config';

import { SYMBOL_SIZES } from './symbol.constants';
import { SymbolFlip, SymbolResolver, SymbolRotate, SymbolSize } from './symbol.types';

let domParser;

const parse = (input: SVGElement | string): SVGElement => {
  if (input instanceof SVGElement) return input;

  const div = document.createElement('div');

  div.innerHTML = input;

  const element = div.firstElementChild;

  if (element?.tagName?.toLowerCase() != 'svg') throw new Error();

  domParser ||= new DOMParser();

  const parsed = domParser
    .parseFromString(element.outerHTML, 'text/html')
    .body.querySelector('svg');

  if (!parsed) throw new Error();

  const svg = document.adoptNode(parsed) as SVGElement;

  svg.part.add('svg');

  svg.setAttribute('xmlns', svg.getAttribute('xmlns') || 'http://www.w3.org/2000/svg');

  return svg;
};

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
  @Property()
  defaults?: boolean = true;

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

  @State()
  svg?: SVGElement;

  @Attributes()
  get attributes() {
    const size = SYMBOL_SIZES.includes(this.size as any) ? null : toUnit(this.size);
    return {
      'aria-label': this.label ?? null,
      'aria-hidden': `${!this.label}`,
      'role': this.label ? 'img' : null,
      'style': styles({
        color: this.color ?? null,
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

  set cache(cache) {
    setConfig({ asset: { symbol: { [this.name]: cache } } });
  }

  async connectCallback() {
    if (!this.defaults) return;
    await import('./symbols');
  }

  update(input: SVGElement | string) {
    this.svg = (this.cache = parse(input))?.cloneNode(true) as SVGElement;
  }

  updateCallback() {
    if (this.svg) return;

    if (this.cache instanceof Promise) {
      this.cache
        .then(() => {
          this.update(this.cache);
        })
        .catch((error) => {
          console.warn('TODO3', this.$host);
        });
      return;
    }

    try {
      this.update(this.cache);
    } catch {}

    if (this.svg) return;

    if (!this.resolver) return console.warn('TODO1', this.$host);

    this.cache = this.resolver(this.name, parse)
      .then((input) => {
        this.update(input);
      })
      .catch((error) => {
        console.warn('TODO2', this.$host);
      });
  }

  render() {
    return this.svg || null;
  }
}
