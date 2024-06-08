import {
  Element,
  Listen,
  Property,
  Slots,
  State,
} from '@htmlplus/element';

import { PlusCore } from '@/core';

@Element()
export class InputField extends PlusCore {
  @Property()
  clearable?: boolean;

  @Property()
  for?: string;

  @Property()
  hint?: string;

  @Property()
  label?: string;

  @Property({ reflect: true })
  get focused(): boolean {
    return !!this._focused;
  }

  @State()
  _focused?: boolean;

  @Slots()
  slots?: any;

  has(key: string) {
    key = key.replace(/-./g, (x) => x[1].toUpperCase());

    const has = !!this[key] || !!this.slots[key] || null;

    return has;
  }

  @Listen('focusin')
  onFocusin() {
    this._focused = true;
  }

  @Listen('focusout')
  onFocusout() {
    this._focused = false;
  }

  render() {
    return (
      <>
        {this.has('label') && (
          <label for={this.for} part="label">
            <slot name="label">{this.label}</slot>
          </label>
        )}
        {this.has('before') && <slot name="before" part="before" />}
        <slot name="control" part="control">
          {this.has('start') && <slot name="start" part="start" />}
          <slot part="input" />
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
