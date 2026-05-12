import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselIndicators extends CarouselChild {
    /**
     * Controls what happens when you click an indicator.
     * If `true`, it smoothly moves to the slide,
     * and if set to `jump`, it instantly jumps without animation.
     */
    clickable: boolean | 'jump';
    /**
     * Allows indicators to wrap around the carousel when reaching the beginning or end.
     */
    infinity: boolean;
    /**
     * Displays slide numbers inside the indicators.
     */
    numbers: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    get indexes(): number[];
    get selected(): number;
    scrollTo(index: number): void;
    get style(): {
        ':host': {
            '--plus-carousel-indicators-selected': number;
        };
    };
    getClass(index: number): string;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCarouselIndicatorsAttributesMapper = {
  'clickable': 'clickable';
  'infinity': 'infinity';
  'numbers': 'numbers';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCarouselIndicatorsOverridableKeys = 'variant';
export interface PlusCarouselIndicatorsDisables {}
export interface PlusCarouselIndicatorsOverrides {}
export type PlusCarouselIndicatorsAttributes = Filter<PlusCarouselIndicatorsAttributesOverridden, PlusCarouselIndicatorsDisables, PlusCarouselIndicatorsAttributesMapper>;
export type PlusCarouselIndicatorsAttributesOverridden = Override<PlusCarouselIndicatorsAttributesBase, PlusCarouselIndicatorsOverrides, PlusCarouselIndicatorsOverridableKeys, PlusCarouselIndicatorsAttributesMapper>;
export type PlusCarouselIndicatorsAttributesBase = {
  /**
  * Controls what happens when you click an indicator.
  * If `true`, it smoothly moves to the slide,
  * and if set to `jump`, it instantly jumps without animation.
  */
  "clickable"?: boolean | 'jump';
  /**
  * Allows indicators to wrap around the carousel when reaching the beginning or end.
  */
  "infinity"?: boolean;
  /**
  * Displays slide numbers inside the indicators.
  */
  "numbers"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselIndicatorsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCarouselIndicatorsEvents = Filter<PlusCarouselIndicatorsEventsBase, PlusCarouselIndicatorsDisables>;
export type PlusCarouselIndicatorsEventsBase = {};
export type PlusCarouselIndicatorsEventsJSX = Filter<PlusCarouselIndicatorsEventsBaseJSX, PlusCarouselIndicatorsDisables, {}>;
export type PlusCarouselIndicatorsEventsBaseJSX = {};
export type PlusCarouselIndicatorsMethods = Filter<PlusCarouselIndicatorsMethodsBase, PlusCarouselIndicatorsDisables>;
export type PlusCarouselIndicatorsMethodsBase = {};
export type PlusCarouselIndicatorsProperties = Filter<PlusCarouselIndicatorsPropertiesOverridden, PlusCarouselIndicatorsDisables>;
export type PlusCarouselIndicatorsPropertiesOverridden = Override<PlusCarouselIndicatorsPropertiesBase, PlusCarouselIndicatorsOverrides, PlusCarouselIndicatorsOverridableKeys>;
export type PlusCarouselIndicatorsPropertiesBase = {
  /**
  * Controls what happens when you click an indicator.
  * If `true`, it smoothly moves to the slide,
  * and if set to `jump`, it instantly jumps without animation.
  */
  clickable?: boolean | 'jump';
  /**
  * Allows indicators to wrap around the carousel when reaching the beginning or end.
  */
  infinity?: boolean;
  /**
  * Displays slide numbers inside the indicators.
  */
  numbers?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselIndicatorsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-indicators': {
      properties: PlusCarouselIndicatorsPropertiesOverridden;
    };
  }
}
export type PlusCarouselIndicatorsElement = globalThis.HTMLPlusCarouselIndicatorsElement;
export type PlusCarouselIndicatorsJSX = PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-indicators": PlusCarouselIndicatorsJSX;
  }
}
declare global {
  interface HTMLPlusCarouselIndicatorsElement extends HTMLElement, PlusCarouselIndicatorsMethods, PlusCarouselIndicatorsProperties {}
  var HTMLPlusCarouselIndicatorsElement: {
    prototype: HTMLPlusCarouselIndicatorsElement;
    new (): HTMLPlusCarouselIndicatorsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-indicators": HTMLPlusCarouselIndicatorsElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, HTMLPlusCarouselIndicatorsElement>, keyof PlusCarouselIndicatorsJSX>;
    }
  }
}