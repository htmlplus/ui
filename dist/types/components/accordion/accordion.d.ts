import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
import { Animation2 } from '@app/services';
export declare class Accordion {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO.
     */
    disabled?: boolean;
    /**
     * TODO.
     */
    open?: boolean;
    /**
     * TODO.
     */
    summary?: string;
    /**
     * TODO.
     */
    plusCollapse: EventEmitter<void>;
    /**
     * TODO.
     */
    plusCollapsed: EventEmitter<void>;
    /**
     * TODO.
     */
    plusExpand: EventEmitter<void>;
    /**
     * TODO.
     */
    plusExpanded: EventEmitter<void>;
    $body: HTMLElement;
    $header: HTMLElement;
    get $host(): HTMLElement;
    animate: Animation2;
    opened: boolean;
    hide(): Promise<void>;
    show(): Promise<void>;
    toggle(): Promise<void>;
    bind(): void;
    unbind(): void;
    try(open: boolean, silent?: boolean): void;
    watcher(next: any, prev: any, name: any): void;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface AccordionJSX {
    /**
     * TODO.
     */
    disabled?: boolean;
    /**
     * TODO.
     */
    open?: boolean;
    /**
     * TODO.
     */
    summary?: string;
    /**
     * TODO.
     */
    onPlusCollapse?: (event: CustomEvent<void>) => void;
    /**
     * TODO.
     */
    onPlusCollapsed?: (event: CustomEvent<void>) => void;
    /**
     * TODO.
     */
    onPlusExpand?: (event: CustomEvent<void>) => void;
    /**
     * TODO.
     */
    onPlusExpanded?: (event: CustomEvent<void>) => void;
}
declare global {
    interface HTMLPlusAccordionElement extends HTMLElement {
        /**
         * TODO.
         */
        disabled?: boolean;
        /**
         * TODO.
         */
        open?: boolean;
        /**
         * TODO.
         */
        summary?: string;
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
            "plus-accordion": AccordionJSX & {
                [key: string]: any;
            };
        }
    }
}
export type AccordionElement = globalThis.HTMLPlusAccordionElement;
