import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogBody extends PlusCore {
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
export type PlusDialogBodyAttributesMapper = {
  'scrollable': 'scrollable';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDialogBodyOverridableKeys = 'variant';
export interface PlusDialogBodyDisables {}
export interface PlusDialogBodyOverrides {}
export type PlusDialogBodyAttributes = Filter<PlusDialogBodyAttributesOverridden, PlusDialogBodyDisables, PlusDialogBodyAttributesMapper>;
export type PlusDialogBodyAttributesOverridden = Override<PlusDialogBodyAttributesBase, PlusDialogBodyOverrides, PlusDialogBodyOverridableKeys, PlusDialogBodyAttributesMapper>;
export type PlusDialogBodyAttributesBase = {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogBodyProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDialogBodyEvents = Filter<PlusDialogBodyEventsBase, PlusDialogBodyDisables>;
export type PlusDialogBodyEventsBase = {};
export type PlusDialogBodyEventsJSX = Filter<PlusDialogBodyEventsBaseJSX, PlusDialogBodyDisables, {}>;
export type PlusDialogBodyEventsBaseJSX = {};
export type PlusDialogBodyMethods = Filter<PlusDialogBodyMethodsBase, PlusDialogBodyDisables>;
export type PlusDialogBodyMethodsBase = {};
export type PlusDialogBodyProperties = Filter<PlusDialogBodyPropertiesOverridden, PlusDialogBodyDisables>;
export type PlusDialogBodyPropertiesOverridden = Override<PlusDialogBodyPropertiesBase, PlusDialogBodyOverrides, PlusDialogBodyOverridableKeys>;
export type PlusDialogBodyPropertiesBase = {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogBodyProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-body': {
      properties: PlusDialogBodyPropertiesOverridden;
    };
  }
}
export type PlusDialogBodyElement = globalThis.HTMLPlusDialogBodyElement;
export type PlusDialogBodyJSX = PlusDialogBodyAttributes & PlusDialogBodyEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-body": PlusDialogBodyJSX;
  }
}
declare global {
  interface HTMLPlusDialogBodyElement extends HTMLElement, PlusDialogBodyMethods, PlusDialogBodyProperties {}
  var HTMLPlusDialogBodyElement: {
    prototype: HTMLPlusDialogBodyElement;
    new (): HTMLPlusDialogBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-body": HTMLPlusDialogBodyElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogBodyElement>, HTMLPlusDialogBodyElement>, keyof PlusDialogBodyJSX>;
    }
  }
}