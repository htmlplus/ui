import { PlusCore } from '../../core';
import { SpinnerSize, SpinnerType } from './spinner.types';
/**
 * @stable
 */
export declare class Spinner extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerSize;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: SpinnerType;
    get style(): {
        color: string;
    };
    get elements(): number[];
    render(): any;
}

export interface SpinnerAttributes {
  /**
  * Specifies the color.
  */
  "color"?: string;
  /**
  * Specifies the size of the spinner.
  */
  "size"?: SpinnerSize;
  /**
  * Specifies which variant of the spinner to use.
  */
  "type"?: SpinnerType;
}
export interface SpinnerEvents {}
export interface SpinnerMethods {}
export interface SpinnerProperties {
  /**
  * Specifies the color.
  */
  color?: string;
  /**
  * Specifies the size of the spinner.
  */
  size?: SpinnerSize;
  /**
  * Specifies which variant of the spinner to use.
  */
  type?: SpinnerType;
}
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
      "plus-spinner": SpinnerEvents & SpinnerAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type SpinnerElement = globalThis.HTMLPlusSpinnerElement;