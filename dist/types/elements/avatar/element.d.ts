import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
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
    color?: OverridableValue<PlusColor>;
    /**
     * Specifies the shape of the element.
     */
    shape?: 'circle' | 'round' | 'tile';
    /**
     * Specifies the size of the element.
     */
    size?: OverridableValue<PlusAvatarSize>;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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
        ':host': {
            '--plus-avatar-color': string;
            '--plus-avatar-size': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusAvatarAttributesMapper = {
  'color': 'color';
  'shape': 'shape';
  'size': 'size';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusAvatarOverridableKeys = 'color' | 'size' | 'variant';
export interface PlusAvatarDisables {}
export interface PlusAvatarOverrides {}
export type PlusAvatarAttributes = Filter<PlusAvatarAttributesOverridden, PlusAvatarDisables, PlusAvatarAttributesMapper>;
export type PlusAvatarAttributesOverridden = Override<PlusAvatarAttributesBase, PlusAvatarOverrides, PlusAvatarOverridableKeys, PlusAvatarAttributesMapper>;
export type PlusAvatarAttributesBase = {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<PlusColor>;
  /**
  * Specifies the shape of the element.
  */
  "shape"?: 'circle' | 'round' | 'tile';
  /**
  * Specifies the size of the element.
  */
  "size"?: OverridableValue<PlusAvatarSize>;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusAvatarEvents = Filter<PlusAvatarEventsBase, PlusAvatarDisables>;
export type PlusAvatarEventsBase = {};
export type PlusAvatarEventsJSX = Filter<PlusAvatarEventsBaseJSX, PlusAvatarDisables, {}>;
export type PlusAvatarEventsBaseJSX = {};
export type PlusAvatarMethods = Filter<PlusAvatarMethodsBase, PlusAvatarDisables>;
export type PlusAvatarMethodsBase = {};
export type PlusAvatarProperties = Filter<PlusAvatarPropertiesOverridden, PlusAvatarDisables>;
export type PlusAvatarPropertiesOverridden = Override<PlusAvatarPropertiesBase, PlusAvatarOverrides, PlusAvatarOverridableKeys>;
export type PlusAvatarPropertiesBase = {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<PlusColor>;
  /**
  * Specifies the shape of the element.
  */
  shape?: 'circle' | 'round' | 'tile';
  /**
  * Specifies the size of the element.
  */
  size?: OverridableValue<PlusAvatarSize>;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAvatarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-avatar': {
      properties: PlusAvatarPropertiesOverridden;
    };
  }
}
export type PlusAvatarElement = globalThis.HTMLPlusAvatarElement;
export type PlusAvatarJSX = PlusAvatarAttributes & PlusAvatarEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-avatar": PlusAvatarJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAvatarElement>, HTMLPlusAvatarElement>, keyof PlusAvatarJSX>;
    }
  }
}