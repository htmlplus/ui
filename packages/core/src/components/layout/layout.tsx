import { Component, Host, Prop, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
import { LayoutFooter, LayoutHeader } from './layout.types';

/**
 * TODO
 * @development
 * @examples default
 */
@Component({
  tag: 'plus-layout',
  styleUrl: 'layout.scss',
  shadow: true
})
export class Layout {

  /**
   * TODO
   */
  @Prop()
  header?: LayoutHeader = 'both';

  /**
   * TODO
   */
  @Prop()
  footer?: LayoutFooter = 'both';

  @GlobalConfig('layout')
  config?;

  get isRTL() {
    return Utils.isRTL(this);
  }

  get style() {

    const aside = (key, isStart) => {

      const value = this[key];

      const direction = isStart ? 'start' : 'end';

      const matcher = ['center', isStart ? 'end' : 'start'];

      if (!matcher.includes(value)) return key;

      return `aside-${direction}`;
    }

    const areas = [
      `${aside('header', false)} header ${aside('header', true)}`,
      'aside-start content aside-end',
      `${aside('footer', false)} footer ${aside('footer', true)}`,
    ]
      .map((area) => `'${area}'`)
      .join(' ');

    return {
      'grid-template-areas': `${areas}`
    }
  }

  render() {
    return (
      <Host style={this.style}>
        <div class="header">
          <slot name="header" />
        </div>
        <div class="aside-start">
          <slot name="aside:start" />
        </div>
        <div class="content">
          <slot />
        </div>
        <div class="aside-end">
          <slot name="aside:end" />
        </div>
        <div class="footer">
          <slot name="footer" />
        </div>
      </Host>
    )
  }
}
