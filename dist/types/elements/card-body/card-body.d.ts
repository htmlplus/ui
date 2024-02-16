import { PlusCore } from "../../core";
/**
 * @development
 * @slot default - The default slot.
 */
export declare class CardBody extends PlusCore {
    static TAG: string;
    static STYLES: string;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface CardBodyAttributes {
}
export interface CardBodyEvents {
}
export interface CardBodyMethods {
}
export interface CardBodyProperties {
}
export interface CardBodyJSX extends CardBodyEvents, CardBodyProperties {
}
declare global {
    interface HTMLPlusCardBodyElement extends HTMLElement, CardBodyMethods, CardBodyProperties {
    }
    var HTMLPlusCardBodyElement: {
        prototype: HTMLPlusCardBodyElement;
        new (): HTMLPlusCardBodyElement;
    };
    interface HTMLElementTagNameMap {
        "plus-card-body": HTMLPlusCardBodyElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-card-body": CardBodyEvents & CardBodyAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type CardBodyElement = globalThis.HTMLPlusCardBodyElement;
