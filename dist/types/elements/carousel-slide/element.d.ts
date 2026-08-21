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
    clickable: boolean | 'jump';
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    events: EmblaEventType[];
    get index(): number;
    handleClick(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselSlideAttributesMapper = {};
export type PlusCarouselSlideOverridableKeys = 'preset';
export interface PlusCarouselSlideDisables {}
export interface PlusCarouselSlideOverrides {}
export type PlusCarouselSlideAttributes = Rename<PlusCarouselSlideProperties, PlusCarouselSlideAttributesMapper>;
export type PlusCarouselSlideAttributesOverridden = Rename<PlusCarouselSlidePropertiesOverridden, PlusCarouselSlideAttributesMapper>;
export type PlusCarouselSlideAttributesBase = Rename<PlusCarouselSlidePropertiesBase, PlusCarouselSlideAttributesMapper>;
export type PlusCarouselSlideEvents = Filter<PlusCarouselSlideEventsBase, PlusCarouselSlideDisables>;
export type PlusCarouselSlideEventsBase = ToEventHandlers<Pick<PlusCarouselSlide, PlusCarouselSlideEventsKeys>>;
export type PlusCarouselSlideEventsKeys = never;
export type PlusCarouselSlideEventsJSX = ToJSXEvent<PlusCarouselSlideEvents>;
export type PlusCarouselSlideEventsBaseJSX = ToJSXEvent<PlusCarouselSlideEventsBase>;
export type PlusCarouselSlideMethods = Filter<PlusCarouselSlideMethodsBase, PlusCarouselSlideDisables>;
export type PlusCarouselSlideMethodsBase = Pick<PlusCarouselSlide, PlusCarouselSlideMethodsKeys>;
export type PlusCarouselSlideMethodsKeys = never;
export type PlusCarouselSlideProperties = Filter<PlusCarouselSlidePropertiesOverridden, PlusCarouselSlideDisables>;
export type PlusCarouselSlidePropertiesOverridden = Override<PlusCarouselSlidePropertiesBase, PlusCarouselSlideOverrides, PlusCarouselSlideOverridableKeys>;
export type PlusCarouselSlidePropertiesBase = Pick<PlusCarouselSlide, PlusCarouselSlidePropertiesKeys>;
export type PlusCarouselSlidePropertiesKeys = 'clickable' | 'overrides' | 'preset';
export type PlusCarouselSlideElement = globalThis.HTMLPlusCarouselSlideElement;
export type PlusCarouselSlideJSX = PlusCarouselSlideAttributes & PlusCarouselSlideEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-slide": PlusCarouselSlideJSX;
  }
}
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-slide': {
      properties: PlusCarouselSlidePropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-slide": PlusCarouselSlideJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselSlideElement>, HTMLPlusCarouselSlideElement>, keyof PlusCarouselSlideJSX>;
    }
  }
}