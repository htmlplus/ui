import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCarouselButton extends CarouselChild {
    /**
     * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
     */
    jump?: boolean;
    /**
     * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
     */
    type?: 'previous' | 'next' | number;
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
    get disabled(): boolean;
    handleClick(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCarouselButtonAttributesMapper = {
  'jump': 'jump';
  'type': 'type';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCarouselButtonOverridableKeys = 'variant';
export interface PlusCarouselButtonDisables {}
export interface PlusCarouselButtonOverrides {}
export type PlusCarouselButtonAttributes = Filter<PlusCarouselButtonAttributesOverridden, PlusCarouselButtonDisables, PlusCarouselButtonAttributesMapper>;
export type PlusCarouselButtonAttributesOverridden = Override<PlusCarouselButtonAttributesBase, PlusCarouselButtonOverrides, PlusCarouselButtonOverridableKeys, PlusCarouselButtonAttributesMapper>;
export type PlusCarouselButtonAttributesBase = {
  /**
  * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
  */
  "jump"?: boolean;
  /**
  * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
  */
  "type"?: 'previous' | 'next' | number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselButtonProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCarouselButtonEvents = Filter<PlusCarouselButtonEventsBase, PlusCarouselButtonDisables>;
export type PlusCarouselButtonEventsBase = {};
export type PlusCarouselButtonEventsJSX = Filter<PlusCarouselButtonEventsBaseJSX, PlusCarouselButtonDisables, {}>;
export type PlusCarouselButtonEventsBaseJSX = {};
export type PlusCarouselButtonMethods = Filter<PlusCarouselButtonMethodsBase, PlusCarouselButtonDisables>;
export type PlusCarouselButtonMethodsBase = {};
export type PlusCarouselButtonProperties = Filter<PlusCarouselButtonPropertiesOverridden, PlusCarouselButtonDisables>;
export type PlusCarouselButtonPropertiesOverridden = Override<PlusCarouselButtonPropertiesBase, PlusCarouselButtonOverrides, PlusCarouselButtonOverridableKeys>;
export type PlusCarouselButtonPropertiesBase = {
  /**
  * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
  */
  jump?: boolean;
  /**
  * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
  */
  type?: 'previous' | 'next' | number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselButtonProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-button': {
      properties: PlusCarouselButtonPropertiesOverridden;
    };
  }
}
export type PlusCarouselButtonElement = globalThis.HTMLPlusCarouselButtonElement;
export type PlusCarouselButtonJSX = PlusCarouselButtonAttributes & PlusCarouselButtonEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-button": PlusCarouselButtonJSX;
  }
}
declare global {
  interface HTMLPlusCarouselButtonElement extends HTMLElement, PlusCarouselButtonMethods, PlusCarouselButtonProperties {}
  var HTMLPlusCarouselButtonElement: {
    prototype: HTMLPlusCarouselButtonElement;
    new (): HTMLPlusCarouselButtonElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-button": HTMLPlusCarouselButtonElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselButtonElement>, HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonJSX>;
    }
  }
}