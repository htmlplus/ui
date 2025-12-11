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
    variant?: OverridableValue<string & {}>;
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CarouselButtonAttributesBase {
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
  "variant"?: OverridableValue<string & {}, CarouselButtonVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselButtonProperties, "overrides">>;
}
export interface CarouselButtonAttributesDisables {}
export type CarouselButtonAttributes = Filter<CarouselButtonAttributesBase, CarouselButtonAttributesDisables>;
export interface CarouselButtonEventsBase {}
export interface CarouselButtonEventsDisables {}
export type CarouselButtonEvents = Filter<CarouselButtonEventsBase, CarouselButtonEventsDisables>;
export interface CarouselButtonMethodsBase {}
export interface CarouselButtonMethodsDisables {}
export type CarouselButtonMethods = Filter<CarouselButtonMethodsBase, CarouselButtonMethodsDisables>;
export interface CarouselButtonPropertiesBase {
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
  variant?: OverridableValue<string & {}, CarouselButtonVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselButtonProperties, "overrides">>;
}
export interface CarouselButtonPropertiesDisables {}
export type CarouselButtonProperties = Filter<CarouselButtonPropertiesBase, CarouselButtonPropertiesDisables>;
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
      "plus-carousel-button": CarouselButtonEvents & CarouselButtonAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselButtonEvents & CarouselButtonAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": CarouselButtonEvents & CarouselButtonAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselButtonEvents & CarouselButtonAttributes)>;
    }
  }
}
export type CarouselButtonElement = globalThis.HTMLPlusCarouselButtonElement;
export interface CarouselButtonVariantOverrides {}