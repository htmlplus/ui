import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { ScrollDetectorChangeEvent, ScrollDetectorReference } from './scroll-detector.types';
/**
 * @stable
 */
export declare class ScrollDetector extends PlusCore {
    /**
     * Disables the element functionality.
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
    initialize(): void;
    terminate(): void;
    onScroll(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface ScrollDetectorAttributes {
  /**
  * Disables the element functionality.
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
export interface ScrollDetectorEvents {
  /**
  * Fires when the scroll starts changing.
  */
  onPlusChange?: (event: CustomEvent<ScrollDetectorChangeEvent>) => void;
}
export interface ScrollDetectorMethods {}
export interface ScrollDetectorProperties {
  /**
  * Disables the element functionality.
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
export interface ScrollDetectorJSX extends ScrollDetectorEvents, ScrollDetectorProperties {}
declare global {
  interface HTMLPlusScrollDetectorElement extends HTMLElement, ScrollDetectorMethods, ScrollDetectorProperties {}
  var HTMLPlusScrollDetectorElement: {
    prototype: HTMLPlusScrollDetectorElement;
    new (): HTMLPlusScrollDetectorElement;
  };
  interface HTMLElementTagNameMap {
    "plus-scroll-detector": HTMLPlusScrollDetectorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": ScrollDetectorEvents & ScrollDetectorAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type ScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;