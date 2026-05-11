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
    size?: PlusIconSize;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusIconAttributesMapper = {
  'color': 'color';
  'flip': 'flip';
  'label': 'label';
  'name': 'name';
  'resolver': 'resolver';
  'rotate': 'rotate';
  'size': 'size';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusIconOverridableKeys = 'color' | 'name' | 'variant';
export interface PlusIconDisables {}
export interface PlusIconOverrides {}
export type PlusIconAttributes = Filter<PlusIconAttributesOverridden, PlusIconDisables, PlusIconAttributesMapper>;
export type PlusIconAttributesOverridden = Override<PlusIconAttributesBase, PlusIconOverrides, PlusIconOverridableKeys, PlusIconAttributesMapper>;
export type PlusIconAttributesBase = {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<PlusColor>;
  /**
  * Flips in `horizontal`, `vertical` or `both` directions.
  */
  "flip"?: 'both' | 'horizontal' | 'vertical';
  /**
  * Specifies an alternate description to use for assistive devices.
  */
  "label"?: string;
  /**
  * Specifies the name.
  */
  "name"?: OverridableValue<string>;
  /**
  * An asynchronous function to load SVG files.
  */
  "resolver"?: PlusIconResolver;
  /**
  * Specifies the rotation.
  */
  "rotate"?: number;
  /**
  * Specifies the size.
  */
  "size"?: PlusIconSize;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusIconProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusIconEvents = Filter<PlusIconEventsBase, PlusIconDisables>;
export type PlusIconEventsBase = {};
export type PlusIconEventsJSX = Filter<PlusIconEventsBaseJSX, PlusIconDisables, {}>;
export type PlusIconEventsBaseJSX = {};
export type PlusIconMethods = Filter<PlusIconMethodsBase, PlusIconDisables>;
export type PlusIconMethodsBase = {};
export type PlusIconProperties = Filter<PlusIconPropertiesOverridden, PlusIconDisables>;
export type PlusIconPropertiesOverridden = Override<PlusIconPropertiesBase, PlusIconOverrides, PlusIconOverridableKeys>;
export type PlusIconPropertiesBase = {
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
  label?: string;
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
  size?: PlusIconSize;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusIconProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-icon': {
      properties: PlusIconPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusIconElement>, HTMLPlusIconElement>, keyof PlusIconJSX>;
    }
  }
}