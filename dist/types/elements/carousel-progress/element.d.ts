import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselProgress extends CarouselChild {
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    $bar: HTMLElement;
    events: EmblaEventType[];
    handleUpdate(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCarouselProgressAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCarouselProgressOverridableKeys = 'variant';
export interface PlusCarouselProgressDisables {}
export interface PlusCarouselProgressOverrides {}
export type PlusCarouselProgressAttributes = Filter<PlusCarouselProgressAttributesOverridden, PlusCarouselProgressDisables, PlusCarouselProgressAttributesMapper>;
export type PlusCarouselProgressAttributesOverridden = Override<PlusCarouselProgressAttributesBase, PlusCarouselProgressOverrides, PlusCarouselProgressOverridableKeys, PlusCarouselProgressAttributesMapper>;
export type PlusCarouselProgressAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselProgressProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCarouselProgressEvents = Filter<PlusCarouselProgressEventsBase, PlusCarouselProgressDisables>;
export type PlusCarouselProgressEventsBase = {};
export type PlusCarouselProgressEventsJSX = Filter<PlusCarouselProgressEventsBaseJSX, PlusCarouselProgressDisables, {}>;
export type PlusCarouselProgressEventsBaseJSX = {};
export type PlusCarouselProgressMethods = Filter<PlusCarouselProgressMethodsBase, PlusCarouselProgressDisables>;
export type PlusCarouselProgressMethodsBase = {};
export type PlusCarouselProgressProperties = Filter<PlusCarouselProgressPropertiesOverridden, PlusCarouselProgressDisables>;
export type PlusCarouselProgressPropertiesOverridden = Override<PlusCarouselProgressPropertiesBase, PlusCarouselProgressOverrides, PlusCarouselProgressOverridableKeys>;
export type PlusCarouselProgressPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselProgressProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-progress': {
      properties: PlusCarouselProgressPropertiesOverridden;
    };
  }
}
export type PlusCarouselProgressElement = globalThis.HTMLPlusCarouselProgressElement;
export type PlusCarouselProgressJSX = PlusCarouselProgressAttributes & PlusCarouselProgressEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-progress": PlusCarouselProgressJSX;
  }
}
declare global {
  interface HTMLPlusCarouselProgressElement extends HTMLElement, PlusCarouselProgressMethods, PlusCarouselProgressProperties {}
  var HTMLPlusCarouselProgressElement: {
    prototype: HTMLPlusCarouselProgressElement;
    new (): HTMLPlusCarouselProgressElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-progress": HTMLPlusCarouselProgressElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselProgressElement>, HTMLPlusCarouselProgressElement>, keyof PlusCarouselProgressJSX>;
    }
  }
}