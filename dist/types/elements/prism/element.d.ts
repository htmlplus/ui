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
    language: string;
    /**
     * The theme to apply for syntax highlighting.
     */
    theme: string;
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
    sync: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusPrismAttributesMapper = {
  'language': 'language';
  'theme': 'theme';
  'plugins': 'plugins';
  'resolver': 'resolver';
  'sync': 'sync';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusPrismOverridableKeys = 'variant';
export interface PlusPrismDisables {}
export interface PlusPrismOverrides {}
export type PlusPrismAttributes = Filter<PlusPrismAttributesOverridden, PlusPrismDisables, PlusPrismAttributesMapper>;
export type PlusPrismAttributesOverridden = Override<PlusPrismAttributesBase, PlusPrismOverrides, PlusPrismOverridableKeys, PlusPrismAttributesMapper>;
export type PlusPrismAttributesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusPrismProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusPrismEvents = Filter<PlusPrismEventsBase, PlusPrismDisables>;
export type PlusPrismEventsBase = {};
export type PlusPrismEventsJSX = Filter<PlusPrismEventsBaseJSX, PlusPrismDisables, {}>;
export type PlusPrismEventsBaseJSX = {};
export type PlusPrismMethods = Filter<PlusPrismMethodsBase, PlusPrismDisables>;
export type PlusPrismMethodsBase = {};
export type PlusPrismProperties = Filter<PlusPrismPropertiesOverridden, PlusPrismDisables>;
export type PlusPrismPropertiesOverridden = Override<PlusPrismPropertiesBase, PlusPrismOverrides, PlusPrismOverridableKeys>;
export type PlusPrismPropertiesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusPrismProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-prism': {
      properties: PlusPrismPropertiesOverridden;
    };
  }
}
export type PlusPrismElement = globalThis.HTMLPlusPrismElement;
export type PlusPrismJSX = PlusPrismAttributes & PlusPrismEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-prism": PlusPrismJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusPrismElement>, HTMLPlusPrismElement>, keyof PlusPrismJSX>;
    }
  }
}