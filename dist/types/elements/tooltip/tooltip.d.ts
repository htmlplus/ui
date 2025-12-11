import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipReference, TooltipTrigger } from './tooltip.types';
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
export declare class Tooltip extends PlusCore {
    /**
     * Specifies whether to display the arrow or not.
     */
    arrow?: boolean;
    /**
     * Specifies a delay in milliseconds for show or hide.
     * Use a number for both show and hide or
     * create an array of two separate numbers for show and hide.
     */
    delay?: TooltipDelay;
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
    offset?: TooltipOffset;
    /**
     * Specifies the display location of the element relative to the reference.
     */
    placement?: TooltipPlacement;
    /**
     * Specifies the element to which the tooltip will be attached.
     * Use `next` to attach to the next sibling.
     * Use `parent` to attach to the parent.
     * Use `previous` to attach to the previous sibling.
     * Use a string to find an element to attach to that.
     * Use an element to attach to that.
     */
    reference?: TooltipReference;
    /**
     * Specifies the activation method.
     */
    trigger?: TooltipTrigger;
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
    overrides?: OverridesConfig<Breakpoint>;
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
    timeout?: NodeJS.Timeout;
    EVENTS: readonly [readonly ["click", "click", () => void], readonly ["click", "blur", () => void], readonly ["click", "outside", () => void], readonly ["focus", "focus", () => void], readonly ["focus", "blur", () => void], readonly ["hover", "mouseenter", () => void], readonly ["hover", "mouseleave", () => void]];
    get $reference(): Element;
    get options(): Partial<FloatingCoreType.ComputePositionConfig>;
    watcher(next: any, _prev: any, key: any): void;
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
export interface TooltipAttributesBase {
  /**
  * Specifies whether to display the arrow or not.
  */
  "arrow"?: boolean;
  /**
  * Specifies a delay in milliseconds for show or hide.
  * Use a number for both show and hide or
  * create an array of two separate numbers for show and hide.
  */
  "delay"?: TooltipDelay;
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
  "offset"?: TooltipOffset;
  /**
  * Specifies the display location of the element relative to the reference.
  */
  "placement"?: TooltipPlacement;
  /**
  * Specifies the element to which the tooltip will be attached.
  * Use `next` to attach to the next sibling.
  * Use `parent` to attach to the parent.
  * Use `previous` to attach to the previous sibling.
  * Use a string to find an element to attach to that.
  * Use an element to attach to that.
  */
  "reference"?: TooltipReference;
  /**
  * Specifies the activation method.
  */
  "trigger"?: TooltipTrigger;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, TooltipVariantOverrides>;
  /**
  * TODO
  */
  "z"?: 'auto' | 'vertical' | 'horizontal' | 'move';
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TooltipProperties, "overrides">>;
}
export interface TooltipAttributesDisables {}
export type TooltipAttributes = Filter<TooltipAttributesBase, TooltipAttributesDisables>;
export interface TooltipEventsBase {}
export interface TooltipEventsDisables {}
export type TooltipEvents = Filter<TooltipEventsBase, TooltipEventsDisables>;
export interface TooltipMethodsBase {
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
export interface TooltipMethodsDisables {}
export type TooltipMethods = Filter<TooltipMethodsBase, TooltipMethodsDisables>;
export interface TooltipPropertiesBase {
  /**
  * Specifies whether to display the arrow or not.
  */
  arrow?: boolean;
  /**
  * Specifies a delay in milliseconds for show or hide.
  * Use a number for both show and hide or
  * create an array of two separate numbers for show and hide.
  */
  delay?: TooltipDelay;
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
  offset?: TooltipOffset;
  /**
  * Specifies the display location of the element relative to the reference.
  */
  placement?: TooltipPlacement;
  /**
  * Specifies the element to which the tooltip will be attached.
  * Use `next` to attach to the next sibling.
  * Use `parent` to attach to the parent.
  * Use `previous` to attach to the previous sibling.
  * Use a string to find an element to attach to that.
  * Use an element to attach to that.
  */
  reference?: TooltipReference;
  /**
  * Specifies the activation method.
  */
  trigger?: TooltipTrigger;
  /**
  * TODO
  */
  variant?: OverridableValue<never, TooltipVariantOverrides>;
  /**
  * TODO
  */
  z?: 'auto' | 'vertical' | 'horizontal' | 'move';
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TooltipProperties, "overrides">>;
}
export interface TooltipPropertiesDisables {}
export type TooltipProperties = Filter<TooltipPropertiesBase, TooltipPropertiesDisables>;
export interface TooltipJSX extends TooltipEvents, TooltipProperties {}
declare global {
  interface HTMLPlusTooltipElement extends HTMLElement, TooltipMethods, TooltipProperties {}
  var HTMLPlusTooltipElement: {
    prototype: HTMLPlusTooltipElement;
    new (): HTMLPlusTooltipElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tooltip": HTMLPlusTooltipElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": TooltipEvents & TooltipAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TooltipEvents & TooltipAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": TooltipEvents & TooltipAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TooltipEvents & TooltipAttributes)>;
    }
  }
}
export type TooltipElement = globalThis.HTMLPlusTooltipElement;
export interface TooltipVariantOverrides {}