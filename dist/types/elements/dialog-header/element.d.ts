import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogHeader extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDialogHeaderAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogHeaderProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDialogHeaderVariantOverrides>;
}
export interface PlusDialogHeaderAttributesDisables {}
export type PlusDialogHeaderAttributes = Filter<PlusDialogHeaderAttributesBase, PlusDialogHeaderAttributesDisables>;
export interface PlusDialogHeaderEventsBase {}
export interface PlusDialogHeaderEventsDisables {}
export type PlusDialogHeaderEvents = Filter<PlusDialogHeaderEventsBase, PlusDialogHeaderEventsDisables>;
export interface PlusDialogHeaderMethodsBase {}
export interface PlusDialogHeaderMethodsDisables {}
export type PlusDialogHeaderMethods = Filter<PlusDialogHeaderMethodsBase, PlusDialogHeaderMethodsDisables>;
export interface PlusDialogHeaderPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogHeaderProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDialogHeaderVariantOverrides>;
}
export interface PlusDialogHeaderPropertiesDisables {}
export type PlusDialogHeaderProperties = Filter<PlusDialogHeaderPropertiesBase, PlusDialogHeaderPropertiesDisables>;
export interface PlusDialogHeaderJSX extends PlusDialogHeaderEvents, PlusDialogHeaderProperties {}
declare global {
  interface HTMLPlusDialogHeaderElement extends HTMLElement, PlusDialogHeaderMethods, PlusDialogHeaderProperties {}
  var HTMLPlusDialogHeaderElement: {
    prototype: HTMLPlusDialogHeaderElement;
    new (): HTMLPlusDialogHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-header": HTMLPlusDialogHeaderElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-header": PlusDialogHeaderAttributes & PlusDialogHeaderEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderAttributes & PlusDialogHeaderEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogHeaderElement>, HTMLPlusDialogHeaderElement>, keyof (PlusDialogHeaderAttributes & PlusDialogHeaderEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderAttributes & PlusDialogHeaderEvents & Omit<HTMLAttributes<HTMLPlusDialogHeaderElement>, keyof (PlusDialogHeaderAttributes & PlusDialogHeaderEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderAttributes & PlusDialogHeaderEvents & Omit<HTMLAttributes<HTMLPlusDialogHeaderElement>, keyof (PlusDialogHeaderAttributes & PlusDialogHeaderEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderAttributes & PlusDialogHeaderEvents & Omit<HTMLAttributes<HTMLPlusDialogHeaderElement>, keyof (PlusDialogHeaderAttributes & PlusDialogHeaderEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderAttributes & PlusDialogHeaderEvents & Omit<HTMLAttributes<HTMLPlusDialogHeaderElement>, keyof (PlusDialogHeaderAttributes & PlusDialogHeaderEvents)>;
    }
  }
}
export type PlusDialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;
export interface PlusDialogHeaderVariantOverrides {}