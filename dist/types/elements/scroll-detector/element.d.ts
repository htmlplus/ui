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
    disabled: boolean;
    /**
     * Specifies the reference of the scroll.
     */
    reference: Element | 'document' | (string & {});
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusScrollDetectorAttributesMapper = {
  'disabled': 'disabled';
  'reference': 'reference';
  'vertical': 'vertical';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusScrollDetectorOverridableKeys = 'variant';
export interface PlusScrollDetectorDisables {}
export interface PlusScrollDetectorOverrides {}
export type PlusScrollDetectorAttributes = Filter<PlusScrollDetectorAttributesOverridden, PlusScrollDetectorDisables, PlusScrollDetectorAttributesMapper>;
export type PlusScrollDetectorAttributesOverridden = Override<PlusScrollDetectorAttributesBase, PlusScrollDetectorOverrides, PlusScrollDetectorOverridableKeys, PlusScrollDetectorAttributesMapper>;
export type PlusScrollDetectorAttributesBase = {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Specifies the reference of the scroll.
  */
  "reference"?: Element | 'document' | (string & {});
  /**
  * Indicates which scroll (horizontal or vertical) is to be used as the source.
  */
  "vertical"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusScrollDetectorProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusScrollDetectorEvents = Filter<PlusScrollDetectorEventsBase, PlusScrollDetectorDisables>;
export type PlusScrollDetectorEventsBase = {
  /**
  * Fires when the scroll starts changing.
  */
  plusChange?: (event: CustomEvent<PlusScrollDetectorChangeEvent>) => void;
};
export type PlusScrollDetectorEventsJSX = Filter<PlusScrollDetectorEventsBaseJSX, PlusScrollDetectorDisables, {
  plusChange: 'onPlusChange';
}>;
export type PlusScrollDetectorEventsBaseJSX = {
  /**
  * Fires when the scroll starts changing.
  */
  onPlusChange?: (event: CustomEvent<PlusScrollDetectorChangeEvent>) => void;
};
export type PlusScrollDetectorMethods = Filter<PlusScrollDetectorMethodsBase, PlusScrollDetectorDisables>;
export type PlusScrollDetectorMethodsBase = {};
export type PlusScrollDetectorProperties = Filter<PlusScrollDetectorPropertiesOverridden, PlusScrollDetectorDisables>;
export type PlusScrollDetectorPropertiesOverridden = Override<PlusScrollDetectorPropertiesBase, PlusScrollDetectorOverrides, PlusScrollDetectorOverridableKeys>;
export type PlusScrollDetectorPropertiesBase = {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Specifies the reference of the scroll.
  */
  reference?: Element | 'document' | (string & {});
  /**
  * Indicates which scroll (horizontal or vertical) is to be used as the source.
  */
  vertical?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusScrollDetectorProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-scroll-detector': {
      properties: PlusScrollDetectorPropertiesOverridden;
    };
  }
}
export type PlusScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;
export type PlusScrollDetectorJSX = PlusScrollDetectorAttributes & PlusScrollDetectorEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-scroll-detector": PlusScrollDetectorJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusScrollDetectorElement>, HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorJSX>;
    }
  }
}