import { EmblaEventType } from 'embla-carousel';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class CarouselButton extends CarouselChild {
    /**
     * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
     */
    jump?: boolean;
    /**
     * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
     */
    type?: 'previous' | 'next' | number;
    events: EmblaEventType[];
    get content(): string;
    get disabled(): boolean;
    handleClick(): void;
    render(): any;
}

export interface CarouselButtonAttributes {
  /**
  * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
  */
  "jump"?: boolean;
  /**
  * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
  */
  "type"?: 'previous' | 'next' | number;
}
export interface CarouselButtonEvents {}
export interface CarouselButtonMethods {}
export interface CarouselButtonProperties {
  /**
  * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
  */
  jump?: boolean;
  /**
  * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
  */
  type?: 'previous' | 'next' | number;
}
export interface CarouselButtonJSX extends CarouselButtonEvents, CarouselButtonProperties {}
declare global {
  interface HTMLPlusCarouselButtonElement extends HTMLElement, CarouselButtonMethods, CarouselButtonProperties {}
  var HTMLPlusCarouselButtonElement: {
    prototype: HTMLPlusCarouselButtonElement;
    new (): HTMLPlusCarouselButtonElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-button": HTMLPlusCarouselButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": CarouselButtonEvents & CarouselButtonAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": CarouselButtonEvents & CarouselButtonAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CarouselButtonElement = globalThis.HTMLPlusCarouselButtonElement;