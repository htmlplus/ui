import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogFooter extends PlusCore {
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDialogFooterAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDialogFooterOverridableKeys = 'variant';
export interface PlusDialogFooterDisables {}
export interface PlusDialogFooterOverrides {}
export type PlusDialogFooterAttributes = Filter<PlusDialogFooterAttributesOverridden, PlusDialogFooterDisables, PlusDialogFooterAttributesMapper>;
export type PlusDialogFooterAttributesOverridden = Override<PlusDialogFooterAttributesBase, PlusDialogFooterOverrides, PlusDialogFooterOverridableKeys, PlusDialogFooterAttributesMapper>;
export type PlusDialogFooterAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogFooterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDialogFooterEvents = Filter<PlusDialogFooterEventsBase, PlusDialogFooterDisables>;
export type PlusDialogFooterEventsBase = {};
export type PlusDialogFooterEventsJSX = Filter<PlusDialogFooterEventsBaseJSX, PlusDialogFooterDisables, {}>;
export type PlusDialogFooterEventsBaseJSX = {};
export type PlusDialogFooterMethods = Filter<PlusDialogFooterMethodsBase, PlusDialogFooterDisables>;
export type PlusDialogFooterMethodsBase = {};
export type PlusDialogFooterProperties = Filter<PlusDialogFooterPropertiesOverridden, PlusDialogFooterDisables>;
export type PlusDialogFooterPropertiesOverridden = Override<PlusDialogFooterPropertiesBase, PlusDialogFooterOverrides, PlusDialogFooterOverridableKeys>;
export type PlusDialogFooterPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogFooterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-footer': {
      properties: PlusDialogFooterPropertiesOverridden;
    };
  }
}
export type PlusDialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
export type PlusDialogFooterJSX = PlusDialogFooterAttributes & PlusDialogFooterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-footer": PlusDialogFooterJSX;
  }
}
declare global {
  interface HTMLPlusDialogFooterElement extends HTMLElement, PlusDialogFooterMethods, PlusDialogFooterProperties {}
  var HTMLPlusDialogFooterElement: {
    prototype: HTMLPlusDialogFooterElement;
    new (): HTMLPlusDialogFooterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-footer": HTMLPlusDialogFooterElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogFooterElement>, HTMLPlusDialogFooterElement>, keyof PlusDialogFooterJSX>;
    }
  }
}