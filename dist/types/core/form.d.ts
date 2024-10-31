import { PlusCore } from './core';
export declare abstract class PlusForm extends PlusCore {
    static delegatesFocus: boolean;
    static formAssociated: boolean;
    internals: ElementInternals;
    abstract value?: any;
    abstract onReset(): void;
    disabled?: boolean;
    name?: string;
    readOnly?: boolean;
    required?: boolean;
    get form(): HTMLFormElement | null;
    get validationMessage(): string;
    get validity(): ValidityState;
    get willValidate(): boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    valueWatcher(): void;
    constructedCallback(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
