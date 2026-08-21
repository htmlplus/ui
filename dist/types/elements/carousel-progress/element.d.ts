import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 */
export declare class PlusCarouselProgress extends CarouselChild {
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    $bar: HTMLElement;
    events: EmblaEventType[];
    handleUpdate(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselProgressAttributesMapper = {};
export type PlusCarouselProgressOverridableKeys = 'preset';
export interface PlusCarouselProgressDisables {}
export interface PlusCarouselProgressOverrides {}
export type PlusCarouselProgressAttributes = Rename<PlusCarouselProgressProperties, PlusCarouselProgressAttributesMapper>;
export type PlusCarouselProgressAttributesOverridden = Rename<PlusCarouselProgressPropertiesOverridden, PlusCarouselProgressAttributesMapper>;
export type PlusCarouselProgressAttributesBase = Rename<PlusCarouselProgressPropertiesBase, PlusCarouselProgressAttributesMapper>;
export type PlusCarouselProgressEvents = Filter<PlusCarouselProgressEventsBase, PlusCarouselProgressDisables>;
export type PlusCarouselProgressEventsBase = ToEventHandlers<Pick<PlusCarouselProgress, PlusCarouselProgressEventsKeys>>;
export type PlusCarouselProgressEventsKeys = never;
export type PlusCarouselProgressEventsJSX = ToJSXEvent<PlusCarouselProgressEvents>;
export type PlusCarouselProgressEventsBaseJSX = ToJSXEvent<PlusCarouselProgressEventsBase>;
export type PlusCarouselProgressMethods = Filter<PlusCarouselProgressMethodsBase, PlusCarouselProgressDisables>;
export type PlusCarouselProgressMethodsBase = Pick<PlusCarouselProgress, PlusCarouselProgressMethodsKeys>;
export type PlusCarouselProgressMethodsKeys = never;
export type PlusCarouselProgressProperties = Filter<PlusCarouselProgressPropertiesOverridden, PlusCarouselProgressDisables>;
export type PlusCarouselProgressPropertiesOverridden = Override<PlusCarouselProgressPropertiesBase, PlusCarouselProgressOverrides, PlusCarouselProgressOverridableKeys>;
export type PlusCarouselProgressPropertiesBase = Pick<PlusCarouselProgress, PlusCarouselProgressPropertiesKeys>;
export type PlusCarouselProgressPropertiesKeys = 'overrides' | 'preset';
export type PlusCarouselProgressElement = globalThis.HTMLPlusCarouselProgressElement;
export type PlusCarouselProgressJSX = PlusCarouselProgressAttributes & PlusCarouselProgressEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-progress": PlusCarouselProgressJSX;
  }
}
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-progress': {
      properties: PlusCarouselProgressPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-progress": PlusCarouselProgressJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselProgressElement>, HTMLPlusCarouselProgressElement>, keyof PlusCarouselProgressJSX>;
    }
  }
}