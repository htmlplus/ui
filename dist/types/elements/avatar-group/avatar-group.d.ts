import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class AvatarGroup extends PlusCore {
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
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface AvatarGroupAttributesBase {
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
  "variant"?: OverridableValue<never, AvatarGroupVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<AvatarGroupProperties, "overrides">>;
}
export interface AvatarGroupAttributesDisables {}
export type AvatarGroupAttributes = Filter<AvatarGroupAttributesBase, AvatarGroupAttributesDisables>;
export interface AvatarGroupEventsBase {}
export interface AvatarGroupEventsDisables {}
export type AvatarGroupEvents = Filter<AvatarGroupEventsBase, AvatarGroupEventsDisables>;
export interface AvatarGroupMethodsBase {}
export interface AvatarGroupMethodsDisables {}
export type AvatarGroupMethods = Filter<AvatarGroupMethodsBase, AvatarGroupMethodsDisables>;
export interface AvatarGroupPropertiesBase {
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
  variant?: OverridableValue<never, AvatarGroupVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<AvatarGroupProperties, "overrides">>;
}
export interface AvatarGroupPropertiesDisables {}
export type AvatarGroupProperties = Filter<AvatarGroupPropertiesBase, AvatarGroupPropertiesDisables>;
export interface AvatarGroupJSX extends AvatarGroupEvents, AvatarGroupProperties {}
declare global {
  interface HTMLPlusAvatarGroupElement extends HTMLElement, AvatarGroupMethods, AvatarGroupProperties {}
  var HTMLPlusAvatarGroupElement: {
    prototype: HTMLPlusAvatarGroupElement;
    new (): HTMLPlusAvatarGroupElement;
  };
  interface HTMLElementTagNameMap {
    "plus-avatar-group": HTMLPlusAvatarGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": AvatarGroupEvents & AvatarGroupAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AvatarGroupEvents & AvatarGroupAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": AvatarGroupEvents & AvatarGroupAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AvatarGroupEvents & AvatarGroupAttributes)>;
    }
  }
}
export type AvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;
export interface AvatarGroupVariantOverrides {}