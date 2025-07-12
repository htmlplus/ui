import { PlusCore } from '../../core';
/**
 * TODO: This element contains panels.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class TabsPanels extends PlusCore {
    render(): any;
}

export interface TabsPanelsAttributes {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<TabsPanelsProperties>;
  };
}
export interface TabsPanelsEvents {}
export interface TabsPanelsMethods {}
export interface TabsPanelsProperties {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<TabsPanelsProperties>;
  };
}
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
      "plus-tabs-panels": TabsPanelsEvents & TabsPanelsAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": TabsPanelsEvents & TabsPanelsAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type TabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;