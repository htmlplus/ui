import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { IconFlip, IconResolver, IconSize } from './icon.types';
/**
 * @stable
 *
 * @part svg - The svg element.
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
    cache: AsyncCache<IconResolver>;
    get style(): {
        color: string;
        height: string;
        width: string;
        rotate: string;
    };
    update(): Promise<void>;
    loadedCallback(): void;
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
      "plus-icon": IconEvents & IconAttributes & {
        [key: string]: any;
      };
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": IconEvents & IconAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type IconElement = globalThis.HTMLPlusIconElement;