import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselProgress extends CarouselChild {
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    $bar: HTMLElement;
    events: EmblaEventType[];
    handleUpdate(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCarouselProgressAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselProgressProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCarouselProgressVariantOverrides>;
}
export interface PlusCarouselProgressAttributesDisables {}
export type PlusCarouselProgressAttributes = Filter<PlusCarouselProgressAttributesBase, PlusCarouselProgressAttributesDisables>;
export interface PlusCarouselProgressEventsBase {}
export interface PlusCarouselProgressEventsDisables {}
export type PlusCarouselProgressEvents = Filter<PlusCarouselProgressEventsBase, PlusCarouselProgressEventsDisables>;
export interface PlusCarouselProgressMethodsBase {}
export interface PlusCarouselProgressMethodsDisables {}
export type PlusCarouselProgressMethods = Filter<PlusCarouselProgressMethodsBase, PlusCarouselProgressMethodsDisables>;
export interface PlusCarouselProgressPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCarouselProgressProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCarouselProgressVariantOverrides>;
}
export interface PlusCarouselProgressPropertiesDisables {}
export type PlusCarouselProgressProperties = Filter<PlusCarouselProgressPropertiesBase, PlusCarouselProgressPropertiesDisables>;
export interface PlusCarouselProgressJSX extends PlusCarouselProgressEvents, PlusCarouselProgressProperties {}
declare global {
  interface HTMLPlusCarouselProgressElement extends HTMLElement, PlusCarouselProgressMethods, PlusCarouselProgressProperties {}
  var HTMLPlusCarouselProgressElement: {
    prototype: HTMLPlusCarouselProgressElement;
    new (): HTMLPlusCarouselProgressElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-progress": HTMLPlusCarouselProgressElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-progress": PlusCarouselProgressAttributes & PlusCarouselProgressEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressAttributes & PlusCarouselProgressEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselProgressElement>, HTMLPlusCarouselProgressElement>, keyof (PlusCarouselProgressAttributes & PlusCarouselProgressEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressAttributes & PlusCarouselProgressEvents & Omit<HTMLAttributes<HTMLPlusCarouselProgressElement>, keyof (PlusCarouselProgressAttributes & PlusCarouselProgressEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressAttributes & PlusCarouselProgressEvents & Omit<HTMLAttributes<HTMLPlusCarouselProgressElement>, keyof (PlusCarouselProgressAttributes & PlusCarouselProgressEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressAttributes & PlusCarouselProgressEvents & Omit<HTMLAttributes<HTMLPlusCarouselProgressElement>, keyof (PlusCarouselProgressAttributes & PlusCarouselProgressEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressAttributes & PlusCarouselProgressEvents & Omit<HTMLAttributes<HTMLPlusCarouselProgressElement>, keyof (PlusCarouselProgressAttributes & PlusCarouselProgressEvents)>;
    }
  }
}
export type PlusCarouselProgressElement = globalThis.HTMLPlusCarouselProgressElement;
export interface PlusCarouselProgressVariantOverrides {}