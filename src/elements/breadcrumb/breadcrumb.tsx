import { Bind, Element, Property, QueryAll, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import * as CONSTANTS from './breadcrumb.constants';

/**
 * @stable
 *
 * @part expander  - The expander element.
 * @part item      - The breadcrumb elements.
 * @part separator - The separator elements.
 *
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 */
@Element()
export class Breadcrumb extends PlusCore {
  /**
   * TODO.
   */
  @Property({ reflect: true })
  block?: boolean;

  /**
   * Specifies the label for the expander button.
   */
  @Property()
  expanderText?: string = 'Show path';

  /**
   * Specifies the position of the expander button.
   * The expander button is displayed when the number of items reached the maximum limit.
   */
  @Property()
  offset?: number = 1;

  /**
   * Specifies the Maximum number of items that are allowed to be displayed.
   */
  @Property()
  max?: number;

  /**
   * Specifies the separator between items.
   */
  @Property()
  separator?: string;

  @State()
  expand: boolean = false;

  observer: MutationObserver = new MutationObserver(this.forceUpdate);

  @QueryAll('[part=separator]')
  $separators!: HTMLElement[];

  get $children() {
    return Array.from(this.$host.children).filter(($node) => {
      return !$node.matches(
        [CONSTANTS.BREADCRUMB_EXPANDER_QUERY, CONSTANTS.BREADCRUMB_SEPARATOR_QUERY].join(',')
      );
    });
  }

  get items() {
    const $children = this.$children;

    const items = [];

    const { start, length } = (() => {
      if (this.expand) return {};

      if (typeof this.max !== 'number') return {};

      if ($children.length <= this.max) return {};

      let start, length;

      length = $children.length > this.max ? $children.length - this.max : $children.length;

      const mod = $children.length - length;

      start = this.offset;

      if (start >= 0) {
        start = $children.length < length + start ? mod : start;
      } else {
        start = mod + start + 1;
        start = start < 0 ? 0 : start;
      }

      return { start, length };
    })() as any; // TODO

    $children.forEach(($child, index) => {
      $child.setAttribute('slot', index.toString());

      if (start <= index && index < start + length) return;

      items.push({
        type: 'item',
        key: `${index}`,
        slot: `${index}`
      });
    });

    if (start !== undefined) {
      items.splice(start, 0, {
        type: 'expander',
        key: 'expander'
      });
    }

    if (this.template) {
      for (let i = items.length - 1; i > 0; i--) {
        items.splice(i, 0, {
          type: 'separator',
          key: `expander-${i}`
        });
      }
    }

    return items;
  }

  get template() {
    const $node = this.$host.querySelector(
      CONSTANTS.BREADCRUMB_SEPARATOR_QUERY
    ) as HTMLTemplateElement;

    const $clone = $node?.cloneNode(true) as HTMLElement;

    $clone?.removeAttribute('slot');

    return $clone?.outerHTML || this.separator;
  }

  initialize() {
    this.observer.observe(this.$host, { childList: true });
  }

  terminate() {
    this.observer.disconnect();
  }

  connectedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    const template = this.template;
    return (
      <host aria-label="breadcrumb">
        {this.items.map((item) => {
          switch (item.type) {
            case 'item': {
              return (
                <div key={item.key} part="item">
                  <slot name={item.slot} />
                </div>
              );
            }
            case 'expander': {
              return (
                <div
                  aria-disabled="false"
                  aria-label={this.expanderText}
                  key={item.key}
                  part="expander"
                  role="button"
                  tabIndex={0}
                  onClick={() => (this.expand = true)}
                  onKeyDown={(event) => event.key.match(/Enter| /) && (this.expand = true)}
                >
                  <slot name="expander">
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </slot>
                </div>
              );
            }
            case 'separator': {
              return (
                <div
                  key={item.key}
                  aria-hidden="true"
                  part="separator"
                  dangerouslySetInnerHTML={{ __html: template }}
                />
              );
            }
          }
        })}
      </host>
    );
  }
}
