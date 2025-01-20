import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { TabsContext } from './tabs.context';
import { TabsValue } from './tabs.types';
/**
 * @development
 *
 * @slot default - The default slot.
 */
export declare class Tabs extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: TabsValue;
    /**
     * You can use vertical property for vertical mode.
     */
    vertical?: boolean;
    /**
     * Fired when the value changes.
     */
    plusChange: EventEmitter<TabsValue>;
    get state(): TabsContext;
    change(value: TabsValue): void;
    render(): any;
}

export interface TabsAttributes {
  /**
  * Provides your own value.
  */
  "value"?: TabsValue;
  /**
  * You can use vertical property for vertical mode.
  */
  "vertical"?: boolean;
}
export interface TabsEvents {
  /**
  * Fired when the value changes.
  */
  onPlusChange?: (event: CustomEvent<TabsValue>) => void;
}
export interface TabsMethods {}
export interface TabsProperties {
  /**
  * Provides your own value.
  */
  value?: TabsValue;
  /**
  * You can use vertical property for vertical mode.
  */
  vertical?: boolean;
}
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
      "plus-tabs": TabsEvents & TabsAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": TabsEvents & TabsAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type TabsElement = globalThis.HTMLPlusTabsElement;