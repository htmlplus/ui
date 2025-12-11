import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { StackAlign, StackGap, StackJustify } from './stack.types';
/**
 * A container for arranging elements vertically or horizontally.
 *
 * @slot default - The default slot.
 *
 * @examples default, vertical, divider
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
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * Whether the stack is vertical.
     */
    vertical?: boolean;
    /**
     * Controls whether items should wrap onto multiple lines.
     */
    wrap?: boolean | 'reverse';
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    get style(): {
        'align-items': string;
        display: string;
        'flex-direction': string;
        gap: string;
        'justify-content': string;
        'flex-wrap': string;
    };
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface StackAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<string & {}, StackVariantOverrides>;
  /**
  * Whether the stack is vertical.
  */
  "vertical"?: boolean;
  /**
  * Controls whether items should wrap onto multiple lines.
  */
  "wrap"?: boolean | 'reverse';
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<StackProperties, "overrides">>;
}
export interface StackAttributesDisables {}
export type StackAttributes = Filter<StackAttributesBase, StackAttributesDisables>;
export interface StackEventsBase {}
export interface StackEventsDisables {}
export type StackEvents = Filter<StackEventsBase, StackEventsDisables>;
export interface StackMethodsBase {}
export interface StackMethodsDisables {}
export type StackMethods = Filter<StackMethodsBase, StackMethodsDisables>;
export interface StackPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<string & {}, StackVariantOverrides>;
  /**
  * Whether the stack is vertical.
  */
  vertical?: boolean;
  /**
  * Controls whether items should wrap onto multiple lines.
  */
  wrap?: boolean | 'reverse';
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<StackProperties, "overrides">>;
}
export interface StackPropertiesDisables {}
export type StackProperties = Filter<StackPropertiesBase, StackPropertiesDisables>;
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
      "plus-stack": StackEvents & StackAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (StackEvents & StackAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": StackEvents & StackAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (StackEvents & StackAttributes)>;
    }
  }
}
export type StackElement = globalThis.HTMLPlusStackElement;
export interface StackVariantOverrides {}