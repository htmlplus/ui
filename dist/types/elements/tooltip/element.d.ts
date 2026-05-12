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
    arrow: boolean;
    /**
     * Specifies a delay in milliseconds for show or hide.
     * Use a number for both show and hide or
     * create an array of two separate numbers for show and hide.
     */
    delay: number | [number, number];
    /**
     * Disables the element functionality.
     */
    disabled: boolean;
    /**
     * TODO
     */
    fixed: boolean;
    /**
     * TODO
     */
    offset: number | [number, number];
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
    reference: Element | 'next' | 'parent' | 'previous' | (string & {});
    /**
     * Specifies the activation method.
     */
    trigger: PlusTooltipTrigger;
    /**
     * TODO
     */
    z: 'auto' | 'vertical' | 'horizontal' | 'move';
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusTooltipAttributesMapper = {
  'arrow': 'arrow';
  'delay': 'delay';
  'disabled': 'disabled';
  'fixed': 'fixed';
  'offset': 'offset';
  'placement': 'placement';
  'reference': 'reference';
  'trigger': 'trigger';
  'z': 'z';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusTooltipOverridableKeys = 'variant';
export interface PlusTooltipDisables {}
export interface PlusTooltipOverrides {}
export type PlusTooltipAttributes = Filter<PlusTooltipAttributesOverridden, PlusTooltipDisables, PlusTooltipAttributesMapper>;
export type PlusTooltipAttributesOverridden = Override<PlusTooltipAttributesBase, PlusTooltipOverrides, PlusTooltipOverridableKeys, PlusTooltipAttributesMapper>;
export type PlusTooltipAttributesBase = {
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
  "z"?: 'auto' | 'vertical' | 'horizontal' | 'move';
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTooltipProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusTooltipEvents = Filter<PlusTooltipEventsBase, PlusTooltipDisables>;
export type PlusTooltipEventsBase = {};
export type PlusTooltipEventsJSX = Filter<PlusTooltipEventsBaseJSX, PlusTooltipDisables, {}>;
export type PlusTooltipEventsBaseJSX = {};
export type PlusTooltipMethods = Filter<PlusTooltipMethodsBase, PlusTooltipDisables>;
export type PlusTooltipMethodsBase = {
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
};
export type PlusTooltipProperties = Filter<PlusTooltipPropertiesOverridden, PlusTooltipDisables>;
export type PlusTooltipPropertiesOverridden = Override<PlusTooltipPropertiesBase, PlusTooltipOverrides, PlusTooltipOverridableKeys>;
export type PlusTooltipPropertiesBase = {
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
  z?: 'auto' | 'vertical' | 'horizontal' | 'move';
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTooltipProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tooltip': {
      properties: PlusTooltipPropertiesOverridden;
    };
  }
}
export type PlusTooltipElement = globalThis.HTMLPlusTooltipElement;
export type PlusTooltipJSX = PlusTooltipAttributes & PlusTooltipEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tooltip": PlusTooltipJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tooltip": PlusTooltipJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTooltipElement>, HTMLPlusTooltipElement>, keyof PlusTooltipJSX>;
    }
  }
}