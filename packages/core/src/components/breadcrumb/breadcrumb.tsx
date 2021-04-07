import { Component, Element, Host, Prop, State, h, forceUpdate } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import * as BREADCRUMB_SHAPES from './breadcrumb.shapes';
import { BreadcrumbSeparator } from './breadcrumb.types';

/**
 * TODO
 * @internal 
 * @slot - The default slot
 * @examples default
 */
@Component({
  tag: 'plus-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true
})
export class Breadcrumb {

  /**
   * TODO
   */
  @Prop()
  separator?: BreadcrumbSeparator = 'arrow';

  @GlobalConfig('breadcrumb', {
    separator: 'arrow'
  })
  config?;

  @Element()
  $host!: HTMLElement;

  @State()
  $children?: Array<Element>;

  @State()
  template?: string;

  observer?: MutationObserver;

  get attributes() {
    return {
      'aria-label': 'Breadcrumb'
    }
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  /**
   * Internal Methods
   */

  bind() {
    this.observer = new MutationObserver(this.onChange);
    this.observer.observe(this.$host, { childList: true });
  }

  child(key) {

    const result = [
      <div key={key}>
        <slot name={key.toString()} />
      </div>
    ];

    if (this.separator === 'none') return result;

    if (this.$children.length - 1 === key) return result;

    const Shape = BREADCRUMB_SHAPES[this.separator];

    result.push(
      <div
        key={key}
        class={{ separator: true, rtl: this.isRTL }}
        innerHTML={this.template ? this.template : undefined}
      >
        {!this.template && <Shape />}
      </div>
    )

    return result;
  }

  unbind() {
    this.observer?.disconnect();
  }

  update(force?: boolean) {

    this.$children = Array.from(this.$host.children).filter(($child) => $child.tagName !== 'TEMPLATE');

    this.$children.map(($child, index) => $child.slot = index.toString());

    this.template = this.$host.querySelector('template[slot=separator]')?.cloneNode(true)['innerHTML'] || this.config?.slots.separator;

    force && forceUpdate(this);
  }

  /**
   * Events handler
   */

  @Bind
  onChange() {
    this.update(true);
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.bind();
    this.update();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="root">
          {this.$children.map(($child, index) => $child && this.child(index))}
        </div>
      </Host>
    )
  }
}
