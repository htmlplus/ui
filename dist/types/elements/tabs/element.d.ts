import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
/**
 * Organizes content across different screens.
 *
 * @development
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, grow, justify, reverse, below, vertical
 */
export declare class PlusTabs extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * You can use vertical property for vertical mode.
     */
    vertical?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Fired when the value changes.
     */
    plusChange: EventEmitter<string>;
    get state(): Context;
    change(value: string): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusTabsAttributesBase {
  /**
  * Provides your own value.
  */
  "value"?: string;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusTabsVariantOverrides>;
  /**
  * You can use vertical property for vertical mode.
  */
  "vertical"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsProperties, "overrides">>;
}
export interface PlusTabsAttributesDisables {}
export type PlusTabsAttributes = Filter<PlusTabsAttributesBase, PlusTabsAttributesDisables>;
export interface PlusTabsEventsBase {
  /**
  * Fired when the value changes.
  */
  onPlusChange?: (event: CustomEvent<string>) => void;
}
export interface PlusTabsEventsDisables {}
export type PlusTabsEvents = Filter<PlusTabsEventsBase, PlusTabsEventsDisables>;
export interface PlusTabsMethodsBase {}
export interface PlusTabsMethodsDisables {}
export type PlusTabsMethods = Filter<PlusTabsMethodsBase, PlusTabsMethodsDisables>;
export interface PlusTabsPropertiesBase {
  /**
  * Provides your own value.
  */
  value?: string;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusTabsVariantOverrides>;
  /**
  * You can use vertical property for vertical mode.
  */
  vertical?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsProperties, "overrides">>;
}
export interface PlusTabsPropertiesDisables {}
export type PlusTabsProperties = Filter<PlusTabsPropertiesBase, PlusTabsPropertiesDisables>;
export type PlusTabsAttributesAndEvents = PlusTabsAttributes & PlusTabsEvents;
export interface PlusTabsJSX extends PlusTabsEvents, PlusTabsProperties {}
declare global {
  interface HTMLPlusTabsElement extends HTMLElement, PlusTabsMethods, PlusTabsProperties {}
  var HTMLPlusTabsElement: {
    prototype: HTMLPlusTabsElement;
    new (): HTMLPlusTabsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs": HTMLPlusTabsElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs": PlusTabsAttributes & PlusTabsEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsElement>, keyof PlusTabsAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsElement>, keyof PlusTabsAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsElement>, keyof PlusTabsAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsElement>, keyof PlusTabsAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusTabsElement>, keyof PlusTabsAttributesAndEvents>;
    }
  }
}
export type PlusTabsElement = globalThis.HTMLPlusTabsElement;
export interface PlusTabsVariantOverrides {}