import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { Breakpoint } from '../../types';
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
    get current(): string;
    get total(): string;
    render(): string;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CarouselCounterAttributesBase {
  /**
  * A customizable template string for displaying the carousel's slide counter.
  *
  * This template supports two placeholders that will be dynamically replaced:
  * - `%CURRENT%`: Represents the number of the currently active slide.
  * - `%TOTAL%`: Represents the total number of slides in the carousel.
  */
  "template"?: string;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, CarouselCounterVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselCounterProperties, "overrides">>;
}
export interface CarouselCounterAttributesDisables {}
export type CarouselCounterAttributes = Filter<CarouselCounterAttributesBase, CarouselCounterAttributesDisables>;
export interface CarouselCounterEventsBase {}
export interface CarouselCounterEventsDisables {}
export type CarouselCounterEvents = Filter<CarouselCounterEventsBase, CarouselCounterEventsDisables>;
export interface CarouselCounterMethodsBase {}
export interface CarouselCounterMethodsDisables {}
export type CarouselCounterMethods = Filter<CarouselCounterMethodsBase, CarouselCounterMethodsDisables>;
export interface CarouselCounterPropertiesBase {
  /**
  * A customizable template string for displaying the carousel's slide counter.
  *
  * This template supports two placeholders that will be dynamically replaced:
  * - `%CURRENT%`: Represents the number of the currently active slide.
  * - `%TOTAL%`: Represents the total number of slides in the carousel.
  */
  template?: string;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, CarouselCounterVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselCounterProperties, "overrides">>;
}
export interface CarouselCounterPropertiesDisables {}
export type CarouselCounterProperties = Filter<CarouselCounterPropertiesBase, CarouselCounterPropertiesDisables>;
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
      "plus-carousel-counter": CarouselCounterEvents & CarouselCounterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselCounterEvents & CarouselCounterAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": CarouselCounterEvents & CarouselCounterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselCounterEvents & CarouselCounterAttributes)>;
    }
  }
}
export type CarouselCounterElement = globalThis.HTMLPlusCarouselCounterElement;
export interface CarouselCounterVariantOverrides {}