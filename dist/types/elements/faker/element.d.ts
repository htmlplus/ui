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
    overrides?: OverridesConfig<PlusBreakpoint>;
    get content(): any;
    connectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusFakerAttributesBase {
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
  "variant"?: OverridableValue<never, PlusFakerVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusFakerProperties, "overrides">>;
}
export interface PlusFakerAttributesDisables {}
export type PlusFakerAttributes = Filter<PlusFakerAttributesBase, PlusFakerAttributesDisables>;
export interface PlusFakerEventsBase {}
export interface PlusFakerEventsDisables {}
export type PlusFakerEvents = Filter<PlusFakerEventsBase, PlusFakerEventsDisables>;
export interface PlusFakerMethodsBase {}
export interface PlusFakerMethodsDisables {}
export type PlusFakerMethods = Filter<PlusFakerMethodsBase, PlusFakerMethodsDisables>;
export interface PlusFakerPropertiesBase {
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
  variant?: OverridableValue<never, PlusFakerVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusFakerProperties, "overrides">>;
}
export interface PlusFakerPropertiesDisables {}
export type PlusFakerProperties = Filter<PlusFakerPropertiesBase, PlusFakerPropertiesDisables>;
export interface PlusFakerJSX extends PlusFakerEvents, PlusFakerProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-faker": PlusFakerAttributes & PlusFakerEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerAttributes & PlusFakerEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusFakerElement>, HTMLPlusFakerElement>, keyof (PlusFakerAttributes & PlusFakerEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerAttributes & PlusFakerEvents & Omit<HTMLAttributes<HTMLPlusFakerElement>, keyof (PlusFakerAttributes & PlusFakerEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerAttributes & PlusFakerEvents & Omit<HTMLAttributes<HTMLPlusFakerElement>, keyof (PlusFakerAttributes & PlusFakerEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerAttributes & PlusFakerEvents & Omit<HTMLAttributes<HTMLPlusFakerElement>, keyof (PlusFakerAttributes & PlusFakerEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerAttributes & PlusFakerEvents & Omit<HTMLAttributes<HTMLPlusFakerElement>, keyof (PlusFakerAttributes & PlusFakerEvents)>;
    }
  }
}
export type PlusFakerElement = globalThis.HTMLPlusFakerElement;
export interface PlusFakerVariantOverrides {}