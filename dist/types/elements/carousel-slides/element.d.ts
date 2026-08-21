import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCarouselSlides extends CarouselChild {
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    events: EmblaEventType[];
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselSlidesAttributesMapper = {};
export type PlusCarouselSlidesOverridableKeys = 'preset';
export interface PlusCarouselSlidesDisables {}
export interface PlusCarouselSlidesOverrides {}
export type PlusCarouselSlidesAttributes = Rename<PlusCarouselSlidesProperties, PlusCarouselSlidesAttributesMapper>;
export type PlusCarouselSlidesAttributesOverridden = Rename<PlusCarouselSlidesPropertiesOverridden, PlusCarouselSlidesAttributesMapper>;
export type PlusCarouselSlidesAttributesBase = Rename<PlusCarouselSlidesPropertiesBase, PlusCarouselSlidesAttributesMapper>;
export type PlusCarouselSlidesEvents = Filter<PlusCarouselSlidesEventsBase, PlusCarouselSlidesDisables>;
export type PlusCarouselSlidesEventsBase = ToEventHandlers<Pick<PlusCarouselSlides, PlusCarouselSlidesEventsKeys>>;
export type PlusCarouselSlidesEventsKeys = never;
export type PlusCarouselSlidesEventsJSX = ToJSXEvent<PlusCarouselSlidesEvents>;
export type PlusCarouselSlidesEventsBaseJSX = ToJSXEvent<PlusCarouselSlidesEventsBase>;
export type PlusCarouselSlidesMethods = Filter<PlusCarouselSlidesMethodsBase, PlusCarouselSlidesDisables>;
export type PlusCarouselSlidesMethodsBase = Pick<PlusCarouselSlides, PlusCarouselSlidesMethodsKeys>;
export type PlusCarouselSlidesMethodsKeys = never;
export type PlusCarouselSlidesProperties = Filter<PlusCarouselSlidesPropertiesOverridden, PlusCarouselSlidesDisables>;
export type PlusCarouselSlidesPropertiesOverridden = Override<PlusCarouselSlidesPropertiesBase, PlusCarouselSlidesOverrides, PlusCarouselSlidesOverridableKeys>;
export type PlusCarouselSlidesPropertiesBase = Pick<PlusCarouselSlides, PlusCarouselSlidesPropertiesKeys>;
export type PlusCarouselSlidesPropertiesKeys = 'overrides' | 'preset';
export type PlusCarouselSlidesElement = globalThis.HTMLPlusCarouselSlidesElement;
export type PlusCarouselSlidesJSX = PlusCarouselSlidesAttributes & PlusCarouselSlidesEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-slides": PlusCarouselSlidesJSX;
  }
}
declare global {
  interface HTMLPlusCarouselSlidesElement extends HTMLElement, PlusCarouselSlidesMethods, PlusCarouselSlidesProperties {}
  var HTMLPlusCarouselSlidesElement: {
    prototype: HTMLPlusCarouselSlidesElement;
    new (): HTMLPlusCarouselSlidesElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-slides": HTMLPlusCarouselSlidesElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-slides': {
      properties: PlusCarouselSlidesPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slides": PlusCarouselSlidesJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselSlidesElement>, HTMLPlusCarouselSlidesElement>, keyof PlusCarouselSlidesJSX>;
    }
  }
}