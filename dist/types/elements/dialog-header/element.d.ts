import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogHeader extends PlusCore {
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
export type PlusDialogHeaderAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDialogHeaderOverridableKeys = 'variant';
export interface PlusDialogHeaderDisables {}
export interface PlusDialogHeaderOverrides {}
export type PlusDialogHeaderAttributes = Filter<PlusDialogHeaderAttributesOverridden, PlusDialogHeaderDisables, PlusDialogHeaderAttributesMapper>;
export type PlusDialogHeaderAttributesOverridden = Override<PlusDialogHeaderAttributesBase, PlusDialogHeaderOverrides, PlusDialogHeaderOverridableKeys, PlusDialogHeaderAttributesMapper>;
export type PlusDialogHeaderAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogHeaderProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDialogHeaderEvents = Filter<PlusDialogHeaderEventsBase, PlusDialogHeaderDisables>;
export type PlusDialogHeaderEventsBase = {};
export type PlusDialogHeaderEventsJSX = Filter<PlusDialogHeaderEventsBaseJSX, PlusDialogHeaderDisables, {}>;
export type PlusDialogHeaderEventsBaseJSX = {};
export type PlusDialogHeaderMethods = Filter<PlusDialogHeaderMethodsBase, PlusDialogHeaderDisables>;
export type PlusDialogHeaderMethodsBase = {};
export type PlusDialogHeaderProperties = Filter<PlusDialogHeaderPropertiesOverridden, PlusDialogHeaderDisables>;
export type PlusDialogHeaderPropertiesOverridden = Override<PlusDialogHeaderPropertiesBase, PlusDialogHeaderOverrides, PlusDialogHeaderOverridableKeys>;
export type PlusDialogHeaderPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogHeaderProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-header': {
      properties: PlusDialogHeaderPropertiesOverridden;
    };
  }
}
export type PlusDialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;
export type PlusDialogHeaderJSX = PlusDialogHeaderAttributes & PlusDialogHeaderEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-header": PlusDialogHeaderJSX;
  }
}
declare global {
  interface HTMLPlusDialogHeaderElement extends HTMLElement, PlusDialogHeaderMethods, PlusDialogHeaderProperties {}
  var HTMLPlusDialogHeaderElement: {
    prototype: HTMLPlusDialogHeaderElement;
    new (): HTMLPlusDialogHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-header": HTMLPlusDialogHeaderElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogHeaderElement>, HTMLPlusDialogHeaderElement>, keyof PlusDialogHeaderJSX>;
    }
  }
}