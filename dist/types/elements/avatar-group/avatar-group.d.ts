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
    variant?: OverridableValue<string>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

export interface AvatarGroupAttributes {
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
  "variant"?: OverridableValue<string, AvatarGroupVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<AvatarGroupProperties, "overrides">>;
}
export interface AvatarGroupEvents {}
export interface AvatarGroupMethods {}
export interface AvatarGroupProperties {
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
  variant?: OverridableValue<string, AvatarGroupVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<AvatarGroupProperties, "overrides">>;
}
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
      "plus-avatar-group": AvatarGroupEvents & AvatarGroupAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": AvatarGroupEvents & AvatarGroupAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type AvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;
export interface AvatarGroupVariantOverrides {}