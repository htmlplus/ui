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
    disabled: boolean;
    /**
     * Control the element to expand or not.
     */
    open: boolean;
    /**
     * The summary text displayed on the header.
     */
    summary: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusAccordionAttributesMapper = {};
export type PlusAccordionOverridableKeys = 'preset';
export interface PlusAccordionDisables {}
export interface PlusAccordionOverrides {}
export type PlusAccordionAttributes = Rename<PlusAccordionProperties, PlusAccordionAttributesMapper>;
export type PlusAccordionAttributesOverridden = Rename<PlusAccordionPropertiesOverridden, PlusAccordionAttributesMapper>;
export type PlusAccordionAttributesBase = Rename<PlusAccordionPropertiesBase, PlusAccordionAttributesMapper>;
export type PlusAccordionEvents = Filter<PlusAccordionEventsBase, PlusAccordionDisables>;
export type PlusAccordionEventsBase = ToEventHandlers<Pick<PlusAccordion, PlusAccordionEventsKeys>>;
export type PlusAccordionEventsKeys = 'plusCollapse' | 'plusCollapsed' | 'plusExpand' | 'plusExpanded';
export type PlusAccordionEventsJSX = ToJSXEvent<PlusAccordionEvents>;
export type PlusAccordionEventsBaseJSX = ToJSXEvent<PlusAccordionEventsBase>;
export type PlusAccordionMethods = Filter<PlusAccordionMethodsBase, PlusAccordionDisables>;
export type PlusAccordionMethodsBase = Pick<PlusAccordion, PlusAccordionMethodsKeys>;
export type PlusAccordionMethodsKeys = 'collapse' | 'expand' | 'toggle';
export type PlusAccordionProperties = Filter<PlusAccordionPropertiesOverridden, PlusAccordionDisables>;
export type PlusAccordionPropertiesOverridden = Override<PlusAccordionPropertiesBase, PlusAccordionOverrides, PlusAccordionOverridableKeys>;
export type PlusAccordionPropertiesBase = Pick<PlusAccordion, PlusAccordionPropertiesKeys>;
export type PlusAccordionPropertiesKeys = 'disabled' | 'open' | 'summary' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-accordion': {
      properties: PlusAccordionPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAccordionElement>, HTMLPlusAccordionElement>, keyof PlusAccordionJSX>;
    }
  }
}