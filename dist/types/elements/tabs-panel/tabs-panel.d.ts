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
    variant?: OverridableValue<string>;
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

export interface TabsPanelAttributes {
  /**
  * Provides your own value.
  */
  "value"?: TabsValue;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, TabsPanelVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<TabsPanelProperties, "overrides">>;
}
export interface TabsPanelEvents {}
export interface TabsPanelMethods {}
export interface TabsPanelProperties {
  /**
  * Provides your own value.
  */
  value?: TabsValue;
  /**
  * TODO
  */
  variant?: OverridableValue<string, TabsPanelVariantOverrides>;
  /**
  * TODO
  */
  active;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<TabsPanelProperties, "overrides">>;
}
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
      "plus-tabs-panel": TabsPanelEvents & TabsPanelAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": TabsPanelEvents & TabsPanelAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type TabsPanelElement = globalThis.HTMLPlusTabsPanelElement;
export interface TabsPanelVariantOverrides {}