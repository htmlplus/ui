import { EmblaEventType } from 'embla-carousel';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class CarouselSlide extends CarouselChild {
    /**
     * Enables slide navigation when the slide is clicked.
     *
     * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
     * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
     *
     * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
     */
    clickable?: boolean | 'jump';
    events: EmblaEventType[];
    get index(): number;
    handleClick(): void;
    render(): any;
}

export interface CarouselSlideAttributes {
  /**
  * Enables slide navigation when the slide is clicked.
  *
  * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
  * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
  *
  * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
  */
  "clickable"?: boolean | 'jump';
}
export interface CarouselSlideEvents {}
export interface CarouselSlideMethods {}
export interface CarouselSlideProperties {
  /**
  * Enables slide navigation when the slide is clicked.
  *
  * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
  * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
  *
  * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
  */
  clickable?: boolean | 'jump';
}
export interface CarouselSlideJSX extends CarouselSlideEvents, CarouselSlideProperties {}
declare global {
  interface HTMLPlusCarouselSlideElement extends HTMLElement, CarouselSlideMethods, CarouselSlideProperties {}
  var HTMLPlusCarouselSlideElement: {
    prototype: HTMLPlusCarouselSlideElement;
    new (): HTMLPlusCarouselSlideElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-slide": HTMLPlusCarouselSlideElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": CarouselSlideEvents & CarouselSlideAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": CarouselSlideEvents & CarouselSlideAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CarouselSlideElement = globalThis.HTMLPlusCarouselSlideElement;