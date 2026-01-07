import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { PlusBreakpoint } from '../../types';
import { PlusPrismPlugins, PlusPrismResolver } from './types';
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
export declare class PlusPrism extends PlusCore {
    /**
     * The programming language to highlight.
     */
    language?: string;
    /**
     * The theme to apply for syntax highlighting.
     */
    theme?: string;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Plugins to enhance Prism's functionality.
     */
    plugins?: PlusPrismPlugins;
    /**
     * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
     */
    resolver?: PlusPrismResolver;
    /**
     * Whether to synchronize updates with DOM changes.
     */
    sync?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    observer: MutationObserver;
    cache: AsyncCache<PlusPrismResolver>;
    get attributes(): Record<string, string>;
    get assets(): {
        key: "language" | "plugin" | "theme";
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
export interface PlusPrismAttributesBase {
  /**
  * The programming language to highlight.
  */
  "language"?: string;
  /**
  * The theme to apply for syntax highlighting.
  */
  "theme"?: string;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusPrismProperties, "overrides">>;
  /**
  * Plugins to enhance Prism's functionality.
  */
  "plugins"?: PlusPrismPlugins;
  /**
  * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
  */
  "resolver"?: PlusPrismResolver;
  /**
  * Whether to synchronize updates with DOM changes.
  */
  "sync"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusPrismVariantOverrides>;
}
export interface PlusPrismAttributesDisables {}
export type PlusPrismAttributes = Filter<PlusPrismAttributesBase, PlusPrismAttributesDisables>;
export interface PlusPrismEventsBase {}
export interface PlusPrismEventsDisables {}
export type PlusPrismEvents = Filter<PlusPrismEventsBase, PlusPrismEventsDisables>;
export interface PlusPrismMethodsBase {}
export interface PlusPrismMethodsDisables {}
export type PlusPrismMethods = Filter<PlusPrismMethodsBase, PlusPrismMethodsDisables>;
export interface PlusPrismPropertiesBase {
  /**
  * The programming language to highlight.
  */
  language?: string;
  /**
  * The theme to apply for syntax highlighting.
  */
  theme?: string;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusPrismProperties, "overrides">>;
  /**
  * Plugins to enhance Prism's functionality.
  */
  plugins?: PlusPrismPlugins;
  /**
  * A custom resolver function to load Prism assets (e.g., languages, themes, plugins).
  */
  resolver?: PlusPrismResolver;
  /**
  * Whether to synchronize updates with DOM changes.
  */
  sync?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusPrismVariantOverrides>;
}
export interface PlusPrismPropertiesDisables {}
export type PlusPrismProperties = Filter<PlusPrismPropertiesBase, PlusPrismPropertiesDisables>;
export interface PlusPrismJSX extends PlusPrismEvents, PlusPrismProperties {}
declare global {
  interface HTMLPlusPrismElement extends HTMLElement, PlusPrismMethods, PlusPrismProperties {}
  var HTMLPlusPrismElement: {
    prototype: HTMLPlusPrismElement;
    new (): HTMLPlusPrismElement;
  };
  interface HTMLElementTagNameMap {
    "plus-prism": HTMLPlusPrismElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-prism": PlusPrismAttributes & PlusPrismEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismAttributes & PlusPrismEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusPrismElement>, HTMLPlusPrismElement>, keyof (PlusPrismAttributes & PlusPrismEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismAttributes & PlusPrismEvents & Omit<HTMLAttributes<HTMLPlusPrismElement>, keyof (PlusPrismAttributes & PlusPrismEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismAttributes & PlusPrismEvents & Omit<HTMLAttributes<HTMLPlusPrismElement>, keyof (PlusPrismAttributes & PlusPrismEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismAttributes & PlusPrismEvents & Omit<HTMLAttributes<HTMLPlusPrismElement>, keyof (PlusPrismAttributes & PlusPrismEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismAttributes & PlusPrismEvents & Omit<HTMLAttributes<HTMLPlusPrismElement>, keyof (PlusPrismAttributes & PlusPrismEvents)>;
    }
  }
}
export type PlusPrismElement = globalThis.HTMLPlusPrismElement;
export interface PlusPrismVariantOverrides {}