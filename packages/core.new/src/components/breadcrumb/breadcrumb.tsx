import { Bind, Component, Element, GlobalConfig, Host, IsRTL, Property, State, forceUpdate } from '@app/decorators';
import * as Constants from './breadcrumb.constants';

/**
 * @part expander  - Expander element.
 * @part item      - Item element.
 * @part separator - Separator element.
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 */
@Component()
export class Breadcrumb {

  /**
   * For localization purposes, you can use the provided translations.
   */
  @Property()
  expanderText?: string = 'Show path';

  /**
   * The expander button is displayed when the number of the items reached the maximum limit. 
   * The offset property specifies the position of the expander button.
   */
  @Property()
  offset?: number = 1;

  /**
   * Specifies Maximum items that is allowed to be displayed.
   */
  @Property()
  max?: number;

  /**
   * You can use HTML elements, Custom separator, or SVG icon.
   */
  @Property({ reflect: true })
  separator?: string;

  @GlobalConfig('breadcrumb', {
    expanderText: 'Show path',
    offset: 1,
  })
  config?;

  @IsRTL()
  isRTL?: boolean;

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

  /**
   * Internal Methods
   */

  $expander() {
    return (
      <div
        aria-disabled="false"
        aria-label={this.expanderText}
        class="expander"
        key="expander"
        part="expander"
        role="button"
        tabindex="0"
        onClick={() => this.update(false, true)}
        onKeyDown={(event) => event.key.match(/Enter| /) && this.update(false, true)}
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
      <div key={key} part="item">
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

      if (expand) return {};

      if (typeof this.max !== 'number') return {};

      if ($children.length <= this.max) return {};

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
          class={{ separator: true, rtl }}
          innerHTML={template}
          key="separator"
          part="separator"
        />
      )

      $nodes.splice(i, 0, $separator);
    }

    this.$nodes = $nodes;

    force && forceUpdate(this);
  }

  template() {

    const $node = this.$host.querySelector(Constants.BREADCRUMB_SEPARATOR_SLOT_QUERY);

    const $clone = $node?.cloneNode(true) as HTMLElement;

    $clone?.removeAttribute('slot');

    const template = $clone?.outerHTML;

    return template || this.config.slots.separator || this.separator;
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

  @Bind()
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
        <div class="container">
          {this.$nodes}
        </div>
      </Host>
    )
  }
}
