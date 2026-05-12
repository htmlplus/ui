import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { Faker as FakerCoreType } from '@faker-js/faker';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Generates massive amounts of fake (but realistic) data for testing and development. Powered by [Faker](https://fakerjs.dev/).
 *
 * @thirdParty
 * @stable
 * @dependencies @faker-js/faker
 *
 * @examples default, api, arguments, seed, localization, more
 */
export declare class PlusFaker extends PlusCore {
    /**
     * Specifies the [API](https://fakerjs.dev/api).
     */
    api: string;
    /**
     * Specifies the API's arguments as an array.
     */
    arguments: unknown[];
    /**
     * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
     */
    instance?: FakerCoreType;
    /**
     * Keeps the result constant.
     */
    seed?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    get content(): any;
    connectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusFakerAttributesMapper = {
  'api': 'api';
  'arguments': 'arguments';
  'instance': 'instance';
  'seed': 'seed';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusFakerOverridableKeys = 'variant';
export interface PlusFakerDisables {}
export interface PlusFakerOverrides {}
export type PlusFakerAttributes = Filter<PlusFakerAttributesOverridden, PlusFakerDisables, PlusFakerAttributesMapper>;
export type PlusFakerAttributesOverridden = Override<PlusFakerAttributesBase, PlusFakerOverrides, PlusFakerOverridableKeys, PlusFakerAttributesMapper>;
export type PlusFakerAttributesBase = {
  /**
  * Specifies the [API](https://fakerjs.dev/api).
  */
  "api"?: string;
  /**
  * Specifies the API's arguments as an array.
  */
  "arguments"?: unknown[];
  /**
  * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
  */
  "instance"?: FakerCoreType;
  /**
  * Keeps the result constant.
  */
  "seed"?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusFakerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusFakerEvents = Filter<PlusFakerEventsBase, PlusFakerDisables>;
export type PlusFakerEventsBase = {};
export type PlusFakerEventsJSX = Filter<PlusFakerEventsBaseJSX, PlusFakerDisables, {}>;
export type PlusFakerEventsBaseJSX = {};
export type PlusFakerMethods = Filter<PlusFakerMethodsBase, PlusFakerDisables>;
export type PlusFakerMethodsBase = {};
export type PlusFakerProperties = Filter<PlusFakerPropertiesOverridden, PlusFakerDisables>;
export type PlusFakerPropertiesOverridden = Override<PlusFakerPropertiesBase, PlusFakerOverrides, PlusFakerOverridableKeys>;
export type PlusFakerPropertiesBase = {
  /**
  * Specifies the [API](https://fakerjs.dev/api).
  */
  api?: string;
  /**
  * Specifies the API's arguments as an array.
  */
  arguments?: unknown[];
  /**
  * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
  */
  instance?: FakerCoreType;
  /**
  * Keeps the result constant.
  */
  seed?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusFakerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-faker': {
      properties: PlusFakerPropertiesOverridden;
    };
  }
}
export type PlusFakerElement = globalThis.HTMLPlusFakerElement;
export type PlusFakerJSX = PlusFakerAttributes & PlusFakerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-faker": PlusFakerJSX;
  }
}
declare global {
  interface HTMLPlusFakerElement extends HTMLElement, PlusFakerMethods, PlusFakerProperties {}
  var HTMLPlusFakerElement: {
    prototype: HTMLPlusFakerElement;
    new (): HTMLPlusFakerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-faker": HTMLPlusFakerElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusFakerElement>, HTMLPlusFakerElement>, keyof PlusFakerJSX>;
    }
  }
}