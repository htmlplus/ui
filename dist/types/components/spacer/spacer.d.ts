import { PlusBase } from "../../core";
export declare class Spacer extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    grow?: number;
    get attributes(): {
        style: string;
    };
}
export interface SpacerJSX {
    /**
     * TODO
     */
    grow?: number;
}
declare global {
    interface HTMLPlusSpacerElement extends HTMLElement {
        /**
         * TODO
         */
        grow?: number;
    }
    var HTMLPlusSpacerElement: {
        prototype: HTMLPlusSpacerElement;
        new (): HTMLPlusSpacerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-spacer": HTMLPlusSpacerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-spacer": SpacerJSX & {
                [key: string]: any;
            };
        }
    }
}
export type SpacerElement = globalThis.HTMLPlusSpacerElement;
