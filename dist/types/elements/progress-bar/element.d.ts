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
     * Eliminates delays in updating value.
     */
    sync?: boolean;
    /**
     * Specifies the progress of the bar by a number between `min` and `max`.
     */
    value?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusProgressBarAttributesMapper = {
  'buffer': 'buffer';
  'color': 'color';
  'label': 'label';
  'max': 'max';
  'min': 'min';
  'sync': 'sync';
  'value': 'value';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusProgressBarOverridableKeys = 'color' | 'variant';
export interface PlusProgressBarDisables {}
export interface PlusProgressBarOverrides {}
export type PlusProgressBarAttributes = Filter<PlusProgressBarAttributesOverridden, PlusProgressBarDisables, PlusProgressBarAttributesMapper>;
export type PlusProgressBarAttributesOverridden = Override<PlusProgressBarAttributesBase, PlusProgressBarOverrides, PlusProgressBarOverridableKeys, PlusProgressBarAttributesMapper>;
export type PlusProgressBarAttributesBase = {
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
  * Eliminates delays in updating value.
  */
  "sync"?: boolean;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  "value"?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusProgressBarEvents = Filter<PlusProgressBarEventsBase, PlusProgressBarDisables>;
export type PlusProgressBarEventsBase = {};
export type PlusProgressBarEventsJSX = Filter<PlusProgressBarEventsBaseJSX, PlusProgressBarDisables, {}>;
export type PlusProgressBarEventsBaseJSX = {};
export type PlusProgressBarMethods = Filter<PlusProgressBarMethodsBase, PlusProgressBarDisables>;
export type PlusProgressBarMethodsBase = {};
export type PlusProgressBarProperties = Filter<PlusProgressBarPropertiesOverridden, PlusProgressBarDisables>;
export type PlusProgressBarPropertiesOverridden = Override<PlusProgressBarPropertiesBase, PlusProgressBarOverrides, PlusProgressBarOverridableKeys>;
export type PlusProgressBarPropertiesBase = {
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
  * Eliminates delays in updating value.
  */
  sync?: boolean;
  /**
  * Specifies the progress of the bar by a number between `min` and `max`.
  */
  value?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-progress-bar': {
      properties: PlusProgressBarPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar": PlusProgressBarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusProgressBarElement>, HTMLPlusProgressBarElement>, keyof PlusProgressBarJSX>;
    }
  }
}