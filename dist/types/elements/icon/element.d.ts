import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { PlusBreakpoint, PlusColor } from '../../types';
import { PlusIconResolver, PlusIconSize } from './types';
/**
 * A graphical representation of an action, object,
 * or idea that is used in a user interface to provide visual cues and improve the user experience.
 * All icons are based on the popular [Bootstrap Icons](https://icons.getbootstrap.com) library.
 *
 * @stable
 *
 * @part svg - The svg element.
 *
 * @examples default, name, size, size-overriding, wildcard-size, color, custom-color, flip, rotate,
 *           label, register-a-custom-name, animation, resolver, font-awesome, material, multiple-library
 */
export declare class PlusIcon extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<PlusColor>;
    /**
     * Flips in `horizontal`, `vertical` or `both` directions.
     */
    flip?: 'both' | 'horizontal' | 'vertical';
    /**
     * Specifies an alternate description to use for assistive devices.
     */
    label: string;
    /**
     * Specifies the name.
     */
    name?: OverridableValue<string>;
    /**
     * An asynchronous function to load SVG files.
     */
    resolver?: PlusIconResolver;
    /**
     * Specifies the rotation.
     */
    rotate?: number;
    /**
     * Specifies the size.
     */
    size: PlusIconSize;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    cache: AsyncCache<PlusIconResolver>;
    get style(): {
        ':host': {
            color: string;
            height: string;
            width: string;
            rotate: string;
        };
    };
    update(): Promise<void>;
    readyCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusIconAttributesMapper = {};
export type PlusIconOverridableKeys = 'color' | 'name' | 'preset';
export interface PlusIconDisables {}
export interface PlusIconOverrides {}
export type PlusIconAttributes = Rename<PlusIconProperties, PlusIconAttributesMapper>;
export type PlusIconAttributesOverridden = Rename<PlusIconPropertiesOverridden, PlusIconAttributesMapper>;
export type PlusIconAttributesBase = Rename<PlusIconPropertiesBase, PlusIconAttributesMapper>;
export type PlusIconEvents = Filter<PlusIconEventsBase, PlusIconDisables>;
export type PlusIconEventsBase = ToEventHandlers<Pick<PlusIcon, PlusIconEventsKeys>>;
export type PlusIconEventsKeys = never;
export type PlusIconEventsJSX = ToJSXEvent<PlusIconEvents>;
export type PlusIconEventsBaseJSX = ToJSXEvent<PlusIconEventsBase>;
export type PlusIconMethods = Filter<PlusIconMethodsBase, PlusIconDisables>;
export type PlusIconMethodsBase = Pick<PlusIcon, PlusIconMethodsKeys>;
export type PlusIconMethodsKeys = never;
export type PlusIconProperties = Filter<PlusIconPropertiesOverridden, PlusIconDisables>;
export type PlusIconPropertiesOverridden = Override<PlusIconPropertiesBase, PlusIconOverrides, PlusIconOverridableKeys>;
export type PlusIconPropertiesBase = Pick<PlusIcon, PlusIconPropertiesKeys>;
export type PlusIconPropertiesKeys = 'color' | 'flip' | 'label' | 'name' | 'resolver' | 'rotate' | 'size' | 'overrides' | 'preset';
export type PlusIconElement = globalThis.HTMLPlusIconElement;
export type PlusIconJSX = PlusIconAttributes & PlusIconEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-icon": PlusIconJSX;
  }
}
declare global {
  interface HTMLPlusIconElement extends HTMLElement, PlusIconMethods, PlusIconProperties {}
  var HTMLPlusIconElement: {
    prototype: HTMLPlusIconElement;
    new (): HTMLPlusIconElement;
  };
  interface HTMLElementTagNameMap {
    "plus-icon": HTMLPlusIconElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-icon': {
      properties: PlusIconPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusIconElement>, HTMLPlusIconElement>, keyof PlusIconJSX>;
    }
  }
}