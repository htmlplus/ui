import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
/**
 * A progress bar that offers clear and intuitive visual feedback on the status of asynchronous operations.
 *
 * @part bar - The bar element.
 *
 * @examples default, color, customized, methods, minimum, trickle
 */
export declare class AppProgressBar extends PlusCore {
    /**
     * Specifies the color of the bar.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Determines the minimum percentage used upon starting, which must be a value between `0.0` and `1.0`.
     */
    minimum?: number;
    /**
     * Turn off the automatic incrementing behavior by setting this to `true`.
     */
    trickleDisabled?: boolean;
    /**
     * The rate at which the progress bar increments when trickling.
     */
    trickleRate?: number;
    /**
     * Adjust how often to trickle/increment, in ms.
     */
    trickleSpeed?: number;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    $bar: HTMLDivElement;
    state?: 'completed' | 'idle' | 'progressing';
    progress: number | null;
    timeout?: number;
    get style(): {
        '--plus-app-progress-bar-color': string;
    };
    /**
     * Hides the progress bar. If true is passed, the bar briefly appears before hiding.
     */
    done(force?: boolean): void;
    /**
     * Increments by a random amount.
     */
    increase(amount?: number): void;
    /**
     * Adjusts the progress of the bar, with the argument representing a value between `0` and `1`.
     */
    set(progress: number): void;
    /**
     * Shows the progress bar.
     */
    start(): void;
    /**
     * Increments the progress by a random amount based on the trickle rate.
     */
    trickle(): void;
    clamp(input: number, min: number, max: number): number;
    refresh(): void;
    update(progress: number): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface AppProgressBarAttributesBase {
  /**
  * Specifies the color of the bar.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Determines the minimum percentage used upon starting, which must be a value between `0.0` and `1.0`.
  */
  "minimum"?: number;
  /**
  * Turn off the automatic incrementing behavior by setting this to `true`.
  */
  "trickle-disabled"?: boolean;
  /**
  * The rate at which the progress bar increments when trickling.
  */
  "trickle-rate"?: number;
  /**
  * Adjust how often to trickle/increment, in ms.
  */
  "trickle-speed"?: number;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, AppProgressBarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<AppProgressBarProperties, "overrides">>;
}
export interface AppProgressBarAttributesDisables {}
export type AppProgressBarAttributes = Filter<AppProgressBarAttributesBase, AppProgressBarAttributesDisables>;
export interface AppProgressBarEventsBase {}
export interface AppProgressBarEventsDisables {}
export type AppProgressBarEvents = Filter<AppProgressBarEventsBase, AppProgressBarEventsDisables>;
export interface AppProgressBarMethodsBase {
  /**
  * Hides the progress bar. If true is passed, the bar briefly appears before hiding.
  */
  done(force?: boolean): void;
  /**
  * Increments by a random amount.
  */
  increase(amount?: number): void;
  /**
  * Adjusts the progress of the bar, with the argument representing a value between `0` and `1`.
  */
  set(progress: number): void;
  /**
  * Shows the progress bar.
  */
  start(): void;
  /**
  * Increments the progress by a random amount based on the trickle rate.
  */
  trickle(): void;
}
export interface AppProgressBarMethodsDisables {}
export type AppProgressBarMethods = Filter<AppProgressBarMethodsBase, AppProgressBarMethodsDisables>;
export interface AppProgressBarPropertiesBase {
  /**
  * Specifies the color of the bar.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Determines the minimum percentage used upon starting, which must be a value between `0.0` and `1.0`.
  */
  minimum?: number;
  /**
  * Turn off the automatic incrementing behavior by setting this to `true`.
  */
  trickleDisabled?: boolean;
  /**
  * The rate at which the progress bar increments when trickling.
  */
  trickleRate?: number;
  /**
  * Adjust how often to trickle/increment, in ms.
  */
  trickleSpeed?: number;
  /**
  * TODO
  */
  variant?: OverridableValue<never, AppProgressBarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<AppProgressBarProperties, "overrides">>;
}
export interface AppProgressBarPropertiesDisables {}
export type AppProgressBarProperties = Filter<AppProgressBarPropertiesBase, AppProgressBarPropertiesDisables>;
export interface AppProgressBarJSX extends AppProgressBarEvents, AppProgressBarProperties {}
declare global {
  interface HTMLPlusAppProgressBarElement extends HTMLElement, AppProgressBarMethods, AppProgressBarProperties {}
  var HTMLPlusAppProgressBarElement: {
    prototype: HTMLPlusAppProgressBarElement;
    new (): HTMLPlusAppProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-app-progress-bar": HTMLPlusAppProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": AppProgressBarEvents & AppProgressBarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AppProgressBarEvents & AppProgressBarAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": AppProgressBarEvents & AppProgressBarAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AppProgressBarEvents & AppProgressBarAttributes)>;
    }
  }
}
export type AppProgressBarElement = globalThis.HTMLPlusAppProgressBarElement;
export interface AppProgressBarVariantOverrides {}