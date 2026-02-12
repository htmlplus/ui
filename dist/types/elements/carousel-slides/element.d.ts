import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCarouselSlides extends CarouselChild {
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCarouselSlidesAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCarouselSlidesOverridableKeys = 'variant';
export interface PlusCarouselSlidesDisables {}
export interface PlusCarouselSlidesOverrides {}
export type PlusCarouselSlidesAttributes = Filter<PlusCarouselSlidesAttributesOverridden, PlusCarouselSlidesDisables, PlusCarouselSlidesAttributesMapper>;
export type PlusCarouselSlidesAttributesOverridden = Override<PlusCarouselSlidesAttributesBase, PlusCarouselSlidesOverrides, PlusCarouselSlidesOverridableKeys, PlusCarouselSlidesAttributesMapper>;
export type PlusCarouselSlidesAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlidesProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCarouselSlidesEvents = Filter<PlusCarouselSlidesEventsBase, PlusCarouselSlidesDisables>;
export type PlusCarouselSlidesEventsBase = {};
export type PlusCarouselSlidesEventsJSX = Filter<PlusCarouselSlidesEventsBaseJSX, PlusCarouselSlidesDisables, {}>;
export type PlusCarouselSlidesEventsBaseJSX = {};
export type PlusCarouselSlidesMethods = Filter<PlusCarouselSlidesMethodsBase, PlusCarouselSlidesDisables>;
export type PlusCarouselSlidesMethodsBase = {};
export type PlusCarouselSlidesProperties = Filter<PlusCarouselSlidesPropertiesOverridden, PlusCarouselSlidesDisables>;
export type PlusCarouselSlidesPropertiesOverridden = Override<PlusCarouselSlidesPropertiesBase, PlusCarouselSlidesOverrides, PlusCarouselSlidesOverridableKeys>;
export type PlusCarouselSlidesPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlidesProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-slides': {
      properties: PlusCarouselSlidesPropertiesOverridden;
    };
  }
}
export type PlusCarouselSlidesElement = globalThis.HTMLPlusCarouselSlidesElement;
export type PlusCarouselSlidesJSX = PlusCarouselSlidesAttributes & PlusCarouselSlidesEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-slides": PlusCarouselSlidesJSX;
  }
}
declare global {
  interface HTMLPlusCarouselSlidesElement extends HTMLElement, PlusCarouselSlidesMethods, PlusCarouselSlidesProperties {}
  var HTMLPlusCarouselSlidesElement: {
    prototype: HTMLPlusCarouselSlidesElement;
    new (): HTMLPlusCarouselSlidesElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-slides": HTMLPlusCarouselSlidesElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselSlidesElement>, HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesJSX>;
    }
  }
}