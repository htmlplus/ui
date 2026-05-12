import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogContent extends PlusCore {
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDialogContentAttributesMapper = {
  'scrollable': 'scrollable';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDialogContentOverridableKeys = 'variant';
export interface PlusDialogContentDisables {}
export interface PlusDialogContentOverrides {}
export type PlusDialogContentAttributes = Filter<PlusDialogContentAttributesOverridden, PlusDialogContentDisables, PlusDialogContentAttributesMapper>;
export type PlusDialogContentAttributesOverridden = Override<PlusDialogContentAttributesBase, PlusDialogContentOverrides, PlusDialogContentOverridableKeys, PlusDialogContentAttributesMapper>;
export type PlusDialogContentAttributesBase = {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogContentProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDialogContentEvents = Filter<PlusDialogContentEventsBase, PlusDialogContentDisables>;
export type PlusDialogContentEventsBase = {};
export type PlusDialogContentEventsJSX = Filter<PlusDialogContentEventsBaseJSX, PlusDialogContentDisables, {}>;
export type PlusDialogContentEventsBaseJSX = {};
export type PlusDialogContentMethods = Filter<PlusDialogContentMethodsBase, PlusDialogContentDisables>;
export type PlusDialogContentMethodsBase = {};
export type PlusDialogContentProperties = Filter<PlusDialogContentPropertiesOverridden, PlusDialogContentDisables>;
export type PlusDialogContentPropertiesOverridden = Override<PlusDialogContentPropertiesBase, PlusDialogContentOverrides, PlusDialogContentOverridableKeys>;
export type PlusDialogContentPropertiesBase = {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogContentProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-content': {
      properties: PlusDialogContentPropertiesOverridden;
    };
  }
}
export type PlusDialogContentElement = globalThis.HTMLPlusDialogContentElement;
export type PlusDialogContentJSX = PlusDialogContentAttributes & PlusDialogContentEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-content": PlusDialogContentJSX;
  }
}
declare global {
  interface HTMLPlusDialogContentElement extends HTMLElement, PlusDialogContentMethods, PlusDialogContentProperties {}
  var HTMLPlusDialogContentElement: {
    prototype: HTMLPlusDialogContentElement;
    new (): HTMLPlusDialogContentElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-content": HTMLPlusDialogContentElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogContentElement>, HTMLPlusDialogContentElement>, keyof PlusDialogContentJSX>;
    }
  }
}