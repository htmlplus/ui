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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    events: EmblaEventType[];
    get content(): string;
    get disabled(): boolean;
    handleClick(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCarouselButtonAttributesBase {
  /**
  * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
  */
  "jump"?: boolean;
  /**
  * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
  */
  "type"?: 'previous' | 'next' | number;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCarouselButtonVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselButtonProperties, "overrides">>;
}
export interface PlusCarouselButtonAttributesDisables {}
export type PlusCarouselButtonAttributes = Filter<PlusCarouselButtonAttributesBase, PlusCarouselButtonAttributesDisables>;
export interface PlusCarouselButtonEventsBase {}
export interface PlusCarouselButtonEventsDisables {}
export type PlusCarouselButtonEvents = Filter<PlusCarouselButtonEventsBase, PlusCarouselButtonEventsDisables>;
export interface PlusCarouselButtonMethodsBase {}
export interface PlusCarouselButtonMethodsDisables {}
export type PlusCarouselButtonMethods = Filter<PlusCarouselButtonMethodsBase, PlusCarouselButtonMethodsDisables>;
export interface PlusCarouselButtonPropertiesBase {
  /**
  * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
  */
  jump?: boolean;
  /**
  * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
  */
  type?: 'previous' | 'next' | number;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCarouselButtonVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselButtonProperties, "overrides">>;
}
export interface PlusCarouselButtonPropertiesDisables {}
export type PlusCarouselButtonProperties = Filter<PlusCarouselButtonPropertiesBase, PlusCarouselButtonPropertiesDisables>;
export type PlusCarouselButtonAttributesAndEvents = PlusCarouselButtonAttributes & PlusCarouselButtonEvents;
export interface PlusCarouselButtonJSX extends PlusCarouselButtonEvents, PlusCarouselButtonProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-button": PlusCarouselButtonAttributes & PlusCarouselButtonEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonAttributesAndEvents>;
    }
  }
}
export type PlusCarouselButtonElement = globalThis.HTMLPlusCarouselButtonElement;
export interface PlusCarouselButtonVariantOverrides {}