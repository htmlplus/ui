import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
import { AvatarShape, AvatarSize } from './avatar.types';
/**
 * An image representing a user's profile picture.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, text, color, image, icon, svg, shape, size, size-overriding, wildcard-size,
 *           link-with-tooltip, with-avatar, slots, group, group-stacked, group-hoverable,
 *           group-gutter, group-link-with-tooltip
 */
export declare class Avatar extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Specifies the shape of the element.
     */
    shape?: AvatarShape;
    /**
     * Specifies the size of the element.
     */
    size?: AvatarSize;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface AvatarAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the shape of the element.
  */
  "shape"?: AvatarShape;
  /**
  * Specifies the size of the element.
  */
  "size"?: AvatarSize;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, AvatarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<AvatarProperties, "overrides">>;
}
export interface AvatarAttributesDisables {}
export type AvatarAttributes = Filter<AvatarAttributesBase, AvatarAttributesDisables>;
export interface AvatarEventsBase {}
export interface AvatarEventsDisables {}
export type AvatarEvents = Filter<AvatarEventsBase, AvatarEventsDisables>;
export interface AvatarMethodsBase {}
export interface AvatarMethodsDisables {}
export type AvatarMethods = Filter<AvatarMethodsBase, AvatarMethodsDisables>;
export interface AvatarPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the shape of the element.
  */
  shape?: AvatarShape;
  /**
  * Specifies the size of the element.
  */
  size?: AvatarSize;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, AvatarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<AvatarProperties, "overrides">>;
}
export interface AvatarPropertiesDisables {}
export type AvatarProperties = Filter<AvatarPropertiesBase, AvatarPropertiesDisables>;
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
      "plus-avatar": AvatarEvents & AvatarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AvatarEvents & AvatarAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": AvatarEvents & AvatarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AvatarEvents & AvatarAttributes)>;
    }
  }
}
export type AvatarElement = globalThis.HTMLPlusAvatarElement;
export interface AvatarVariantOverrides {}