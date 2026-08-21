import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { EmblaEventType } from 'embla-carousel';
import { PlusBreakpoint } from '../../types';
import { CarouselChild } from '../carousel/child';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCarouselButton extends CarouselChild {
    /**
     * Determines whether the carousel instantly jumps to the target slide or transitions smoothly.
     */
    jump: boolean;
    /**
     * Specifies whether the button is 'previous', 'next', or a `number` for navigating to a specific slide.
     */
    type: 'previous' | 'next' | number;
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
    get disabled(): boolean;
    handleClick(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusCarouselButtonAttributesMapper = {};
export type PlusCarouselButtonOverridableKeys = 'preset';
export interface PlusCarouselButtonDisables {}
export interface PlusCarouselButtonOverrides {}
export type PlusCarouselButtonAttributes = Rename<PlusCarouselButtonProperties, PlusCarouselButtonAttributesMapper>;
export type PlusCarouselButtonAttributesOverridden = Rename<PlusCarouselButtonPropertiesOverridden, PlusCarouselButtonAttributesMapper>;
export type PlusCarouselButtonAttributesBase = Rename<PlusCarouselButtonPropertiesBase, PlusCarouselButtonAttributesMapper>;
export type PlusCarouselButtonEvents = Filter<PlusCarouselButtonEventsBase, PlusCarouselButtonDisables>;
export type PlusCarouselButtonEventsBase = ToEventHandlers<Pick<PlusCarouselButton, PlusCarouselButtonEventsKeys>>;
export type PlusCarouselButtonEventsKeys = never;
export type PlusCarouselButtonEventsJSX = ToJSXEvent<PlusCarouselButtonEvents>;
export type PlusCarouselButtonEventsBaseJSX = ToJSXEvent<PlusCarouselButtonEventsBase>;
export type PlusCarouselButtonMethods = Filter<PlusCarouselButtonMethodsBase, PlusCarouselButtonDisables>;
export type PlusCarouselButtonMethodsBase = Pick<PlusCarouselButton, PlusCarouselButtonMethodsKeys>;
export type PlusCarouselButtonMethodsKeys = never;
export type PlusCarouselButtonProperties = Filter<PlusCarouselButtonPropertiesOverridden, PlusCarouselButtonDisables>;
export type PlusCarouselButtonPropertiesOverridden = Override<PlusCarouselButtonPropertiesBase, PlusCarouselButtonOverrides, PlusCarouselButtonOverridableKeys>;
export type PlusCarouselButtonPropertiesBase = Pick<PlusCarouselButton, PlusCarouselButtonPropertiesKeys>;
export type PlusCarouselButtonPropertiesKeys = 'jump' | 'type' | 'overrides' | 'preset';
export type PlusCarouselButtonElement = globalThis.HTMLPlusCarouselButtonElement;
export type PlusCarouselButtonJSX = PlusCarouselButtonAttributes & PlusCarouselButtonEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-carousel-button": PlusCarouselButtonJSX;
  }
}
declare global {
  interface HTMLPlusCarouselButtonElement extends HTMLElement, PlusCarouselButtonMethods, PlusCarouselButtonProperties {}
  var HTMLPlusCarouselButtonElement: {
    prototype: HTMLPlusCarouselButtonElement;
    new (): HTMLPlusCarouselButtonElement;
  };
  interface HTMLElementTagNameMap {
    "plus-carousel-button": HTMLPlusCarouselButtonElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-carousel-button': {
      properties: PlusCarouselButtonPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-carousel-button": PlusCarouselButtonJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCarouselButtonElement>, HTMLPlusCarouselButtonElement>, keyof PlusCarouselButtonJSX>;
    }
  }
}