import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @examples default
 */
export declare class PlusSpacer extends PlusCore {
    /**
     * TODO
     */
    grow?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    get style(): {
        ':host': {
            'flex-grow': number;
        };
    };
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusSpacerAttributesMapper = {
  'grow': 'grow';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusSpacerOverridableKeys = 'variant';
export interface PlusSpacerDisables {}
export interface PlusSpacerOverrides {}
export type PlusSpacerAttributes = Filter<PlusSpacerAttributesOverridden, PlusSpacerDisables, PlusSpacerAttributesMapper>;
export type PlusSpacerAttributesOverridden = Override<PlusSpacerAttributesBase, PlusSpacerOverrides, PlusSpacerOverridableKeys, PlusSpacerAttributesMapper>;
export type PlusSpacerAttributesBase = {
  /**
  * TODO
  */
  "grow"?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSpacerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusSpacerEvents = Filter<PlusSpacerEventsBase, PlusSpacerDisables>;
export type PlusSpacerEventsBase = {};
export type PlusSpacerEventsJSX = Filter<PlusSpacerEventsBaseJSX, PlusSpacerDisables, {}>;
export type PlusSpacerEventsBaseJSX = {};
export type PlusSpacerMethods = Filter<PlusSpacerMethodsBase, PlusSpacerDisables>;
export type PlusSpacerMethodsBase = {};
export type PlusSpacerProperties = Filter<PlusSpacerPropertiesOverridden, PlusSpacerDisables>;
export type PlusSpacerPropertiesOverridden = Override<PlusSpacerPropertiesBase, PlusSpacerOverrides, PlusSpacerOverridableKeys>;
export type PlusSpacerPropertiesBase = {
  /**
  * TODO
  */
  grow?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSpacerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-spacer': {
      properties: PlusSpacerPropertiesOverridden;
    };
  }
}
export type PlusSpacerElement = globalThis.HTMLPlusSpacerElement;
export type PlusSpacerJSX = PlusSpacerAttributes & PlusSpacerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-spacer": PlusSpacerJSX;
  }
}
declare global {
  interface HTMLPlusSpacerElement extends HTMLElement, PlusSpacerMethods, PlusSpacerProperties {}
  var HTMLPlusSpacerElement: {
    prototype: HTMLPlusSpacerElement;
    new (): HTMLPlusSpacerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spacer": HTMLPlusSpacerElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSpacerElement>, HTMLPlusSpacerElement>, keyof PlusSpacerJSX>;
    }
  }
}