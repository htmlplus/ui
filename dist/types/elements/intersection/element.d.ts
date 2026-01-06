import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * The [Intersection Observer API](https://mdn.io/intersection-observer-api) provides a way to
 * asynchronously observe changes in the intersection of a target element with an ancestor
 * element or with a top-level document's [viewport](https://mdn.io/glossary-viewport).
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, lazy-image
 */
export declare class PlusIntersection extends PlusCore {
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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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
    watcher(next: unknown, _prev: unknown, name: string): void;
    initialize(): void;
    terminate(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusIntersectionAttributesBase {
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
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusIntersectionVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusIntersectionProperties, "overrides">>;
}
export interface PlusIntersectionAttributesDisables {}
export type PlusIntersectionAttributes = Filter<PlusIntersectionAttributesBase, PlusIntersectionAttributesDisables>;
export interface PlusIntersectionEventsBase {
  /**
  * Fires When the browser detects that the element has been unveiled or obscured.
  */
  onPlusChange?: (event: CustomEvent<IntersectionObserverEntry>) => void;
}
export interface PlusIntersectionEventsDisables {}
export type PlusIntersectionEvents = Filter<PlusIntersectionEventsBase, PlusIntersectionEventsDisables>;
export interface PlusIntersectionMethodsBase {}
export interface PlusIntersectionMethodsDisables {}
export type PlusIntersectionMethods = Filter<PlusIntersectionMethodsBase, PlusIntersectionMethodsDisables>;
export interface PlusIntersectionPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<never, PlusIntersectionVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusIntersectionProperties, "overrides">>;
}
export interface PlusIntersectionPropertiesDisables {}
export type PlusIntersectionProperties = Filter<PlusIntersectionPropertiesBase, PlusIntersectionPropertiesDisables>;
export type PlusIntersectionAttributesAndEvents = PlusIntersectionAttributes & PlusIntersectionEvents;
export interface PlusIntersectionJSX extends PlusIntersectionEvents, PlusIntersectionProperties {}
declare global {
  interface HTMLPlusIntersectionElement extends HTMLElement, PlusIntersectionMethods, PlusIntersectionProperties {}
  var HTMLPlusIntersectionElement: {
    prototype: HTMLPlusIntersectionElement;
    new (): HTMLPlusIntersectionElement;
  };
  interface HTMLElementTagNameMap {
    "plus-intersection": HTMLPlusIntersectionElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-intersection": PlusIntersectionAttributes & PlusIntersectionEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIntersectionElement>, keyof PlusIntersectionAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIntersectionElement>, keyof PlusIntersectionAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIntersectionElement>, keyof PlusIntersectionAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIntersectionElement>, keyof PlusIntersectionAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIntersectionElement>, keyof PlusIntersectionAttributesAndEvents>;
    }
  }
}
export type PlusIntersectionElement = globalThis.HTMLPlusIntersectionElement;
export interface PlusIntersectionVariantOverrides {}