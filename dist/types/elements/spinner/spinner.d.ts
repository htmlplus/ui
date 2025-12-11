import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
import { SpinnerSize, SpinnerType } from './spinner.types';
/**
 * An indicator of progress and activity.
 *
 * @stable
 *
 * @examples default, size, custom-size, color, type, customized
 */
export declare class Spinner extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerSize;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: SpinnerType;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    get style(): {
        color: string;
    };
    get elements(): number[];
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface SpinnerAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the size of the spinner.
  */
  "size"?: SpinnerSize;
  /**
  * Specifies which variant of the spinner to use.
  */
  "type"?: SpinnerType;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, SpinnerVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<SpinnerProperties, "overrides">>;
}
export interface SpinnerAttributesDisables {}
export type SpinnerAttributes = Filter<SpinnerAttributesBase, SpinnerAttributesDisables>;
export interface SpinnerEventsBase {}
export interface SpinnerEventsDisables {}
export type SpinnerEvents = Filter<SpinnerEventsBase, SpinnerEventsDisables>;
export interface SpinnerMethodsBase {}
export interface SpinnerMethodsDisables {}
export type SpinnerMethods = Filter<SpinnerMethodsBase, SpinnerMethodsDisables>;
export interface SpinnerPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the size of the spinner.
  */
  size?: SpinnerSize;
  /**
  * Specifies which variant of the spinner to use.
  */
  type?: SpinnerType;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, SpinnerVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<SpinnerProperties, "overrides">>;
}
export interface SpinnerPropertiesDisables {}
export type SpinnerProperties = Filter<SpinnerPropertiesBase, SpinnerPropertiesDisables>;
export interface SpinnerJSX extends SpinnerEvents, SpinnerProperties {}
declare global {
  interface HTMLPlusSpinnerElement extends HTMLElement, SpinnerMethods, SpinnerProperties {}
  var HTMLPlusSpinnerElement: {
    prototype: HTMLPlusSpinnerElement;
    new (): HTMLPlusSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spinner": HTMLPlusSpinnerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": SpinnerEvents & SpinnerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SpinnerEvents & SpinnerAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": SpinnerEvents & SpinnerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SpinnerEvents & SpinnerAttributes)>;
    }
  }
}
export type SpinnerElement = globalThis.HTMLPlusSpinnerElement;
export interface SpinnerVariantOverrides {}