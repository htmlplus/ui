import { Attributes, Element, Property, State, host, styles, toUnit } from '@htmlplus/element';

import { getConfig, setConfig } from '@app/config';

import { ICON_SIZES } from './icon.constants';
import { IconFlip, IconResolver, IconRotate, IconSize } from './icon.types';

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
export class Icon {
  /**
   * Specifies the color.
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * Flips in `horizontal`, `vertical` or `both` directions.
   */
  @Property({ reflect: true })
  flip?: IconFlip;

  /**
   * Specifies an alternate description to use for assistive devices.
   */
  @Property()
  label?: string;

  /**
   * Specifies the name.
   */
  @Property()
  name?: string;

  /**
   * TODO
   */
  @Property()
  resolver?: IconResolver = (name) => {
    return import(`./assets/names/${name}.js`).then((module) => module?.['default'] || module);
  };

  /**
   * Specifies the rotation.
   */
  @Property({ reflect: true })
  rotate?: IconRotate;

  /**
   * Specifies the size.
   */
  @Property({ reflect: true })
  size?: IconSize;

  @State()
  svg?: SVGElement;

  @Attributes()
  get attributes() {
    return {
      'aria-label': this.label ?? null,
      'aria-hidden': `${!this.label}`,
      'role': this.label ? 'img' : null,
      'style': this.style
    };
  }

  get $host() {
    return host(this);
  }

  get cache() {
    return getConfig('asset', 'icon', this.name);
  }

  set cache(cache) {
    setConfig({
      asset: {
        icon: {
          [this.name]: cache
        }
      }
    });
  }

  get style() {
    let size, transform;

    if (!ICON_SIZES.includes(this.size as any)) {
      size = toUnit(this.size);
    }

    if (this.rotate) {
      transform = `${transform || ''}rotate(${this.rotate}deg) `;
    }

    if (this.flip) {
      switch (this.flip) {
        case 'both':
          transform = `${transform || ''}scale(-1)`;
          break;
        case 'horizontal':
          transform = `${transform || ''}scaleX(-1)`;
          break;
        case 'vertical':
          transform = `${transform || ''}scaleY(-1)`;
          break;
      }
    }

    return styles({
      color: this.color,
      height: size,
      width: size,
      transform
    });
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
