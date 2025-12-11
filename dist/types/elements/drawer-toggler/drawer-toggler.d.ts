import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { DrawerContext } from '../drawer/drawer.context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class DrawerToggler extends PlusCore {
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    drawer?: DrawerContext;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface DrawerTogglerAttributesBase {
  /**
  * This property helps you to attach which drawer this toggler controls.
  * It doesn't matter where the drawer toggler is.
  * You can put the drawer's toggler inside or outside of the drawer.
  * Read more about connectors [here](/connector).
  */
  "connector"?: string;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DrawerTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, DrawerTogglerVariantOverrides>;
}
export interface DrawerTogglerAttributesDisables {}
export type DrawerTogglerAttributes = Filter<DrawerTogglerAttributesBase, DrawerTogglerAttributesDisables>;
export interface DrawerTogglerEventsBase {}
export interface DrawerTogglerEventsDisables {}
export type DrawerTogglerEvents = Filter<DrawerTogglerEventsBase, DrawerTogglerEventsDisables>;
export interface DrawerTogglerMethodsBase {}
export interface DrawerTogglerMethodsDisables {}
export type DrawerTogglerMethods = Filter<DrawerTogglerMethodsBase, DrawerTogglerMethodsDisables>;
export interface DrawerTogglerPropertiesBase {
  /**
  * This property helps you to attach which drawer this toggler controls.
  * It doesn't matter where the drawer toggler is.
  * You can put the drawer's toggler inside or outside of the drawer.
  * Read more about connectors [here](/connector).
  */
  connector?: string;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DrawerTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, DrawerTogglerVariantOverrides>;
}
export interface DrawerTogglerPropertiesDisables {}
export type DrawerTogglerProperties = Filter<DrawerTogglerPropertiesBase, DrawerTogglerPropertiesDisables>;
export interface DrawerTogglerJSX extends DrawerTogglerEvents, DrawerTogglerProperties {}
declare global {
  interface HTMLPlusDrawerTogglerElement extends HTMLElement, DrawerTogglerMethods, DrawerTogglerProperties {}
  var HTMLPlusDrawerTogglerElement: {
    prototype: HTMLPlusDrawerTogglerElement;
    new (): HTMLPlusDrawerTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-drawer-toggler": HTMLPlusDrawerTogglerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": DrawerTogglerEvents & DrawerTogglerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DrawerTogglerEvents & DrawerTogglerAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": DrawerTogglerEvents & DrawerTogglerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DrawerTogglerEvents & DrawerTogglerAttributes)>;
    }
  }
}
export type DrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
export interface DrawerTogglerVariantOverrides {}