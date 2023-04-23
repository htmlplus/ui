import {
  Attributes,
  Element,
  Property,
  State,
  Watch,
  host,
  styles,
  toUnit
} from '@htmlplus/element';

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

  sync(input?: SVGElement | string): boolean {
    if (input) {
      this.cache = parse(input);
    }

    if (!this.cache) return;

    this.svg = this.cache.cloneNode(true);

    return true;
  }

  update() {
    if (this.cache instanceof Promise) {
      this.cache
        .then(() => {
          this.sync();
        })
        .catch(() => {
          console.warn('TODO3', this.$host);
        });
      return;
    }

    try {
      if (this.sync(this.cache)) return;
    } catch {}

    if (!this.resolver) {
      console.warn('TODO1', this.$host);
      return;
    }

    this.cache = this.resolver(this.name, parse)
      .then((input) => {
        this.sync(input);
      })
      .catch(() => {
        console.warn('TODO2', this.$host);
      });
  }

  @Watch('name', true)
  watcher() {
    requestAnimationFrame(() => {
      this.update();
    });
  }

  render() {
    return this.svg || null;
  }
}
