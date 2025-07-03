import { EmblaEventType } from 'embla-carousel';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 */
export declare class CarouselIndicators extends CarouselChild {
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
    events: EmblaEventType[];
    get indexes(): number[];
    scrollTo(index: number): void;
    get style(): {
        '--plus-carousel-indicators-selected': number;
    };
    getClass(index: number): string;
    render(): any;
}

export interface CarouselIndicatorsAttributes {
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
}
export interface CarouselIndicatorsEvents {}
export interface CarouselIndicatorsMethods {}
export interface CarouselIndicatorsProperties {
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
}
export interface CarouselIndicatorsJSX extends CarouselIndicatorsEvents, CarouselIndicatorsProperties {}
declare global {
  interface HTMLPlusCarouselIndicatorsElement extends HTMLElement, CarouselIndicatorsMethods, CarouselIndicatorsProperties {}
  var HTMLPlusCarouselIndicatorsElement: {
    prototype: HTMLPlusCarouselIndicatorsElement;
    new (): HTMLPlusCarouselIndicatorsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-indicators": HTMLPlusCarouselIndicatorsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": CarouselIndicatorsEvents & CarouselIndicatorsAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": CarouselIndicatorsEvents & CarouselIndicatorsAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CarouselIndicatorsElement = globalThis.HTMLPlusCarouselIndicatorsElement;