import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { CardElevation } from './card.types';
/**
 * Cards contain content and actions about a single subject.
 *
 * @slot default - The default slot.
 *
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customized
 */
export declare class Card extends PlusCore {
    /**
     * If you want the card to have shadow, use the elevation property,
     * And select the property value between `1` and `24`.
     */
    elevation?: OverridableValue<CardElevation>;
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
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CardAttributesBase {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  "elevation"?: OverridableValue<CardElevation, CardElevationOverrides>;
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
  "variant"?: OverridableValue<never, CardVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CardProperties, "overrides">>;
}
export interface CardAttributesDisables {}
export type CardAttributes = Filter<CardAttributesBase, CardAttributesDisables>;
export interface CardEventsBase {}
export interface CardEventsDisables {}
export type CardEvents = Filter<CardEventsBase, CardEventsDisables>;
export interface CardMethodsBase {}
export interface CardMethodsDisables {}
export type CardMethods = Filter<CardMethodsBase, CardMethodsDisables>;
export interface CardPropertiesBase {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  elevation?: OverridableValue<CardElevation, CardElevationOverrides>;
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
  variant?: OverridableValue<never, CardVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CardProperties, "overrides">>;
}
export interface CardPropertiesDisables {}
export type CardProperties = Filter<CardPropertiesBase, CardPropertiesDisables>;
export interface CardJSX extends CardEvents, CardProperties {}
declare global {
  interface HTMLPlusCardElement extends HTMLElement, CardMethods, CardProperties {}
  var HTMLPlusCardElement: {
    prototype: HTMLPlusCardElement;
    new (): HTMLPlusCardElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card": HTMLPlusCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": CardEvents & CardAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CardEvents & CardAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": CardEvents & CardAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CardEvents & CardAttributes)>;
    }
  }
}
export type CardElement = globalThis.HTMLPlusCardElement;
export interface CardElevationOverrides {}
export interface CardVariantOverrides {}