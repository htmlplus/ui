import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../tabs/context';
/**
 * TODO: Tabs make it easy to switch between different views.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsTab extends PlusCore {
    /**
     * A Tab can be disabled by setting disabled property.
     */
    disabled?: boolean;
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    parent?: Context;
    onClick(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusTabsTabAttributesBase {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  "disabled"?: boolean;
  /**
  * Provides your own value.
  */
  "value"?: string;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusTabsTabVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsTabProperties, "overrides">>;
}
export interface PlusTabsTabAttributesDisables {}
export type PlusTabsTabAttributes = Filter<PlusTabsTabAttributesBase, PlusTabsTabAttributesDisables>;
export interface PlusTabsTabEventsBase {}
export interface PlusTabsTabEventsDisables {}
export type PlusTabsTabEvents = Filter<PlusTabsTabEventsBase, PlusTabsTabEventsDisables>;
export interface PlusTabsTabMethodsBase {}
export interface PlusTabsTabMethodsDisables {}
export type PlusTabsTabMethods = Filter<PlusTabsTabMethodsBase, PlusTabsTabMethodsDisables>;
export interface PlusTabsTabPropertiesBase {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  disabled?: boolean;
  /**
  * Provides your own value.
  */
  value?: string;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusTabsTabVariantOverrides>;
  /**
  * TODO
  */
  active;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsTabProperties, "overrides">>;
}
export interface PlusTabsTabPropertiesDisables {}
export type PlusTabsTabProperties = Filter<PlusTabsTabPropertiesBase, PlusTabsTabPropertiesDisables>;
export interface PlusTabsTabJSX extends PlusTabsTabEvents, PlusTabsTabProperties {}
declare global {
  interface HTMLPlusTabsTabElement extends HTMLElement, PlusTabsTabMethods, PlusTabsTabProperties {}
  var HTMLPlusTabsTabElement: {
    prototype: HTMLPlusTabsTabElement;
    new (): HTMLPlusTabsTabElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-tab": HTMLPlusTabsTabElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-tab": PlusTabsTabAttributes & PlusTabsTabEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabAttributes & PlusTabsTabEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsTabElement>, HTMLPlusTabsTabElement>, keyof (PlusTabsTabAttributes & PlusTabsTabEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabAttributes & PlusTabsTabEvents & Omit<HTMLAttributes<HTMLPlusTabsTabElement>, keyof (PlusTabsTabAttributes & PlusTabsTabEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabAttributes & PlusTabsTabEvents & Omit<HTMLAttributes<HTMLPlusTabsTabElement>, keyof (PlusTabsTabAttributes & PlusTabsTabEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabAttributes & PlusTabsTabEvents & Omit<HTMLAttributes<HTMLPlusTabsTabElement>, keyof (PlusTabsTabAttributes & PlusTabsTabEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabAttributes & PlusTabsTabEvents & Omit<HTMLAttributes<HTMLPlusTabsTabElement>, keyof (PlusTabsTabAttributes & PlusTabsTabEvents)>;
    }
  }
}
export type PlusTabsTabElement = globalThis.HTMLPlusTabsTabElement;
export interface PlusTabsTabVariantOverrides {}