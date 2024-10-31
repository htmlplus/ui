import { PlusCore } from '../../core';
import { AvatarShape, AvatarSize } from './avatar.types';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class Avatar extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Specifies the shape of the element.
     */
    shape?: AvatarShape;
    /**
     * Specifies the size of the element.
     */
    size?: AvatarSize;
    get placements(): ({
        key: string;
        style: {
            [x: string]: string | number;
            bottom: number;
            transform: string;
            top?: undefined;
            left?: undefined;
            right?: undefined;
        };
    } | {
        key: string;
        style: {
            [x: string]: string | number;
            top: string;
            transform: string;
            bottom?: undefined;
            left?: undefined;
            right?: undefined;
        };
    } | {
        key: string;
        style: {
            [x: string]: string;
            bottom: string;
            transform: string;
            top?: undefined;
            left?: undefined;
            right?: undefined;
        };
    } | {
        key: string;
        style: {
            top: string;
            left: number;
            transform: string;
            bottom?: undefined;
            right?: undefined;
        };
    } | {
        key: string;
        style: {
            bottom: string;
            left: string;
            transform: string;
            top?: undefined;
            right?: undefined;
        };
    } | {
        key: string;
        style: {
            top: string;
            left: string;
            transform: string;
            bottom?: undefined;
            right?: undefined;
        };
    } | {
        key: string;
        style: {
            top: string;
            right: number;
            transform: string;
            bottom?: undefined;
            left?: undefined;
        };
    } | {
        key: string;
        style: {
            bottom: string;
            right: string;
            transform: string;
            top?: undefined;
            left?: undefined;
        };
    } | {
        key: string;
        style: {
            top: string;
            right: string;
            transform: string;
            bottom?: undefined;
            left?: undefined;
        };
    } | {
        key: string;
        style: {
            [x: string]: string | number;
            top: number;
            transform: string;
            bottom?: undefined;
            left?: undefined;
            right?: undefined;
        };
    })[];
    get style(): {
        '--plus-avatar-color': string;
        '--plus-avatar-size': string;
    };
    render(): any;
}

export interface AvatarAttributes {
  /**
  * Specifies the color.
  */
  "color"?: string;
  /**
  * Specifies the shape of the element.
  */
  "shape"?: AvatarShape;
  /**
  * Specifies the size of the element.
  */
  "size"?: AvatarSize;
}
export interface AvatarEvents {}
export interface AvatarMethods {}
export interface AvatarProperties {
  /**
  * Specifies the color.
  */
  color?: string;
  /**
  * Specifies the shape of the element.
  */
  shape?: AvatarShape;
  /**
  * Specifies the size of the element.
  */
  size?: AvatarSize;
}
export interface AvatarJSX extends AvatarEvents, AvatarProperties {}
declare global {
  interface HTMLPlusAvatarElement extends HTMLElement, AvatarMethods, AvatarProperties {}
  var HTMLPlusAvatarElement: {
    prototype: HTMLPlusAvatarElement;
    new (): HTMLPlusAvatarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-avatar": HTMLPlusAvatarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": AvatarEvents & AvatarAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type AvatarElement = globalThis.HTMLPlusAvatarElement;