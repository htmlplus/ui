import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Property,
  Query,
  Slots,
} from '@htmlplus/element';

import { PlusForm } from '@/core';

import { InputType } from './input.types';

@Element()
export class Input extends PlusForm {
  @Property()
  clearable?: boolean;

  @Property()
  hint?: string;

  @Property()
  label?: string;

  @Property()
  placeholder?: string;

  @Property({ reflect: true })
  type?: InputType;

  @Property()
  value?: any = '';

  @Property()
  valueEvent?: string = 'change';

  @Event()
  plusChange!: EventEmitter<void>;

  @Slots()
  slots?: any;

  @Query('input')
  $input!: HTMLInputElement;

  get id() {
    if (!this.has('label')) return;
    return this.$host.id || Math.floor(Math.random() * 1000000).toString();
  }

  has(key: string) {
    key = key.replace(/-./g, (x) => x[1].toUpperCase());

    const has = !!this[key] || !!this.slots[key] || null;

    return has;
  }

  @Bind()
  onChange(event: any) {
    this.value = event.target.value;

    this.internals.setFormValue(this.value);

    this.plusChange();
  }

  @Bind()
  onClear() {
    this.value = '';

    this.internals.setFormValue(this.value);

    this.plusChange();
  }

  @Bind()
  onReset() {
    this.value = '';
  }

  render() {
    return (
      <>
        {this.has('label') && (
          <label for={this.id} part="label">
            <slot name="label">{this.label}</slot>
          </label>
        )}
        {this.has('before') && <slot name="before" part="before" />}
        <slot name="control" part="control">
          {this.has('start') && <slot name="start" part="start" />}
          <input
            id={this.id}
            part="input"
            disabled={this.disabled}
            placeholder={this.placeholder}
            readOnly={this.readOnly}
            required={this.required}
            type={this.type}
            value={this.value}
          />
          {this.has('clearable') && this.value && (
            <slot name="clearable" part="clearable" onClick={this.onClear}>
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
          )}
          {this.has('end') && <slot name="end" part="end" />}
        </slot>
        {this.has('after') && <slot name="after" part="after" />}
        {this.has('hint') && (
          <slot name="hint" part="hint">
            {this.hint}
          </slot>
        )}
      </>
    );
  }
}
