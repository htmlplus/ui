import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Animation } from '../../services';
import { PlusBreakpoint } from '../../types';
import { Context } from '../accordions/context';
/**
 * A vertically stacked list of headers that reveal or hide associated sections of content.
 *
 * @stable
 *
 * @part body          - The body element.
 * @part content       - The content element.
 * @part summary       - The summary element.
 * @part svg           - The svg element.
 *
 * @slot default       - The default slot.
 * @slot icon          - The icon slot.
 * @slot icon-expand   - The expand icon slot.
 * @slot icon-collapse - The collapse icon slot.
 * @slot summary       - The summary slot.
 * @slot top           - The top slot.
 * @slot middle        - The middle slot.
 * @slot bottom        - The bottom slot.
 *
 * @examples default, disabled, open, methods, persistent, custom-icon, customized,
 *           custom-summary-template, prevent-from-toggling, slots, async-content
 */
export declare class PlusAccordion extends PlusCore {
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * Control the element to expand or not.
     */
    open?: boolean;
    /**
     * The summary text displayed on the header.
     */
    summary?: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    /**
     * Fires when the element is about to collapse.
     * This event can be [canceled](TODO).
     */
    plusCollapse: EventEmitter<void>;
    /**
     * Fires after the element has collapsed.
     */
    plusCollapsed: EventEmitter<void>;
    /**
     * Fires when the element is about to expand.
     * This event can be [canceled](TODO).
     */
    plusExpand: EventEmitter<void>;
    /**
     * Fires after the element has expanded.
     */
    plusExpanded: EventEmitter<void>;
    accordions?: Context;
    $body: HTMLElement;
    $header: HTMLElement;
    animate: Animation;
    opened: boolean;
    promise?: Promise<boolean>;
    /**
     * Collapses the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    collapse(): Promise<boolean>;
    /**
     * Expands the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    expand(): Promise<boolean>;
    /**
     * Toggles between `collapse` and `expand` state.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    toggle(): Promise<boolean>;
    watcher(next: unknown, prev: unknown, name: string): void;
    getId(key: string): string;
    initialize(): void;
    terminate(): void;
    try(open: boolean, silent?: boolean): Promise<boolean>;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusAccordionAttributesMapper = {
  'disabled': 'disabled';
  'open': 'open';
  'summary': 'summary';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusAccordionOverridableKeys = 'variant';
export interface PlusAccordionDisables {}
export interface PlusAccordionOverrides {}
export type PlusAccordionAttributes = Filter<PlusAccordionAttributesOverridden, PlusAccordionDisables, PlusAccordionAttributesMapper>;
export type PlusAccordionAttributesOverridden = Override<PlusAccordionAttributesBase, PlusAccordionOverrides, PlusAccordionOverridableKeys, PlusAccordionAttributesMapper>;
export type PlusAccordionAttributesBase = {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Control the element to expand or not.
  */
  "open"?: boolean;
  /**
  * The summary text displayed on the header.
  */
  "summary"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusAccordionEvents = Filter<PlusAccordionEventsBase, PlusAccordionDisables>;
export type PlusAccordionEventsBase = {
  /**
  * Fires when the element is about to collapse.
  * This event can be [canceled](TODO).
  */
  plusCollapse?: (event: CustomEvent<void>) => void;
  /**
  * Fires after the element has collapsed.
  */
  plusCollapsed?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the element is about to expand.
  * This event can be [canceled](TODO).
  */
  plusExpand?: (event: CustomEvent<void>) => void;
  /**
  * Fires after the element has expanded.
  */
  plusExpanded?: (event: CustomEvent<void>) => void;
};
export type PlusAccordionEventsJSX = Filter<PlusAccordionEventsBaseJSX, PlusAccordionDisables, {
  plusCollapse: 'onPlusCollapse';
  plusCollapsed: 'onPlusCollapsed';
  plusExpand: 'onPlusExpand';
  plusExpanded: 'onPlusExpanded';
}>;
export type PlusAccordionEventsBaseJSX = {
  /**
  * Fires when the element is about to collapse.
  * This event can be [canceled](TODO).
  */
  onPlusCollapse?: (event: CustomEvent<void>) => void;
  /**
  * Fires after the element has collapsed.
  */
  onPlusCollapsed?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the element is about to expand.
  * This event can be [canceled](TODO).
  */
  onPlusExpand?: (event: CustomEvent<void>) => void;
  /**
  * Fires after the element has expanded.
  */
  onPlusExpanded?: (event: CustomEvent<void>) => void;
};
export type PlusAccordionMethods = Filter<PlusAccordionMethodsBase, PlusAccordionDisables>;
export type PlusAccordionMethodsBase = {
  /**
  * Collapses the element.
  * @returns {Promise<boolean>} A Promise that resolves to `true` if the
  * operation was successful or `false` if it was canceled.
  */
  collapse(): Promise<boolean>;
  /**
  * Expands the element.
  * @returns {Promise<boolean>} A Promise that resolves to `true` if the
  * operation was successful or `false` if it was canceled.
  */
  expand(): Promise<boolean>;
  /**
  * Toggles between `collapse` and `expand` state.
  * @returns {Promise<boolean>} A Promise that resolves to `true` if the
  * operation was successful or `false` if it was canceled.
  */
  toggle(): Promise<boolean>;
};
export type PlusAccordionProperties = Filter<PlusAccordionPropertiesOverridden, PlusAccordionDisables>;
export type PlusAccordionPropertiesOverridden = Override<PlusAccordionPropertiesBase, PlusAccordionOverrides, PlusAccordionOverridableKeys>;
export type PlusAccordionPropertiesBase = {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Control the element to expand or not.
  */
  open?: boolean;
  /**
  * The summary text displayed on the header.
  */
  summary?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-accordion': {
      properties: PlusAccordionPropertiesOverridden;
    };
  }
}
export type PlusAccordionElement = globalThis.HTMLPlusAccordionElement;
export type PlusAccordionJSX = PlusAccordionAttributes & PlusAccordionEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-accordion": PlusAccordionJSX;
  }
}
declare global {
  interface HTMLPlusAccordionElement extends HTMLElement, PlusAccordionMethods, PlusAccordionProperties {}
  var HTMLPlusAccordionElement: {
    prototype: HTMLPlusAccordionElement;
    new (): HTMLPlusAccordionElement;
  };
  interface HTMLElementTagNameMap {
    "plus-accordion": HTMLPlusAccordionElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAccordionElement>, HTMLPlusAccordionElement>, keyof PlusAccordionJSX>;
    }
  }
}