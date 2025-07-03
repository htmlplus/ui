import { EmblaEventType } from 'embla-carousel';
import { CarouselChild } from '../carousel/carousel.child';
/**
 * @subset
 */
export declare class CarouselProgress extends CarouselChild {
    $bar: HTMLElement;
    events: EmblaEventType[];
    handleUpdate(): void;
    render(): any;
}

export interface CarouselProgressAttributes {}
export interface CarouselProgressEvents {}
export interface CarouselProgressMethods {}
export interface CarouselProgressProperties {}
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
      "plus-carousel-progress": CarouselProgressEvents & CarouselProgressAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": CarouselProgressEvents & CarouselProgressAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CarouselProgressElement = globalThis.HTMLPlusCarouselProgressElement;