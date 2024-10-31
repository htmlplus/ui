import { PlusCore } from '../../core';
import { StackAlign, StackGap, StackJustify } from './stack.types';
/**
 * @slot default - The default slot.
 */
export declare class Stack extends PlusCore {
    /**
     * The gap between items.
     */
    gap?: StackGap;
    /**
     * The alignment of items along the cross axis.
     */
    items?: StackAlign;
    /**
     * The distribution of items along the main axis.
     */
    justify?: StackJustify;
    /**
     * Whether to reverse the order of items.
     */
    reverse?: boolean;
    /**
     * Whether the stack is vertical.
     */
    vertical?: boolean;
    get style(): {
        'align-items': string;
        display: string;
        'flex-direction': string;
        gap: string;
        'justify-content': string;
    };
    render(): any;
}

export interface StackAttributes {
  /**
  * The gap between items.
  */
  "gap"?: StackGap;
  /**
  * The alignment of items along the cross axis.
  */
  "items"?: StackAlign;
  /**
  * The distribution of items along the main axis.
  */
  "justify"?: StackJustify;
  /**
  * Whether to reverse the order of items.
  */
  "reverse"?: boolean;
  /**
  * Whether the stack is vertical.
  */
  "vertical"?: boolean;
}
export interface StackEvents {}
export interface StackMethods {}
export interface StackProperties {
  /**
  * The gap between items.
  */
  gap?: StackGap;
  /**
  * The alignment of items along the cross axis.
  */
  items?: StackAlign;
  /**
  * The distribution of items along the main axis.
  */
  justify?: StackJustify;
  /**
  * Whether to reverse the order of items.
  */
  reverse?: boolean;
  /**
  * Whether the stack is vertical.
  */
  vertical?: boolean;
}
export interface StackJSX extends StackEvents, StackProperties {}
declare global {
  interface HTMLPlusStackElement extends HTMLElement, StackMethods, StackProperties {}
  var HTMLPlusStackElement: {
    prototype: HTMLPlusStackElement;
    new (): HTMLPlusStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-stack": HTMLPlusStackElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": StackEvents & StackAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type StackElement = globalThis.HTMLPlusStackElement;