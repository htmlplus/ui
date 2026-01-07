import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
/**
 * A progress bar that offers clear and intuitive visual feedback on the status of asynchronous operations.
 *
 * @part bar - The bar element.
 *
 * @examples default, color, customized, methods, minimum, trickle
 */
export declare class PlusAppProgressBar extends PlusCore {
    /**
     * Specifies the color of the bar.
     */
    color?: OverridableValue<string & {}, PlusColorOverrides>;
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
    overrides?: OverridesConfig<PlusBreakpoint>;
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
export interface PlusAppProgressBarAttributesBase {
  /**
  * Specifies the color of the bar.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
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
  "variant"?: OverridableValue<never, PlusAppProgressBarVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAppProgressBarProperties, "overrides">>;
}
export interface PlusAppProgressBarAttributesDisables {}
export type PlusAppProgressBarAttributes = Filter<PlusAppProgressBarAttributesBase, PlusAppProgressBarAttributesDisables>;
export interface PlusAppProgressBarEventsBase {}
export interface PlusAppProgressBarEventsDisables {}
export type PlusAppProgressBarEvents = Filter<PlusAppProgressBarEventsBase, PlusAppProgressBarEventsDisables>;
export interface PlusAppProgressBarMethodsBase {
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
export interface PlusAppProgressBarMethodsDisables {}
export type PlusAppProgressBarMethods = Filter<PlusAppProgressBarMethodsBase, PlusAppProgressBarMethodsDisables>;
export interface PlusAppProgressBarPropertiesBase {
  /**
  * Specifies the color of the bar.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
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
  variant?: OverridableValue<never, PlusAppProgressBarVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAppProgressBarProperties, "overrides">>;
}
export interface PlusAppProgressBarPropertiesDisables {}
export type PlusAppProgressBarProperties = Filter<PlusAppProgressBarPropertiesBase, PlusAppProgressBarPropertiesDisables>;
export interface PlusAppProgressBarJSX extends PlusAppProgressBarEvents, PlusAppProgressBarProperties {}
declare global {
  interface HTMLPlusAppProgressBarElement extends HTMLElement, PlusAppProgressBarMethods, PlusAppProgressBarProperties {}
  var HTMLPlusAppProgressBarElement: {
    prototype: HTMLPlusAppProgressBarElement;
    new (): HTMLPlusAppProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-app-progress-bar": HTMLPlusAppProgressBarElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-app-progress-bar": PlusAppProgressBarAttributes & PlusAppProgressBarEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarAttributes & PlusAppProgressBarEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAppProgressBarElement>, HTMLPlusAppProgressBarElement>, keyof (PlusAppProgressBarAttributes & PlusAppProgressBarEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarAttributes & PlusAppProgressBarEvents & Omit<HTMLAttributes<HTMLPlusAppProgressBarElement>, keyof (PlusAppProgressBarAttributes & PlusAppProgressBarEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarAttributes & PlusAppProgressBarEvents & Omit<HTMLAttributes<HTMLPlusAppProgressBarElement>, keyof (PlusAppProgressBarAttributes & PlusAppProgressBarEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarAttributes & PlusAppProgressBarEvents & Omit<HTMLAttributes<HTMLPlusAppProgressBarElement>, keyof (PlusAppProgressBarAttributes & PlusAppProgressBarEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarAttributes & PlusAppProgressBarEvents & Omit<HTMLAttributes<HTMLPlusAppProgressBarElement>, keyof (PlusAppProgressBarAttributes & PlusAppProgressBarEvents)>;
    }
  }
}
export type PlusAppProgressBarElement = globalThis.HTMLPlusAppProgressBarElement;
export interface PlusAppProgressBarVariantOverrides {}