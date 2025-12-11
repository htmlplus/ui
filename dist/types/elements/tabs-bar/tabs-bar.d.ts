import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class TabsBar extends PlusCore {
    /**
     * Grows tabs as much as all available space (occupies all horizontal space).
     */
    grow?: boolean;
    /**
     * Specifies how the tabs are aligned.
     */
    justify?: 'start' | 'center' | 'end';
    /**
     * Reverses the arrangement of the tabs.
     */
    reverse?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface TabsBarAttributesBase {
  /**
  * Grows tabs as much as all available space (occupies all horizontal space).
  */
  "grow"?: boolean;
  /**
  * Specifies how the tabs are aligned.
  */
  "justify"?: 'start' | 'center' | 'end';
  /**
  * Reverses the arrangement of the tabs.
  */
  "reverse"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, TabsBarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsBarProperties, "overrides">>;
}
export interface TabsBarAttributesDisables {}
export type TabsBarAttributes = Filter<TabsBarAttributesBase, TabsBarAttributesDisables>;
export interface TabsBarEventsBase {}
export interface TabsBarEventsDisables {}
export type TabsBarEvents = Filter<TabsBarEventsBase, TabsBarEventsDisables>;
export interface TabsBarMethodsBase {}
export interface TabsBarMethodsDisables {}
export type TabsBarMethods = Filter<TabsBarMethodsBase, TabsBarMethodsDisables>;
export interface TabsBarPropertiesBase {
  /**
  * Grows tabs as much as all available space (occupies all horizontal space).
  */
  grow?: boolean;
  /**
  * Specifies how the tabs are aligned.
  */
  justify?: 'start' | 'center' | 'end';
  /**
  * Reverses the arrangement of the tabs.
  */
  reverse?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, TabsBarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsBarProperties, "overrides">>;
}
export interface TabsBarPropertiesDisables {}
export type TabsBarProperties = Filter<TabsBarPropertiesBase, TabsBarPropertiesDisables>;
export interface TabsBarJSX extends TabsBarEvents, TabsBarProperties {}
declare global {
  interface HTMLPlusTabsBarElement extends HTMLElement, TabsBarMethods, TabsBarProperties {}
  var HTMLPlusTabsBarElement: {
    prototype: HTMLPlusTabsBarElement;
    new (): HTMLPlusTabsBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-bar": HTMLPlusTabsBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": TabsBarEvents & TabsBarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsBarEvents & TabsBarAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": TabsBarEvents & TabsBarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsBarEvents & TabsBarAttributes)>;
    }
  }
}
export type TabsBarElement = globalThis.HTMLPlusTabsBarElement;
export interface TabsBarVariantOverrides {}