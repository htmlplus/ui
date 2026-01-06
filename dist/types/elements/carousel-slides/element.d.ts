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
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCarouselSlidesAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlidesProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCarouselSlidesVariantOverrides>;
}
export interface PlusCarouselSlidesAttributesDisables {}
export type PlusCarouselSlidesAttributes = Filter<PlusCarouselSlidesAttributesBase, PlusCarouselSlidesAttributesDisables>;
export interface PlusCarouselSlidesEventsBase {}
export interface PlusCarouselSlidesEventsDisables {}
export type PlusCarouselSlidesEvents = Filter<PlusCarouselSlidesEventsBase, PlusCarouselSlidesEventsDisables>;
export interface PlusCarouselSlidesMethodsBase {}
export interface PlusCarouselSlidesMethodsDisables {}
export type PlusCarouselSlidesMethods = Filter<PlusCarouselSlidesMethodsBase, PlusCarouselSlidesMethodsDisables>;
export interface PlusCarouselSlidesPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlidesProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCarouselSlidesVariantOverrides>;
}
export interface PlusCarouselSlidesPropertiesDisables {}
export type PlusCarouselSlidesProperties = Filter<PlusCarouselSlidesPropertiesBase, PlusCarouselSlidesPropertiesDisables>;
export type PlusCarouselSlidesAttributesAndEvents = PlusCarouselSlidesAttributes & PlusCarouselSlidesEvents;
export interface PlusCarouselSlidesJSX extends PlusCarouselSlidesEvents, PlusCarouselSlidesProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-slides": PlusCarouselSlidesAttributes & PlusCarouselSlidesEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesAttributesAndEvents>;
    }
  }
}
export type PlusCarouselSlidesElement = globalThis.HTMLPlusCarouselSlidesElement;
export interface PlusCarouselSlidesVariantOverrides {}