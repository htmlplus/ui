import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class Intersection extends PlusCore {
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * The event fires only once.
     */
    once?: boolean;
    /**
     * The element that is used as the viewport for checking visibility of the target. Must be the
     * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
     */
    root?: Element;
    /**
     * Margin around the root. Can have values similar to the CSS
     * [margin](https://mdn.io/margin)
     * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
     * percentages. This set of values serves to grow or shrink each side of the root element's
     * bounding box before computing intersections. Defaults to all zeros.
     */
    rootMargin?: string;
    /**
     * Either a single number or an array of numbers which indicate at what percentage of the
     * target's visibility the observer's callback should be executed. If you only want to detect
     * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
     * run every time visibility passes another 25%, you would specify the array
     * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
     * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
     * every pixel is visible.
     */
    threshold?: number | number[];
    /**
     * Fires When the browser detects that the element has been unveiled or obscured.
     */
    plusChange: EventEmitter<IntersectionObserverEntry>;
    isIntersecting?: boolean;
    observer?: IntersectionObserver;
    get disconnected(): boolean;
    get options(): {
        root: Element;
        rootMargin: string;
        threshold: number | number[];
    };
    watcher(next: any, prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface IntersectionAttributes {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * The event fires only once.
  */
  "once"?: boolean;
  /**
  * The element that is used as the viewport for checking visibility of the target. Must be the
  * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
  */
  "root"?: Element;
  /**
  * Margin around the root. Can have values similar to the CSS
  * [margin](https://mdn.io/margin)
  * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
  * percentages. This set of values serves to grow or shrink each side of the root element's
  * bounding box before computing intersections. Defaults to all zeros.
  */
  "root-margin"?: string;
  /**
  * Either a single number or an array of numbers which indicate at what percentage of the
  * target's visibility the observer's callback should be executed. If you only want to detect
  * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
  * run every time visibility passes another 25%, you would specify the array
  * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
  * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
  * every pixel is visible.
  */
  "threshold"?: number | number[];
}
export interface IntersectionEvents {
  /**
  * Fires When the browser detects that the element has been unveiled or obscured.
  */
  onPlusChange?: (event: CustomEvent<IntersectionObserverEntry>) => void;
}
export interface IntersectionMethods {}
export interface IntersectionProperties {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * The event fires only once.
  */
  once?: boolean;
  /**
  * The element that is used as the viewport for checking visibility of the target. Must be the
  * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
  */
  root?: Element;
  /**
  * Margin around the root. Can have values similar to the CSS
  * [margin](https://mdn.io/margin)
  * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
  * percentages. This set of values serves to grow or shrink each side of the root element's
  * bounding box before computing intersections. Defaults to all zeros.
  */
  rootMargin?: string;
  /**
  * Either a single number or an array of numbers which indicate at what percentage of the
  * target's visibility the observer's callback should be executed. If you only want to detect
  * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
  * run every time visibility passes another 25%, you would specify the array
  * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
  * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
  * every pixel is visible.
  */
  threshold?: number | number[];
}
export interface IntersectionJSX extends IntersectionEvents, IntersectionProperties {}
declare global {
  interface HTMLPlusIntersectionElement extends HTMLElement, IntersectionMethods, IntersectionProperties {}
  var HTMLPlusIntersectionElement: {
    prototype: HTMLPlusIntersectionElement;
    new (): HTMLPlusIntersectionElement;
  };
  interface HTMLElementTagNameMap {
    "plus-intersection": HTMLPlusIntersectionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": IntersectionEvents & IntersectionAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type IntersectionElement = globalThis.HTMLPlusIntersectionElement;