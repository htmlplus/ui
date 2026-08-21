import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
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
    color: OverridableValue<PlusColor>;
    /**
     * Indicates that the progress bar is active without a specific progress value.
     */
    indeterminate: boolean;
    /**
     * Displays the progress percentage.
     */
    label: boolean;
    /**
     * Specifies the maximum value of the progress.
     */
    max: number;
    /**
     * Specifies the minimum value of the progress.
     */
    min: number;
    /**
     * Eliminates delays in updating value.
     */
    sync: boolean;
    /**
     * Specifies the progress of the bar by a number between `min` and `max`.
     */
    value: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    get style(): {
        ':host': {
            'min-width': string;
            '--plus-progress-bar-indicator-background-color': string;
        };
    };
    get percentage(): string;
    get progress(): number;
    get stacked(): boolean;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusProgressBarAttributesMapper = {};
export type PlusProgressBarOverridableKeys = 'color' | 'preset';
export interface PlusProgressBarDisables {}
export interface PlusProgressBarOverrides {}
export type PlusProgressBarAttributes = Rename<PlusProgressBarProperties, PlusProgressBarAttributesMapper>;
export type PlusProgressBarAttributesOverridden = Rename<PlusProgressBarPropertiesOverridden, PlusProgressBarAttributesMapper>;
export type PlusProgressBarAttributesBase = Rename<PlusProgressBarPropertiesBase, PlusProgressBarAttributesMapper>;
export type PlusProgressBarEvents = Filter<PlusProgressBarEventsBase, PlusProgressBarDisables>;
export type PlusProgressBarEventsBase = ToEventHandlers<Pick<PlusProgressBar, PlusProgressBarEventsKeys>>;
export type PlusProgressBarEventsKeys = never;
export type PlusProgressBarEventsJSX = ToJSXEvent<PlusProgressBarEvents>;
export type PlusProgressBarEventsBaseJSX = ToJSXEvent<PlusProgressBarEventsBase>;
export type PlusProgressBarMethods = Filter<PlusProgressBarMethodsBase, PlusProgressBarDisables>;
export type PlusProgressBarMethodsBase = Pick<PlusProgressBar, PlusProgressBarMethodsKeys>;
export type PlusProgressBarMethodsKeys = never;
export type PlusProgressBarProperties = Filter<PlusProgressBarPropertiesOverridden, PlusProgressBarDisables>;
export type PlusProgressBarPropertiesOverridden = Override<PlusProgressBarPropertiesBase, PlusProgressBarOverrides, PlusProgressBarOverridableKeys>;
export type PlusProgressBarPropertiesBase = Pick<PlusProgressBar, PlusProgressBarPropertiesKeys>;
export type PlusProgressBarPropertiesKeys = 'buffer' | 'color' | 'indeterminate' | 'label' | 'max' | 'min' | 'sync' | 'value' | 'overrides' | 'preset';
export type PlusProgressBarElement = globalThis.HTMLPlusProgressBarElement;
export type PlusProgressBarJSX = PlusProgressBarAttributes & PlusProgressBarEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-progress-bar": PlusProgressBarJSX;
  }
}
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-progress-bar': {
      properties: PlusProgressBarPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusProgressBarElement>, HTMLPlusProgressBarElement>, keyof PlusProgressBarJSX>;
    }
  }
}