import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { Breakpoint, ColorOverrides } from '../../types';
import { IconFlip, IconResolver, IconSize } from './icon.types';
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
export declare class Icon extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Flips in `horizontal`, `vertical` or `both` directions.
     */
    flip?: IconFlip;
    /**
     * Specifies an alternate description to use for assistive devices.
     */
    label?: string;
    /**
     * Specifies the name.
     */
    name?: OverridableValue<string & {}>;
    /**
     * An asynchronous function to load SVG files.
     */
    resolver?: IconResolver;
    /**
     * Specifies the rotation.
     */
    rotate?: number;
    /**
     * Specifies the size.
     */
    size?: IconSize;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    cache: AsyncCache<IconResolver>;
    get style(): {
        color: string;
        height: string;
        width: string;
        rotate: string;
    };
    update(): Promise<void>;
    readyCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface IconAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Flips in `horizontal`, `vertical` or `both` directions.
  */
  "flip"?: IconFlip;
  /**
  * Specifies an alternate description to use for assistive devices.
  */
  "label"?: string;
  /**
  * Specifies the name.
  */
  "name"?: OverridableValue<string & {}, IconNameOverrides>;
  /**
  * An asynchronous function to load SVG files.
  */
  "resolver"?: IconResolver;
  /**
  * Specifies the rotation.
  */
  "rotate"?: number;
  /**
  * Specifies the size.
  */
  "size"?: IconSize;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, IconVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<IconProperties, "overrides">>;
}
export interface IconAttributesDisables {}
export type IconAttributes = Filter<IconAttributesBase, IconAttributesDisables>;
export interface IconEventsBase {}
export interface IconEventsDisables {}
export type IconEvents = Filter<IconEventsBase, IconEventsDisables>;
export interface IconMethodsBase {}
export interface IconMethodsDisables {}
export type IconMethods = Filter<IconMethodsBase, IconMethodsDisables>;
export interface IconPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Flips in `horizontal`, `vertical` or `both` directions.
  */
  flip?: IconFlip;
  /**
  * Specifies an alternate description to use for assistive devices.
  */
  label?: string;
  /**
  * Specifies the name.
  */
  name?: OverridableValue<string & {}, IconNameOverrides>;
  /**
  * An asynchronous function to load SVG files.
  */
  resolver?: IconResolver;
  /**
  * Specifies the rotation.
  */
  rotate?: number;
  /**
  * Specifies the size.
  */
  size?: IconSize;
  /**
  * TODO
  */
  variant?: OverridableValue<never, IconVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<IconProperties, "overrides">>;
}
export interface IconPropertiesDisables {}
export type IconProperties = Filter<IconPropertiesBase, IconPropertiesDisables>;
export interface IconJSX extends IconEvents, IconProperties {}
declare global {
  interface HTMLPlusIconElement extends HTMLElement, IconMethods, IconProperties {}
  var HTMLPlusIconElement: {
    prototype: HTMLPlusIconElement;
    new (): HTMLPlusIconElement;
  };
  interface HTMLElementTagNameMap {
    "plus-icon": HTMLPlusIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": IconEvents & IconAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (IconEvents & IconAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": IconEvents & IconAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (IconEvents & IconAttributes)>;
    }
  }
}
export type IconElement = globalThis.HTMLPlusIconElement;
export interface IconNameOverrides {}
export interface IconVariantOverrides {}