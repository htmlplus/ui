import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Animation } from '../../services';
/**
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
 */
export declare class Accordion extends PlusCore {
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
    accordions?: any;
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
    watcher(next: any, prev: any, name: any): void;
    getId(key: string): string;
    initialize(): void;
    terminate(): void;
    try(open: boolean, silent?: boolean): Promise<boolean>;
    onClick(): void;
    onKeyDown(event: KeyboardEvent): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface AccordionAttributes {
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
}
export interface AccordionEvents {
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
export interface AccordionMethods {
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
export interface AccordionProperties {
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
}
export interface AccordionJSX extends AccordionEvents, AccordionProperties {}
declare global {
  interface HTMLPlusAccordionElement extends HTMLElement, AccordionMethods, AccordionProperties {}
  var HTMLPlusAccordionElement: {
    prototype: HTMLPlusAccordionElement;
    new (): HTMLPlusAccordionElement;
  };
  interface HTMLElementTagNameMap {
    "plus-accordion": HTMLPlusAccordionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordion": AccordionEvents & AccordionAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type AccordionElement = globalThis.HTMLPlusAccordionElement;