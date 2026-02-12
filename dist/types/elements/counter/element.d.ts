import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Can be used to quickly create animations that display numerical data in a more interesting way.
 *
 * @stable
 *
 * @examples default, range, reverse, duration, delay, separator, decimal, separator-decimal, numerals, intersection
 */
export declare class PlusCounter extends PlusCore {
    /**
     * Easing function. Click [here](http://robertpenner.com/easing) for more details.
     */
    easing?: 'ease-out-expo' | 'linear';
    /**
     * Specifies decimal character.
     */
    decimal?: string;
    /**
     * Amount of decimals to display.
     */
    decimals?: number;
    /**
     * Delay in milliseconds before starting the transition.
     */
    delay?: number;
    /**
     * Duration in milliseconds.
     */
    duration?: number;
    /**
     * Initial value.
     */
    from?: number;
    /**
     * Specifies numeral glyph substitution.
     */
    numerals?: string[];
    /**
     * Starts/Stops the transition.
     */
    play?: boolean;
    /**
     * Specifies character of thousands separator.
     */
    separator?: string;
    /**
     * Target value.
     */
    to?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    /**
     * Is Triggered when transition ended.
     */
    plusComplete: EventEmitter<void>;
    /**
     * Completes the transition.
     */
    complete(): void;
    /**
     * Pauses the transition.
     */
    pause(): void;
    /**
     * Starts the transition.
     */
    start(): void;
    /**
     * Stops the transition.
     */
    stop(): void;
    counter?: number;
    state?: 'idle' | 'completed' | 'paused' | 'running' | 'stopped';
    remaining?: number;
    requestAnimationFrame?: number;
    startTime?: number;
    get easingFunction(): any;
    get formated(): string;
    get reverse(): boolean;
    watcher(): void;
    count(timestamp: number): void;
    reset(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCounterAttributesMapper = {
  'easing': 'easing';
  'decimal': 'decimal';
  'decimals': 'decimals';
  'delay': 'delay';
  'duration': 'duration';
  'from': 'from';
  'numerals': 'numerals';
  'play': 'play';
  'separator': 'separator';
  'to': 'to';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCounterOverridableKeys = 'variant';
export interface PlusCounterDisables {}
export interface PlusCounterOverrides {}
export type PlusCounterAttributes = Filter<PlusCounterAttributesOverridden, PlusCounterDisables, PlusCounterAttributesMapper>;
export type PlusCounterAttributesOverridden = Override<PlusCounterAttributesBase, PlusCounterOverrides, PlusCounterOverridableKeys, PlusCounterAttributesMapper>;
export type PlusCounterAttributesBase = {
  /**
  * Easing function. Click [here](http://robertpenner.com/easing) for more details.
  */
  "easing"?: 'ease-out-expo' | 'linear';
  /**
  * Specifies decimal character.
  */
  "decimal"?: string;
  /**
  * Amount of decimals to display.
  */
  "decimals"?: number;
  /**
  * Delay in milliseconds before starting the transition.
  */
  "delay"?: number;
  /**
  * Duration in milliseconds.
  */
  "duration"?: number;
  /**
  * Initial value.
  */
  "from"?: number;
  /**
  * Specifies numeral glyph substitution.
  */
  "numerals"?: string[];
  /**
  * Starts/Stops the transition.
  */
  "play"?: boolean;
  /**
  * Specifies character of thousands separator.
  */
  "separator"?: string;
  /**
  * Target value.
  */
  "to"?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCounterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCounterEvents = Filter<PlusCounterEventsBase, PlusCounterDisables>;
export type PlusCounterEventsBase = {
  /**
  * Is Triggered when transition ended.
  */
  plusComplete?: (event: CustomEvent<void>) => void;
};
export type PlusCounterEventsJSX = Filter<PlusCounterEventsBaseJSX, PlusCounterDisables, {
  plusComplete: 'onPlusComplete';
}>;
export type PlusCounterEventsBaseJSX = {
  /**
  * Is Triggered when transition ended.
  */
  onPlusComplete?: (event: CustomEvent<void>) => void;
};
export type PlusCounterMethods = Filter<PlusCounterMethodsBase, PlusCounterDisables>;
export type PlusCounterMethodsBase = {
  /**
  * Completes the transition.
  */
  complete();
  /**
  * Pauses the transition.
  */
  pause();
  /**
  * Starts the transition.
  */
  start();
  /**
  * Stops the transition.
  */
  stop();
};
export type PlusCounterProperties = Filter<PlusCounterPropertiesOverridden, PlusCounterDisables>;
export type PlusCounterPropertiesOverridden = Override<PlusCounterPropertiesBase, PlusCounterOverrides, PlusCounterOverridableKeys>;
export type PlusCounterPropertiesBase = {
  /**
  * Easing function. Click [here](http://robertpenner.com/easing) for more details.
  */
  easing?: 'ease-out-expo' | 'linear';
  /**
  * Specifies decimal character.
  */
  decimal?: string;
  /**
  * Amount of decimals to display.
  */
  decimals?: number;
  /**
  * Delay in milliseconds before starting the transition.
  */
  delay?: number;
  /**
  * Duration in milliseconds.
  */
  duration?: number;
  /**
  * Initial value.
  */
  from?: number;
  /**
  * Specifies numeral glyph substitution.
  */
  numerals?: string[];
  /**
  * Starts/Stops the transition.
  */
  play?: boolean;
  /**
  * Specifies character of thousands separator.
  */
  separator?: string;
  /**
  * Target value.
  */
  to?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCounterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-counter': {
      properties: PlusCounterPropertiesOverridden;
    };
  }
}
export type PlusCounterElement = globalThis.HTMLPlusCounterElement;
export type PlusCounterJSX = PlusCounterAttributes & PlusCounterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-counter": PlusCounterJSX;
  }
}
declare global {
  interface HTMLPlusCounterElement extends HTMLElement, PlusCounterMethods, PlusCounterProperties {}
  var HTMLPlusCounterElement: {
    prototype: HTMLPlusCounterElement;
    new (): HTMLPlusCounterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-counter": HTMLPlusCounterElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCounterElement>, HTMLPlusCounterElement>, keyof PlusCounterJSX>;
    }
  }
}