import { EventEmitter } from '@htmlplus/element';
import { ScrollDetectorChangeEvent, ScrollDetectorReference } from './scroll-detector.types';
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
     * Specifies the reference of the scroll.
     */
    reference?: ScrollDetectorReference;
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical?: boolean;
    /**
     * Fires when the scroll starts changing.
     */
    plusChange: EventEmitter<ScrollDetectorChangeEvent>;
    offset?: number;
    get $reference(): Element;
    watcher(next: any): void;
    bind(): void;
    unbind(): void;
    onScroll(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
export interface ScrollDetectorJSX {
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * Specifies the reference of the scroll.
     */
    reference?: ScrollDetectorReference;
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
         * Specifies the reference of the scroll.
         */
        reference?: ScrollDetectorReference;
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
export type ScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;
