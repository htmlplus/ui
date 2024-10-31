import { PlusCore } from '../../core';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class Accordions extends PlusCore {
    /**
     * Specifies that only one accordion can be open.
     */
    persistent?: boolean;
    get state(): any;
    open(target: HTMLElement): void;
    render(): any;
}

export interface AccordionsAttributes {
  /**
  * Specifies that only one accordion can be open.
  */
  "persistent"?: boolean;
}
export interface AccordionsEvents {}
export interface AccordionsMethods {}
export interface AccordionsProperties {
  /**
  * Specifies that only one accordion can be open.
  */
  persistent?: boolean;
}
export interface AccordionsJSX extends AccordionsEvents, AccordionsProperties {}
declare global {
  interface HTMLPlusAccordionsElement extends HTMLElement, AccordionsMethods, AccordionsProperties {}
  var HTMLPlusAccordionsElement: {
    prototype: HTMLPlusAccordionsElement;
    new (): HTMLPlusAccordionsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-accordions": HTMLPlusAccordionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": AccordionsEvents & AccordionsAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type AccordionsElement = globalThis.HTMLPlusAccordionsElement;