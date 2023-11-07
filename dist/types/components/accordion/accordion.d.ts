import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from "../../core";
import { Animation2 } from "../../services";
/**
 * @part body          - The body element.
 * @part content       - The content element.
 * @part summary       - The summary element.
 * @part svg           - The svg element.
 * @slot default       - The default slot.
 * @slot icon          - The icon slot.
 * @slot icon-expand   - The expand icon slot.
 * @slot icon-collapse - The collapse icon slot.
 * @slot summary       - The summary slot.
 * @slot top           - The top slot.
 * @slot middle        - The middle slot.
 * @slot bottom        - The bottom slot.
 *
 * @stable
 */
export declare class Accordion extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * Control the component to expand or not.
     */
    open?: boolean;
    /**
     * The summary text displayed on the header.
     */
    summary?: string;
    /**
     * Fires when the component is about to collapse.
     * This event can be [canceled](TODO).
     */
    plusCollapse: EventEmitter<void>;
    /**
     * Fires after the component has collapsed.
     */
    plusCollapsed: EventEmitter<void>;
    /**
     * Fires when the component is about to expand.
     * This event can be [canceled](TODO).
     */
    plusExpand: EventEmitter<void>;
    /**
     * Fires after the component has expanded.
     */
    plusExpanded: EventEmitter<void>;
    $body: HTMLElement;
    $header: HTMLElement;
    animate: Animation2;
    opened: boolean;
    promise?: Promise<boolean>;
    /**
     * Collapses the component.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    collapse(): Promise<boolean>;
    /**
     * Expands the component.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    expand(): Promise<boolean>;
    /**
     * Toggles between `collapse` and `expand` state.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    toggle(): Promise<boolean>;
    watcher(next: any, prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    try(open: boolean, silent?: boolean): Promise<boolean>;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface AccordionJSX {
    /**
    * Disables the component functionality.
    */
    "disabled"?: boolean;
    /**
    * Control the component to expand or not.
    */
    "open"?: boolean;
    /**
    * The summary text displayed on the header.
    */
    "summary"?: string;
    /**
    * Fires when the component is about to collapse.
    * This event can be [canceled](TODO).
    */
    "onPlusCollapse"?: (event: CustomEvent<void>) => void;
    /**
    * Fires after the component has collapsed.
    */
    "onPlusCollapsed"?: (event: CustomEvent<void>) => void;
    /**
    * Fires when the component is about to expand.
    * This event can be [canceled](TODO).
    */
    "onPlusExpand"?: (event: CustomEvent<void>) => void;
    /**
    * Fires after the component has expanded.
    */
    "onPlusExpanded"?: (event: CustomEvent<void>) => void;
}
export interface AccordionAttributeJSX {
    /**
    * Disables the component functionality.
    */
    "disabled"?: boolean;
    /**
    * Control the component to expand or not.
    */
    "open"?: boolean;
    /**
    * The summary text displayed on the header.
    */
    "summary"?: string;
    /**
    * Fires when the component is about to collapse.
    * This event can be [canceled](TODO).
    */
    "onPlusCollapse"?: (event: CustomEvent<void>) => void;
    /**
    * Fires after the component has collapsed.
    */
    "onPlusCollapsed"?: (event: CustomEvent<void>) => void;
    /**
    * Fires when the component is about to expand.
    * This event can be [canceled](TODO).
    */
    "onPlusExpand"?: (event: CustomEvent<void>) => void;
    /**
    * Fires after the component has expanded.
    */
    "onPlusExpanded"?: (event: CustomEvent<void>) => void;
}
declare global {
    interface HTMLPlusAccordionElement extends HTMLElement {
        /**
        * Disables the component functionality.
        */
        "disabled"?: boolean;
        /**
        * Control the component to expand or not.
        */
        "open"?: boolean;
        /**
        * The summary text displayed on the header.
        */
        "summary"?: string;
    }
    var HTMLPlusAccordionElement: {
        prototype: HTMLPlusAccordionElement;
        new (): HTMLPlusAccordionElement;
    };
    interface HTMLElementTagNameMap {
        "plus-accordion": HTMLPlusAccordionElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-accordion": AccordionAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type AccordionElement = globalThis.HTMLPlusAccordionElement;
