import { Component, Host, Prop, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
import { LayoutTop, LayoutMain, LayoutBottom } from './layout.types';

/**
 * TODO
 * @development 
 * @slot              - The default slot.
 * @slot header       - TODO.
 * @slot top:start    - TODO.
 * @slot top:end      - TODO.
 * @slot aside:start  - TODO.
 * @slot aside:end    - TODO.
 * @slot footer       - TODO.
 * @slot bottom:start - TODO.
 * @slot bottom:end   - TODO.
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
  bottom?: LayoutBottom = 'footer';

  /**
   * TODO
   */
  @Prop()
  main?: LayoutMain = 'stretch';

  /**
   * TODO
   */
  @Prop()
  top?: LayoutTop = 'header';

  @GlobalConfig('layout', {
    bottom: 'footer',
    main: 'stretch',
    top: 'header',
  })
  config?;

  get areas() {
    return [
      "'",
      this.area('top', 'start'),
      ' header ',
      this.area('top', 'end'),
      "' '",
      this.area('aside', 'start'),
      ' main ',
      this.area('aside', 'end'),
      "' '",
      this.area('bottom', 'start'),
      ' footer ',
      this.area('bottom', 'end'),
      "'",
    ].join('')
  }

  get elements() {
    return ['header', 'top:start', 'top:end', 'aside:start', 'aside:end', 'footer', 'bottom:start', 'bottom:end']
  }

  get slots() {
    return Utils.slots(this);
  }

  get style() {
    console.log(this.areas)
    return {
      'grid-template-areas': `${this.areas}`
    }
  }

  area(key, position) {

    const hasSlot = this.slots[`${key}:${position}`];

    if (key === 'aside') return hasSlot ? `aside-${position}` : 'main';

    const value = this[key];

    if (!value) return (key === 'top') ? 'header' : 'footer';

    let [start, end] = value.split('-');

    if (!end) end = start;

    let area = (position === 'start') ? start : end;

    if (area === 'slot') return `${key}-${position}`;

    if (area === 'aside') return `aside-${position}`;

    return area;
  }

  isValidSlot(name) {

    // name
    // 'header', 
    // 'top:start', 'top:end', 
    // 'aside:start', 'aside:end', 
    // 'footer', 
    // 'bottom:start', 'bottom:end'

    // top
    // "aside" | "slot" | "header" | 
    // "header-header" | "header-aside" | "header-slot" | 
    // "aside-header" | "aside-aside" | "aside-slot" | 
    // "slot-header" | "slot-aside" | "slot-slot"

    const hasSlot = this.slots[name];

    if (!hasSlot) return false;

    const [key, position] = name.split(':');

    const value = this[key];

    if (!value) return true;

    if (value === 'slot') return true;

    return (position === 'start') ? value.startsWith('slot-') : value.endsWith('-slot');
  }

  render() {
    return (
      <Host>
        <div class="wrapper" style={this.style}>
          <div class={`main ${this.main}`}>
            <slot />
          </div>
          {this.elements
            .filter((key) => this.isValidSlot(key))
            .map((key) => (
              <div key={key} class={key.replace(':', '-')}>
                <slot name={key} />
              </div>
            ))}
        </div>
      </Host>
    )
  }
}
