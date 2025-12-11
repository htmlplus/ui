import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * TODO: This element contains panels.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class TabsPanels extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface TabsPanelsAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsPanelsProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, TabsPanelsVariantOverrides>;
}
export interface TabsPanelsAttributesDisables {}
export type TabsPanelsAttributes = Filter<TabsPanelsAttributesBase, TabsPanelsAttributesDisables>;
export interface TabsPanelsEventsBase {}
export interface TabsPanelsEventsDisables {}
export type TabsPanelsEvents = Filter<TabsPanelsEventsBase, TabsPanelsEventsDisables>;
export interface TabsPanelsMethodsBase {}
export interface TabsPanelsMethodsDisables {}
export type TabsPanelsMethods = Filter<TabsPanelsMethodsBase, TabsPanelsMethodsDisables>;
export interface TabsPanelsPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsPanelsProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, TabsPanelsVariantOverrides>;
}
export interface TabsPanelsPropertiesDisables {}
export type TabsPanelsProperties = Filter<TabsPanelsPropertiesBase, TabsPanelsPropertiesDisables>;
export interface TabsPanelsJSX extends TabsPanelsEvents, TabsPanelsProperties {}
declare global {
  interface HTMLPlusTabsPanelsElement extends HTMLElement, TabsPanelsMethods, TabsPanelsProperties {}
  var HTMLPlusTabsPanelsElement: {
    prototype: HTMLPlusTabsPanelsElement;
    new (): HTMLPlusTabsPanelsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panels": HTMLPlusTabsPanelsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": TabsPanelsEvents & TabsPanelsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsPanelsEvents & TabsPanelsAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": TabsPanelsEvents & TabsPanelsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (TabsPanelsEvents & TabsPanelsAttributes)>;
    }
  }
}
export type TabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;
export interface TabsPanelsVariantOverrides {}