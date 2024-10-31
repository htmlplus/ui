import { PlusCore } from '../../core';
export declare class Spacer extends PlusCore {
    /**
     * TODO
     */
    grow?: number;
    get attributes(): {
        style: string;
    };
}

export interface SpacerAttributes {
  /**
  * TODO
  */
  "grow"?: number;
}
export interface SpacerEvents {}
export interface SpacerMethods {}
export interface SpacerProperties {
  /**
  * TODO
  */
  grow?: number;
}
export interface SpacerJSX extends SpacerEvents, SpacerProperties {}
declare global {
  interface HTMLPlusSpacerElement extends HTMLElement, SpacerMethods, SpacerProperties {}
  var HTMLPlusSpacerElement: {
    prototype: HTMLPlusSpacerElement;
    new (): HTMLPlusSpacerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spacer": HTMLPlusSpacerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": SpacerEvents & SpacerAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type SpacerElement = globalThis.HTMLPlusSpacerElement;