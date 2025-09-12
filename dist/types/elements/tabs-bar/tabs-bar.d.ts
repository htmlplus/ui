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
    variant?: OverridableValue<string>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

export interface TabsBarAttributes {
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
  "variant"?: OverridableValue<string, TabsBarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsBarProperties, "overrides">>;
}
export interface TabsBarEvents {}
export interface TabsBarMethods {}
export interface TabsBarProperties {
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
  variant?: OverridableValue<string, TabsBarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsBarProperties, "overrides">>;
}
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
      "plus-tabs-bar": TabsBarEvents & TabsBarAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": TabsBarEvents & TabsBarAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type TabsBarElement = globalThis.HTMLPlusTabsBarElement;
export interface TabsBarVariantOverrides {}