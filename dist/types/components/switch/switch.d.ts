import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
export declare class Switch {
    static TAG: string;
    static STYLES: string;
    /**
     * Puts the switch in checked state.
     * @model
     */
    checked?: boolean;
    /**
     * Disables the switch.
     */
    disabled?: boolean;
    /**
     * When the switch state is changed this event triggers.
     * @model
     */
    plusChange: EventEmitter<void>;
    get attributes(): {
        'aria-checked': string;
        'aria-disabled': string;
        role: string;
        tabindex: string;
        onClick: (event: any) => void;
        onKeyDown: (event: any) => void;
    };
    toggle(): void;
    onClick(event: any): void;
    onKeyDown(event: any): void;
    render(): uhtml.Hole;
}
export interface SwitchJSX {
    /**
     * Puts the switch in checked state.
     * @model
     */
    checked?: boolean;
    /**
     * Disables the switch.
     */
    disabled?: boolean;
    /**
     * When the switch state is changed this event triggers.
     * @model
     */
    onPlusChange?: (event: CustomEvent<void>) => void;
}
declare global {
    interface HTMLPlusSwitchElement extends HTMLElement {
        /**
         * Puts the switch in checked state.
         * @model
         */
        checked?: boolean;
        /**
         * Disables the switch.
         */
        disabled?: boolean;
    }
    var HTMLPlusSwitchElement: {
        prototype: HTMLPlusSwitchElement;
        new (): HTMLPlusSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "plus-switch": HTMLPlusSwitchElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-switch": SwitchJSX & {
                [key: string]: any;
            };
        }
    }
}