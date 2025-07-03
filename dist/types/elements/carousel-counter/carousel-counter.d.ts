import { EmblaEventType } from 'embla-carousel';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 */
export declare class CarouselCounter extends CarouselChild {
    /**
     * A customizable template string for displaying the carousel's slide counter.
     *
     * This template supports two placeholders that will be dynamically replaced:
     * - `%CURRENT%`: Represents the number of the currently active slide.
     * - `%TOTAL%`: Represents the total number of slides in the carousel.
     */
    template?: string;
    events: EmblaEventType[];
    get content(): string;
    get current(): string;
    get total(): string;
    render(): string;
}

export interface CarouselCounterAttributes {
  /**
  * A customizable template string for displaying the carousel's slide counter.
  *
  * This template supports two placeholders that will be dynamically replaced:
  * - `%CURRENT%`: Represents the number of the currently active slide.
  * - `%TOTAL%`: Represents the total number of slides in the carousel.
  */
  "template"?: string;
}
export interface CarouselCounterEvents {}
export interface CarouselCounterMethods {}
export interface CarouselCounterProperties {
  /**
  * A customizable template string for displaying the carousel's slide counter.
  *
  * This template supports two placeholders that will be dynamically replaced:
  * - `%CURRENT%`: Represents the number of the currently active slide.
  * - `%TOTAL%`: Represents the total number of slides in the carousel.
  */
  template?: string;
}
export interface CarouselCounterJSX extends CarouselCounterEvents, CarouselCounterProperties {}
declare global {
  interface HTMLPlusCarouselCounterElement extends HTMLElement, CarouselCounterMethods, CarouselCounterProperties {}
  var HTMLPlusCarouselCounterElement: {
    prototype: HTMLPlusCarouselCounterElement;
    new (): HTMLPlusCarouselCounterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-counter": HTMLPlusCarouselCounterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": CarouselCounterEvents & CarouselCounterAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": CarouselCounterEvents & CarouselCounterAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CarouselCounterElement = globalThis.HTMLPlusCarouselCounterElement;