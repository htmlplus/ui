import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { TabsContext } from '../tabs/tabs.context';
import { TabsValue } from '../tabs/tabs.types';
/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class TabsPanel extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: TabsValue;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    parent?: TabsContext;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface TabsPanelAttributesBase {
  /**
  * Provides your own value.
  */
  "value"?: TabsValue;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, TabsPanelVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsPanelProperties, "overrides">>;
}
export interface TabsPanelAttributesDisables {}
export type TabsPanelAttributes = Filter<TabsPanelAttributesBase, TabsPanelAttributesDisables>;
export interface TabsPanelEventsBase {}
export interface TabsPanelEventsDisables {}
export type TabsPanelEvents = Filter<TabsPanelEventsBase, TabsPanelEventsDisables>;
export interface TabsPanelMethodsBase {}
export interface TabsPanelMethodsDisables {}
export type TabsPanelMethods = Filter<TabsPanelMethodsBase, TabsPanelMethodsDisables>;
export interface TabsPanelPropertiesBase {
  /**
  * Provides your own value.
  */
  value?: TabsValue;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, TabsPanelVariantOverrides>;
  /**
  * TODO
  */
  active;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsPanelProperties, "overrides">>;
}
export interface TabsPanelPropertiesDisables {}
export type TabsPanelProperties = Filter<TabsPanelPropertiesBase, TabsPanelPropertiesDisables>;
export interface TabsPanelJSX extends TabsPanelEvents, TabsPanelProperties {}
declare global {
  interface HTMLPlusTabsPanelElement extends HTMLElement, TabsPanelMethods, TabsPanelProperties {}
  var HTMLPlusTabsPanelElement: {
    prototype: HTMLPlusTabsPanelElement;
    new (): HTMLPlusTabsPanelElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panel": HTMLPlusTabsPanelElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": TabsPanelEvents & TabsPanelAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsPanelEvents & TabsPanelAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": TabsPanelEvents & TabsPanelAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsPanelEvents & TabsPanelAttributes)>;
    }
  }
}
export type TabsPanelElement = globalThis.HTMLPlusTabsPanelElement;
export interface TabsPanelVariantOverrides {}