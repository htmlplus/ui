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
    variant?: OverridableValue<string>;
    events: EmblaEventType[];
    render(): any;
}

export interface CarouselSlidesAttributes {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselSlidesProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, CarouselSlidesVariantOverrides>;
}
export interface CarouselSlidesEvents {}
export interface CarouselSlidesMethods {}
export interface CarouselSlidesProperties {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselSlidesProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, CarouselSlidesVariantOverrides>;
}
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
      "plus-carousel-slides": CarouselSlidesEvents & CarouselSlidesAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": CarouselSlidesEvents & CarouselSlidesAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type CarouselSlidesElement = globalThis.HTMLPlusCarouselSlidesElement;
export interface CarouselSlidesVariantOverrides {}