import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { ScrollDetectorChangeEvent, ScrollDetectorReference } from './scroll-detector.types';
/**
 * Detects scroll event from an element.
 *
 * @stable
 *
 * @examples default, scroll-indicator
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
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * Fires when the scroll starts changing.
     */
    plusChange: EventEmitter<ScrollDetectorChangeEvent>;
    offset?: number;
    get $reference(): Document | Element;
    watcher(next: any): void;
    initialize(): void;
    terminate(): void;
    onScroll(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface ScrollDetectorAttributesBase {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Specifies the reference of the scroll.
  */
  "reference"?: ScrollDetectorReference;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, ScrollDetectorVariantOverrides>;
  /**
  * Indicates which scroll (horizontal or vertical) is to be used as the source.
  */
  "vertical"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<ScrollDetectorProperties, "overrides">>;
}
export interface ScrollDetectorAttributesDisables {}
export type ScrollDetectorAttributes = Filter<ScrollDetectorAttributesBase, ScrollDetectorAttributesDisables>;
export interface ScrollDetectorEventsBase {
  /**
  * Fires when the scroll starts changing.
  */
  onPlusChange?: (event: CustomEvent<ScrollDetectorChangeEvent>) => void;
}
export interface ScrollDetectorEventsDisables {}
export type ScrollDetectorEvents = Filter<ScrollDetectorEventsBase, ScrollDetectorEventsDisables>;
export interface ScrollDetectorMethodsBase {}
export interface ScrollDetectorMethodsDisables {}
export type ScrollDetectorMethods = Filter<ScrollDetectorMethodsBase, ScrollDetectorMethodsDisables>;
export interface ScrollDetectorPropertiesBase {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Specifies the reference of the scroll.
  */
  reference?: ScrollDetectorReference;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, ScrollDetectorVariantOverrides>;
  /**
  * Indicates which scroll (horizontal or vertical) is to be used as the source.
  */
  vertical?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<ScrollDetectorProperties, "overrides">>;
}
export interface ScrollDetectorPropertiesDisables {}
export type ScrollDetectorProperties = Filter<ScrollDetectorPropertiesBase, ScrollDetectorPropertiesDisables>;
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
      "plus-scroll-detector": ScrollDetectorEvents & ScrollDetectorAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (ScrollDetectorEvents & ScrollDetectorAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": ScrollDetectorEvents & ScrollDetectorAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (ScrollDetectorEvents & ScrollDetectorAttributes)>;
    }
  }
}
export type ScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;
export interface ScrollDetectorVariantOverrides {}