import { PlusCore } from "../../core";
/**
 * @part expander  - The expander element.
 * @part item      - The breadcrumb elements.
 * @part separator - The separator elements.
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 */
export declare class Breadcrumb extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the label for the expander button.
     */
    expanderText?: string;
    /**
     * Specifies the position of the expander button.
     * The expander button is displayed when the number of items reached the maximum limit.
     */
    offset?: number;
    /**
     * Specifies the Maximum number of items that are allowed to be displayed.
     */
    max?: number;
    /**
     * Specifies the separator between items.
     */
    separator?: string;
    expand: boolean;
    observer: MutationObserver;
    $separators: HTMLElement[];
    get $children(): Element[];
    get items(): any[];
    get template(): string;
    bind(): void;
    unbind(): void;
    onChange(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updatedCallback(): void;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface BreadcrumbAttributes {
    /**
    * Specifies the label for the expander button.
    */
    "expander-text"?: string;
    /**
    * Specifies the position of the expander button.
    * The expander button is displayed when the number of items reached the maximum limit.
    */
    "offset"?: number;
    /**
    * Specifies the Maximum number of items that are allowed to be displayed.
    */
    "max"?: number;
    /**
    * Specifies the separator between items.
    */
    "separator"?: string;
}
export interface BreadcrumbEvents {
}
export interface BreadcrumbMethods {
}
export interface BreadcrumbProperties {
    /**
    * Specifies the label for the expander button.
    */
    expanderText?: string;
    /**
    * Specifies the position of the expander button.
    * The expander button is displayed when the number of items reached the maximum limit.
    */
    offset?: number;
    /**
    * Specifies the Maximum number of items that are allowed to be displayed.
    */
    max?: number;
    /**
    * Specifies the separator between items.
    */
    separator?: string;
}
export interface BreadcrumbJSX extends BreadcrumbEvents, BreadcrumbProperties {
}
declare global {
    interface HTMLPlusBreadcrumbElement extends HTMLElement, BreadcrumbMethods, BreadcrumbProperties {
    }
    var HTMLPlusBreadcrumbElement: {
        prototype: HTMLPlusBreadcrumbElement;
        new (): HTMLPlusBreadcrumbElement;
    };
    interface HTMLElementTagNameMap {
        "plus-breadcrumb": HTMLPlusBreadcrumbElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-breadcrumb": BreadcrumbEvents & BreadcrumbAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type BreadcrumbElement = globalThis.HTMLPlusBreadcrumbElement;
