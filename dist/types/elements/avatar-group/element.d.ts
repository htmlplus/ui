import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusAvatarGroup extends PlusCore {
    /**
     * Specifies whether to prominent the avatar when the mouse is entered or not.
     */
    hoverable?: boolean;
    /**
     * Specifies whether avatars should be displayed compressed or not.
     */
    stacked?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusAvatarGroupAttributesBase {
  /**
  * Specifies whether to prominent the avatar when the mouse is entered or not.
  */
  "hoverable"?: boolean;
  /**
  * Specifies whether avatars should be displayed compressed or not.
  */
  "stacked"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusAvatarGroupVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarGroupProperties, "overrides">>;
}
export interface PlusAvatarGroupAttributesDisables {}
export type PlusAvatarGroupAttributes = Filter<PlusAvatarGroupAttributesBase, PlusAvatarGroupAttributesDisables>;
export interface PlusAvatarGroupEventsBase {}
export interface PlusAvatarGroupEventsDisables {}
export type PlusAvatarGroupEvents = Filter<PlusAvatarGroupEventsBase, PlusAvatarGroupEventsDisables>;
export interface PlusAvatarGroupMethodsBase {}
export interface PlusAvatarGroupMethodsDisables {}
export type PlusAvatarGroupMethods = Filter<PlusAvatarGroupMethodsBase, PlusAvatarGroupMethodsDisables>;
export interface PlusAvatarGroupPropertiesBase {
  /**
  * Specifies whether to prominent the avatar when the mouse is entered or not.
  */
  hoverable?: boolean;
  /**
  * Specifies whether avatars should be displayed compressed or not.
  */
  stacked?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusAvatarGroupVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarGroupProperties, "overrides">>;
}
export interface PlusAvatarGroupPropertiesDisables {}
export type PlusAvatarGroupProperties = Filter<PlusAvatarGroupPropertiesBase, PlusAvatarGroupPropertiesDisables>;
export interface PlusAvatarGroupJSX extends PlusAvatarGroupEvents, PlusAvatarGroupProperties {}
declare global {
  interface HTMLPlusAvatarGroupElement extends HTMLElement, PlusAvatarGroupMethods, PlusAvatarGroupProperties {}
  var HTMLPlusAvatarGroupElement: {
    prototype: HTMLPlusAvatarGroupElement;
    new (): HTMLPlusAvatarGroupElement;
  };
  interface HTMLElementTagNameMap {
    "plus-avatar-group": HTMLPlusAvatarGroupElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-avatar-group": PlusAvatarGroupAttributes & PlusAvatarGroupEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupAttributes & PlusAvatarGroupEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAvatarGroupElement>, HTMLPlusAvatarGroupElement>, keyof (PlusAvatarGroupAttributes & PlusAvatarGroupEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupAttributes & PlusAvatarGroupEvents & Omit<HTMLAttributes<HTMLPlusAvatarGroupElement>, keyof (PlusAvatarGroupAttributes & PlusAvatarGroupEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupAttributes & PlusAvatarGroupEvents & Omit<HTMLAttributes<HTMLPlusAvatarGroupElement>, keyof (PlusAvatarGroupAttributes & PlusAvatarGroupEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupAttributes & PlusAvatarGroupEvents & Omit<HTMLAttributes<HTMLPlusAvatarGroupElement>, keyof (PlusAvatarGroupAttributes & PlusAvatarGroupEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupAttributes & PlusAvatarGroupEvents & Omit<HTMLAttributes<HTMLPlusAvatarGroupElement>, keyof (PlusAvatarGroupAttributes & PlusAvatarGroupEvents)>;
    }
  }
}
export type PlusAvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;
export interface PlusAvatarGroupVariantOverrides {}