import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsBar extends PlusCore {
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
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusTabsBarAttributesBase {
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
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusTabsBarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsBarProperties, "overrides">>;
}
export interface PlusTabsBarAttributesDisables {}
export type PlusTabsBarAttributes = Filter<PlusTabsBarAttributesBase, PlusTabsBarAttributesDisables>;
export interface PlusTabsBarEventsBase {}
export interface PlusTabsBarEventsDisables {}
export type PlusTabsBarEvents = Filter<PlusTabsBarEventsBase, PlusTabsBarEventsDisables>;
export interface PlusTabsBarMethodsBase {}
export interface PlusTabsBarMethodsDisables {}
export type PlusTabsBarMethods = Filter<PlusTabsBarMethodsBase, PlusTabsBarMethodsDisables>;
export interface PlusTabsBarPropertiesBase {
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
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusTabsBarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsBarProperties, "overrides">>;
}
export interface PlusTabsBarPropertiesDisables {}
export type PlusTabsBarProperties = Filter<PlusTabsBarPropertiesBase, PlusTabsBarPropertiesDisables>;
export type PlusTabsBarAttributesAndEvents = PlusTabsBarAttributes & PlusTabsBarEvents;
export interface PlusTabsBarJSX extends PlusTabsBarEvents, PlusTabsBarProperties {}
declare global {
  interface HTMLPlusTabsBarElement extends HTMLElement, PlusTabsBarMethods, PlusTabsBarProperties {}
  var HTMLPlusTabsBarElement: {
    prototype: HTMLPlusTabsBarElement;
    new (): HTMLPlusTabsBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-bar": HTMLPlusTabsBarElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-bar": PlusTabsBarAttributes & PlusTabsBarEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsBarElement>, keyof PlusTabsBarAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsBarElement>, keyof PlusTabsBarAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsBarElement>, keyof PlusTabsBarAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsBarElement>, keyof PlusTabsBarAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsBarElement>, keyof PlusTabsBarAttributesAndEvents>;
    }
  }
}
export type PlusTabsBarElement = globalThis.HTMLPlusTabsBarElement;
export interface PlusTabsBarVariantOverrides {}