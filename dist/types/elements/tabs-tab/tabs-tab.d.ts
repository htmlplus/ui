import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { TabsContext } from '../tabs/tabs.context';
import { TabsValue } from '../tabs/tabs.types';
/**
 * TODO: Tabs make it easy to switch between different views.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class TabsTab extends PlusCore {
    /**
     * A Tab can be disabled by setting disabled property.
     */
    disabled?: boolean;
    /**
     * Provides your own value.
     */
    value?: TabsValue;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    parent?: TabsContext;
    onClick(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface TabsTabAttributesBase {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  "disabled"?: boolean;
  /**
  * Provides your own value.
  */
  "value"?: TabsValue;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, TabsTabVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsTabProperties, "overrides">>;
}
export interface TabsTabAttributesDisables {}
export type TabsTabAttributes = Filter<TabsTabAttributesBase, TabsTabAttributesDisables>;
export interface TabsTabEventsBase {}
export interface TabsTabEventsDisables {}
export type TabsTabEvents = Filter<TabsTabEventsBase, TabsTabEventsDisables>;
export interface TabsTabMethodsBase {}
export interface TabsTabMethodsDisables {}
export type TabsTabMethods = Filter<TabsTabMethodsBase, TabsTabMethodsDisables>;
export interface TabsTabPropertiesBase {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  disabled?: boolean;
  /**
  * Provides your own value.
  */
  value?: TabsValue;
  /**
  * TODO
  */
  variant?: OverridableValue<never, TabsTabVariantOverrides>;
  /**
  * TODO
  */
  active;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsTabProperties, "overrides">>;
}
export interface TabsTabPropertiesDisables {}
export type TabsTabProperties = Filter<TabsTabPropertiesBase, TabsTabPropertiesDisables>;
export interface TabsTabJSX extends TabsTabEvents, TabsTabProperties {}
declare global {
  interface HTMLPlusTabsTabElement extends HTMLElement, TabsTabMethods, TabsTabProperties {}
  var HTMLPlusTabsTabElement: {
    prototype: HTMLPlusTabsTabElement;
    new (): HTMLPlusTabsTabElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-tab": HTMLPlusTabsTabElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": TabsTabEvents & TabsTabAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsTabEvents & TabsTabAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": TabsTabEvents & TabsTabAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsTabEvents & TabsTabAttributes)>;
    }
  }
}
export type TabsTabElement = globalThis.HTMLPlusTabsTabElement;
export interface TabsTabVariantOverrides {}