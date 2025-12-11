import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { Breakpoint } from '../../types';
import { PrismPlugins, PrismResolver } from './prism.types';
/**
 * Syntax highlighting for code snippets,
 * supporting multiple programming languages and offering customizable themes.
 * Powered by [PrismJS](https://prismjs.com/).
 *
 * @thirdParty
 * @dependencies prismjs
 *
 * @part code    - The code element.
 * @part copy    - The copy element.
 * @part pre     - The pre element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
 *
 * @examples default, multiline, language, theme, plugins, resolver, sync, copy-slot
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
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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
    update(): Promise<string>;
    connectedCallback(): void;
    updatedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PrismAttributesBase {
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
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PrismVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<PrismProperties, "overrides">>;
}
export interface PrismAttributesDisables {}
export type PrismAttributes = Filter<PrismAttributesBase, PrismAttributesDisables>;
export interface PrismEventsBase {}
export interface PrismEventsDisables {}
export type PrismEvents = Filter<PrismEventsBase, PrismEventsDisables>;
export interface PrismMethodsBase {}
export interface PrismMethodsDisables {}
export type PrismMethods = Filter<PrismMethodsBase, PrismMethodsDisables>;
export interface PrismPropertiesBase {
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
  /**
  * TODO
  */
  variant?: OverridableValue<never, PrismVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<PrismProperties, "overrides">>;
}
export interface PrismPropertiesDisables {}
export type PrismProperties = Filter<PrismPropertiesBase, PrismPropertiesDisables>;
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
      "plus-prism": PrismEvents & PrismAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (PrismEvents & PrismAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PrismEvents & PrismAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (PrismEvents & PrismAttributes)>;
    }
  }
}
export type PrismElement = globalThis.HTMLPlusPrismElement;
export interface PrismVariantOverrides {}