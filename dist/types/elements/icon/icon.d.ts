import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { Breakpoint } from '../../types';
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
    color?: string;
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
    name?: string;
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
    variant?: OverridableValue<string>;
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

export interface IconAttributes {
  /**
  * Specifies the color.
  */
  "color"?: string;
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
  "name"?: string;
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
  "variant"?: OverridableValue<string, IconVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<IconProperties, "overrides">>;
}
export interface IconEvents {}
export interface IconMethods {}
export interface IconProperties {
  /**
  * Specifies the color.
  */
  color?: string;
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
  name?: string;
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
  variant?: OverridableValue<string, IconVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<IconProperties, "overrides">>;
}
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
      "plus-icon": IconEvents & IconAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": IconEvents & IconAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type IconElement = globalThis.HTMLPlusIconElement;
export interface IconVariantOverrides {}