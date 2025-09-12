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
    variant?: OverridableValue<string>;
    $bar: HTMLElement;
    events: EmblaEventType[];
    handleUpdate(): void;
    render(): any;
}

export interface CarouselProgressAttributes {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CarouselProgressProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, CarouselProgressVariantOverrides>;
}
export interface CarouselProgressEvents {}
export interface CarouselProgressMethods {}
export interface CarouselProgressProperties {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CarouselProgressProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, CarouselProgressVariantOverrides>;
}
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
      "plus-carousel-progress": CarouselProgressEvents & CarouselProgressAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": CarouselProgressEvents & CarouselProgressAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type CarouselProgressElement = globalThis.HTMLPlusCarouselProgressElement;
export interface CarouselProgressVariantOverrides {}