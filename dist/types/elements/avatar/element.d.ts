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
    color: OverridableValue<PlusColor>;
    /**
     * Specifies the shape of the element.
     */
    shape: 'circle' | 'round' | 'tile';
    /**
     * Specifies the size of the element.
     */
    size: OverridableValue<PlusAvatarSize>;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusAvatarAttributesMapper = {};
export type PlusAvatarOverridableKeys = 'color' | 'size' | 'preset';
export interface PlusAvatarDisables {}
export interface PlusAvatarOverrides {}
export type PlusAvatarAttributes = Rename<PlusAvatarProperties, PlusAvatarAttributesMapper>;
export type PlusAvatarAttributesOverridden = Rename<PlusAvatarPropertiesOverridden, PlusAvatarAttributesMapper>;
export type PlusAvatarAttributesBase = Rename<PlusAvatarPropertiesBase, PlusAvatarAttributesMapper>;
export type PlusAvatarEvents = Filter<PlusAvatarEventsBase, PlusAvatarDisables>;
export type PlusAvatarEventsBase = ToEventHandlers<Pick<PlusAvatar, PlusAvatarEventsKeys>>;
export type PlusAvatarEventsKeys = never;
export type PlusAvatarEventsJSX = ToJSXEvent<PlusAvatarEvents>;
export type PlusAvatarEventsBaseJSX = ToJSXEvent<PlusAvatarEventsBase>;
export type PlusAvatarMethods = Filter<PlusAvatarMethodsBase, PlusAvatarDisables>;
export type PlusAvatarMethodsBase = Pick<PlusAvatar, PlusAvatarMethodsKeys>;
export type PlusAvatarMethodsKeys = never;
export type PlusAvatarProperties = Filter<PlusAvatarPropertiesOverridden, PlusAvatarDisables>;
export type PlusAvatarPropertiesOverridden = Override<PlusAvatarPropertiesBase, PlusAvatarOverrides, PlusAvatarOverridableKeys>;
export type PlusAvatarPropertiesBase = Pick<PlusAvatar, PlusAvatarPropertiesKeys>;
export type PlusAvatarPropertiesKeys = 'color' | 'shape' | 'size' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-avatar': {
      properties: PlusAvatarPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar": PlusAvatarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAvatarElement>, HTMLPlusAvatarElement>, keyof PlusAvatarJSX>;
    }
  }
}