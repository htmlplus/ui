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
    variant?: OverridableValue<string>;
    drawer?: DrawerContext;
    render(): any;
}

export interface DrawerTogglerAttributes {
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
  "variant"?: OverridableValue<string, DrawerTogglerVariantOverrides>;
}
export interface DrawerTogglerEvents {}
export interface DrawerTogglerMethods {}
export interface DrawerTogglerProperties {
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
  variant?: OverridableValue<string, DrawerTogglerVariantOverrides>;
}
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
      "plus-drawer-toggler": DrawerTogglerEvents & DrawerTogglerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": DrawerTogglerEvents & DrawerTogglerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
export interface DrawerTogglerVariantOverrides {}