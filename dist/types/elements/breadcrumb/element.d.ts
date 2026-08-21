import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Breadcrumb element is a navigation pattern that shows the actual path of the current page.
 * It represents the route using links,
 * which enables the user to easily navigate upwards through the hierarchy.
 *
 * @stable
 *
 * @part expander  - The expander element.
 * @part item      - The breadcrumb elements.
 * @part separator - The separator elements.
 *
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 *
 * @examples default, separator, custom-separator, limitation, with-icon, custom-expander, customized
 */
export declare class PlusBreadcrumb extends PlusCore {
    /**
     * TODO.
     */
    block: boolean;
    /**
     * Specifies the label for the expander button.
     */
    expanderText: string;
    /**
     * Specifies the position of the expander button.
     * The expander button is displayed when the number of items reached the maximum limit.
     */
    offset: number;
    /**
     * Specifies the Maximum number of items that are allowed to be displayed.
     */
    max: number;
    /**
     * Specifies the separator between items.
     */
    separator: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    expand: boolean;
    observer: MutationObserver;
    $separators: HTMLElement[];
    get $children(): Element[];
    get items(): {
        type: "expander" | "item" | "separator";
        key: string;
        slot?: string;
    }[];
    get template(): string;
    initialize(): void;
    terminate(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusBreadcrumbAttributesMapper = {
  'expanderText': 'expander-text';
};
export type PlusBreadcrumbOverridableKeys = 'preset';
export interface PlusBreadcrumbDisables {}
export interface PlusBreadcrumbOverrides {}
export type PlusBreadcrumbAttributes = Rename<PlusBreadcrumbProperties, PlusBreadcrumbAttributesMapper>;
export type PlusBreadcrumbAttributesOverridden = Rename<PlusBreadcrumbPropertiesOverridden, PlusBreadcrumbAttributesMapper>;
export type PlusBreadcrumbAttributesBase = Rename<PlusBreadcrumbPropertiesBase, PlusBreadcrumbAttributesMapper>;
export type PlusBreadcrumbEvents = Filter<PlusBreadcrumbEventsBase, PlusBreadcrumbDisables>;
export type PlusBreadcrumbEventsBase = ToEventHandlers<Pick<PlusBreadcrumb, PlusBreadcrumbEventsKeys>>;
export type PlusBreadcrumbEventsKeys = never;
export type PlusBreadcrumbEventsJSX = ToJSXEvent<PlusBreadcrumbEvents>;
export type PlusBreadcrumbEventsBaseJSX = ToJSXEvent<PlusBreadcrumbEventsBase>;
export type PlusBreadcrumbMethods = Filter<PlusBreadcrumbMethodsBase, PlusBreadcrumbDisables>;
export type PlusBreadcrumbMethodsBase = Pick<PlusBreadcrumb, PlusBreadcrumbMethodsKeys>;
export type PlusBreadcrumbMethodsKeys = never;
export type PlusBreadcrumbProperties = Filter<PlusBreadcrumbPropertiesOverridden, PlusBreadcrumbDisables>;
export type PlusBreadcrumbPropertiesOverridden = Override<PlusBreadcrumbPropertiesBase, PlusBreadcrumbOverrides, PlusBreadcrumbOverridableKeys>;
export type PlusBreadcrumbPropertiesBase = Pick<PlusBreadcrumb, PlusBreadcrumbPropertiesKeys>;
export type PlusBreadcrumbPropertiesKeys = 'block' | 'expanderText' | 'offset' | 'max' | 'separator' | 'overrides' | 'preset';
export type PlusBreadcrumbElement = globalThis.HTMLPlusBreadcrumbElement;
export type PlusBreadcrumbJSX = PlusBreadcrumbAttributes & PlusBreadcrumbEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-breadcrumb": PlusBreadcrumbJSX;
  }
}
declare global {
  interface HTMLPlusBreadcrumbElement extends HTMLElement, PlusBreadcrumbMethods, PlusBreadcrumbProperties {}
  var HTMLPlusBreadcrumbElement: {
    prototype: HTMLPlusBreadcrumbElement;
    new (): HTMLPlusBreadcrumbElement;
  };
  interface HTMLElementTagNameMap {
    "plus-breadcrumb": HTMLPlusBreadcrumbElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-breadcrumb': {
      properties: PlusBreadcrumbPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusBreadcrumbElement>, HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbJSX>;
    }
  }
}