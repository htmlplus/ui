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
    template: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    events: EmblaEventType[];
    get content(): string;
    get current(): string;
    get total(): string;
    render(): string;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselCounterAttributesMapper = {};
export type PlusCarouselCounterOverridableKeys = 'preset';
export interface PlusCarouselCounterDisables {}
export interface PlusCarouselCounterOverrides {}
export type PlusCarouselCounterAttributes = Rename<PlusCarouselCounterProperties, PlusCarouselCounterAttributesMapper>;
export type PlusCarouselCounterAttributesOverridden = Rename<PlusCarouselCounterPropertiesOverridden, PlusCarouselCounterAttributesMapper>;
export type PlusCarouselCounterAttributesBase = Rename<PlusCarouselCounterPropertiesBase, PlusCarouselCounterAttributesMapper>;
export type PlusCarouselCounterEvents = Filter<PlusCarouselCounterEventsBase, PlusCarouselCounterDisables>;
export type PlusCarouselCounterEventsBase = ToEventHandlers<Pick<PlusCarouselCounter, PlusCarouselCounterEventsKeys>>;
export type PlusCarouselCounterEventsKeys = never;
export type PlusCarouselCounterEventsJSX = ToJSXEvent<PlusCarouselCounterEvents>;
export type PlusCarouselCounterEventsBaseJSX = ToJSXEvent<PlusCarouselCounterEventsBase>;
export type PlusCarouselCounterMethods = Filter<PlusCarouselCounterMethodsBase, PlusCarouselCounterDisables>;
export type PlusCarouselCounterMethodsBase = Pick<PlusCarouselCounter, PlusCarouselCounterMethodsKeys>;
export type PlusCarouselCounterMethodsKeys = never;
export type PlusCarouselCounterProperties = Filter<PlusCarouselCounterPropertiesOverridden, PlusCarouselCounterDisables>;
export type PlusCarouselCounterPropertiesOverridden = Override<PlusCarouselCounterPropertiesBase, PlusCarouselCounterOverrides, PlusCarouselCounterOverridableKeys>;
export type PlusCarouselCounterPropertiesBase = Pick<PlusCarouselCounter, PlusCarouselCounterPropertiesKeys>;
export type PlusCarouselCounterPropertiesKeys = 'template' | 'overrides' | 'preset';
export type PlusCarouselCounterElement = globalThis.HTMLPlusCarouselCounterElement;
export type PlusCarouselCounterJSX = PlusCarouselCounterAttributes & PlusCarouselCounterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-counter": PlusCarouselCounterJSX;
  }
}
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-counter': {
      properties: PlusCarouselCounterPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-counter": PlusCarouselCounterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselCounterElement>, HTMLPlusCarouselCounterElement>, keyof PlusCarouselCounterJSX>;
    }
  }
}