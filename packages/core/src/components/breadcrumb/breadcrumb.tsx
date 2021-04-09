import { Component, Element, Host, Prop, State, forceUpdate, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import * as BREADCRUMB_SHAPES from './breadcrumb.shapes';

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
  offset?: number = 1;

  /**
   * TODO
   */
  @Prop()
  max?: number = 5;

  /**
   * TODO: Separator type is one of `none`, `circle`, `space`, `arrow`.
   */
  @Prop()
  separator?: string = '/';

  @GlobalConfig('breadcrumb', {
    separator: '/'
  })
  config?;

  @Element()
  $host!: HTMLElement;

  @State()
  $nodes?: Array<Element>;

  observer?: MutationObserver;

  get attributes() {
    return {
      'aria-label': 'breadcrumb'
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

  unbind() {
    this.observer?.disconnect();
  }

  update(force?: boolean, expand?: boolean) {

    const $nodes = [];

    const Shape = BREADCRUMB_SHAPES[Utils.toCamelCase(this.separator)];

    const template = this.$host.querySelector('template[slot=separator]')?.cloneNode(true)['innerHTML'] || this.config?.slots.separator;

    const $children = Array.from(this.$host.children).filter(($node) => $node.tagName !== 'TEMPLATE');

    const { start, length } = (() => {

      if (expand || $children.length <= this.max) return {};

      let start, length;

      length = $children.length > this.max ? $children.length - this.max : $children.length;

      const mod = $children.length - length;

      start = this.offset;

      if (start >= 0) {

        start = $children.length < length + start ? mod : start;
      }
      else {

        start = mod + start + 1;

        start = start < 0 ? 0 : start;
      }

      return { start, length };
    })();

    $children.map(($child, index) => {

      $child.removeAttribute('aria-current');

      $child.setAttribute('slot', index.toString());

      if (start <= index && index < start + length) return;

      $nodes.push(
        <div key={index}>
          <slot name={index.toString()} />
        </div>
      )
    });

    if (typeof start !== 'undefined') {

      const more = (
        <div
          key="more"
          class="more"
          tabindex="0"
          role="button"
          aria-disabled="false"
          aria-label="Show path"
          onClick={() => this.update(false, true)}
        >
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      );

      $nodes.splice(start, 0, more);
    }

    for (let index = $nodes.length - 1; index > 0; index--) {

      const separator = (
        <div
          key={'separator' + index}
          class={{ separator: true, rtl: this.isRTL }}
          innerHTML={template ? template : undefined}
        >
          {!template && <Shape />}
        </div>
      );

      $nodes.splice(index, 0, separator);
    }

    this.$nodes = $nodes;

    force && forceUpdate(this);
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return;

    switch (name) {

      case 'offset':
      case 'max':
      case 'separator':

        this.update(false, false);

        return false;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onChange() {
    this.update(true, false);
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.bind();
    this.update(false, false);
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes} >
        <div class="root">
          {this.$nodes}
        </div>
      </Host>
    )
  }
}
