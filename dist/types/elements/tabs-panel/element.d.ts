import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../tabs/context';
/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsPanel extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    parent?: Context;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusTabsPanelAttributesMapper = {
  'value': 'value';
  'active': 'active';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusTabsPanelOverridableKeys = 'variant';
export interface PlusTabsPanelDisables {}
export interface PlusTabsPanelOverrides {}
export type PlusTabsPanelAttributes = Filter<PlusTabsPanelAttributesOverridden, PlusTabsPanelDisables, PlusTabsPanelAttributesMapper>;
export type PlusTabsPanelAttributesOverridden = Override<PlusTabsPanelAttributesBase, PlusTabsPanelOverrides, PlusTabsPanelOverridableKeys, PlusTabsPanelAttributesMapper>;
export type PlusTabsPanelAttributesBase = {
  /**
  * Provides your own value.
  */
  "value"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusTabsPanelEvents = Filter<PlusTabsPanelEventsBase, PlusTabsPanelDisables>;
export type PlusTabsPanelEventsBase = {};
export type PlusTabsPanelEventsJSX = Filter<PlusTabsPanelEventsBaseJSX, PlusTabsPanelDisables, {}>;
export type PlusTabsPanelEventsBaseJSX = {};
export type PlusTabsPanelMethods = Filter<PlusTabsPanelMethodsBase, PlusTabsPanelDisables>;
export type PlusTabsPanelMethodsBase = {};
export type PlusTabsPanelProperties = Filter<PlusTabsPanelPropertiesOverridden, PlusTabsPanelDisables>;
export type PlusTabsPanelPropertiesOverridden = Override<PlusTabsPanelPropertiesBase, PlusTabsPanelOverrides, PlusTabsPanelOverridableKeys>;
export type PlusTabsPanelPropertiesBase = {
  /**
  * Provides your own value.
  */
  value?: string;
  /**
  * TODO
  */
  active;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-panel': {
      properties: PlusTabsPanelPropertiesOverridden;
    };
  }
}
export type PlusTabsPanelElement = globalThis.HTMLPlusTabsPanelElement;
export type PlusTabsPanelJSX = PlusTabsPanelAttributes & PlusTabsPanelEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-panel": PlusTabsPanelJSX;
  }
}
declare global {
  interface HTMLPlusTabsPanelElement extends HTMLElement, PlusTabsPanelMethods, PlusTabsPanelProperties {}
  var HTMLPlusTabsPanelElement: {
    prototype: HTMLPlusTabsPanelElement;
    new (): HTMLPlusTabsPanelElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panel": HTMLPlusTabsPanelElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsPanelElement>, HTMLPlusTabsPanelElement>, keyof PlusTabsPanelJSX>;
    }
  }
}