import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * TODO: This element contains panels.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsPanels extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusTabsPanelsAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelsProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusTabsPanelsVariantOverrides>;
}
export interface PlusTabsPanelsAttributesDisables {}
export type PlusTabsPanelsAttributes = Filter<PlusTabsPanelsAttributesBase, PlusTabsPanelsAttributesDisables>;
export interface PlusTabsPanelsEventsBase {}
export interface PlusTabsPanelsEventsDisables {}
export type PlusTabsPanelsEvents = Filter<PlusTabsPanelsEventsBase, PlusTabsPanelsEventsDisables>;
export interface PlusTabsPanelsMethodsBase {}
export interface PlusTabsPanelsMethodsDisables {}
export type PlusTabsPanelsMethods = Filter<PlusTabsPanelsMethodsBase, PlusTabsPanelsMethodsDisables>;
export interface PlusTabsPanelsPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelsProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusTabsPanelsVariantOverrides>;
}
export interface PlusTabsPanelsPropertiesDisables {}
export type PlusTabsPanelsProperties = Filter<PlusTabsPanelsPropertiesBase, PlusTabsPanelsPropertiesDisables>;
export interface PlusTabsPanelsJSX extends PlusTabsPanelsEvents, PlusTabsPanelsProperties {}
declare global {
  interface HTMLPlusTabsPanelsElement extends HTMLElement, PlusTabsPanelsMethods, PlusTabsPanelsProperties {}
  var HTMLPlusTabsPanelsElement: {
    prototype: HTMLPlusTabsPanelsElement;
    new (): HTMLPlusTabsPanelsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panels": HTMLPlusTabsPanelsElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-panels": PlusTabsPanelsAttributes & PlusTabsPanelsEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsAttributes & PlusTabsPanelsEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsPanelsElement>, HTMLPlusTabsPanelsElement>, keyof (PlusTabsPanelsAttributes & PlusTabsPanelsEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsAttributes & PlusTabsPanelsEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelsElement>, keyof (PlusTabsPanelsAttributes & PlusTabsPanelsEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsAttributes & PlusTabsPanelsEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelsElement>, keyof (PlusTabsPanelsAttributes & PlusTabsPanelsEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsAttributes & PlusTabsPanelsEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelsElement>, keyof (PlusTabsPanelsAttributes & PlusTabsPanelsEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsAttributes & PlusTabsPanelsEvents & Omit<HTMLAttributes<HTMLPlusTabsPanelsElement>, keyof (PlusTabsPanelsAttributes & PlusTabsPanelsEvents)>;
    }
  }
}
export type PlusTabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;
export interface PlusTabsPanelsVariantOverrides {}