import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
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
    color?: string;
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
    variant?: OverridableValue<string>;
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

export interface ProgressBarAttributes {
  /**
  * Specifies the secondary progress of the bar by a number between `min` and `max`.
  */
  "buffer"?: number;
  /**
  * Specifies the color of the bar.
  */
  "color"?: string;
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
  "variant"?: OverridableValue<string, ProgressBarVariantOverrides>;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  "value"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<ProgressBarProperties, "overrides">>;
}
export interface ProgressBarEvents {}
export interface ProgressBarMethods {}
export interface ProgressBarProperties {
  /**
  * Specifies the secondary progress of the bar by a number between `min` and `max`.
  */
  buffer?: number;
  /**
  * Specifies the color of the bar.
  */
  color?: string;
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
  variant?: OverridableValue<string, ProgressBarVariantOverrides>;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  value?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<ProgressBarProperties, "overrides">>;
}
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
      "plus-progress-bar": ProgressBarEvents & ProgressBarAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": ProgressBarEvents & ProgressBarAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type ProgressBarElement = globalThis.HTMLPlusProgressBarElement;
export interface ProgressBarVariantOverrides {}