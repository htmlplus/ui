import {
  Bind,
  Element,
  Property,
  Slots,
  State,
  query,
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Style } from '@/decorators';

@Element()
export class Field extends PlusCore {
  @Property()
  clearable?: boolean;

  @Property()
  for?: string;

  @Property()
  hint?: string;

  @Property()
  label?: string;

  @Property()
  loading?: boolean;

  // @Property()
  // placeholder?: string; 

  @Property({ reflect: true })
  get focused(): boolean {
    return !!this._focused;
  }

  @State()
  _focused?: boolean;

  @Slots()
  slots?: any;

  @State()
  tick?: number;

  $input?: HTMLElement;

  @Style()
  get style() {
    return {
      '--plus-field-start-offset': (this.$part('start')?.offsetWidth || 0) + 'px',
      '--plus-field-end-offset': (this.$part('end')?.offsetWidth || 0) + 'px',
    }
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

  @Bind()
  onFocusin() {
    this._focused = true;
  }

  @Bind()
  onFocusout() {
    this._focused = false;
  }

  @Bind()
  onSlotChange() {
    this.tick = Math.random();

    this.$input?.removeEventListener('focusin', this.onFocusin);
    this.$input?.removeEventListener('focusout', this.onFocusout);

    this.$input = this.$slot().assignedElements().at(0) as HTMLElement;

    this.$input?.addEventListener('focusin', this.onFocusin);
    this.$input?.addEventListener('focusout', this.onFocusout);
  }


  render() {
    return (
      <>
        {this.has('label') && (
          <label for={this.for} part="label">
            <slot name="label">{this.label}</slot>
          </label>
        )}
        <slot name="before" part="before" />
        <slot name="control" part="control">
          <div part="start">
            <slot
              name="start"
              onSlotChange={this.onSlotChange}
            />
          </div>
          <slot part="input" onSlotChange={this.onSlotChange} />
          <div part="end">
            <slot
              name="end"
              onSlotChange={this.onSlotChange}
            />
            <slot name="clearable">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </slot>
            <button onClick={() => this.$input?.showPicker?.()}>sssssss</button>
          </div>
        </slot>
        <slot name="after" part="after" />
        {this.has('hint') && (
          <slot name="hint" part="hint">
            {this.hint}
          </slot>
        )}
      </>
    );
  }
}
