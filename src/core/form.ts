import { Method, Property } from '@htmlplus/element';

import { PlusCore } from './core';

export abstract class PlusForm extends PlusCore {
  static formAssociated = true;

  internals!: ElementInternals;

  abstract value?: any;

  @Property({
    reflect: true,
    type: Boolean
  })
  disabled?: boolean;

  @Property({
    reflect: true,
    type: String
  })
  name?: string;

  @Property({
    attribute: 'readonly',
    reflect: true,
    type: Boolean
  })
  readOnly?: boolean;

  @Property({
    reflect: true,
    type: Boolean
  })
  required?: boolean;

  @Property()
  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  @Property()
  get validationMessage(): string {
    return this.internals.validationMessage;
  }

  @Property()
  get validity(): ValidityState {
    return this.internals.validity;
  }

  @Property()
  get willValidate(): boolean {
    return this.internals.willValidate;
  }

  @Method()
  checkValidity(): boolean {
    return this.internals.checkValidity();
  }

  @Method()
  reportValidity(): boolean {
    return this.internals.reportValidity();
  }

  @Method()
  setCustomValidity(error: string): void {
    this.internals.setValidity({ customError: true }, error);
  }

  constructedCallback() {
    this.internals = this.$host.attachInternals();
  }

  connectedCallback() {
    if (this.$host.tabIndex < 0) {
      this.$host.tabIndex = 0;
    }
  }
}
