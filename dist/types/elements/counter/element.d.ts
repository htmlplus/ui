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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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
export interface PlusCounterAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCounterVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCounterProperties, "overrides">>;
}
export interface PlusCounterAttributesDisables {}
export type PlusCounterAttributes = Filter<PlusCounterAttributesBase, PlusCounterAttributesDisables>;
export interface PlusCounterEventsBase {
  /**
  * Is Triggered when transition ended.
  */
  onPlusComplete?: (event: CustomEvent<void>) => void;
}
export interface PlusCounterEventsDisables {}
export type PlusCounterEvents = Filter<PlusCounterEventsBase, PlusCounterEventsDisables>;
export interface PlusCounterMethodsBase {
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
export interface PlusCounterMethodsDisables {}
export type PlusCounterMethods = Filter<PlusCounterMethodsBase, PlusCounterMethodsDisables>;
export interface PlusCounterPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<never, PlusCounterVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCounterProperties, "overrides">>;
}
export interface PlusCounterPropertiesDisables {}
export type PlusCounterProperties = Filter<PlusCounterPropertiesBase, PlusCounterPropertiesDisables>;
export type PlusCounterAttributesAndEvents = PlusCounterAttributes & PlusCounterEvents;
export interface PlusCounterJSX extends PlusCounterEvents, PlusCounterProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-counter": PlusCounterAttributes & PlusCounterEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCounterElement>, keyof PlusCounterAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCounterElement>, keyof PlusCounterAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCounterElement>, keyof PlusCounterAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCounterElement>, keyof PlusCounterAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-counter": PlusCounterAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCounterElement>, keyof PlusCounterAttributesAndEvents>;
    }
  }
}
export type PlusCounterElement = globalThis.HTMLPlusCounterElement;
export interface PlusCounterVariantOverrides {}