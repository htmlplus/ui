import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
/**
 * Progress bar expresses an unspecified wait time or display the length of a process.
 *
 * @slot default - The default slot.
 *
 * @examples default, value, color, custom-color, label, custom-label, height,
 *           indeterminate, buffer, min-and-max, aria-label, stacked, sync, customized
 */
export declare class PlusProgressBar extends PlusCore {
    /**
     * Specifies the secondary progress of the bar by a number between `min` and `max`.
     */
    buffer?: number;
    /**
     * Specifies the color of the bar.
     */
    color?: OverridableValue<string & {}, PlusColorOverrides>;
    /**
     * Displays the progress percentage.
     */
    label?: boolean;
    /**
     * Specifies the maximum value of the progress.
     */
    max?: number;
    /**
     * Specifies the minimum value of the progress.
     */
    min?: number;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Eliminates delays in updating value.
     */
    sync?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * Specifies the progress of the bar by a number between `min` and `max`.
     */
    value?: number;
    get style(): {
        'min-width': string;
        '--plus-progress-bar-indicator-background-color': string;
    };
    get percentage(): string;
    get progress(): number;
    get stacked(): boolean;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusProgressBarAttributesBase {
  /**
  * Specifies the secondary progress of the bar by a number between `min` and `max`.
  */
  "buffer"?: number;
  /**
  * Specifies the color of the bar.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Displays the progress percentage.
  */
  "label"?: boolean;
  /**
  * Specifies the maximum value of the progress.
  */
  "max"?: number;
  /**
  * Specifies the minimum value of the progress.
  */
  "min"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarProperties, "overrides">>;
  /**
  * Eliminates delays in updating value.
  */
  "sync"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusProgressBarVariantOverrides>;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  "value"?: number;
}
export interface PlusProgressBarAttributesDisables {}
export type PlusProgressBarAttributes = Filter<PlusProgressBarAttributesBase, PlusProgressBarAttributesDisables>;
export interface PlusProgressBarEventsBase {}
export interface PlusProgressBarEventsDisables {}
export type PlusProgressBarEvents = Filter<PlusProgressBarEventsBase, PlusProgressBarEventsDisables>;
export interface PlusProgressBarMethodsBase {}
export interface PlusProgressBarMethodsDisables {}
export type PlusProgressBarMethods = Filter<PlusProgressBarMethodsBase, PlusProgressBarMethodsDisables>;
export interface PlusProgressBarPropertiesBase {
  /**
  * Specifies the secondary progress of the bar by a number between `min` and `max`.
  */
  buffer?: number;
  /**
  * Specifies the color of the bar.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Displays the progress percentage.
  */
  label?: boolean;
  /**
  * Specifies the maximum value of the progress.
  */
  max?: number;
  /**
  * Specifies the minimum value of the progress.
  */
  min?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarProperties, "overrides">>;
  /**
  * Eliminates delays in updating value.
  */
  sync?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusProgressBarVariantOverrides>;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  value?: number;
}
export interface PlusProgressBarPropertiesDisables {}
export type PlusProgressBarProperties = Filter<PlusProgressBarPropertiesBase, PlusProgressBarPropertiesDisables>;
export interface PlusProgressBarJSX extends PlusProgressBarEvents, PlusProgressBarProperties {}
declare global {
  interface HTMLPlusProgressBarElement extends HTMLElement, PlusProgressBarMethods, PlusProgressBarProperties {}
  var HTMLPlusProgressBarElement: {
    prototype: HTMLPlusProgressBarElement;
    new (): HTMLPlusProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-progress-bar": HTMLPlusProgressBarElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-progress-bar": PlusProgressBarAttributes & PlusProgressBarEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarAttributes & PlusProgressBarEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusProgressBarElement>, HTMLPlusProgressBarElement>, keyof (PlusProgressBarAttributes & PlusProgressBarEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarAttributes & PlusProgressBarEvents & Omit<HTMLAttributes<HTMLPlusProgressBarElement>, keyof (PlusProgressBarAttributes & PlusProgressBarEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarAttributes & PlusProgressBarEvents & Omit<HTMLAttributes<HTMLPlusProgressBarElement>, keyof (PlusProgressBarAttributes & PlusProgressBarEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarAttributes & PlusProgressBarEvents & Omit<HTMLAttributes<HTMLPlusProgressBarElement>, keyof (PlusProgressBarAttributes & PlusProgressBarEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarAttributes & PlusProgressBarEvents & Omit<HTMLAttributes<HTMLPlusProgressBarElement>, keyof (PlusProgressBarAttributes & PlusProgressBarEvents)>;
    }
  }
}
export type PlusProgressBarElement = globalThis.HTMLPlusProgressBarElement;
export interface PlusProgressBarVariantOverrides {}