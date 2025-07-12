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
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<AccordionsProperties>;
  };
}
export interface AccordionsEvents {}
export interface AccordionsMethods {}
export interface AccordionsProperties {
  /**
  * Specifies that only one accordion can be open.
  */
  persistent?: boolean;
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<AccordionsProperties>;
  };
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
      "plus-accordions": AccordionsEvents & AccordionsAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": AccordionsEvents & AccordionsAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type AccordionsElement = globalThis.HTMLPlusAccordionsElement;