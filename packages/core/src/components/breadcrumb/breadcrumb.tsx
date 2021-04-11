import { Component, Element, Host, Prop, State, forceUpdate, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import * as Constants from './breadcrumb.constants';

/**
 * TODO
 * @slot - The default slot
 * @slot expander - The expander slot
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
  expanderText?: string = 'Show path';

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
  @Prop({ reflect: true })
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

  get $children() {

    const selectors = [
      Constants.BREADCRUMB_EXPANDER_SLOT_QUERY,
      Constants.BREADCRUMB_SEPARATOR_SLOT_QUERY,

    ].join(',');

    return Array.from(this.$host.children).filter(($node) => !$node.matches(selectors));
  }

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

  $expander() {
    return (
      <div
        key="expander"
        class="expander"
        tabindex="0"
        role="button"
        aria-disabled="false"
        aria-label={this.expanderText}
        onClick={() => this.update(false, true)}
      >
        <slot name="expander">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </slot>
      </div>
    )
  }

  $wrapper(key) {
    return (
      <div key={key}>
        <slot name={key} />
      </div>
    )
  }

  bind() {

    this.observer = new MutationObserver(this.onChange);

    this.observer.observe(this.$host, { childList: true });
  }

  unbind() {
    this.observer?.disconnect();
  }

  update(force?: boolean, expand?: boolean) {

    const
      $children = this.$children,
      $nodes = [],
      rtl = this.isRTL,
      template = this.template();

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

      $child.setAttribute('slot', index.toString());

      if (start <= index && index < start + length) return;

      $nodes.push(this.$wrapper(index));
    });

    (start !== undefined) && $nodes.splice(start, 0, this.$expander());

    for (let i = $nodes.length - 1; i > 0; i--) {

      const $separator = (
        <div
          aria-hidden="true"
          key="separator"
          class={{ separator: true, rtl }}
          innerHTML={template}
        />
      )

      $nodes.splice(i, 0, $separator);
    }

    this.$nodes = $nodes;

    force && forceUpdate(this);
  }

  template() {

    const template = this.$host.querySelector(Constants.BREADCRUMB_SEPARATOR_SLOT_QUERY)?.cloneNode(true)['innerHTML'];

    const key = 'BREADCRUMB_SEPARATOR_TEMPLATE_' + Utils.toSnakeCase(this.separator)?.toUpperCase();

    const internal = Constants[key];

    const custom = internal ? undefined : this.separator;

    return template || this.config.slots.separator || internal || custom;
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
      <Host {...this.attributes}>
        {this.$nodes}
      </Host>
    )
  }
}
