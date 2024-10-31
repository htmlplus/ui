import { PlusCore } from '../../core';
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
      "plus-avatar-group": AvatarGroupEvents & AvatarGroupAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type AvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;