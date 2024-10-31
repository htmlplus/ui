import { PlusCore } from '../../core';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class Center extends PlusCore {
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
    render(): any;
}

export interface CenterAttributes {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  "inline"?: boolean;
}
export interface CenterEvents {}
export interface CenterMethods {}
export interface CenterProperties {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  inline?: boolean;
}
export interface CenterJSX extends CenterEvents, CenterProperties {}
declare global {
  interface HTMLPlusCenterElement extends HTMLElement, CenterMethods, CenterProperties {}
  var HTMLPlusCenterElement: {
    prototype: HTMLPlusCenterElement;
    new (): HTMLPlusCenterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-center": HTMLPlusCenterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": CenterEvents & CenterAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CenterElement = globalThis.HTMLPlusCenterElement;