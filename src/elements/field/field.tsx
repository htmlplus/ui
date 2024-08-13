import {
  Bind,
  Element,
  Property,
  Slots,
  State,
  query, classes
} from '@htmlplus/element';

import { PlusCore } from '@/core';

import { FIELD_ACTION_ICONS } from './field.constants';

@Element()
export class Field extends PlusCore {
  @Property({ reflect: true })
  dense?: boolean;

  @Property()
  error?: boolean | string;

  @Property()
  for?: string;

  @Property()
  hint?: string;

  @Property()
  icons?; // TODO

  @Property()
  label?: string;

  @Property()
  loading?: boolean;

  @Property()
  success?: boolean | string;

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

  get action() {
    if (!this.$input) return;

    const handler = this.$input['showPicker']?.bind(this.$input);

    if (!handler) return;

    const icon = Object.assign({}, FIELD_ACTION_ICONS, this.icons)[this.type];

    if (!icon) return;

    return { handler, icon }
  }

  get details() {
    for (const key of ['error', 'success']) {
      if (this.slots[key]) return key;
      if (this[key]?.length) return key;
      if (this[key]) break;
    }
    return this.has('hint') && 'hint';
  }

  get hasHeader() {
    return this.has('label');
  }

  get hasFooter() {
    return this.details;
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
            {/* {this.has('extra1') == true && (
              <div part="header">
                <label part="label" >
                  <slot name="label">{this.label}</slot>
                </label>
                <div>extra1</div>
              </div>
            )} */}
            {this.has('extra1') != true && (
              <label part="label" >
                <slot name="label">{this.label}</slot>
              </label>
            )}
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
          {(this.has('end') || this.action) && (
            <div part="end">
              <slot name="end" />
              <i
                dangerouslySetInnerHTML={{ __html: this.action.icon }}
                part="action"
                onClick={this.action.handler}
              />
            </div>
          )}
        </slot>
        {this.has('after') && (
          <slot name="after" part="after" />
        )}
        {this.hasFooter && (
          <>
            {/* {this.has('extra2') == true && (
              <div part="footer">
                <slot name={this.details} part={this.details}>
                  {this[this.details]}
                </slot>
                <div>extra2</div>
              </div>
            )} */}
            {this.has('extra2') != true && (
              <slot name={this.details} part={this.details}>
                {this[this.details]}
              </slot>
            )}
          </>
        )}
      </>
    )
  }
}
