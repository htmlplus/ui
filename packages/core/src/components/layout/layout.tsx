import { Component, Host, Prop, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
import { LayoutFooter, LayoutHeader, LayoutMain } from './layout.types';

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
  header?: LayoutHeader = 'grow';

  /**
   * TODO
   */
  @Prop()
  footer?: LayoutFooter = 'grow';

  /**
   * TODO
   */
  @Prop()
  main?: LayoutMain = 'stretch';

  @GlobalConfig('layout')
  config?;

  get areas() {
    return [
      "'",
      this.area('header', 'start'),
      ' header ',
      this.area('header', 'end'),
      "' '",
      'aside-start',
      ' main ',
      'aside-end',
      "' '",
      this.area('footer', 'start'),
      ' footer ',
      this.area('footer', 'end'),
      "'",
    ].join('')
  }

  get slots() {
    return Utils.slots(this);
  }

  get style() {
    return {
      'grid-template-areas': `${this.areas}`
    }
  }

  area(key, position) {

    const hasSlot = this.slots[`${key}:${position}`];

    if (hasSlot) return `${key}-${position}`;

    const isStart = position === 'start';

    const value = this[key];

    const matcher = ['center', isStart ? 'end' : 'start'];

    if (!matcher.includes(value)) return key;

    const direction = isStart ? 'start' : 'end';

    return `aside-${direction}`;
  }

  render() {
    return (
      <Host>
        <div class="wrapper" style={this.style}>
          <div class="header-start">
            <slot name="header:start" />
          </div>
          <div class="header">
            <slot name="header" />
          </div>
          <div class="header-end">
            <slot name="header:end" />
          </div>
          <div class="aside-start">
            <slot name="aside:start" />
          </div>
          <div class={`main ${this.main}`}>
            <slot />
          </div>
          <div class="aside-end">
            <slot name="aside:end" />
          </div>
          <div class="footer-start">
            <slot name="footer:start" />
          </div>
          <div class="footer">
            <slot name="footer" />
          </div>
          <div class="footer-end">
            <slot name="footer:end" />
          </div>
        </div>
      </Host>
    )
  }
}
