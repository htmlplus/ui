import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselCounter extends CarouselChild {
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
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    events: EmblaEventType[];
    get content(): string;
    get current(): string;
    get total(): string;
    render(): string;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCarouselCounterAttributesBase {
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
  "variant"?: OverridableValue<never, PlusCarouselCounterVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselCounterProperties, "overrides">>;
}
export interface PlusCarouselCounterAttributesDisables {}
export type PlusCarouselCounterAttributes = Filter<PlusCarouselCounterAttributesBase, PlusCarouselCounterAttributesDisables>;
export interface PlusCarouselCounterEventsBase {}
export interface PlusCarouselCounterEventsDisables {}
export type PlusCarouselCounterEvents = Filter<PlusCarouselCounterEventsBase, PlusCarouselCounterEventsDisables>;
export interface PlusCarouselCounterMethodsBase {}
export interface PlusCarouselCounterMethodsDisables {}
export type PlusCarouselCounterMethods = Filter<PlusCarouselCounterMethodsBase, PlusCarouselCounterMethodsDisables>;
export interface PlusCarouselCounterPropertiesBase {
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
  variant?: OverridableValue<never, PlusCarouselCounterVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselCounterProperties, "overrides">>;
}
export interface PlusCarouselCounterPropertiesDisables {}
export type PlusCarouselCounterProperties = Filter<PlusCarouselCounterPropertiesBase, PlusCarouselCounterPropertiesDisables>;
export type PlusCarouselCounterAttributesAndEvents = PlusCarouselCounterAttributes & PlusCarouselCounterEvents;
export interface PlusCarouselCounterJSX extends PlusCarouselCounterEvents, PlusCarouselCounterProperties {}
declare global {
  interface HTMLPlusCarouselCounterElement extends HTMLElement, PlusCarouselCounterMethods, PlusCarouselCounterProperties {}
  var HTMLPlusCarouselCounterElement: {
    prototype: HTMLPlusCarouselCounterElement;
    new (): HTMLPlusCarouselCounterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-counter": HTMLPlusCarouselCounterElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-counter": PlusCarouselCounterAttributes & PlusCarouselCounterEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterAttributesAndEvents>;
    }
  }
}
export type PlusCarouselCounterElement = globalThis.HTMLPlusCarouselCounterElement;
export interface PlusCarouselCounterVariantOverrides {}