import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
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
export declare class Snippet extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Specifies the symbol.
     */
    symbol?: string;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    get style(): {
        '--plus-snippet-color': string;
    };
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface SnippetAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the symbol.
  */
  "symbol"?: string;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, SnippetVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<SnippetProperties, "overrides">>;
}
export interface SnippetAttributesDisables {}
export type SnippetAttributes = Filter<SnippetAttributesBase, SnippetAttributesDisables>;
export interface SnippetEventsBase {}
export interface SnippetEventsDisables {}
export type SnippetEvents = Filter<SnippetEventsBase, SnippetEventsDisables>;
export interface SnippetMethodsBase {}
export interface SnippetMethodsDisables {}
export type SnippetMethods = Filter<SnippetMethodsBase, SnippetMethodsDisables>;
export interface SnippetPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the symbol.
  */
  symbol?: string;
  /**
  * TODO
  */
  variant?: OverridableValue<never, SnippetVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<SnippetProperties, "overrides">>;
}
export interface SnippetPropertiesDisables {}
export type SnippetProperties = Filter<SnippetPropertiesBase, SnippetPropertiesDisables>;
export interface SnippetJSX extends SnippetEvents, SnippetProperties {}
declare global {
  interface HTMLPlusSnippetElement extends HTMLElement, SnippetMethods, SnippetProperties {}
  var HTMLPlusSnippetElement: {
    prototype: HTMLPlusSnippetElement;
    new (): HTMLPlusSnippetElement;
  };
  interface HTMLElementTagNameMap {
    "plus-snippet": HTMLPlusSnippetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": SnippetEvents & SnippetAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SnippetEvents & SnippetAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": SnippetEvents & SnippetAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SnippetEvents & SnippetAttributes)>;
    }
  }
}
export type SnippetElement = globalThis.HTMLPlusSnippetElement;
export interface SnippetVariantOverrides {}