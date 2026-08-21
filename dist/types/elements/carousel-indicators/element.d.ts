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
    clickable: boolean | 'jump';
    /**
     * Allows indicators to wrap around the carousel when reaching the beginning or end.
     */
    infinity: boolean;
    /**
     * Displays slide numbers inside the indicators.
     */
    numbers: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    events: EmblaEventType[];
    get indexes(): number[];
    get selected(): number;
    scrollTo(index: number): void;
    get style(): {
        ':host': {
            '--plus-carousel-indicators-selected': number;
        };
    };
    getClass(index: number): string;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselIndicatorsAttributesMapper = {};
export type PlusCarouselIndicatorsOverridableKeys = 'preset';
export interface PlusCarouselIndicatorsDisables {}
export interface PlusCarouselIndicatorsOverrides {}
export type PlusCarouselIndicatorsAttributes = Rename<PlusCarouselIndicatorsProperties, PlusCarouselIndicatorsAttributesMapper>;
export type PlusCarouselIndicatorsAttributesOverridden = Rename<PlusCarouselIndicatorsPropertiesOverridden, PlusCarouselIndicatorsAttributesMapper>;
export type PlusCarouselIndicatorsAttributesBase = Rename<PlusCarouselIndicatorsPropertiesBase, PlusCarouselIndicatorsAttributesMapper>;
export type PlusCarouselIndicatorsEvents = Filter<PlusCarouselIndicatorsEventsBase, PlusCarouselIndicatorsDisables>;
export type PlusCarouselIndicatorsEventsBase = ToEventHandlers<Pick<PlusCarouselIndicators, PlusCarouselIndicatorsEventsKeys>>;
export type PlusCarouselIndicatorsEventsKeys = never;
export type PlusCarouselIndicatorsEventsJSX = ToJSXEvent<PlusCarouselIndicatorsEvents>;
export type PlusCarouselIndicatorsEventsBaseJSX = ToJSXEvent<PlusCarouselIndicatorsEventsBase>;
export type PlusCarouselIndicatorsMethods = Filter<PlusCarouselIndicatorsMethodsBase, PlusCarouselIndicatorsDisables>;
export type PlusCarouselIndicatorsMethodsBase = Pick<PlusCarouselIndicators, PlusCarouselIndicatorsMethodsKeys>;
export type PlusCarouselIndicatorsMethodsKeys = never;
export type PlusCarouselIndicatorsProperties = Filter<PlusCarouselIndicatorsPropertiesOverridden, PlusCarouselIndicatorsDisables>;
export type PlusCarouselIndicatorsPropertiesOverridden = Override<PlusCarouselIndicatorsPropertiesBase, PlusCarouselIndicatorsOverrides, PlusCarouselIndicatorsOverridableKeys>;
export type PlusCarouselIndicatorsPropertiesBase = Pick<PlusCarouselIndicators, PlusCarouselIndicatorsPropertiesKeys>;
export type PlusCarouselIndicatorsPropertiesKeys = 'clickable' | 'infinity' | 'numbers' | 'overrides' | 'preset';
export type PlusCarouselIndicatorsElement = globalThis.HTMLPlusCarouselIndicatorsElement;
export type PlusCarouselIndicatorsJSX = PlusCarouselIndicatorsAttributes & PlusCarouselIndicatorsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-indicators": PlusCarouselIndicatorsJSX;
  }
}
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-indicators': {
      properties: PlusCarouselIndicatorsPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-indicators": PlusCarouselIndicatorsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselIndicatorsElement>, HTMLPlusCarouselIndicatorsElement>, keyof PlusCarouselIndicatorsJSX>;
    }
  }
}