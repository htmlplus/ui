import { PlusCore } from '../../core';
/**
 * @stable
 *
 * @part expander  - The expander element.
 * @part item      - The breadcrumb elements.
 * @part separator - The separator elements.
 *
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 */
export declare class Breadcrumb extends PlusCore {
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
    expand: boolean;
    tick?: number;
    observer: MutationObserver;
    $separators: HTMLElement[];
    get $children(): Element[];
    get items(): any[];
    get template(): string;
    initialize(): void;
    terminate(): void;
    onChange(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface BreadcrumbAttributes {
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
}
export interface BreadcrumbEvents {}
export interface BreadcrumbMethods {}
export interface BreadcrumbProperties {
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
}
export interface BreadcrumbJSX extends BreadcrumbEvents, BreadcrumbProperties {}
declare global {
  interface HTMLPlusBreadcrumbElement extends HTMLElement, BreadcrumbMethods, BreadcrumbProperties {}
  var HTMLPlusBreadcrumbElement: {
    prototype: HTMLPlusBreadcrumbElement;
    new (): HTMLPlusBreadcrumbElement;
  };
  interface HTMLElementTagNameMap {
    "plus-breadcrumb": HTMLPlusBreadcrumbElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": BreadcrumbEvents & BreadcrumbAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type BreadcrumbElement = globalThis.HTMLPlusBreadcrumbElement;