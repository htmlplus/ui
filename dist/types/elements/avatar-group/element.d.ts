import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusAvatarGroup extends PlusCore {
    /**
     * Specifies whether to prominent the avatar when the mouse is entered or not.
     */
    hoverable?: boolean;
    /**
     * Specifies whether avatars should be displayed compressed or not.
     */
    stacked?: boolean;
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
export type PlusAvatarGroupAttributesMapper = {
  'hoverable': 'hoverable';
  'stacked': 'stacked';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusAvatarGroupOverridableKeys = 'variant';
export interface PlusAvatarGroupDisables {}
export interface PlusAvatarGroupOverrides {}
export type PlusAvatarGroupAttributes = Filter<PlusAvatarGroupAttributesOverridden, PlusAvatarGroupDisables, PlusAvatarGroupAttributesMapper>;
export type PlusAvatarGroupAttributesOverridden = Override<PlusAvatarGroupAttributesBase, PlusAvatarGroupOverrides, PlusAvatarGroupOverridableKeys, PlusAvatarGroupAttributesMapper>;
export type PlusAvatarGroupAttributesBase = {
  /**
  * Specifies whether to prominent the avatar when the mouse is entered or not.
  */
  "hoverable"?: boolean;
  /**
  * Specifies whether avatars should be displayed compressed or not.
  */
  "stacked"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarGroupProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusAvatarGroupEvents = Filter<PlusAvatarGroupEventsBase, PlusAvatarGroupDisables>;
export type PlusAvatarGroupEventsBase = {};
export type PlusAvatarGroupEventsJSX = Filter<PlusAvatarGroupEventsBaseJSX, PlusAvatarGroupDisables, {}>;
export type PlusAvatarGroupEventsBaseJSX = {};
export type PlusAvatarGroupMethods = Filter<PlusAvatarGroupMethodsBase, PlusAvatarGroupDisables>;
export type PlusAvatarGroupMethodsBase = {};
export type PlusAvatarGroupProperties = Filter<PlusAvatarGroupPropertiesOverridden, PlusAvatarGroupDisables>;
export type PlusAvatarGroupPropertiesOverridden = Override<PlusAvatarGroupPropertiesBase, PlusAvatarGroupOverrides, PlusAvatarGroupOverridableKeys>;
export type PlusAvatarGroupPropertiesBase = {
  /**
  * Specifies whether to prominent the avatar when the mouse is entered or not.
  */
  hoverable?: boolean;
  /**
  * Specifies whether avatars should be displayed compressed or not.
  */
  stacked?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarGroupProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-avatar-group': {
      properties: PlusAvatarGroupPropertiesOverridden;
    };
  }
}
export type PlusAvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;
export type PlusAvatarGroupJSX = PlusAvatarGroupAttributes & PlusAvatarGroupEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-avatar-group": PlusAvatarGroupJSX;
  }
}
declare global {
  interface HTMLPlusAvatarGroupElement extends HTMLElement, PlusAvatarGroupMethods, PlusAvatarGroupProperties {}
  var HTMLPlusAvatarGroupElement: {
    prototype: HTMLPlusAvatarGroupElement;
    new (): HTMLPlusAvatarGroupElement;
  };
  interface HTMLElementTagNameMap {
    "plus-avatar-group": HTMLPlusAvatarGroupElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAvatarGroupElement>, HTMLPlusAvatarGroupElement>, keyof PlusAvatarGroupJSX>;
    }
  }
}