import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
import { PlusAvatarSize } from './types';
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
export declare class PlusAvatar extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, PlusColorOverrides>;
    /**
     * Specifies the shape of the element.
     */
    shape?: 'circle' | 'round' | 'tile';
    /**
     * Specifies the size of the element.
     */
    size?: OverridableValue<PlusAvatarSize>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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
export interface PlusAvatarAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Specifies the shape of the element.
  */
  "shape"?: 'circle' | 'round' | 'tile';
  /**
  * Specifies the size of the element.
  */
  "size"?: OverridableValue<PlusAvatarSize, PlusAvatarSizeOverrides>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusAvatarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarProperties, "overrides">>;
}
export interface PlusAvatarAttributesDisables {}
export type PlusAvatarAttributes = Filter<PlusAvatarAttributesBase, PlusAvatarAttributesDisables>;
export interface PlusAvatarEventsBase {}
export interface PlusAvatarEventsDisables {}
export type PlusAvatarEvents = Filter<PlusAvatarEventsBase, PlusAvatarEventsDisables>;
export interface PlusAvatarMethodsBase {}
export interface PlusAvatarMethodsDisables {}
export type PlusAvatarMethods = Filter<PlusAvatarMethodsBase, PlusAvatarMethodsDisables>;
export interface PlusAvatarPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Specifies the shape of the element.
  */
  shape?: 'circle' | 'round' | 'tile';
  /**
  * Specifies the size of the element.
  */
  size?: OverridableValue<PlusAvatarSize, PlusAvatarSizeOverrides>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusAvatarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarProperties, "overrides">>;
}
export interface PlusAvatarPropertiesDisables {}
export type PlusAvatarProperties = Filter<PlusAvatarPropertiesBase, PlusAvatarPropertiesDisables>;
export interface PlusAvatarJSX extends PlusAvatarEvents, PlusAvatarProperties {}
declare global {
  interface HTMLPlusAvatarElement extends HTMLElement, PlusAvatarMethods, PlusAvatarProperties {}
  var HTMLPlusAvatarElement: {
    prototype: HTMLPlusAvatarElement;
    new (): HTMLPlusAvatarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-avatar": HTMLPlusAvatarElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-avatar": PlusAvatarAttributes & PlusAvatarEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarAttributes & PlusAvatarEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAvatarElement>, HTMLPlusAvatarElement>, keyof (PlusAvatarAttributes & PlusAvatarEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarAttributes & PlusAvatarEvents & Omit<HTMLAttributes<HTMLPlusAvatarElement>, keyof (PlusAvatarAttributes & PlusAvatarEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarAttributes & PlusAvatarEvents & Omit<HTMLAttributes<HTMLPlusAvatarElement>, keyof (PlusAvatarAttributes & PlusAvatarEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarAttributes & PlusAvatarEvents & Omit<HTMLAttributes<HTMLPlusAvatarElement>, keyof (PlusAvatarAttributes & PlusAvatarEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarAttributes & PlusAvatarEvents & Omit<HTMLAttributes<HTMLPlusAvatarElement>, keyof (PlusAvatarAttributes & PlusAvatarEvents)>;
    }
  }
}
export type PlusAvatarElement = globalThis.HTMLPlusAvatarElement;
export interface PlusAvatarSizeOverrides {}
export interface PlusAvatarVariantOverrides {}