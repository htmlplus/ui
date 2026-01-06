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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusAccordionAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<never, PlusAccordionVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionProperties, "overrides">>;
}
export interface PlusAccordionAttributesDisables {}
export type PlusAccordionAttributes = Filter<PlusAccordionAttributesBase, PlusAccordionAttributesDisables>;
export interface PlusAccordionEventsBase {
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
}
export interface PlusAccordionEventsDisables {}
export type PlusAccordionEvents = Filter<PlusAccordionEventsBase, PlusAccordionEventsDisables>;
export interface PlusAccordionMethodsBase {
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
}
export interface PlusAccordionMethodsDisables {}
export type PlusAccordionMethods = Filter<PlusAccordionMethodsBase, PlusAccordionMethodsDisables>;
export interface PlusAccordionPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<never, PlusAccordionVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionProperties, "overrides">>;
}
export interface PlusAccordionPropertiesDisables {}
export type PlusAccordionProperties = Filter<PlusAccordionPropertiesBase, PlusAccordionPropertiesDisables>;
export type PlusAccordionAttributesAndEvents = PlusAccordionAttributes & PlusAccordionEvents;
export interface PlusAccordionJSX extends PlusAccordionEvents, PlusAccordionProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-accordion": PlusAccordionAttributes & PlusAccordionEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionElement>, keyof PlusAccordionAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionElement>, keyof PlusAccordionAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionElement>, keyof PlusAccordionAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionElement>, keyof PlusAccordionAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": PlusAccordionAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionElement>, keyof PlusAccordionAttributesAndEvents>;
    }
  }
}
export type PlusAccordionElement = globalThis.HTMLPlusAccordionElement;
export interface PlusAccordionVariantOverrides {}