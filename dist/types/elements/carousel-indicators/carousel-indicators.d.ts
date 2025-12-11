import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { Breakpoint } from '../../types';
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
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    get indexes(): number[];
    scrollTo(index: number): void;
    get style(): {
        '--plus-carousel-indicators-selected': number;
    };
    getClass(index: number): string;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CarouselIndicatorsAttributesBase {
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
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselIndicatorsProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, CarouselIndicatorsVariantOverrides>;
}
export interface CarouselIndicatorsAttributesDisables {}
export type CarouselIndicatorsAttributes = Filter<CarouselIndicatorsAttributesBase, CarouselIndicatorsAttributesDisables>;
export interface CarouselIndicatorsEventsBase {}
export interface CarouselIndicatorsEventsDisables {}
export type CarouselIndicatorsEvents = Filter<CarouselIndicatorsEventsBase, CarouselIndicatorsEventsDisables>;
export interface CarouselIndicatorsMethodsBase {}
export interface CarouselIndicatorsMethodsDisables {}
export type CarouselIndicatorsMethods = Filter<CarouselIndicatorsMethodsBase, CarouselIndicatorsMethodsDisables>;
export interface CarouselIndicatorsPropertiesBase {
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
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselIndicatorsProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, CarouselIndicatorsVariantOverrides>;
}
export interface CarouselIndicatorsPropertiesDisables {}
export type CarouselIndicatorsProperties = Filter<CarouselIndicatorsPropertiesBase, CarouselIndicatorsPropertiesDisables>;
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
      "plus-carousel-indicators": CarouselIndicatorsEvents & CarouselIndicatorsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselIndicatorsEvents & CarouselIndicatorsAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": CarouselIndicatorsEvents & CarouselIndicatorsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CarouselIndicatorsEvents & CarouselIndicatorsAttributes)>;
    }
  }
}
export type CarouselIndicatorsElement = globalThis.HTMLPlusCarouselIndicatorsElement;
export interface CarouselIndicatorsVariantOverrides {}