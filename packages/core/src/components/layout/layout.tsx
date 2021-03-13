import { Component, Host, Prop, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
import { LayoutFooter, LayoutHeader, LayoutMain } from './layout.types';

/**
 * TODO
 * @development 
 * @slot              - The default slot
 * @slot header       - TODO
 * @slot header:start - TODO
 * @slot header:end   - TODO
 * @slot footer       - TODO
 * @slot footer:start - TODO
 * @slot footer:end   - TODO
 * @slot aside:start  - TODO
 * @slot aside:end    - TODO
 * @examples default, simple, aside
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

  @GlobalConfig('layout', {
    header: 'grow',
    footer: 'grow',
    main: 'stretch',
  })
  config?;

  get areas() {
    return [
      "'",
      this.area('header', 'start'),
      ' header ',
      this.area('header', 'end'),
      "' '",
      this.slots['aside:start'] ? 'aside-start' : 'main',
      ' main ',
      this.slots['aside:end'] ? 'aside-end' : 'main',
      "' '",
      this.area('footer', 'start'),
      ' footer ',
      this.area('footer', 'end'),
      "'",
    ].join('')
  }

  get elements() {
    return ['header:start', 'header', 'header:end', 'aside:start', 'aside:end', 'footer:start', 'footer', 'footer:end'];
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

    const hasAsideSlot = this.slots[`aside:${position}`];

    if (!hasSlot && !hasAsideSlot) return key;

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
          <div class={`main ${this.main}`}>
            <slot />
          </div>
          {this.elements
            .filter((key) => !!this.slots[key])
            .map((key) => (
              <div class={key.replace(':', '-')}>
                <slot name={key} />
              </div>
            ))}
        </div>
      </Host>
    )
  }
}
