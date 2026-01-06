import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Cards contain content and actions about a single subject.
 *
 * @slot default - The default slot.
 *
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customized
 */
export declare class PlusCard extends PlusCore {
    /**
     * If you want the card to have shadow, use the elevation property,
     * And select the property value between `1` and `24`.
     */
    elevation?: OverridableValue<number>;
    /**
     * Use the flat property to neutralize elevation.
     */
    flat?: boolean;
    /**
     * If you want the card to have border, use the outlined property.
     */
    outlined?: boolean;
    /**
     * Use tile property to neutralize border-radius.
     */
    tile?: boolean;
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
export interface PlusCardAttributesBase {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  "elevation"?: OverridableValue<number, PlusCardElevationOverrides>;
  /**
  * Use the flat property to neutralize elevation.
  */
  "flat"?: boolean;
  /**
  * If you want the card to have border, use the outlined property.
  */
  "outlined"?: boolean;
  /**
  * Use tile property to neutralize border-radius.
  */
  "tile"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCardVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCardProperties, "overrides">>;
}
export interface PlusCardAttributesDisables {}
export type PlusCardAttributes = Filter<PlusCardAttributesBase, PlusCardAttributesDisables>;
export interface PlusCardEventsBase {}
export interface PlusCardEventsDisables {}
export type PlusCardEvents = Filter<PlusCardEventsBase, PlusCardEventsDisables>;
export interface PlusCardMethodsBase {}
export interface PlusCardMethodsDisables {}
export type PlusCardMethods = Filter<PlusCardMethodsBase, PlusCardMethodsDisables>;
export interface PlusCardPropertiesBase {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  elevation?: OverridableValue<number, PlusCardElevationOverrides>;
  /**
  * Use the flat property to neutralize elevation.
  */
  flat?: boolean;
  /**
  * If you want the card to have border, use the outlined property.
  */
  outlined?: boolean;
  /**
  * Use tile property to neutralize border-radius.
  */
  tile?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCardVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCardProperties, "overrides">>;
}
export interface PlusCardPropertiesDisables {}
export type PlusCardProperties = Filter<PlusCardPropertiesBase, PlusCardPropertiesDisables>;
export type PlusCardAttributesAndEvents = PlusCardAttributes & PlusCardEvents;
export interface PlusCardJSX extends PlusCardEvents, PlusCardProperties {}
declare global {
  interface HTMLPlusCardElement extends HTMLElement, PlusCardMethods, PlusCardProperties {}
  var HTMLPlusCardElement: {
    prototype: HTMLPlusCardElement;
    new (): HTMLPlusCardElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card": HTMLPlusCardElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-card": PlusCardAttributes & PlusCardEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCardElement>, keyof PlusCardAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCardElement>, keyof PlusCardAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCardElement>, keyof PlusCardAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCardElement>, keyof PlusCardAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCardElement>, keyof PlusCardAttributesAndEvents>;
    }
  }
}
export type PlusCardElement = globalThis.HTMLPlusCardElement;
export interface PlusCardElevationOverrides {}
export interface PlusCardVariantOverrides {}