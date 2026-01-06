import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { AsyncCache } from '../../services';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
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
    color?: OverridableValue<string & {}, PlusColorOverrides>;
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
    name?: OverridableValue<string & {}>;
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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    cache: AsyncCache<PlusIconResolver>;
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
export interface PlusIconAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
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
  "name"?: OverridableValue<string & {}, PlusIconNameOverrides>;
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
  * TODO
  */
  "variant"?: OverridableValue<never, PlusIconVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusIconProperties, "overrides">>;
}
export interface PlusIconAttributesDisables {}
export type PlusIconAttributes = Filter<PlusIconAttributesBase, PlusIconAttributesDisables>;
export interface PlusIconEventsBase {}
export interface PlusIconEventsDisables {}
export type PlusIconEvents = Filter<PlusIconEventsBase, PlusIconEventsDisables>;
export interface PlusIconMethodsBase {}
export interface PlusIconMethodsDisables {}
export type PlusIconMethods = Filter<PlusIconMethodsBase, PlusIconMethodsDisables>;
export interface PlusIconPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
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
  name?: OverridableValue<string & {}, PlusIconNameOverrides>;
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
  * TODO
  */
  variant?: OverridableValue<never, PlusIconVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusIconProperties, "overrides">>;
}
export interface PlusIconPropertiesDisables {}
export type PlusIconProperties = Filter<PlusIconPropertiesBase, PlusIconPropertiesDisables>;
export type PlusIconAttributesAndEvents = PlusIconAttributes & PlusIconEvents;
export interface PlusIconJSX extends PlusIconEvents, PlusIconProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-icon": PlusIconAttributes & PlusIconEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIconElement>, keyof PlusIconAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIconElement>, keyof PlusIconAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIconElement>, keyof PlusIconAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIconElement>, keyof PlusIconAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-icon": PlusIconAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusIconElement>, keyof PlusIconAttributesAndEvents>;
    }
  }
}
export type PlusIconElement = globalThis.HTMLPlusIconElement;
export interface PlusIconNameOverrides {}
export interface PlusIconVariantOverrides {}