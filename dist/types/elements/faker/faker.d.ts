import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { Faker as FakerCoreType } from '@faker-js/faker';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * Generates massive amounts of fake (but realistic) data for testing and development. Powered by [Faker](https://fakerjs.dev/).
 *
 * @thirdParty
 * @stable
 * @dependencies @faker-js/faker
 *
 * @examples default, api, arguments, seed, localization, more
 */
export declare class Faker extends PlusCore {
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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    get content(): any;
    connectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface FakerAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<never, FakerVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<FakerProperties, "overrides">>;
}
export interface FakerAttributesDisables {}
export type FakerAttributes = Filter<FakerAttributesBase, FakerAttributesDisables>;
export interface FakerEventsBase {}
export interface FakerEventsDisables {}
export type FakerEvents = Filter<FakerEventsBase, FakerEventsDisables>;
export interface FakerMethodsBase {}
export interface FakerMethodsDisables {}
export type FakerMethods = Filter<FakerMethodsBase, FakerMethodsDisables>;
export interface FakerPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<never, FakerVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<FakerProperties, "overrides">>;
}
export interface FakerPropertiesDisables {}
export type FakerProperties = Filter<FakerPropertiesBase, FakerPropertiesDisables>;
export interface FakerJSX extends FakerEvents, FakerProperties {}
declare global {
  interface HTMLPlusFakerElement extends HTMLElement, FakerMethods, FakerProperties {}
  var HTMLPlusFakerElement: {
    prototype: HTMLPlusFakerElement;
    new (): HTMLPlusFakerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-faker": HTMLPlusFakerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": FakerEvents & FakerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (FakerEvents & FakerAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": FakerEvents & FakerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (FakerEvents & FakerAttributes)>;
    }
  }
}
export type FakerElement = globalThis.HTMLPlusFakerElement;
export interface FakerVariantOverrides {}