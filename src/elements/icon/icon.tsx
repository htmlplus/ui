import { Element, Property, State, Watch, styles, toUnit } from '@htmlplus/element';

import { getConfig, setConfig } from '@/config';
import { PlusCore } from '@/core';
import { isSize, isValidCSSColor } from '@/helpers';

import { ICON_FALLBACK_SVG } from './icon.constants';
import { IconFlip, IconResolver, IconSize } from './icon.types';

let parser;

const parse = (input: SVGElement | string): SVGElement => {
  if (input instanceof SVGElement) return input;

  const div = document.createElement('div');

  div.innerHTML = input;

  const element = div.firstElementChild;

  if (element?.tagName?.toLowerCase() != 'svg') throw new Error();

  parser ||= new DOMParser();

  const parsed = parser.parseFromString(element.outerHTML, 'text/html').body.querySelector('svg');

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
export class Icon extends PlusCore {
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
   * An asynchronous function to load SVG files.
   */
  @Property()
  resolver?: IconResolver = async (name) => {
    return fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/${name}.svg`, {
      mode: 'cors'
    }).then((response) => response.text());
  };

  /**
   * Specifies the rotation.
   */
  @Property({ reflect: true })
  rotate?: number;

  /**
   * Specifies the size.
   */
  @Property({ reflect: true })
  size?: IconSize;

  @State()
  svg?: SVGElement;

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

    if (!isSize(this.size)) {
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
      color: isValidCSSColor(this.color) ? this.color : null,
      height: size,
      width: size,
      transform
    });
  }

  @Watch('name', true)
  watcher() {
    requestAnimationFrame(() => {
      this.update();
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
          // TODO
          this.svg = parse(ICON_FALLBACK_SVG).cloneNode(true) as any;
        });
      return;
    }

    try {
      if (this.sync(this.cache)) return;
    } catch {}

    if (typeof this.resolver != 'function') {
      console.warn(
        [
          `The icon element is not able to find an SVG file with the name of \`${this.name}\`. `,
          'This element uses an asynchronous function called `resolver` to load SVG files. ',
          'The function is defined as built-in by default. ',
          'It is possible that it has not been reconfigured correctly. ',
          'To solve the problem, ',
          'read the documentation to check the correct configuration of the `resolver` property.'
        ].join(''),
        this.$host
      );
      return;
    }

    this.cache = this.resolver(this.name, parse)
      .then((input) => {
        this.sync(input);
      })
      .catch(() => {
        // TODO
        this.svg = parse(ICON_FALLBACK_SVG).cloneNode(true) as any;

        console.warn(
          [
            `The icon element is not able to resolve an SVG file with the name of \`${this.name}\`. `,
            `There is a problem with the \`resolver\` property, and its output cannot be used. `,
            'Make sure that the output of the property is an SVG.'
          ].join(''),
          this.$host
        );
      });
  }

  render() {
    return (
      <host
        aria-hidden={this.label ? null : `${!this.label}`}
        aria-label={this.label ?? null}
        role={this.label ? 'img' : null}
        style={this.style}
      >
        {this.svg || null}
      </host>
    );
  }
}
