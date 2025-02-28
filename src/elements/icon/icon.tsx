import { Element, Property, Style, query, toCSSColor, toCSSUnit } from '@htmlplus/element';

import { getConfig, setConfig } from '@/config';
import { PlusCore } from '@/core';
import { AsyncCache } from '@/services';

import { ICON_DEFAULT_SVG, ICON_FALLBACK_SVG } from './icon.constants';
import { IconFlip, IconResolver, IconSize } from './icon.types';

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
  @Property({ reflect: true })
  name?: string;

  /**
   * An asynchronous function to load SVG files.
   */
  @Property()
  resolver?: IconResolver = ({ name }) => {
    return fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/${name}.svg`, {
      mode: 'cors'
    }).then(async (response) => {
      const body = await response.text();

      if (!response.ok) throw new Error(body);

      return body;
    });
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

  cache = new AsyncCache<IconResolver>({
    type: 'external',
    key: (params) => params.name,
    cache: () => {
      setConfig({ asset: { icon: {} } });
      return getConfig('asset', 'icon');
    },
    resolver: async (params) => {
      if (typeof this.resolver !== 'function') {
        console.warn(
          [
            `The icon element is not able to find an SVG file with the name of \`${params.name}\`. `,
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

      try {
        return await this.resolver(params);
      } catch (error) {
        console.warn(
          [
            `The icon element is not able to resolve an SVG file with the name of \`${params.name}\`. `,
            `There is a problem with the \`resolver\` property, and its output cannot be used. `,
            'Make sure that the output of the property is a string SVG.'
          ].join(''),
          this.$host
        );
        throw error;
      }
    }
  });

  @Style()
  get style() {
    return {
      color: toCSSColor(this.color),
      height: toCSSUnit(this.size),
      width: toCSSUnit(this.size),
      rotate: this.rotate ? this.rotate + 'deg' : undefined
    };
  }

  async update() {
    let svg: string;

    try {
      svg = this.name && (await this.cache.resolve({ name: this.name }));
    } catch (error) {
      svg = ICON_FALLBACK_SVG;
      throw error;
    }

    query(this, 'svg')?.remove();

    svg = (svg || ICON_DEFAULT_SVG).replace(/<svg/, '<svg part="svg"');

    this.$host.shadowRoot.innerHTML += svg;
  }

  loadedCallback() {
    this.update();
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
