import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { PlusScrollDetectorChangeEvent } from './types';
/**
 * Detects scroll event from an element.
 *
 * @stable
 *
 * @examples default, scroll-indicator
 */
export declare class PlusScrollDetector extends PlusCore {
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * Specifies the reference of the scroll.
     */
    reference?: Element | 'document' | (string & {});
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Fires when the scroll starts changing.
     */
    plusChange: EventEmitter<PlusScrollDetectorChangeEvent>;
    offset?: number;
    get $reference(): Document | Element | undefined;
    watcher(next: unknown): void;
    initialize(): void;
    terminate(): void;
    onScroll(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusScrollDetectorAttributesBase {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Specifies the reference of the scroll.
  */
  "reference"?: Element | 'document' | (string & {});
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusScrollDetectorVariantOverrides>;
  /**
  * Indicates which scroll (horizontal or vertical) is to be used as the source.
  */
  "vertical"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusScrollDetectorProperties, "overrides">>;
}
export interface PlusScrollDetectorAttributesDisables {}
export type PlusScrollDetectorAttributes = Filter<PlusScrollDetectorAttributesBase, PlusScrollDetectorAttributesDisables>;
export interface PlusScrollDetectorEventsBase {
  /**
  * Fires when the scroll starts changing.
  */
  onPlusChange?: (event: CustomEvent<PlusScrollDetectorChangeEvent>) => void;
}
export interface PlusScrollDetectorEventsDisables {}
export type PlusScrollDetectorEvents = Filter<PlusScrollDetectorEventsBase, PlusScrollDetectorEventsDisables>;
export interface PlusScrollDetectorMethodsBase {}
export interface PlusScrollDetectorMethodsDisables {}
export type PlusScrollDetectorMethods = Filter<PlusScrollDetectorMethodsBase, PlusScrollDetectorMethodsDisables>;
export interface PlusScrollDetectorPropertiesBase {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Specifies the reference of the scroll.
  */
  reference?: Element | 'document' | (string & {});
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusScrollDetectorVariantOverrides>;
  /**
  * Indicates which scroll (horizontal or vertical) is to be used as the source.
  */
  vertical?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusScrollDetectorProperties, "overrides">>;
}
export interface PlusScrollDetectorPropertiesDisables {}
export type PlusScrollDetectorProperties = Filter<PlusScrollDetectorPropertiesBase, PlusScrollDetectorPropertiesDisables>;
export type PlusScrollDetectorAttributesAndEvents = PlusScrollDetectorAttributes & PlusScrollDetectorEvents;
export interface PlusScrollDetectorJSX extends PlusScrollDetectorEvents, PlusScrollDetectorProperties {}
declare global {
  interface HTMLPlusScrollDetectorElement extends HTMLElement, PlusScrollDetectorMethods, PlusScrollDetectorProperties {}
  var HTMLPlusScrollDetectorElement: {
    prototype: HTMLPlusScrollDetectorElement;
    new (): HTMLPlusScrollDetectorElement;
  };
  interface HTMLElementTagNameMap {
    "plus-scroll-detector": HTMLPlusScrollDetectorElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-scroll-detector": PlusScrollDetectorAttributes & PlusScrollDetectorEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorAttributesAndEvents>;
    }
  }
}
export type PlusScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;
export interface PlusScrollDetectorVariantOverrides {}