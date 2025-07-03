import { EmblaEventType } from 'embla-carousel';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class CarouselSlides extends CarouselChild {
    events: EmblaEventType[];
    render(): any;
}

export interface CarouselSlidesAttributes {}
export interface CarouselSlidesEvents {}
export interface CarouselSlidesMethods {}
export interface CarouselSlidesProperties {}
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
      "plus-carousel-slides": CarouselSlidesEvents & CarouselSlidesAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": CarouselSlidesEvents & CarouselSlidesAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CarouselSlidesElement = globalThis.HTMLPlusCarouselSlidesElement;