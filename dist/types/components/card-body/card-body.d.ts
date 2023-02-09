import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @development
 * @slot default - The default slot.
 */
export declare class CardBody {
    static TAG: string;
    static STYLES: string;
    render(): uhtml.Hole;
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
