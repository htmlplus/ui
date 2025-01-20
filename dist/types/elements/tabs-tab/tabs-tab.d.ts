import { PlusCore } from '../../core';
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
    get active(): boolean;
    parent?: TabsContext;
    onClick(): void;
    render(): any;
}

export interface TabsTabAttributes {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  "disabled"?: boolean;
  /**
  * Provides your own value.
  */
  "value"?: TabsValue;
}
export interface TabsTabEvents {}
export interface TabsTabMethods {}
export interface TabsTabProperties {
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
  active;
}
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
      "plus-tabs-tab": TabsTabEvents & TabsTabAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": TabsTabEvents & TabsTabAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type TabsTabElement = globalThis.HTMLPlusTabsTabElement;