import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
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
    color?: OverridableValue<PlusColor>;
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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    $bar: HTMLDivElement;
    state?: 'completed' | 'idle' | 'progressing';
    progress: number | null;
    timeout?: number;
    get style(): {
        ':host': {
            '--plus-app-progress-bar-color': string;
        };
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusAppProgressBarAttributesMapper = {
  'color': 'color';
  'minimum': 'minimum';
  'trickleDisabled': 'trickle-disabled';
  'trickleRate': 'trickle-rate';
  'trickleSpeed': 'trickle-speed';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusAppProgressBarOverridableKeys = 'color' | 'variant';
export interface PlusAppProgressBarDisables {}
export interface PlusAppProgressBarOverrides {}
export type PlusAppProgressBarAttributes = Filter<PlusAppProgressBarAttributesOverridden, PlusAppProgressBarDisables, PlusAppProgressBarAttributesMapper>;
export type PlusAppProgressBarAttributesOverridden = Override<PlusAppProgressBarAttributesBase, PlusAppProgressBarOverrides, PlusAppProgressBarOverridableKeys, PlusAppProgressBarAttributesMapper>;
export type PlusAppProgressBarAttributesBase = {
  /**
  * Specifies the color of the bar.
  */
  "color"?: OverridableValue<PlusColor>;
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAppProgressBarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusAppProgressBarEvents = Filter<PlusAppProgressBarEventsBase, PlusAppProgressBarDisables>;
export type PlusAppProgressBarEventsBase = {};
export type PlusAppProgressBarEventsJSX = Filter<PlusAppProgressBarEventsBaseJSX, PlusAppProgressBarDisables, {}>;
export type PlusAppProgressBarEventsBaseJSX = {};
export type PlusAppProgressBarMethods = Filter<PlusAppProgressBarMethodsBase, PlusAppProgressBarDisables>;
export type PlusAppProgressBarMethodsBase = {
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
};
export type PlusAppProgressBarProperties = Filter<PlusAppProgressBarPropertiesOverridden, PlusAppProgressBarDisables>;
export type PlusAppProgressBarPropertiesOverridden = Override<PlusAppProgressBarPropertiesBase, PlusAppProgressBarOverrides, PlusAppProgressBarOverridableKeys>;
export type PlusAppProgressBarPropertiesBase = {
  /**
  * Specifies the color of the bar.
  */
  color?: OverridableValue<PlusColor>;
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAppProgressBarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-app-progress-bar': {
      properties: PlusAppProgressBarPropertiesOverridden;
    };
  }
}
export type PlusAppProgressBarElement = globalThis.HTMLPlusAppProgressBarElement;
export type PlusAppProgressBarJSX = PlusAppProgressBarAttributes & PlusAppProgressBarEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-app-progress-bar": PlusAppProgressBarJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAppProgressBarElement>, HTMLPlusAppProgressBarElement>, keyof PlusAppProgressBarJSX>;
    }
  }
}