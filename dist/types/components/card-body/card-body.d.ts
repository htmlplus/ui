import { PlusCore } from "../../core";
/**
 * @development
 * @slot default - The default slot.
 */
export declare class CardBody extends PlusCore {
    static TAG: string;
    static STYLES: string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface CardBodyJSX {
}
declare global {
    interface HTMLPlusCardBodyElement extends HTMLElement {
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
            "plus-card-body": CardBodyJSX & {
                [key: string]: any;
            };
        }
    }
}
export type CardBodyElement = globalThis.HTMLPlusCardBodyElement;
