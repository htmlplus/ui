import { PlusCore } from '../../core';
import { CardElevation } from './card.types';
/**
 * @slot default - The default slot.
 */
export declare class Card extends PlusCore {
    /**
     * If you want the card to have shadow, use the elevation property,
     * And select the property value between `1` and `24`.
     */
    elevation?: CardElevation;
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
    render(): any;
}

export interface CardAttributes {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  "elevation"?: CardElevation;
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
}
export interface CardEvents {}
export interface CardMethods {}
export interface CardProperties {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  elevation?: CardElevation;
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
}
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
      "plus-card": CardEvents & CardAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CardElement = globalThis.HTMLPlusCardElement;