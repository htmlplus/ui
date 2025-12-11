import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { CounterEasing } from './counter.types';
/**
 * Can be used to quickly create animations that display numerical data in a more interesting way.
 *
 * @stable
 *
 * @examples default, range, reverse, duration, delay, separator, decimal, separator-decimal, numerals, intersection
 */
export declare class Counter extends PlusCore {
    /**
     * Easing function. Click [here](http://robertpenner.com/easing) for more details.
     */
    easing?: CounterEasing;
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
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CounterAttributesBase {
  /**
  * Easing function. Click [here](http://robertpenner.com/easing) for more details.
  */
  "easing"?: CounterEasing;
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
  * TODO
  */
  "variant"?: OverridableValue<string & {}, CounterVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CounterProperties, "overrides">>;
}
export interface CounterAttributesDisables {}
export type CounterAttributes = Filter<CounterAttributesBase, CounterAttributesDisables>;
export interface CounterEventsBase {
  /**
  * Is Triggered when transition ended.
  */
  onPlusComplete?: (event: CustomEvent<void>) => void;
}
export interface CounterEventsDisables {}
export type CounterEvents = Filter<CounterEventsBase, CounterEventsDisables>;
export interface CounterMethodsBase {
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
}
export interface CounterMethodsDisables {}
export type CounterMethods = Filter<CounterMethodsBase, CounterMethodsDisables>;
export interface CounterPropertiesBase {
  /**
  * Easing function. Click [here](http://robertpenner.com/easing) for more details.
  */
  easing?: CounterEasing;
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
  * TODO
  */
  variant?: OverridableValue<string & {}, CounterVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CounterProperties, "overrides">>;
}
export interface CounterPropertiesDisables {}
export type CounterProperties = Filter<CounterPropertiesBase, CounterPropertiesDisables>;
export interface CounterJSX extends CounterEvents, CounterProperties {}
declare global {
  interface HTMLPlusCounterElement extends HTMLElement, CounterMethods, CounterProperties {}
  var HTMLPlusCounterElement: {
    prototype: HTMLPlusCounterElement;
    new (): HTMLPlusCounterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-counter": HTMLPlusCounterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": CounterEvents & CounterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CounterEvents & CounterAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": CounterEvents & CounterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CounterEvents & CounterAttributes)>;
    }
  }
}
export type CounterElement = globalThis.HTMLPlusCounterElement;
export interface CounterVariantOverrides {}