import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { TabsContext } from './tabs.context';
import { TabsValue } from './tabs.types';
/**
 * Organizes content across different screens.
 *
 * @development
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, grow, justify, reverse, below, vertical
 */
export declare class Tabs extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: TabsValue;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * You can use vertical property for vertical mode.
     */
    vertical?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * Fired when the value changes.
     */
    plusChange: EventEmitter<TabsValue>;
    get state(): TabsContext;
    change(value: TabsValue): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface TabsAttributesBase {
  /**
  * Provides your own value.
  */
  "value"?: TabsValue;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, TabsVariantOverrides>;
  /**
  * You can use vertical property for vertical mode.
  */
  "vertical"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsProperties, "overrides">>;
}
export interface TabsAttributesDisables {}
export type TabsAttributes = Filter<TabsAttributesBase, TabsAttributesDisables>;
export interface TabsEventsBase {
  /**
  * Fired when the value changes.
  */
  onPlusChange?: (event: CustomEvent<TabsValue>) => void;
}
export interface TabsEventsDisables {}
export type TabsEvents = Filter<TabsEventsBase, TabsEventsDisables>;
export interface TabsMethodsBase {}
export interface TabsMethodsDisables {}
export type TabsMethods = Filter<TabsMethodsBase, TabsMethodsDisables>;
export interface TabsPropertiesBase {
  /**
  * Provides your own value.
  */
  value?: TabsValue;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, TabsVariantOverrides>;
  /**
  * You can use vertical property for vertical mode.
  */
  vertical?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsProperties, "overrides">>;
}
export interface TabsPropertiesDisables {}
export type TabsProperties = Filter<TabsPropertiesBase, TabsPropertiesDisables>;
export interface TabsJSX extends TabsEvents, TabsProperties {}
declare global {
  interface HTMLPlusTabsElement extends HTMLElement, TabsMethods, TabsProperties {}
  var HTMLPlusTabsElement: {
    prototype: HTMLPlusTabsElement;
    new (): HTMLPlusTabsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs": HTMLPlusTabsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": TabsEvents & TabsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsEvents & TabsAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": TabsEvents & TabsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsEvents & TabsAttributes)>;
    }
  }
}
export type TabsElement = globalThis.HTMLPlusTabsElement;
export interface TabsVariantOverrides {}