import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { PlusScrollDetectorChangeEvent } from './types';
/**
 * Detects scroll event from an element.
 *
 * @stable
 *
 * @examples default, scroll-indicator
 */
export declare class PlusScrollDetector extends PlusCore {
    /**
     * Disables the element functionality.
     */
    disabled: boolean;
    /**
     * Specifies the reference of the scroll.
     */
    reference: Element | 'document' | (string & {});
    /**
     * Indicates which scroll (horizontal or vertical) is to be used as the source.
     */
    vertical: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * Fires when the scroll starts changing.
     */
    plusChange: EventEmitter<PlusScrollDetectorChangeEvent>;
    offset?: number;
    get $reference(): Document | Element | undefined;
    watcher(next: unknown): void;
    initialize(): void;
    terminate(): void;
    onScroll(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusScrollDetectorAttributesMapper = {};
export type PlusScrollDetectorOverridableKeys = 'preset';
export interface PlusScrollDetectorDisables {}
export interface PlusScrollDetectorOverrides {}
export type PlusScrollDetectorAttributes = Rename<PlusScrollDetectorProperties, PlusScrollDetectorAttributesMapper>;
export type PlusScrollDetectorAttributesOverridden = Rename<PlusScrollDetectorPropertiesOverridden, PlusScrollDetectorAttributesMapper>;
export type PlusScrollDetectorAttributesBase = Rename<PlusScrollDetectorPropertiesBase, PlusScrollDetectorAttributesMapper>;
export type PlusScrollDetectorEvents = Filter<PlusScrollDetectorEventsBase, PlusScrollDetectorDisables>;
export type PlusScrollDetectorEventsBase = ToEventHandlers<Pick<PlusScrollDetector, PlusScrollDetectorEventsKeys>>;
export type PlusScrollDetectorEventsKeys = 'plusChange';
export type PlusScrollDetectorEventsJSX = ToJSXEvent<PlusScrollDetectorEvents>;
export type PlusScrollDetectorEventsBaseJSX = ToJSXEvent<PlusScrollDetectorEventsBase>;
export type PlusScrollDetectorMethods = Filter<PlusScrollDetectorMethodsBase, PlusScrollDetectorDisables>;
export type PlusScrollDetectorMethodsBase = Pick<PlusScrollDetector, PlusScrollDetectorMethodsKeys>;
export type PlusScrollDetectorMethodsKeys = never;
export type PlusScrollDetectorProperties = Filter<PlusScrollDetectorPropertiesOverridden, PlusScrollDetectorDisables>;
export type PlusScrollDetectorPropertiesOverridden = Override<PlusScrollDetectorPropertiesBase, PlusScrollDetectorOverrides, PlusScrollDetectorOverridableKeys>;
export type PlusScrollDetectorPropertiesBase = Pick<PlusScrollDetector, PlusScrollDetectorPropertiesKeys>;
export type PlusScrollDetectorPropertiesKeys = 'disabled' | 'reference' | 'vertical' | 'overrides' | 'preset';
export type PlusScrollDetectorElement = globalThis.HTMLPlusScrollDetectorElement;
export type PlusScrollDetectorJSX = PlusScrollDetectorAttributes & PlusScrollDetectorEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-scroll-detector": PlusScrollDetectorJSX;
  }
}
declare global {
  interface HTMLPlusScrollDetectorElement extends HTMLElement, PlusScrollDetectorMethods, PlusScrollDetectorProperties {}
  var HTMLPlusScrollDetectorElement: {
    prototype: HTMLPlusScrollDetectorElement;
    new (): HTMLPlusScrollDetectorElement;
  };
  interface HTMLElementTagNameMap {
    "plus-scroll-detector": HTMLPlusScrollDetectorElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-scroll-detector': {
      properties: PlusScrollDetectorPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-scroll-detector": PlusScrollDetectorJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusScrollDetectorElement>, HTMLPlusScrollDetectorElement>, keyof PlusScrollDetectorJSX>;
    }
  }
}