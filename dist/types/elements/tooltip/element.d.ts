import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { PlusTooltipPlacement, PlusTooltipTrigger } from './types';
import type * as FloatingCoreType from '@floating-ui/dom';
/**
 * TODO
 *
 * @thirdParty
 *
 * @dependencies @floating-ui/dom
 *
 * @examples default
 */
export declare class PlusTooltip extends PlusCore {
    /**
     * Specifies whether to display the arrow or not.
     */
    arrow?: boolean;
    /**
     * Specifies a delay in milliseconds for show or hide.
     * Use a number for both show and hide or
     * create an array of two separate numbers for show and hide.
     */
    delay?: number | [number, number];
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * TODO
     */
    fixed?: boolean;
    /**
     * TODO
     */
    offset?: number | [number, number];
    /**
     * Specifies the display location of the element relative to the reference.
     */
    placement?: PlusTooltipPlacement;
    /**
     * Specifies the element to which the tooltip will be attached.
     * Use `next` to attach to the next sibling.
     * Use `parent` to attach to the parent.
     * Use `previous` to attach to the previous sibling.
     * Use a string to find an element to attach to that.
     * Use an element to attach to that.
     */
    reference?: Element | 'next' | 'parent' | 'previous' | (string & {});
    /**
     * Specifies the activation method.
     */
    trigger?: PlusTooltipTrigger;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    z?: 'auto' | 'vertical' | 'horizontal' | 'move';
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Hides the element.
     */
    hide(): void;
    /**
     * Shows the element.
     */
    show(): void;
    /**
     * Updates the element's position.
     */
    update(): void;
    $arrow: HTMLElement;
    $activator?: Element;
    state?: 'hide' | 'show';
    cleanup?: () => void;
    timeout?: number;
    EVENTS: readonly [readonly ["click", "click", () => void], readonly ["click", "blur", () => void], readonly ["click", "outside", () => void], readonly ["focus", "focus", () => void], readonly ["focus", "blur", () => void], readonly ["hover", "mouseenter", () => void], readonly ["hover", "mouseleave", () => void]];
    get $reference(): Element;
    get options(): Partial<FloatingCoreType.ComputePositionConfig>;
    watcher(next: unknown, _prev: unknown, name: string): void;
    initialize(): void;
    terminate(): void;
    events(all: boolean): (("click" | "blur" | (() => void))[] | ("click" | (() => void) | "outside")[] | ("focus" | "blur" | (() => void))[] | ("hover" | (() => void) | "mouseenter")[] | ("hover" | (() => void) | "mouseleave")[])[];
    observe(active: boolean): void;
    onHide(): void;
    onShow(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusTooltipAttributesBase {
  /**
  * Specifies whether to display the arrow or not.
  */
  "arrow"?: boolean;
  /**
  * Specifies a delay in milliseconds for show or hide.
  * Use a number for both show and hide or
  * create an array of two separate numbers for show and hide.
  */
  "delay"?: number | [number, number];
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * TODO
  */
  "fixed"?: boolean;
  /**
  * TODO
  */
  "offset"?: number | [number, number];
  /**
  * Specifies the display location of the element relative to the reference.
  */
  "placement"?: PlusTooltipPlacement;
  /**
  * Specifies the element to which the tooltip will be attached.
  * Use `next` to attach to the next sibling.
  * Use `parent` to attach to the parent.
  * Use `previous` to attach to the previous sibling.
  * Use a string to find an element to attach to that.
  * Use an element to attach to that.
  */
  "reference"?: Element | 'next' | 'parent' | 'previous' | (string & {});
  /**
  * Specifies the activation method.
  */
  "trigger"?: PlusTooltipTrigger;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusTooltipVariantOverrides>;
  /**
  * TODO
  */
  "z"?: 'auto' | 'vertical' | 'horizontal' | 'move';
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTooltipProperties, "overrides">>;
}
export interface PlusTooltipAttributesDisables {}
export type PlusTooltipAttributes = Filter<PlusTooltipAttributesBase, PlusTooltipAttributesDisables>;
export interface PlusTooltipEventsBase {}
export interface PlusTooltipEventsDisables {}
export type PlusTooltipEvents = Filter<PlusTooltipEventsBase, PlusTooltipEventsDisables>;
export interface PlusTooltipMethodsBase {
  /**
  * Hides the element.
  */
  hide();
  /**
  * Shows the element.
  */
  show();
  /**
  * Updates the element's position.
  */
  update();
}
export interface PlusTooltipMethodsDisables {}
export type PlusTooltipMethods = Filter<PlusTooltipMethodsBase, PlusTooltipMethodsDisables>;
export interface PlusTooltipPropertiesBase {
  /**
  * Specifies whether to display the arrow or not.
  */
  arrow?: boolean;
  /**
  * Specifies a delay in milliseconds for show or hide.
  * Use a number for both show and hide or
  * create an array of two separate numbers for show and hide.
  */
  delay?: number | [number, number];
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * TODO
  */
  fixed?: boolean;
  /**
  * TODO
  */
  offset?: number | [number, number];
  /**
  * Specifies the display location of the element relative to the reference.
  */
  placement?: PlusTooltipPlacement;
  /**
  * Specifies the element to which the tooltip will be attached.
  * Use `next` to attach to the next sibling.
  * Use `parent` to attach to the parent.
  * Use `previous` to attach to the previous sibling.
  * Use a string to find an element to attach to that.
  * Use an element to attach to that.
  */
  reference?: Element | 'next' | 'parent' | 'previous' | (string & {});
  /**
  * Specifies the activation method.
  */
  trigger?: PlusTooltipTrigger;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusTooltipVariantOverrides>;
  /**
  * TODO
  */
  z?: 'auto' | 'vertical' | 'horizontal' | 'move';
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTooltipProperties, "overrides">>;
}
export interface PlusTooltipPropertiesDisables {}
export type PlusTooltipProperties = Filter<PlusTooltipPropertiesBase, PlusTooltipPropertiesDisables>;
export interface PlusTooltipJSX extends PlusTooltipEvents, PlusTooltipProperties {}
declare global {
  interface HTMLPlusTooltipElement extends HTMLElement, PlusTooltipMethods, PlusTooltipProperties {}
  var HTMLPlusTooltipElement: {
    prototype: HTMLPlusTooltipElement;
    new (): HTMLPlusTooltipElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tooltip": HTMLPlusTooltipElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-tooltip": PlusTooltipAttributes & PlusTooltipEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": PlusTooltipAttributes & PlusTooltipEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTooltipElement>, HTMLPlusTooltipElement>, keyof (PlusTooltipAttributes & PlusTooltipEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": PlusTooltipAttributes & PlusTooltipEvents & Omit<HTMLAttributes<HTMLPlusTooltipElement>, keyof (PlusTooltipAttributes & PlusTooltipEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": PlusTooltipAttributes & PlusTooltipEvents & Omit<HTMLAttributes<HTMLPlusTooltipElement>, keyof (PlusTooltipAttributes & PlusTooltipEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": PlusTooltipAttributes & PlusTooltipEvents & Omit<HTMLAttributes<HTMLPlusTooltipElement>, keyof (PlusTooltipAttributes & PlusTooltipEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": PlusTooltipAttributes & PlusTooltipEvents & Omit<HTMLAttributes<HTMLPlusTooltipElement>, keyof (PlusTooltipAttributes & PlusTooltipEvents)>;
    }
  }
}
export type PlusTooltipElement = globalThis.HTMLPlusTooltipElement;
export interface PlusTooltipVariantOverrides {}