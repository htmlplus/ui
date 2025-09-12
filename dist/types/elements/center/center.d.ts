import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * Centers content vertically and horizontally.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, inline
 */
export declare class Center extends PlusCore {
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    render(): any;
}

export interface CenterAttributes {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  "inline"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CenterProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, CenterVariantOverrides>;
}
export interface CenterEvents {}
export interface CenterMethods {}
export interface CenterProperties {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  inline?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CenterProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, CenterVariantOverrides>;
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
      "plus-center": CenterEvents & CenterAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": CenterEvents & CenterAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type CenterElement = globalThis.HTMLPlusCenterElement;
export interface CenterVariantOverrides {}