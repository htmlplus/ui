import {
  Bind,
  Element,
  Property,
  Slots,
  State,
  query, classes
} from '@htmlplus/element';

import { PlusCore } from '@/core';

const ca = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
  </svg>
`;

const t = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
  </svg>
`;

const i = {
  'date': ca,
  'datetime-local': ca,
  'month': ca,
  'week': ca,
  'time': t,
  'select': '',
}

const actions = {
  'date': 'showPicker',
  'datetime-local': 'showPicker',
  'month': 'showPicker',
  'week': 'showPicker',
  'time': 'showPicker',
  'select': 'showPicker',
}
@Element()
export class Field extends PlusCore {
  @Property()
  error?: boolean | string;

  @Property()
  success?: boolean | string;

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

  @Property({ reflect: true })
  get focused(): boolean {
    return !!this.focusin;
  }

  @Property({ reflect: true })
  get state(): undefined | 'valid' | 'invalid' {
    if (this.has('error')) return 'invalid';
    if (this.has('success')) return 'valid';
  }

  @State()
  focusin?: boolean;

  @State()
  tick?: number;

  @Slots()
  slots?: any;

  $input?: HTMLElement;

  observer?: MutationObserver;

  get action() {
    if (!this.$input) return;

    const action = actions[this.type];

    if (!action) return;

    const handler = this.$input[action]?.bind(this.$input);

    if (!handler) return;

    const icon = Object.assign({}, i, this.icons)[this.type];

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

  get type() {
    if (this.$input instanceof HTMLInputElement)
      return this.$input.type;
    return this.$input?.nodeName.toLowerCase();
  }

  get xxx() {
    const children = Array.from(this.$host.children);

    const before = children
      .map((child, index) => child.getAttribute('slot') == 'before' ? index + 1 : 0)
      .filter((index) => !!index);

    const after = children
      .map((child, index) => child.getAttribute('slot') == 'after' ? index + 1 : 0)
      .filter((index) => !!index);

    const all = [...before.slice(1), ...after.slice(0, -1)];

    return all.map((item) => `:nth-child(${item})`).join(',');
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
  onFocusin() {
    this.focusin = true;
  }

  @Bind()
  onFocusout() {
    this.focusin = false;
  }

  @Bind()
  onInputChange() {
    // TODO
    this.refresh();

    this.$input?.removeEventListener('focusin', this.onFocusin);
    this.$input?.removeEventListener('focusout', this.onFocusout);

    this.$input = this.$slot().assignedElements().at(0) as HTMLElement;

    this.$input?.addEventListener('focusin', this.onFocusin);
    this.$input?.addEventListener('focusout', this.onFocusout);
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
