import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselCounter extends CarouselChild {
    /**
     * A customizable template string for displaying the carousel's slide counter.
     *
     * This template supports two placeholders that will be dynamically replaced:
     * - `%CURRENT%`: Represents the number of the currently active slide.
     * - `%TOTAL%`: Represents the total number of slides in the carousel.
     */
    template?: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    get content(): string;
    get current(): string;
    get total(): string;
    render(): string;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCarouselCounterAttributesMapper = {
  'template': 'template';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCarouselCounterOverridableKeys = 'variant';
export interface PlusCarouselCounterDisables {}
export interface PlusCarouselCounterOverrides {}
export type PlusCarouselCounterAttributes = Filter<PlusCarouselCounterAttributesOverridden, PlusCarouselCounterDisables, PlusCarouselCounterAttributesMapper>;
export type PlusCarouselCounterAttributesOverridden = Override<PlusCarouselCounterAttributesBase, PlusCarouselCounterOverrides, PlusCarouselCounterOverridableKeys, PlusCarouselCounterAttributesMapper>;
export type PlusCarouselCounterAttributesBase = {
  /**
  * A customizable template string for displaying the carousel's slide counter.
  *
  * This template supports two placeholders that will be dynamically replaced:
  * - `%CURRENT%`: Represents the number of the currently active slide.
  * - `%TOTAL%`: Represents the total number of slides in the carousel.
  */
  "template"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselCounterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCarouselCounterEvents = Filter<PlusCarouselCounterEventsBase, PlusCarouselCounterDisables>;
export type PlusCarouselCounterEventsBase = {};
export type PlusCarouselCounterEventsJSX = Filter<PlusCarouselCounterEventsBaseJSX, PlusCarouselCounterDisables, {}>;
export type PlusCarouselCounterEventsBaseJSX = {};
export type PlusCarouselCounterMethods = Filter<PlusCarouselCounterMethodsBase, PlusCarouselCounterDisables>;
export type PlusCarouselCounterMethodsBase = {};
export type PlusCarouselCounterProperties = Filter<PlusCarouselCounterPropertiesOverridden, PlusCarouselCounterDisables>;
export type PlusCarouselCounterPropertiesOverridden = Override<PlusCarouselCounterPropertiesBase, PlusCarouselCounterOverrides, PlusCarouselCounterOverridableKeys>;
export type PlusCarouselCounterPropertiesBase = {
  /**
  * A customizable template string for displaying the carousel's slide counter.
  *
  * This template supports two placeholders that will be dynamically replaced:
  * - `%CURRENT%`: Represents the number of the currently active slide.
  * - `%TOTAL%`: Represents the total number of slides in the carousel.
  */
  template?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselCounterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-counter': {
      properties: PlusCarouselCounterPropertiesOverridden;
    };
  }
}
export type PlusCarouselCounterElement = globalThis.HTMLPlusCarouselCounterElement;
export type PlusCarouselCounterJSX = PlusCarouselCounterAttributes & PlusCarouselCounterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-counter": PlusCarouselCounterJSX;
  }
}
declare global {
  interface HTMLPlusCarouselCounterElement extends HTMLElement, PlusCarouselCounterMethods, PlusCarouselCounterProperties {}
  var HTMLPlusCarouselCounterElement: {
    prototype: HTMLPlusCarouselCounterElement;
    new (): HTMLPlusCarouselCounterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-counter": HTMLPlusCarouselCounterElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselCounterElement>, HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterJSX>;
    }
  }
}