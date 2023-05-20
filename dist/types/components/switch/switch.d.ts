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
    toggle(): void;
    onClick(event: any): void;
    onKeyDown(event: any): void;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
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
export type SwitchElement = globalThis.HTMLPlusSwitchElement;
