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
    disabled: boolean;
    /**
     * The event fires only once.
     */
    once: boolean;
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
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * Fires When the browser detects that the element has been unveiled or obscured.
     */
    plusChange: EventEmitter<IntersectionObserverEntry>;
    isIntersecting: boolean;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusIntersectionAttributesMapper = {
  'rootMargin': 'root-margin';
};
export type PlusIntersectionOverridableKeys = 'preset';
export interface PlusIntersectionDisables {}
export interface PlusIntersectionOverrides {}
export type PlusIntersectionAttributes = Rename<PlusIntersectionProperties, PlusIntersectionAttributesMapper>;
export type PlusIntersectionAttributesOverridden = Rename<PlusIntersectionPropertiesOverridden, PlusIntersectionAttributesMapper>;
export type PlusIntersectionAttributesBase = Rename<PlusIntersectionPropertiesBase, PlusIntersectionAttributesMapper>;
export type PlusIntersectionEvents = Filter<PlusIntersectionEventsBase, PlusIntersectionDisables>;
export type PlusIntersectionEventsBase = ToEventHandlers<Pick<PlusIntersection, PlusIntersectionEventsKeys>>;
export type PlusIntersectionEventsKeys = 'plusChange';
export type PlusIntersectionEventsJSX = ToJSXEvent<PlusIntersectionEvents>;
export type PlusIntersectionEventsBaseJSX = ToJSXEvent<PlusIntersectionEventsBase>;
export type PlusIntersectionMethods = Filter<PlusIntersectionMethodsBase, PlusIntersectionDisables>;
export type PlusIntersectionMethodsBase = Pick<PlusIntersection, PlusIntersectionMethodsKeys>;
export type PlusIntersectionMethodsKeys = never;
export type PlusIntersectionProperties = Filter<PlusIntersectionPropertiesOverridden, PlusIntersectionDisables>;
export type PlusIntersectionPropertiesOverridden = Override<PlusIntersectionPropertiesBase, PlusIntersectionOverrides, PlusIntersectionOverridableKeys>;
export type PlusIntersectionPropertiesBase = Pick<PlusIntersection, PlusIntersectionPropertiesKeys>;
export type PlusIntersectionPropertiesKeys = 'disabled' | 'once' | 'root' | 'rootMargin' | 'threshold' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-intersection': {
      properties: PlusIntersectionPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-intersection": PlusIntersectionJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusIntersectionElement>, HTMLPlusIntersectionElement>, keyof PlusIntersectionJSX>;
    }
  }
}