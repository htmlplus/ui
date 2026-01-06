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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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
export interface PlusBreadcrumbAttributesBase {
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
  "variant"?: OverridableValue<never, PlusBreadcrumbVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusBreadcrumbProperties, "overrides">>;
}
export interface PlusBreadcrumbAttributesDisables {}
export type PlusBreadcrumbAttributes = Filter<PlusBreadcrumbAttributesBase, PlusBreadcrumbAttributesDisables>;
export interface PlusBreadcrumbEventsBase {}
export interface PlusBreadcrumbEventsDisables {}
export type PlusBreadcrumbEvents = Filter<PlusBreadcrumbEventsBase, PlusBreadcrumbEventsDisables>;
export interface PlusBreadcrumbMethodsBase {}
export interface PlusBreadcrumbMethodsDisables {}
export type PlusBreadcrumbMethods = Filter<PlusBreadcrumbMethodsBase, PlusBreadcrumbMethodsDisables>;
export interface PlusBreadcrumbPropertiesBase {
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
  variant?: OverridableValue<never, PlusBreadcrumbVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusBreadcrumbProperties, "overrides">>;
}
export interface PlusBreadcrumbPropertiesDisables {}
export type PlusBreadcrumbProperties = Filter<PlusBreadcrumbPropertiesBase, PlusBreadcrumbPropertiesDisables>;
export type PlusBreadcrumbAttributesAndEvents = PlusBreadcrumbAttributes & PlusBreadcrumbEvents;
export interface PlusBreadcrumbJSX extends PlusBreadcrumbEvents, PlusBreadcrumbProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-breadcrumb": PlusBreadcrumbAttributes & PlusBreadcrumbEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-breadcrumb": PlusBreadcrumbAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusBreadcrumbElement>, keyof PlusBreadcrumbAttributesAndEvents>;
    }
  }
}
export type PlusBreadcrumbElement = globalThis.HTMLPlusBreadcrumbElement;
export interface PlusBreadcrumbVariantOverrides {}