import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../drawer/context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class PlusDrawerToggler extends PlusCore {
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    drawer?: Context;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDrawerTogglerAttributesMapper = {
  'connector': 'connector';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDrawerTogglerOverridableKeys = 'variant';
export interface PlusDrawerTogglerDisables {}
export interface PlusDrawerTogglerOverrides {}
export type PlusDrawerTogglerAttributes = Filter<PlusDrawerTogglerAttributesOverridden, PlusDrawerTogglerDisables, PlusDrawerTogglerAttributesMapper>;
export type PlusDrawerTogglerAttributesOverridden = Override<PlusDrawerTogglerAttributesBase, PlusDrawerTogglerOverrides, PlusDrawerTogglerOverridableKeys, PlusDrawerTogglerAttributesMapper>;
export type PlusDrawerTogglerAttributesBase = {
  /**
  * This property helps you to attach which drawer this toggler controls.
  * It doesn't matter where the drawer toggler is.
  * You can put the drawer's toggler inside or outside of the drawer.
  * Read more about connectors [here](/connector).
  */
  "connector"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDrawerTogglerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDrawerTogglerEvents = Filter<PlusDrawerTogglerEventsBase, PlusDrawerTogglerDisables>;
export type PlusDrawerTogglerEventsBase = {};
export type PlusDrawerTogglerEventsJSX = Filter<PlusDrawerTogglerEventsBaseJSX, PlusDrawerTogglerDisables, {}>;
export type PlusDrawerTogglerEventsBaseJSX = {};
export type PlusDrawerTogglerMethods = Filter<PlusDrawerTogglerMethodsBase, PlusDrawerTogglerDisables>;
export type PlusDrawerTogglerMethodsBase = {};
export type PlusDrawerTogglerProperties = Filter<PlusDrawerTogglerPropertiesOverridden, PlusDrawerTogglerDisables>;
export type PlusDrawerTogglerPropertiesOverridden = Override<PlusDrawerTogglerPropertiesBase, PlusDrawerTogglerOverrides, PlusDrawerTogglerOverridableKeys>;
export type PlusDrawerTogglerPropertiesBase = {
  /**
  * This property helps you to attach which drawer this toggler controls.
  * It doesn't matter where the drawer toggler is.
  * You can put the drawer's toggler inside or outside of the drawer.
  * Read more about connectors [here](/connector).
  */
  connector?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDrawerTogglerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-drawer-toggler': {
      properties: PlusDrawerTogglerPropertiesOverridden;
    };
  }
}
export type PlusDrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
export type PlusDrawerTogglerJSX = PlusDrawerTogglerAttributes & PlusDrawerTogglerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-drawer-toggler": PlusDrawerTogglerJSX;
  }
}
declare global {
  interface HTMLPlusDrawerTogglerElement extends HTMLElement, PlusDrawerTogglerMethods, PlusDrawerTogglerProperties {}
  var HTMLPlusDrawerTogglerElement: {
    prototype: HTMLPlusDrawerTogglerElement;
    new (): HTMLPlusDrawerTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-drawer-toggler": HTMLPlusDrawerTogglerElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDrawerTogglerElement>, HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerJSX>;
    }
  }
}