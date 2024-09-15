import {
  Bind,
  Element,
  Property,
  Slots,
  State,
  classes,
  query,
} from '@htmlplus/element';

import { PlusCore } from '@/core';

import { FieldSize } from './field.types';

@Element()
export class Field extends PlusCore {
  @Property({ reflect: true })
  dense?: boolean;

  @Property()
  down?: string;

  @Property()
  error?: boolean | string;

  @Property()
  for?: string;

  @Property()
  hint?: string;

  @Property()
  label?: string;

  @Property()
  loading?: boolean;

  @Property({ reflect: true })
  plain?: boolean;

  @Property({ reflect: true })
  size?: FieldSize = 'md';

  @Property()
  success?: boolean | string;

  @Property()
  up?: string;

  @Property({ reflect: true })
  get state() {
    return [
      ['error', 'invalid'],
      ['success', 'valid']
    ]
      ?.find(([key]) => this.has(key))
      ?.pop();
  }

  @State()
  tick?: number;

  @Slots()
  slots?: any;

  $input?: HTMLElement;

  observer?: MutationObserver;

  get details() {
    if (this.has('error')) return 'details error';
    if (this.has('success')) return 'details success';
    return 'details hint';
  }

  get hasHeader() {
    return this.has('label') || this.has('up');
  }

  get hasFooter() {
    return this.has('error') || this.has('success') || this.has('hint') || this.has('down');
  }

  get offset() {
    return {
      start: `${this.$part('start')?.offsetWidth || 0}px`,
      end: `${this.$part('end')?.offsetWidth || 0}px`,
    }
  }

  get tiles() {
    const children = Array.from(this.$host.children);

    const before = children
      .map((child, index) => child.getAttribute('slot') == 'before' ? index + 1 : 0)
      .filter((index) => !!index);

    const after = children
      .map((child, index) => child.getAttribute('slot') == 'after' ? index + 1 : 0)
      .filter((index) => !!index);

    const result = [...before.slice(1), ...after.slice(0, -1)]
      .map((item) => `:nth-child(${item})`)
      .join(',');

    return result;
  }

  get type() {
    if (this.$input instanceof HTMLInputElement)
      return this.$input.type;
    return this.$input?.nodeName.toLowerCase();
  }

  $part(key: string) {
    return query(this, `[part=${key}]`) as HTMLElement;
  }

  $slot(key?: string) {
    if (key) {
      return query(this, `slot[name=${key}]`) as HTMLSlotElement;
    } else {
      return query(this, 'slot:not([name])') as HTMLSlotElement;
    }
  }

  has(key: string) {
    key = key.replace(/-./g, (x) => x[1].toUpperCase());

    const has = !!this[key] || !!this.slots[key] || null;

    return has;
  }

  refresh() {
    this.tick = Math.random()
  }

  @Bind()
  onInputChange() {
    // TODO
    this.refresh();

    this.$input = this.$slot().assignedElements().at(0) as HTMLElement;
  }

  connectedCallback() {
    this.observer = new MutationObserver(this.refresh);
  }

  loadedCallback() {
    this.observer?.observe(this.$host, { childList: true });
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  render() {
    return (
      <>
        {this.hasHeader && (
          <>
            {this.has('up') ?
              (
                <div part="header">
                  <label part="label" >
                    <slot name="label">{this.label}</slot>
                  </label>
                  <slot name="up" part="up">{this.up}</slot>
                </div>
              )
              :
              (
                <label part="label" >
                  <slot name="label">{this.label}</slot>
                </label>
              )
            }
          </>
        )}
        {this.has('before') && (
          <slot name="before" part="before" />
        )}
        <slot
          name="control"
          part="control"
          className={classes(['before', 'after'].filter(this.has.bind(this)))}
        >
          {this.has('start') && (
            <div part="start">
              <slot name="start" />
            </div>
          )}
          <slot part="input" onSlotChange={this.onInputChange} />
          {this.has('end') && (
            <div part="end">
              <slot name="end" />
            </div>
          )}
        </slot>
        {this.has('after') && (
          <slot name="after" part="after" />
        )}
        {this.hasFooter && (
          <>
            {this.has('down') ?
              (
                <div part="footer">
                  <slot name={this.details} part={this.details}>
                    {this[this.details]}
                  </slot>
                  <slot name="down" part="down">{this.down}</slot>
                </div>
              )
              :
              (
                <slot name={this.details} part={this.details}>
                  {this[this.details]}
                </slot>
              )
            }
          </>
        )}
      </>
    )
  }
}
