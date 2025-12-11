import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { Breakpoint } from '../../types';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class CarouselSlides extends CarouselChild {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CarouselSlidesAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselSlidesProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, CarouselSlidesVariantOverrides>;
}
export interface CarouselSlidesAttributesDisables {}
export type CarouselSlidesAttributes = Filter<CarouselSlidesAttributesBase, CarouselSlidesAttributesDisables>;
export interface CarouselSlidesEventsBase {}
export interface CarouselSlidesEventsDisables {}
export type CarouselSlidesEvents = Filter<CarouselSlidesEventsBase, CarouselSlidesEventsDisables>;
export interface CarouselSlidesMethodsBase {}
export interface CarouselSlidesMethodsDisables {}
export type CarouselSlidesMethods = Filter<CarouselSlidesMethodsBase, CarouselSlidesMethodsDisables>;
export interface CarouselSlidesPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselSlidesProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, CarouselSlidesVariantOverrides>;
}
export interface CarouselSlidesPropertiesDisables {}
export type CarouselSlidesProperties = Filter<CarouselSlidesPropertiesBase, CarouselSlidesPropertiesDisables>;
export interface CarouselSlidesJSX extends CarouselSlidesEvents, CarouselSlidesProperties {}
declare global {
  interface HTMLPlusCarouselSlidesElement extends HTMLElement, CarouselSlidesMethods, CarouselSlidesProperties {}
  var HTMLPlusCarouselSlidesElement: {
    prototype: HTMLPlusCarouselSlidesElement;
    new (): HTMLPlusCarouselSlidesElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-slides": HTMLPlusCarouselSlidesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": CarouselSlidesEvents & CarouselSlidesAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselSlidesEvents & CarouselSlidesAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": CarouselSlidesEvents & CarouselSlidesAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselSlidesEvents & CarouselSlidesAttributes)>;
    }
  }
}
export type CarouselSlidesElement = globalThis.HTMLPlusCarouselSlidesElement;
export interface CarouselSlidesVariantOverrides {}