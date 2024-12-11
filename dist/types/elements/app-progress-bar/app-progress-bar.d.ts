import { PlusCore } from '../../core';
/**
 * @part bar - The bar element.
 */
export declare class AppProgressBar extends PlusCore {
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
    $bar: HTMLDivElement;
    state?: 'completed' | 'idle' | 'progressing';
    progress: number | null;
    timeout?: number;
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

export interface AppProgressBarAttributes {
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
}
export interface AppProgressBarEvents {}
export interface AppProgressBarMethods {
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
export interface AppProgressBarProperties {
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
}
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
      "plus-app-progress-bar": AppProgressBarEvents & AppProgressBarAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type AppProgressBarElement = globalThis.HTMLPlusAppProgressBarElement;