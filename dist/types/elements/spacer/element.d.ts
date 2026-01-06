import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @examples default
 */
export declare class PlusSpacer extends PlusCore {
    /**
     * TODO
     */
    grow?: number;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    get style(): {
        'flex-grow': number;
    };
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusSpacerAttributesBase {
  /**
  * TODO
  */
  "grow"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSpacerProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusSpacerVariantOverrides>;
}
export interface PlusSpacerAttributesDisables {}
export type PlusSpacerAttributes = Filter<PlusSpacerAttributesBase, PlusSpacerAttributesDisables>;
export interface PlusSpacerEventsBase {}
export interface PlusSpacerEventsDisables {}
export type PlusSpacerEvents = Filter<PlusSpacerEventsBase, PlusSpacerEventsDisables>;
export interface PlusSpacerMethodsBase {}
export interface PlusSpacerMethodsDisables {}
export type PlusSpacerMethods = Filter<PlusSpacerMethodsBase, PlusSpacerMethodsDisables>;
export interface PlusSpacerPropertiesBase {
  /**
  * TODO
  */
  grow?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSpacerProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusSpacerVariantOverrides>;
}
export interface PlusSpacerPropertiesDisables {}
export type PlusSpacerProperties = Filter<PlusSpacerPropertiesBase, PlusSpacerPropertiesDisables>;
export type PlusSpacerAttributesAndEvents = PlusSpacerAttributes & PlusSpacerEvents;
export interface PlusSpacerJSX extends PlusSpacerEvents, PlusSpacerProperties {}
declare global {
  interface HTMLPlusSpacerElement extends HTMLElement, PlusSpacerMethods, PlusSpacerProperties {}
  var HTMLPlusSpacerElement: {
    prototype: HTMLPlusSpacerElement;
    new (): HTMLPlusSpacerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spacer": HTMLPlusSpacerElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-spacer": PlusSpacerAttributes & PlusSpacerEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSpacerElement>, keyof PlusSpacerAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSpacerElement>, keyof PlusSpacerAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSpacerElement>, keyof PlusSpacerAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSpacerElement>, keyof PlusSpacerAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSpacerElement>, keyof PlusSpacerAttributesAndEvents>;
    }
  }
}
export type PlusSpacerElement = globalThis.HTMLPlusSpacerElement;
export interface PlusSpacerVariantOverrides {}