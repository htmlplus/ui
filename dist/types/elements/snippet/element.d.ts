import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
/**
 * A component that can be used to display inline code snippets.
 *
 * @part copy    - The copy element.
 * @part default - The default element.
 * @part pre     - The pre element.
 * @part symbol  - The symbol element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
 *
 * @examples default, symbol, color, custom-color
 */
export declare class PlusSnippet extends PlusCore {
    /**
     * Specifies the color.
     */
    color: OverridableValue<PlusColor>;
    /**
     * Specifies the symbol.
     */
    symbol: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    get style(): {
        ':host': {
            '--plus-snippet-color': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusSnippetAttributesMapper = {};
export type PlusSnippetOverridableKeys = 'color' | 'preset';
export interface PlusSnippetDisables {}
export interface PlusSnippetOverrides {}
export type PlusSnippetAttributes = Rename<PlusSnippetProperties, PlusSnippetAttributesMapper>;
export type PlusSnippetAttributesOverridden = Rename<PlusSnippetPropertiesOverridden, PlusSnippetAttributesMapper>;
export type PlusSnippetAttributesBase = Rename<PlusSnippetPropertiesBase, PlusSnippetAttributesMapper>;
export type PlusSnippetEvents = Filter<PlusSnippetEventsBase, PlusSnippetDisables>;
export type PlusSnippetEventsBase = ToEventHandlers<Pick<PlusSnippet, PlusSnippetEventsKeys>>;
export type PlusSnippetEventsKeys = never;
export type PlusSnippetEventsJSX = ToJSXEvent<PlusSnippetEvents>;
export type PlusSnippetEventsBaseJSX = ToJSXEvent<PlusSnippetEventsBase>;
export type PlusSnippetMethods = Filter<PlusSnippetMethodsBase, PlusSnippetDisables>;
export type PlusSnippetMethodsBase = Pick<PlusSnippet, PlusSnippetMethodsKeys>;
export type PlusSnippetMethodsKeys = never;
export type PlusSnippetProperties = Filter<PlusSnippetPropertiesOverridden, PlusSnippetDisables>;
export type PlusSnippetPropertiesOverridden = Override<PlusSnippetPropertiesBase, PlusSnippetOverrides, PlusSnippetOverridableKeys>;
export type PlusSnippetPropertiesBase = Pick<PlusSnippet, PlusSnippetPropertiesKeys>;
export type PlusSnippetPropertiesKeys = 'color' | 'symbol' | 'overrides' | 'preset';
export type PlusSnippetElement = globalThis.HTMLPlusSnippetElement;
export type PlusSnippetJSX = PlusSnippetAttributes & PlusSnippetEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-snippet": PlusSnippetJSX;
  }
}
declare global {
  interface HTMLPlusSnippetElement extends HTMLElement, PlusSnippetMethods, PlusSnippetProperties {}
  var HTMLPlusSnippetElement: {
    prototype: HTMLPlusSnippetElement;
    new (): HTMLPlusSnippetElement;
  };
  interface HTMLElementTagNameMap {
    "plus-snippet": HTMLPlusSnippetElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-snippet': {
      properties: PlusSnippetPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSnippetElement>, HTMLPlusSnippetElement>, keyof PlusSnippetJSX>;
    }
  }
}