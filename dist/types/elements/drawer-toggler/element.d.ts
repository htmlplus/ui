import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../drawer/context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class PlusDrawerToggler extends PlusCore {
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
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    drawer?: Context;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDrawerTogglerAttributesBase {
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
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDrawerTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDrawerTogglerVariantOverrides>;
}
export interface PlusDrawerTogglerAttributesDisables {}
export type PlusDrawerTogglerAttributes = Filter<PlusDrawerTogglerAttributesBase, PlusDrawerTogglerAttributesDisables>;
export interface PlusDrawerTogglerEventsBase {}
export interface PlusDrawerTogglerEventsDisables {}
export type PlusDrawerTogglerEvents = Filter<PlusDrawerTogglerEventsBase, PlusDrawerTogglerEventsDisables>;
export interface PlusDrawerTogglerMethodsBase {}
export interface PlusDrawerTogglerMethodsDisables {}
export type PlusDrawerTogglerMethods = Filter<PlusDrawerTogglerMethodsBase, PlusDrawerTogglerMethodsDisables>;
export interface PlusDrawerTogglerPropertiesBase {
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
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDrawerTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDrawerTogglerVariantOverrides>;
}
export interface PlusDrawerTogglerPropertiesDisables {}
export type PlusDrawerTogglerProperties = Filter<PlusDrawerTogglerPropertiesBase, PlusDrawerTogglerPropertiesDisables>;
export type PlusDrawerTogglerAttributesAndEvents = PlusDrawerTogglerAttributes & PlusDrawerTogglerEvents;
export interface PlusDrawerTogglerJSX extends PlusDrawerTogglerEvents, PlusDrawerTogglerProperties {}
declare global {
  interface HTMLPlusDrawerTogglerElement extends HTMLElement, PlusDrawerTogglerMethods, PlusDrawerTogglerProperties {}
  var HTMLPlusDrawerTogglerElement: {
    prototype: HTMLPlusDrawerTogglerElement;
    new (): HTMLPlusDrawerTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-drawer-toggler": HTMLPlusDrawerTogglerElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-drawer-toggler": PlusDrawerTogglerAttributes & PlusDrawerTogglerEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerAttributesAndEvents>;
    }
  }
}
export type PlusDrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
export interface PlusDrawerTogglerVariantOverrides {}