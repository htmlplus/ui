import { PlusCore } from '../../core';
import { TabsContext } from '../tabs/tabs.context';
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
    value?: number | string;
    /**
     * TODO
     */
    get active(): boolean;
    parent?: TabsContext;
    render(): any;
}

export interface TabsPanelAttributes {
  /**
  * Provides your own value.
  */
  "value"?: number | string;
}
export interface TabsPanelEvents {}
export interface TabsPanelMethods {}
export interface TabsPanelProperties {
  /**
  * Provides your own value.
  */
  value?: number | string;
  /**
  * TODO
  */
  active;
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
      "plus-tabs-panel": TabsPanelEvents & TabsPanelAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type TabsPanelElement = globalThis.HTMLPlusTabsPanelElement;