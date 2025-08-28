import { Method, Property, Watch, off, on } from '@htmlplus/element';

import { PlusCore } from './core';

export abstract class PlusForm extends PlusCore {
	// TODO
	static delegatesFocus = true;

	static formAssociated = true;

	internals!: ElementInternals;

	// biome-ignore lint: TODO
	abstract value?: any;

	// TODO
	abstract onReset(): void;

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

	@Watch('value', true)
	valueWatcher() {
		this.internals.setFormValue(this.value);
	}

	constructedCallback() {
		this.internals = this.$host.attachInternals();
	}

	connectedCallback() {
		// TODO
		if (this.internals.form) {
			on(this.internals.form, 'reset', this.onReset);
		}

		// TODO
		// if (this.$host.tabIndex < 0) {
		//   this.$host.tabIndex = 0;
		// }
	}

	disconnectedCallback() {
		// TODO
		if (this.internals.form) {
			off(this.internals.form, 'reset', this.onReset);
		}
	}
}
