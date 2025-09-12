import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { Breakpoint } from '../../types';
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
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, CarouselButtonVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselButtonProperties, "overrides">>;
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
  /**
  * TODO
  */
  variant?: OverridableValue<string, CarouselButtonVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselButtonProperties, "overrides">>;
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
      "plus-carousel-button": CarouselButtonEvents & CarouselButtonAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": CarouselButtonEvents & CarouselButtonAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type CarouselButtonElement = globalThis.HTMLPlusCarouselButtonElement;
export interface CarouselButtonVariantOverrides {}