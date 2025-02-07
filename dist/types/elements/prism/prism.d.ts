import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { PrismPlugins, PrismResolver } from './prism.types';
/**
 * @thirdParty
 * @dependencies prismjs
 *
 * @part code    - The code element.
 * @part copy    - The copy element.
 * @part pre     - The pre element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
 */
export declare class Prism extends PlusCore {
    /**
     * The programming language to highlight.
     */
    language?: string;
    /**
     * The theme to apply for syntax highlighting.
     */
    theme?: string;
    /**
     * Plugins to enhance Prism's functionality.
     */
    plugins?: PrismPlugins;
    /**
     * Whether to synchronize updates with DOM changes.
     */
    sync?: boolean;
    /**
     * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
     */
    resolver?: PrismResolver;
    $style: HTMLElement;
    tick: number;
    observer: MutationObserver;
    cache: AsyncCache<PrismResolver>;
    get attributes(): {};
    get assets(): {
        key: string;
        value: string;
    }[];
    get codeClass(): string;
    get html(): string;
    get preClass(): string;
    get pluginKeys(): string[];
    update(): Promise<void>;
    onChange(): void;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    updatedCallback(): void;
    render(): any;
}

export interface PrismAttributes {
  /**
  * The programming language to highlight.
  */
  "language"?: string;
  /**
  * The theme to apply for syntax highlighting.
  */
  "theme"?: string;
  /**
  * Plugins to enhance Prism's functionality.
  */
  "plugins"?: PrismPlugins;
  /**
  * Whether to synchronize updates with DOM changes.
  */
  "sync"?: boolean;
  /**
  * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
  */
  "resolver"?: PrismResolver;
}
export interface PrismEvents {}
export interface PrismMethods {}
export interface PrismProperties {
  /**
  * The programming language to highlight.
  */
  language?: string;
  /**
  * The theme to apply for syntax highlighting.
  */
  theme?: string;
  /**
  * Plugins to enhance Prism's functionality.
  */
  plugins?: PrismPlugins;
  /**
  * Whether to synchronize updates with DOM changes.
  */
  sync?: boolean;
  /**
  * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
  */
  resolver?: PrismResolver;
}
export interface PrismJSX extends PrismEvents, PrismProperties {}
declare global {
  interface HTMLPlusPrismElement extends HTMLElement, PrismMethods, PrismProperties {}
  var HTMLPlusPrismElement: {
    prototype: HTMLPlusPrismElement;
    new (): HTMLPlusPrismElement;
  };
  interface HTMLElementTagNameMap {
    "plus-prism": HTMLPlusPrismElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PrismEvents & PrismAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PrismEvents & PrismAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type PrismElement = globalThis.HTMLPlusPrismElement;