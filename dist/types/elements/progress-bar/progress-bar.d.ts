import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
/**
 * Progress bar expresses an unspecified wait time or display the length of a process.
 *
 * @slot default - The default slot.
 *
 * @examples default, value, color, custom-color, label, custom-label, height,
 *           indeterminate, buffer, min-and-max, aria-label, stacked, sync, customized
 */
export declare class ProgressBar extends PlusCore {
    /**
     * Specifies the secondary progress of the bar by a number between `min` and `max`.
     */
    buffer?: number;
    /**
     * Specifies the color of the bar.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Displays the progress percentage.
     */
    label?: boolean;
    /**
     * Specifies the minimum value of the progress.
     */
    min?: number;
    /**
     * Specifies the maximum value of the progress.
     */
    max?: number;
    /**
     * Eliminates delays in updating value.
     */
    sync?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * Specifies the progress of the bar by a number between `min` and `max`.
     */
    value?: number;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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
export interface ProgressBarAttributesBase {
  /**
  * Specifies the secondary progress of the bar by a number between `min` and `max`.
  */
  "buffer"?: number;
  /**
  * Specifies the color of the bar.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Displays the progress percentage.
  */
  "label"?: boolean;
  /**
  * Specifies the minimum value of the progress.
  */
  "min"?: number;
  /**
  * Specifies the maximum value of the progress.
  */
  "max"?: number;
  /**
  * Eliminates delays in updating value.
  */
  "sync"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, ProgressBarVariantOverrides>;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  "value"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<ProgressBarProperties, "overrides">>;
}
export interface ProgressBarAttributesDisables {}
export type ProgressBarAttributes = Filter<ProgressBarAttributesBase, ProgressBarAttributesDisables>;
export interface ProgressBarEventsBase {}
export interface ProgressBarEventsDisables {}
export type ProgressBarEvents = Filter<ProgressBarEventsBase, ProgressBarEventsDisables>;
export interface ProgressBarMethodsBase {}
export interface ProgressBarMethodsDisables {}
export type ProgressBarMethods = Filter<ProgressBarMethodsBase, ProgressBarMethodsDisables>;
export interface ProgressBarPropertiesBase {
  /**
  * Specifies the secondary progress of the bar by a number between `min` and `max`.
  */
  buffer?: number;
  /**
  * Specifies the color of the bar.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Displays the progress percentage.
  */
  label?: boolean;
  /**
  * Specifies the minimum value of the progress.
  */
  min?: number;
  /**
  * Specifies the maximum value of the progress.
  */
  max?: number;
  /**
  * Eliminates delays in updating value.
  */
  sync?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, ProgressBarVariantOverrides>;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  value?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<ProgressBarProperties, "overrides">>;
}
export interface ProgressBarPropertiesDisables {}
export type ProgressBarProperties = Filter<ProgressBarPropertiesBase, ProgressBarPropertiesDisables>;
export interface ProgressBarJSX extends ProgressBarEvents, ProgressBarProperties {}
declare global {
  interface HTMLPlusProgressBarElement extends HTMLElement, ProgressBarMethods, ProgressBarProperties {}
  var HTMLPlusProgressBarElement: {
    prototype: HTMLPlusProgressBarElement;
    new (): HTMLPlusProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-progress-bar": HTMLPlusProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": ProgressBarEvents & ProgressBarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (ProgressBarEvents & ProgressBarAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": ProgressBarEvents & ProgressBarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (ProgressBarEvents & ProgressBarAttributes)>;
    }
  }
}
export type ProgressBarElement = globalThis.HTMLPlusProgressBarElement;
export interface ProgressBarVariantOverrides {}