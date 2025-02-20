import { Element, Property, Query, isCSSColor } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Style } from '@/decorators';
import { AsyncCache } from '@/services';

import { LoadingSize } from './loading.types';

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

  @Property()
  resolver?: (type: string) => Promise<string>;

  @Query('style')
  $style!: HTMLElement;

  cache = new AsyncCache<any>({
    type: 'global',
    namespace: 'loading',
    resolver: (params) => this.resolver(params)
  });

  @Style()
  get style() {
    return {
      color: isCSSColor(this.color) ? this.color : undefined
    };
  }

  updatedCallback() {
    this.cache.resolve(this.type).then((style) => {
      this.$style.innerHTML = style;
    });
  }

  render() {
    return (
      <host role="status">
        <style />
        <span className="indicator"></span>
      </host>
    );
  }
}
