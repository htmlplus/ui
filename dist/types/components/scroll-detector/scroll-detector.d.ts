import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from "../../core";
import { ScrollDetectorChangeEvent, ScrollDetectorReference } from './scroll-detector.types';
/**
 * @stable
 */
export declare class ScrollDetector extends PlusCore {
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
    get $reference(): any;
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
    "disabled"?: boolean;
    /**
    * Specifies the reference of the scroll.
    */
    "reference"?: ScrollDetectorReference;
    /**
    * Indicates which scroll (horizontal or vertical) is to be used as the source.
    */
    "vertical"?: boolean;
    /**
    * Fires when the scroll starts changing.
    */
    "onPlusChange"?: (event: CustomEvent<ScrollDetectorChangeEvent>) => void;
}
export interface ScrollDetectorAttributeJSX {
    /**
    * Disables the component functionality.
    */
    "disabled"?: boolean;
    /**
    * Specifies the reference of the scroll.
    */
    "reference"?: ScrollDetectorReference;
    /**
    * Indicates which scroll (horizontal or vertical) is to be used as the source.
    */
    "vertical"?: boolean;
    /**
    * Fires when the scroll starts changing.
    */
    "onplus-change"?: (event: CustomEvent<ScrollDetectorChangeEvent>) => void;
}
declare global {
    interface HTMLPlusScrollDetectorElement extends HTMLElement {
        /**
        * Disables the component functionality.
        */
        "disabled"?: boolean;
        /**
        * Specifies the reference of the scroll.
        */
        "reference"?: ScrollDetectorReference;
        /**
        * Indicates which scroll (horizontal or vertical) is to be used as the source.
        */
        "vertical"?: boolean;
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
            "plus-scroll-detector": ScrollDetectorAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type ScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;
