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
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusPrismAttributesMapper = {};
export type PlusPrismOverridableKeys = 'preset';
export interface PlusPrismDisables {}
export interface PlusPrismOverrides {}
export type PlusPrismAttributes = Rename<PlusPrismProperties, PlusPrismAttributesMapper>;
export type PlusPrismAttributesOverridden = Rename<PlusPrismPropertiesOverridden, PlusPrismAttributesMapper>;
export type PlusPrismAttributesBase = Rename<PlusPrismPropertiesBase, PlusPrismAttributesMapper>;
export type PlusPrismEvents = Filter<PlusPrismEventsBase, PlusPrismDisables>;
export type PlusPrismEventsBase = ToEventHandlers<Pick<PlusPrism, PlusPrismEventsKeys>>;
export type PlusPrismEventsKeys = never;
export type PlusPrismEventsJSX = ToJSXEvent<PlusPrismEvents>;
export type PlusPrismEventsBaseJSX = ToJSXEvent<PlusPrismEventsBase>;
export type PlusPrismMethods = Filter<PlusPrismMethodsBase, PlusPrismDisables>;
export type PlusPrismMethodsBase = Pick<PlusPrism, PlusPrismMethodsKeys>;
export type PlusPrismMethodsKeys = never;
export type PlusPrismProperties = Filter<PlusPrismPropertiesOverridden, PlusPrismDisables>;
export type PlusPrismPropertiesOverridden = Override<PlusPrismPropertiesBase, PlusPrismOverrides, PlusPrismOverridableKeys>;
export type PlusPrismPropertiesBase = Pick<PlusPrism, PlusPrismPropertiesKeys>;
export type PlusPrismPropertiesKeys = 'language' | 'theme' | 'plugins' | 'resolver' | 'sync' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-prism': {
      properties: PlusPrismPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-prism": PlusPrismJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusPrismElement>, HTMLPlusPrismElement>, keyof PlusPrismJSX>;
    }
  }
}