import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from "../../core";
import { CounterEasing } from './counter.types';
/**
 * @stable
 */
export declare class Counter extends PlusCore {
    static TAG: string;
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
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface CounterJSX {
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
     * Is Triggered when transition ended.
     */
    onPlusComplete?: (event: CustomEvent<void>) => void;
}
declare global {
    interface HTMLPlusCounterElement extends HTMLElement {
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
    }
    var HTMLPlusCounterElement: {
        prototype: HTMLPlusCounterElement;
        new (): HTMLPlusCounterElement;
    };
    interface HTMLElementTagNameMap {
        "plus-counter": HTMLPlusCounterElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-counter": CounterJSX & {
                [key: string]: any;
            };
        }
    }
}
export type CounterElement = globalThis.HTMLPlusCounterElement;
