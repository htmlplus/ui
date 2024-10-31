import { PlusCore } from '../../core';
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
      "plus-tabs-bar": TabsBarEvents & TabsBarAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type TabsBarElement = globalThis.HTMLPlusTabsBarElement;