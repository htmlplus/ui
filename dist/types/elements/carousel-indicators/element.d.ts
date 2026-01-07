import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselIndicators extends CarouselChild {
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
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    get indexes(): number[];
    get selected(): number;
    scrollTo(index: number): void;
    get style(): {
        '--plus-carousel-indicators-selected': number;
    };
    getClass(index: number): string;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCarouselIndicatorsAttributesBase {
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
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselIndicatorsProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCarouselIndicatorsVariantOverrides>;
}
export interface PlusCarouselIndicatorsAttributesDisables {}
export type PlusCarouselIndicatorsAttributes = Filter<PlusCarouselIndicatorsAttributesBase, PlusCarouselIndicatorsAttributesDisables>;
export interface PlusCarouselIndicatorsEventsBase {}
export interface PlusCarouselIndicatorsEventsDisables {}
export type PlusCarouselIndicatorsEvents = Filter<PlusCarouselIndicatorsEventsBase, PlusCarouselIndicatorsEventsDisables>;
export interface PlusCarouselIndicatorsMethodsBase {}
export interface PlusCarouselIndicatorsMethodsDisables {}
export type PlusCarouselIndicatorsMethods = Filter<PlusCarouselIndicatorsMethodsBase, PlusCarouselIndicatorsMethodsDisables>;
export interface PlusCarouselIndicatorsPropertiesBase {
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
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselIndicatorsProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCarouselIndicatorsVariantOverrides>;
}
export interface PlusCarouselIndicatorsPropertiesDisables {}
export type PlusCarouselIndicatorsProperties = Filter<PlusCarouselIndicatorsPropertiesBase, PlusCarouselIndicatorsPropertiesDisables>;
export interface PlusCarouselIndicatorsJSX extends PlusCarouselIndicatorsEvents, PlusCarouselIndicatorsProperties {}
declare global {
  interface HTMLPlusCarouselIndicatorsElement extends HTMLElement, PlusCarouselIndicatorsMethods, PlusCarouselIndicatorsProperties {}
  var HTMLPlusCarouselIndicatorsElement: {
    prototype: HTMLPlusCarouselIndicatorsElement;
    new (): HTMLPlusCarouselIndicatorsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-indicators": HTMLPlusCarouselIndicatorsElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-indicators": PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, HTMLPlusCarouselIndicatorsElement>, keyof (PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents & Omit<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, keyof (PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents & Omit<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, keyof (PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents & Omit<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, keyof (PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents & Omit<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, keyof (PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEvents)>;
    }
  }
}
export type PlusCarouselIndicatorsElement = globalThis.HTMLPlusCarouselIndicatorsElement;
export interface PlusCarouselIndicatorsVariantOverrides {}