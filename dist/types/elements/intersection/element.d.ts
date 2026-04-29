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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusIntersectionAttributesMapper = {
  'disabled': 'disabled';
  'once': 'once';
  'root': 'root';
  'rootMargin': 'root-margin';
  'threshold': 'threshold';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusIntersectionOverridableKeys = 'variant';
export interface PlusIntersectionDisables {}
export interface PlusIntersectionOverrides {}
export type PlusIntersectionAttributes = Filter<PlusIntersectionAttributesOverridden, PlusIntersectionDisables, PlusIntersectionAttributesMapper>;
export type PlusIntersectionAttributesOverridden = Override<PlusIntersectionAttributesBase, PlusIntersectionOverrides, PlusIntersectionOverridableKeys, PlusIntersectionAttributesMapper>;
export type PlusIntersectionAttributesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusIntersectionProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusIntersectionEvents = Filter<PlusIntersectionEventsBase, PlusIntersectionDisables>;
export type PlusIntersectionEventsBase = {
  /**
  * Fires When the browser detects that the element has been unveiled or obscured.
  */
  plusChange?: (event: CustomEvent<IntersectionObserverEntry>) => void;
};
export type PlusIntersectionEventsJSX = Filter<PlusIntersectionEventsBaseJSX, PlusIntersectionDisables, {
  plusChange: 'onPlusChange';
}>;
export type PlusIntersectionEventsBaseJSX = {
  /**
  * Fires When the browser detects that the element has been unveiled or obscured.
  */
  onPlusChange?: (event: CustomEvent<IntersectionObserverEntry>) => void;
};
export type PlusIntersectionMethods = Filter<PlusIntersectionMethodsBase, PlusIntersectionDisables>;
export type PlusIntersectionMethodsBase = {};
export type PlusIntersectionProperties = Filter<PlusIntersectionPropertiesOverridden, PlusIntersectionDisables>;
export type PlusIntersectionPropertiesOverridden = Override<PlusIntersectionPropertiesBase, PlusIntersectionOverrides, PlusIntersectionOverridableKeys>;
export type PlusIntersectionPropertiesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusIntersectionProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-intersection': {
      properties: PlusIntersectionPropertiesOverridden;
    };
  }
}
export type PlusIntersectionElement = globalThis.HTMLPlusIntersectionElement;
export type PlusIntersectionJSX = PlusIntersectionAttributes & PlusIntersectionEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-intersection": PlusIntersectionJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusIntersectionElement>, HTMLPlusIntersectionElement>, keyof PlusIntersectionJSX>;
    }
  }
}