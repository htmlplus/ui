import { Element, Property, Watch, toUnit, isCSSColor, query } from '@htmlplus/element';

import { getConfig, setConfig } from '@/config';
import { PlusCore } from '@/core';
import { isSize } from '@/helpers';

import { ICON_DEFAULT_SVG, ICON_FALLBACK_SVG } from './icon.constants';
import { IconFlip, IconResolver, IconSize } from './icon.types';
import { Style } from '@/decorators';

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
 * @stable
 *
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

  @Style()
  get style() {
    return {
      color: isCSSColor(this.color) ? this.color : undefined,
      height: !isSize(this.size) ? toUnit(this.size) : undefined,
      width: !isSize(this.size) ? toUnit(this.size) : undefined,
      rotate: this.rotate ? this.rotate + 'deg' : undefined,
    }
  }

  @Watch('name', true)
  watcher() {
    requestAnimationFrame(() => this.update());
  }

  sync(input: SVGElement | string, cacheable: boolean): SVGElement {
    const element = parse(input);

    if (cacheable) {
      this.cache = element;
    }

    query(this, 'svg')?.remove();

    const cloned = element.cloneNode(true) as SVGElement;

    this.$host.shadowRoot.appendChild(cloned);

    return cloned;
  }

  update() {
    if (this.cache instanceof Promise) {
      this.cache
        .then((input) => {
          this.sync(input, true);
        })
        .catch(() => {
          this.sync(ICON_FALLBACK_SVG, false);
        });
      return;
    }

    try {
      if (this.sync(this.cache, true)) return;
    } catch { }

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
        return this.sync(input, true);
      })
      .catch(() => {
        this.sync(ICON_FALLBACK_SVG, false);

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

  loadedCallback() {
    !this.name && this.sync(ICON_DEFAULT_SVG, false);
  }

  render() {
    return (
      <host
        aria-hidden={this.label ? null : `${!this.label}`}
        aria-label={this.label ?? null}
        role={this.label ? 'img' : null}
      ></host>
    );
  }
}
