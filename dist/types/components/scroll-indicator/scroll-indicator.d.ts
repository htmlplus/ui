import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
import { ScrollIndicatorSource } from './scroll-indicator.types';
/**
 * @part indicator - Indicator element.
 */
export declare class ScrollIndicator {
    static TAG: string;
    static STYLES: string;
    /**
     * Disables the component function.
     */
    disabled?: boolean;
    /**
     * Specifies the source of the scroll.
     */
    source?: ScrollIndicatorSource;
    /**
     * Indicates which scroll (horizontal or vertical) to be used as its source.
     */
    vertical?: boolean;
    /**
     * When the children is scrolled this event trigger.
     */
    plusScroll: EventEmitter<number>;
    $indicator: HTMLElement;
    get $source(): Element | Document;
    get attributes(): {};
    get progress(): number;
    /**
     * Internal Methods
     */
    bind(): void;
    unbind(): void;
    /**
     * Watchers
     */
    watcher(next: any): void;
    /**
     * Events handler
     */
    onScroll(): void;
    /**
     * Lifecycles
     */
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface ScrollIndicatorJSX {
    /**
     * Disables the component function.
     */
    disabled?: boolean;
    /**
     * Specifies the source of the scroll.
     */
    source?: ScrollIndicatorSource;
    /**
     * When the children is scrolled this event trigger.
     */
    onPlusScroll?: (event: CustomEvent<number>) => void;
}
declare global {
    interface HTMLPlusScrollIndicatorElement extends HTMLElement {
        /**
         * Disables the component function.
         */
        disabled?: boolean;
        /**
         * Specifies the source of the scroll.
         */
        source?: ScrollIndicatorSource;
    }
    var HTMLPlusScrollIndicatorElement: {
        prototype: HTMLPlusScrollIndicatorElement;
        new (): HTMLPlusScrollIndicatorElement;
    };
    interface HTMLElementTagNameMap {
        "plus-scroll-indicator": HTMLPlusScrollIndicatorElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-scroll-indicator": ScrollIndicatorJSX & {
                [key: string]: any;
            };
        }
    }
}
