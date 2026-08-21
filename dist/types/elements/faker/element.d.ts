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
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    get content(): any;
    connectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusFakerAttributesMapper = {};
export type PlusFakerOverridableKeys = 'preset';
export interface PlusFakerDisables {}
export interface PlusFakerOverrides {}
export type PlusFakerAttributes = Rename<PlusFakerProperties, PlusFakerAttributesMapper>;
export type PlusFakerAttributesOverridden = Rename<PlusFakerPropertiesOverridden, PlusFakerAttributesMapper>;
export type PlusFakerAttributesBase = Rename<PlusFakerPropertiesBase, PlusFakerAttributesMapper>;
export type PlusFakerEvents = Filter<PlusFakerEventsBase, PlusFakerDisables>;
export type PlusFakerEventsBase = ToEventHandlers<Pick<PlusFaker, PlusFakerEventsKeys>>;
export type PlusFakerEventsKeys = never;
export type PlusFakerEventsJSX = ToJSXEvent<PlusFakerEvents>;
export type PlusFakerEventsBaseJSX = ToJSXEvent<PlusFakerEventsBase>;
export type PlusFakerMethods = Filter<PlusFakerMethodsBase, PlusFakerDisables>;
export type PlusFakerMethodsBase = Pick<PlusFaker, PlusFakerMethodsKeys>;
export type PlusFakerMethodsKeys = never;
export type PlusFakerProperties = Filter<PlusFakerPropertiesOverridden, PlusFakerDisables>;
export type PlusFakerPropertiesOverridden = Override<PlusFakerPropertiesBase, PlusFakerOverrides, PlusFakerOverridableKeys>;
export type PlusFakerPropertiesBase = Pick<PlusFaker, PlusFakerPropertiesKeys>;
export type PlusFakerPropertiesKeys = 'api' | 'arguments' | 'instance' | 'seed' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-faker': {
      properties: PlusFakerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-faker": PlusFakerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusFakerElement>, HTMLPlusFakerElement>, keyof PlusFakerJSX>;
    }
  }
}