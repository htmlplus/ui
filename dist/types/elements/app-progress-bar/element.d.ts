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
    color: OverridableValue<PlusColor>;
    /**
     * Determines the minimum percentage used upon starting, which must be a value between `0.0` and `1.0`.
     */
    minimum: number;
    /**
     * Turn off the automatic incrementing behavior by setting this to `true`.
     */
    trickleDisabled: boolean;
    /**
     * The rate at which the progress bar increments when trickling.
     */
    trickleRate: number;
    /**
     * Adjust how often to trickle/increment, in ms.
     */
    trickleSpeed: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusAppProgressBarAttributesMapper = {
  'trickleDisabled': 'trickle-disabled';
  'trickleRate': 'trickle-rate';
  'trickleSpeed': 'trickle-speed';
};
export type PlusAppProgressBarOverridableKeys = 'color' | 'preset';
export interface PlusAppProgressBarDisables {}
export interface PlusAppProgressBarOverrides {}
export type PlusAppProgressBarAttributes = Rename<PlusAppProgressBarProperties, PlusAppProgressBarAttributesMapper>;
export type PlusAppProgressBarAttributesOverridden = Rename<PlusAppProgressBarPropertiesOverridden, PlusAppProgressBarAttributesMapper>;
export type PlusAppProgressBarAttributesBase = Rename<PlusAppProgressBarPropertiesBase, PlusAppProgressBarAttributesMapper>;
export type PlusAppProgressBarEvents = Filter<PlusAppProgressBarEventsBase, PlusAppProgressBarDisables>;
export type PlusAppProgressBarEventsBase = ToEventHandlers<Pick<PlusAppProgressBar, PlusAppProgressBarEventsKeys>>;
export type PlusAppProgressBarEventsKeys = never;
export type PlusAppProgressBarEventsJSX = ToJSXEvent<PlusAppProgressBarEvents>;
export type PlusAppProgressBarEventsBaseJSX = ToJSXEvent<PlusAppProgressBarEventsBase>;
export type PlusAppProgressBarMethods = Filter<PlusAppProgressBarMethodsBase, PlusAppProgressBarDisables>;
export type PlusAppProgressBarMethodsBase = Pick<PlusAppProgressBar, PlusAppProgressBarMethodsKeys>;
export type PlusAppProgressBarMethodsKeys = 'done' | 'increase' | 'set' | 'start' | 'trickle';
export type PlusAppProgressBarProperties = Filter<PlusAppProgressBarPropertiesOverridden, PlusAppProgressBarDisables>;
export type PlusAppProgressBarPropertiesOverridden = Override<PlusAppProgressBarPropertiesBase, PlusAppProgressBarOverrides, PlusAppProgressBarOverridableKeys>;
export type PlusAppProgressBarPropertiesBase = Pick<PlusAppProgressBar, PlusAppProgressBarPropertiesKeys>;
export type PlusAppProgressBarPropertiesKeys = 'color' | 'minimum' | 'trickleDisabled' | 'trickleRate' | 'trickleSpeed' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-app-progress-bar': {
      properties: PlusAppProgressBarPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-app-progress-bar": PlusAppProgressBarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAppProgressBarElement>, HTMLPlusAppProgressBarElement>, keyof PlusAppProgressBarJSX>;
    }
  }
}