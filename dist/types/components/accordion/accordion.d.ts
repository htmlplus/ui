import { EventEmitter } from '@htmlplus/element';
import { Animation2 } from '@app/services';
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
 */
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
    $host: HTMLElement;
    $body: HTMLElement;
    $header: HTMLElement;
    animate: Animation2;
    opened: boolean;
    hide(): Promise<void>;
    show(): Promise<void>;
    toggle(): Promise<void>;
    watcher(next: any, prev: any, name: any): void;
    bind(): void;
    unbind(): void;
    try(open: boolean, silent?: boolean): void;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
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
