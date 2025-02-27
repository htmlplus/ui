import { Element, Property, Style, toCSSColor, toCSSUnit } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { AsyncCache } from '@/services';

import { LoadingResolver, LoadingSize } from './loading.types';

@Element()
export class Loading extends PlusCore {
  /**
   * Specifies the color.
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * Specifies the size of the loading.
   */
  @Property({ reflect: true })
  size?: LoadingSize = 'inherit';

  /**
   * Specifies which variant of the loading to use.
   */
  @Property({ reflect: true })
  type?: string = 'default';

  /**
   * TODO
   */
  @Property()
  resolver?: LoadingResolver;

  cache = new AsyncCache<LoadingResolver>({
    type: 'global',
    namespace: 'loading',
    resolver: async (params) => {
      if (typeof this.resolver !== 'function') {
        console.warn(
          [
            `The 'loading' element can't find the '${params.type}' file. `,
            `It uses an async 'resolver' function to load files, which isn't set up by default. `,
            `You may need to configure it properly. `,
            `Check the documentation for the correct resolver setup to fix the issue.`
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
            `The 'loading' element is not able to resolve the '${params.type}' file. `,
            `There is a problem with the 'resolver' property, and its output cannot be used. `,
            'Make sure that the output of the property is correct.'
          ].join(''),
          this.$host
        );
        throw error;
      }
    }
  });

  @Style()
  async style() {
    let style = '';

    if (toCSSColor(this.color)) {
      style += `:host { --plus-loading-color: ${this.color} }`;
    }

    if (toCSSUnit(this.size)) {
      style += `:host { --plus-loading-size: ${toCSSUnit(this.size)} }`;
    }

    style += await this.cache.resolve({ type: this.type });

    return style;
  }

  render() {
    return (
      <host role="status">
        <span className="indicator"></span>
      </host>
    );
  }
}
