import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
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
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface BreadcrumbAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<string & {}, BreadcrumbVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<BreadcrumbProperties, "overrides">>;
}
export interface BreadcrumbAttributesDisables {}
export type BreadcrumbAttributes = Filter<BreadcrumbAttributesBase, BreadcrumbAttributesDisables>;
export interface BreadcrumbEventsBase {}
export interface BreadcrumbEventsDisables {}
export type BreadcrumbEvents = Filter<BreadcrumbEventsBase, BreadcrumbEventsDisables>;
export interface BreadcrumbMethodsBase {}
export interface BreadcrumbMethodsDisables {}
export type BreadcrumbMethods = Filter<BreadcrumbMethodsBase, BreadcrumbMethodsDisables>;
export interface BreadcrumbPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<string & {}, BreadcrumbVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<BreadcrumbProperties, "overrides">>;
}
export interface BreadcrumbPropertiesDisables {}
export type BreadcrumbProperties = Filter<BreadcrumbPropertiesBase, BreadcrumbPropertiesDisables>;
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
      "plus-breadcrumb": BreadcrumbEvents & BreadcrumbAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (BreadcrumbEvents & BreadcrumbAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": BreadcrumbEvents & BreadcrumbAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (BreadcrumbEvents & BreadcrumbAttributes)>;
    }
  }
}
export type BreadcrumbElement = globalThis.HTMLPlusBreadcrumbElement;
export interface BreadcrumbVariantOverrides {}