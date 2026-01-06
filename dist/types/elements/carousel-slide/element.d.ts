import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCarouselSlide extends CarouselChild {
    /**
     * Enables slide navigation when the slide is clicked.
     *
     * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
     * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
     *
     * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
     */
    clickable?: boolean | 'jump';
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    events: EmblaEventType[];
    get index(): number;
    handleClick(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCarouselSlideAttributesBase {
  /**
  * Enables slide navigation when the slide is clicked.
  *
  * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
  * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
  *
  * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
  */
  "clickable"?: boolean | 'jump';
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlideProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCarouselSlideVariantOverrides>;
}
export interface PlusCarouselSlideAttributesDisables {}
export type PlusCarouselSlideAttributes = Filter<PlusCarouselSlideAttributesBase, PlusCarouselSlideAttributesDisables>;
export interface PlusCarouselSlideEventsBase {}
export interface PlusCarouselSlideEventsDisables {}
export type PlusCarouselSlideEvents = Filter<PlusCarouselSlideEventsBase, PlusCarouselSlideEventsDisables>;
export interface PlusCarouselSlideMethodsBase {}
export interface PlusCarouselSlideMethodsDisables {}
export type PlusCarouselSlideMethods = Filter<PlusCarouselSlideMethodsBase, PlusCarouselSlideMethodsDisables>;
export interface PlusCarouselSlidePropertiesBase {
  /**
  * Enables slide navigation when the slide is clicked.
  *
  * - If set to `true`, clicking the slide scrolls it smoothly to the nearest snap point.
  * - If set to `'jump'`, clicking the slide instantly jumps to the snap point without animation.
  *
  * When the parent carousel has looping enabled, the slide will navigate via the shortest path to the target snap point.
  */
  clickable?: boolean | 'jump';
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselSlideProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCarouselSlideVariantOverrides>;
}
export interface PlusCarouselSlidePropertiesDisables {}
export type PlusCarouselSlideProperties = Filter<PlusCarouselSlidePropertiesBase, PlusCarouselSlidePropertiesDisables>;
export type PlusCarouselSlideAttributesAndEvents = PlusCarouselSlideAttributes & PlusCarouselSlideEvents;
export interface PlusCarouselSlideJSX extends PlusCarouselSlideEvents, PlusCarouselSlideProperties {}
declare global {
  interface HTMLPlusCarouselSlideElement extends HTMLElement, PlusCarouselSlideMethods, PlusCarouselSlideProperties {}
  var HTMLPlusCarouselSlideElement: {
    prototype: HTMLPlusCarouselSlideElement;
    new (): HTMLPlusCarouselSlideElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-slide": HTMLPlusCarouselSlideElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-slide": PlusCarouselSlideAttributes & PlusCarouselSlideEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideAttributesAndEvents>;
    }
  }
}
export type PlusCarouselSlideElement = globalThis.HTMLPlusCarouselSlideElement;
export interface PlusCarouselSlideVariantOverrides {}