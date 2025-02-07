import { PlusCore } from '../../core';
/**
 * @part copy    - The copy element.
 * @part default - The default element.
 * @part pre     - The pre element.
 * @part symbol  - The symbol element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
 */
export declare class Snippet extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Specifies the symbol.
     */
    symbol?: string;
    get style(): {
        '--plus-snippet-color': string;
    };
    render(): any;
}

export interface SnippetAttributes {
  /**
  * Specifies the color.
  */
  "color"?: string;
  /**
  * Specifies the symbol.
  */
  "symbol"?: string;
}
export interface SnippetEvents {}
export interface SnippetMethods {}
export interface SnippetProperties {
  /**
  * Specifies the color.
  */
  color?: string;
  /**
  * Specifies the symbol.
  */
  symbol?: string;
}
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
      "plus-snippet": SnippetEvents & SnippetAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": SnippetEvents & SnippetAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type SnippetElement = globalThis.HTMLPlusSnippetElement;