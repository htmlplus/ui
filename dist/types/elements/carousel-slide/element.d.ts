import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCarouselSlide extends CarouselChild {
    /**
     * Enables slide navigation when the slide is clicked.
     *
     * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
     * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
     *
     * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
     */
    clickable?: boolean | 'jump';
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    get index(): number;
    handleClick(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCarouselSlideAttributesMapper = {
  'clickable': 'clickable';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCarouselSlideOverridableKeys = 'variant';
export interface PlusCarouselSlideDisables {}
export interface PlusCarouselSlideOverrides {}
export type PlusCarouselSlideAttributes = Filter<PlusCarouselSlideAttributesOverridden, PlusCarouselSlideDisables, PlusCarouselSlideAttributesMapper>;
export type PlusCarouselSlideAttributesOverridden = Override<PlusCarouselSlideAttributesBase, PlusCarouselSlideOverrides, PlusCarouselSlideOverridableKeys, PlusCarouselSlideAttributesMapper>;
export type PlusCarouselSlideAttributesBase = {
  /**
  * Enables slide navigation when the slide is clicked.
  *
  * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
  * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
  *
  * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
  */
  "clickable"?: boolean | 'jump';
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlideProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCarouselSlideEvents = Filter<PlusCarouselSlideEventsBase, PlusCarouselSlideDisables>;
export type PlusCarouselSlideEventsBase = {};
export type PlusCarouselSlideEventsJSX = Filter<PlusCarouselSlideEventsBaseJSX, PlusCarouselSlideDisables, {}>;
export type PlusCarouselSlideEventsBaseJSX = {};
export type PlusCarouselSlideMethods = Filter<PlusCarouselSlideMethodsBase, PlusCarouselSlideDisables>;
export type PlusCarouselSlideMethodsBase = {};
export type PlusCarouselSlideProperties = Filter<PlusCarouselSlidePropertiesOverridden, PlusCarouselSlideDisables>;
export type PlusCarouselSlidePropertiesOverridden = Override<PlusCarouselSlidePropertiesBase, PlusCarouselSlideOverrides, PlusCarouselSlideOverridableKeys>;
export type PlusCarouselSlidePropertiesBase = {
  /**
  * Enables slide navigation when the slide is clicked.
  *
  * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
  * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
  *
  * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
  */
  clickable?: boolean | 'jump';
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlideProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-slide': {
      properties: PlusCarouselSlidePropertiesOverridden;
    };
  }
}
export type PlusCarouselSlideElement = globalThis.HTMLPlusCarouselSlideElement;
export type PlusCarouselSlideJSX = PlusCarouselSlideAttributes & PlusCarouselSlideEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-slide": PlusCarouselSlideJSX;
  }
}
declare global {
  interface HTMLPlusCarouselSlideElement extends HTMLElement, PlusCarouselSlideMethods, PlusCarouselSlideProperties {}
  var HTMLPlusCarouselSlideElement: {
    prototype: HTMLPlusCarouselSlideElement;
    new (): HTMLPlusCarouselSlideElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-slide": HTMLPlusCarouselSlideElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselSlideElement>, HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideJSX>;
    }
  }
}