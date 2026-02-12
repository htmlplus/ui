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
    block?: boolean;
    /**
     * Specifies the label for the expander button.
     */
    expanderText?: string;
    /**
     * Specifies the position of the expander button.
     * The expander button is displayed when the number of items reached the maximum limit.
     */
    offset?: number;
    /**
     * Specifies the Maximum number of items that are allowed to be displayed.
     */
    max?: number;
    /**
     * Specifies the separator between items.
     */
    separator?: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    expand: boolean;
    observer: MutationObserver;
    $separators: HTMLElement[];
    get $children(): Element[];
    get items(): any[];
    get template(): string;
    initialize(): void;
    terminate(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusBreadcrumbAttributesMapper = {
  'block': 'block';
  'expanderText': 'expander-text';
  'offset': 'offset';
  'max': 'max';
  'separator': 'separator';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusBreadcrumbOverridableKeys = 'variant';
export interface PlusBreadcrumbDisables {}
export interface PlusBreadcrumbOverrides {}
export type PlusBreadcrumbAttributes = Filter<PlusBreadcrumbAttributesOverridden, PlusBreadcrumbDisables, PlusBreadcrumbAttributesMapper>;
export type PlusBreadcrumbAttributesOverridden = Override<PlusBreadcrumbAttributesBase, PlusBreadcrumbOverrides, PlusBreadcrumbOverridableKeys, PlusBreadcrumbAttributesMapper>;
export type PlusBreadcrumbAttributesBase = {
  /**
  * TODO.
  */
  "block"?: boolean;
  /**
  * Specifies the label for the expander button.
  */
  "expander-text"?: string;
  /**
  * Specifies the position of the expander button.
  * The expander button is displayed when the number of items reached the maximum limit.
  */
  "offset"?: number;
  /**
  * Specifies the Maximum number of items that are allowed to be displayed.
  */
  "max"?: number;
  /**
  * Specifies the separator between items.
  */
  "separator"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusBreadcrumbProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusBreadcrumbEvents = Filter<PlusBreadcrumbEventsBase, PlusBreadcrumbDisables>;
export type PlusBreadcrumbEventsBase = {};
export type PlusBreadcrumbEventsJSX = Filter<PlusBreadcrumbEventsBaseJSX, PlusBreadcrumbDisables, {}>;
export type PlusBreadcrumbEventsBaseJSX = {};
export type PlusBreadcrumbMethods = Filter<PlusBreadcrumbMethodsBase, PlusBreadcrumbDisables>;
export type PlusBreadcrumbMethodsBase = {};
export type PlusBreadcrumbProperties = Filter<PlusBreadcrumbPropertiesOverridden, PlusBreadcrumbDisables>;
export type PlusBreadcrumbPropertiesOverridden = Override<PlusBreadcrumbPropertiesBase, PlusBreadcrumbOverrides, PlusBreadcrumbOverridableKeys>;
export type PlusBreadcrumbPropertiesBase = {
  /**
  * TODO.
  */
  block?: boolean;
  /**
  * Specifies the label for the expander button.
  */
  expanderText?: string;
  /**
  * Specifies the position of the expander button.
  * The expander button is displayed when the number of items reached the maximum limit.
  */
  offset?: number;
  /**
  * Specifies the Maximum number of items that are allowed to be displayed.
  */
  max?: number;
  /**
  * Specifies the separator between items.
  */
  separator?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusBreadcrumbProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-breadcrumb': {
      properties: PlusBreadcrumbPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusBreadcrumbElement>, HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbJSX>;
    }
  }
}