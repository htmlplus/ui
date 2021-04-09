import { Component, Element, Host, Prop, State, forceUpdate, h } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import * as Constants from './breadcrumb.constants';

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

  get $children() {
    return Array.from(this.$host.children).filter(($node) => !$node.matches('template[slot=separator]') && !$node.matches('[slot=more]'));
  }

  get attributes() {
    return {
      'aria-label': 'breadcrumb'
    }
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  get template() {

    const $separator = this.$host.querySelector('template[slot=separator]')?.cloneNode(true)['innerHTML'];

    // TODO: use snake case
    const internal = Constants['BREADCRUMB_SEPARATOR_TEMPLATE_' + this.separator?.toUpperCase().replace(/-/g, '_')];

    return $separator || internal || this.config.slots.separator;
  }

  /**
   * Internal Methods
   */

  $more() {
    return (
      <div
        key="more" // TODO: Maybe dynamic
        class="more"
        tabindex="0"
        role="button"
        aria-disabled="false"
        aria-label="Show path"
        onClick={() => this.update(false, true)}
      >
        <slot name="more">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </slot>
      </div>
    )
  }

  $separator() {

    const separator = this.$host.querySelector('template[slot=separator]')?.cloneNode(true)['innerHTML'];

    // TODO: use snake case
    const internal = Constants['BREADCRUMB_SEPARATOR_TEMPLATE_' + this.separator?.toUpperCase().replace(/-/g, '_')];

    const template = separator || internal || this.config.slots.separator;

    return (
      <div
        key="separator" // TODO: Maybe dynamic
        class={{ separator: true, rtl: this.isRTL }}
        innerHTML={template}
      />
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
      $nodes = [];

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

      $nodes.push(this.$wrapper(index));
    });

    (start !== undefined) && $nodes.splice(start, 0, this.$more());

    for (let i = $nodes.length - 1; i > 0; i--) $nodes.splice(i, 0, this.$separator());

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
      <Host {...this.attributes}>
        <div class="root">
          {this.$nodes}
        </div>
      </Host>
    )
  }
}
