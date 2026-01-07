import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * A container for arranging elements vertically or horizontally.
 *
 * @slot default - The default slot.
 *
 * @examples default, vertical, divider
 */
export declare class PlusStack extends PlusCore {
    /**
     * The gap between items.
     */
    gap?: string | number;
    /**
     * The alignment of items along the cross axis.
     */
    items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    /**
     * The distribution of items along the main axis.
     */
    justify?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
    /**
     * Whether to reverse the order of items.
     */
    reverse?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
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
    overrides?: OverridesConfig<PlusBreakpoint>;
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
export interface PlusStackAttributesBase {
  /**
  * The gap between items.
  */
  "gap"?: string | number;
  /**
  * The alignment of items along the cross axis.
  */
  "items"?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
  * The distribution of items along the main axis.
  */
  "justify"?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
  /**
  * Whether to reverse the order of items.
  */
  "reverse"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusStackVariantOverrides>;
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
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusStackProperties, "overrides">>;
}
export interface PlusStackAttributesDisables {}
export type PlusStackAttributes = Filter<PlusStackAttributesBase, PlusStackAttributesDisables>;
export interface PlusStackEventsBase {}
export interface PlusStackEventsDisables {}
export type PlusStackEvents = Filter<PlusStackEventsBase, PlusStackEventsDisables>;
export interface PlusStackMethodsBase {}
export interface PlusStackMethodsDisables {}
export type PlusStackMethods = Filter<PlusStackMethodsBase, PlusStackMethodsDisables>;
export interface PlusStackPropertiesBase {
  /**
  * The gap between items.
  */
  gap?: string | number;
  /**
  * The alignment of items along the cross axis.
  */
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
  * The distribution of items along the main axis.
  */
  justify?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
  /**
  * Whether to reverse the order of items.
  */
  reverse?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusStackVariantOverrides>;
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
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusStackProperties, "overrides">>;
}
export interface PlusStackPropertiesDisables {}
export type PlusStackProperties = Filter<PlusStackPropertiesBase, PlusStackPropertiesDisables>;
export interface PlusStackJSX extends PlusStackEvents, PlusStackProperties {}
declare global {
  interface HTMLPlusStackElement extends HTMLElement, PlusStackMethods, PlusStackProperties {}
  var HTMLPlusStackElement: {
    prototype: HTMLPlusStackElement;
    new (): HTMLPlusStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-stack": HTMLPlusStackElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-stack": PlusStackAttributes & PlusStackEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackAttributes & PlusStackEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusStackElement>, HTMLPlusStackElement>, keyof (PlusStackAttributes & PlusStackEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackAttributes & PlusStackEvents & Omit<HTMLAttributes<HTMLPlusStackElement>, keyof (PlusStackAttributes & PlusStackEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackAttributes & PlusStackEvents & Omit<HTMLAttributes<HTMLPlusStackElement>, keyof (PlusStackAttributes & PlusStackEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackAttributes & PlusStackEvents & Omit<HTMLAttributes<HTMLPlusStackElement>, keyof (PlusStackAttributes & PlusStackEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackAttributes & PlusStackEvents & Omit<HTMLAttributes<HTMLPlusStackElement>, keyof (PlusStackAttributes & PlusStackEvents)>;
    }
  }
}
export type PlusStackElement = globalThis.HTMLPlusStackElement;
export interface PlusStackVariantOverrides {}