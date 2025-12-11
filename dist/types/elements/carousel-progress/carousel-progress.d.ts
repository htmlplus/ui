import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { Breakpoint } from '../../types';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 */
export declare class CarouselProgress extends CarouselChild {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    $bar: HTMLElement;
    events: EmblaEventType[];
    handleUpdate(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CarouselProgressAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselProgressProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, CarouselProgressVariantOverrides>;
}
export interface CarouselProgressAttributesDisables {}
export type CarouselProgressAttributes = Filter<CarouselProgressAttributesBase, CarouselProgressAttributesDisables>;
export interface CarouselProgressEventsBase {}
export interface CarouselProgressEventsDisables {}
export type CarouselProgressEvents = Filter<CarouselProgressEventsBase, CarouselProgressEventsDisables>;
export interface CarouselProgressMethodsBase {}
export interface CarouselProgressMethodsDisables {}
export type CarouselProgressMethods = Filter<CarouselProgressMethodsBase, CarouselProgressMethodsDisables>;
export interface CarouselProgressPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselProgressProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, CarouselProgressVariantOverrides>;
}
export interface CarouselProgressPropertiesDisables {}
export type CarouselProgressProperties = Filter<CarouselProgressPropertiesBase, CarouselProgressPropertiesDisables>;
export interface CarouselProgressJSX extends CarouselProgressEvents, CarouselProgressProperties {}
declare global {
  interface HTMLPlusCarouselProgressElement extends HTMLElement, CarouselProgressMethods, CarouselProgressProperties {}
  var HTMLPlusCarouselProgressElement: {
    prototype: HTMLPlusCarouselProgressElement;
    new (): HTMLPlusCarouselProgressElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-progress": HTMLPlusCarouselProgressElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": CarouselProgressEvents & CarouselProgressAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselProgressEvents & CarouselProgressAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": CarouselProgressEvents & CarouselProgressAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselProgressEvents & CarouselProgressAttributes)>;
    }
  }
}
export type CarouselProgressElement = globalThis.HTMLPlusCarouselProgressElement;
export interface CarouselProgressVariantOverrides {}