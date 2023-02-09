import { EventEmitter } from '@htmlplus/element';
import { ScrollDetectorChangeEvent, ScrollDetectorSource } from './scroll-detector.types';
/**
 * @stable
 */
export declare class ScrollDetector {
    static TAG: string;
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * Specifies the source of the scroll.
     */
    source?: ScrollDetectorSource;
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical?: boolean;
    /**
     * Fires when the scroll starts changing.
     */
    plusChange: EventEmitter<ScrollDetectorChangeEvent>;
    get $source(): Element;
    offset?: number;
    bind(): void;
    unbind(): void;
    watcher(next: any): void;
    onScroll(): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
export interface ScrollDetectorJSX {
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * Specifies the source of the scroll.
     */
    source?: ScrollDetectorSource;
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical?: boolean;
    /**
     * Fires when the scroll starts changing.
     */
    onPlusChange?: (event: CustomEvent<ScrollDetectorChangeEvent>) => void;
}
declare global {
    interface HTMLPlusScrollDetectorElement extends HTMLElement {
        /**
         * Disables the component functionality.
         */
        disabled?: boolean;
        /**
         * Specifies the source of the scroll.
         */
        source?: ScrollDetectorSource;
        /**
         * Indicates which scroll (horizontal or vertical) is to be used as the source.
         */
        vertical?: boolean;
    }
    var HTMLPlusScrollDetectorElement: {
        prototype: HTMLPlusScrollDetectorElement;
        new (): HTMLPlusScrollDetectorElement;
    };
    interface HTMLElementTagNameMap {
        "plus-scroll-detector": HTMLPlusScrollDetectorElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-scroll-detector": ScrollDetectorJSX & {
                [key: string]: any;
            };
        }
    }
}