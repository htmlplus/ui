import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
import { PlusSpinnerType } from './types';
/**
 * An indicator of progress and activity.
 *
 * @stable
 *
 * @examples default, size, custom-size, color, type, customized
 */
export declare class PlusSpinner extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, PlusColorOverrides>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Specifies the size of the spinner.
     */
    size?: OverridableValue<'sm' | 'md' | 'lg' | 'inherit'>;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: PlusSpinnerType;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    get style(): {
        color: string;
    };
    get elements(): number[];
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusSpinnerAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSpinnerProperties, "overrides">>;
  /**
  * Specifies the size of the spinner.
  */
  "size"?: OverridableValue<'sm' | 'md' | 'lg' | 'inherit', PlusSpinnerSizeOverrides>;
  /**
  * Specifies which variant of the spinner to use.
  */
  "type"?: PlusSpinnerType;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusSpinnerVariantOverrides>;
}
export interface PlusSpinnerAttributesDisables {}
export type PlusSpinnerAttributes = Filter<PlusSpinnerAttributesBase, PlusSpinnerAttributesDisables>;
export interface PlusSpinnerEventsBase {}
export interface PlusSpinnerEventsDisables {}
export type PlusSpinnerEvents = Filter<PlusSpinnerEventsBase, PlusSpinnerEventsDisables>;
export interface PlusSpinnerMethodsBase {}
export interface PlusSpinnerMethodsDisables {}
export type PlusSpinnerMethods = Filter<PlusSpinnerMethodsBase, PlusSpinnerMethodsDisables>;
export interface PlusSpinnerPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSpinnerProperties, "overrides">>;
  /**
  * Specifies the size of the spinner.
  */
  size?: OverridableValue<'sm' | 'md' | 'lg' | 'inherit', PlusSpinnerSizeOverrides>;
  /**
  * Specifies which variant of the spinner to use.
  */
  type?: PlusSpinnerType;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusSpinnerVariantOverrides>;
}
export interface PlusSpinnerPropertiesDisables {}
export type PlusSpinnerProperties = Filter<PlusSpinnerPropertiesBase, PlusSpinnerPropertiesDisables>;
export interface PlusSpinnerJSX extends PlusSpinnerEvents, PlusSpinnerProperties {}
declare global {
  interface HTMLPlusSpinnerElement extends HTMLElement, PlusSpinnerMethods, PlusSpinnerProperties {}
  var HTMLPlusSpinnerElement: {
    prototype: HTMLPlusSpinnerElement;
    new (): HTMLPlusSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spinner": HTMLPlusSpinnerElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-spinner": PlusSpinnerAttributes & PlusSpinnerEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerAttributes & PlusSpinnerEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSpinnerElement>, HTMLPlusSpinnerElement>, keyof (PlusSpinnerAttributes & PlusSpinnerEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerAttributes & PlusSpinnerEvents & Omit<HTMLAttributes<HTMLPlusSpinnerElement>, keyof (PlusSpinnerAttributes & PlusSpinnerEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerAttributes & PlusSpinnerEvents & Omit<HTMLAttributes<HTMLPlusSpinnerElement>, keyof (PlusSpinnerAttributes & PlusSpinnerEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerAttributes & PlusSpinnerEvents & Omit<HTMLAttributes<HTMLPlusSpinnerElement>, keyof (PlusSpinnerAttributes & PlusSpinnerEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerAttributes & PlusSpinnerEvents & Omit<HTMLAttributes<HTMLPlusSpinnerElement>, keyof (PlusSpinnerAttributes & PlusSpinnerEvents)>;
    }
  }
}
export type PlusSpinnerElement = globalThis.HTMLPlusSpinnerElement;
export interface PlusSpinnerSizeOverrides {}
export interface PlusSpinnerVariantOverrides {}