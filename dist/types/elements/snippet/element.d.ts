import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
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
    color?: OverridableValue<string & {}, PlusColorOverrides>;
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
    overrides?: OverridesConfig<PlusBreakpoint>;
    get style(): {
        '--plus-snippet-color': string;
    };
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusSnippetAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Specifies the symbol.
  */
  "symbol"?: string;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusSnippetVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSnippetProperties, "overrides">>;
}
export interface PlusSnippetAttributesDisables {}
export type PlusSnippetAttributes = Filter<PlusSnippetAttributesBase, PlusSnippetAttributesDisables>;
export interface PlusSnippetEventsBase {}
export interface PlusSnippetEventsDisables {}
export type PlusSnippetEvents = Filter<PlusSnippetEventsBase, PlusSnippetEventsDisables>;
export interface PlusSnippetMethodsBase {}
export interface PlusSnippetMethodsDisables {}
export type PlusSnippetMethods = Filter<PlusSnippetMethodsBase, PlusSnippetMethodsDisables>;
export interface PlusSnippetPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Specifies the symbol.
  */
  symbol?: string;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusSnippetVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSnippetProperties, "overrides">>;
}
export interface PlusSnippetPropertiesDisables {}
export type PlusSnippetProperties = Filter<PlusSnippetPropertiesBase, PlusSnippetPropertiesDisables>;
export type PlusSnippetAttributesAndEvents = PlusSnippetAttributes & PlusSnippetEvents;
export interface PlusSnippetJSX extends PlusSnippetEvents, PlusSnippetProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-snippet": PlusSnippetAttributes & PlusSnippetEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSnippetElement>, keyof PlusSnippetAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSnippetElement>, keyof PlusSnippetAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSnippetElement>, keyof PlusSnippetAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSnippetElement>, keyof PlusSnippetAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSnippetElement>, keyof PlusSnippetAttributesAndEvents>;
    }
  }
}
export type PlusSnippetElement = globalThis.HTMLPlusSnippetElement;
export interface PlusSnippetVariantOverrides {}