import {
	Bind,
	Element,
	Event,
	type EventEmitter,
	Method,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	State,
	Variant,
	Watch
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

import { COUNTER_EASINGS } from './constants';

/**
 * Can be used to quickly create animations that display numerical data in a more interesting way.
 *
 * @stable
 *
 * @examples default, range, reverse, duration, delay, separator, decimal, separator-decimal, numerals, intersection
 */
@Element()
export class PlusCounter extends PlusCore {
	/**
	 * Easing function. Click [here](http://robertpenner.com/easing) for more details.
	 */
	@Property()
	easing?: 'ease-out-expo' | 'linear' = 'ease-out-expo';

	/**
	 * Specifies decimal character.
	 */
	@Property()
	decimal: string = '.';

	/**
	 * Amount of decimals to display.
	 */
	@Property()
	decimals: number = 0;

	/**
	 * Delay in milliseconds before starting the transition.
	 */
	@Property()
	delay: number = 0;

	/**
	 * Duration in milliseconds.
	 */
	@Property()
	duration: number = 1000;

	/**
	 * Initial value.
	 */
	@Property()
	from: number = 0;

	/**
	 * Specifies numeral glyph substitution.
	 */
	@Property()
	numerals?: string[] = [];

	/**
	 * Starts/Stops the transition.
	 */
	@Property({ reflect: true })
	play: boolean = false;

	/**
	 * Specifies character of thousands separator.
	 */
	@Property()
	separator: string = '';

	/**
	 * Target value.
	 */
	@Property()
	to!: number;

	/**
	 * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * See [Variant](/variant-property) for details.
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	/**
	 * Is Triggered when transition ended.
	 */
	@Event()
	plusComplete!: EventEmitter<void>;

	/**
	 * Completes the transition.
	 */
	@Method()
	complete() {
		this.cancelAnimationFrame();
		this.reset();
		this.counter = this.to;
		this.state = 'completed';
		this.play = false;
	}

	/**
	 * Pauses the transition.
	 */
	@Method()
	pause() {
		if (this.state !== 'running') return;
		this.cancelAnimationFrame();
		this.state = 'paused';
	}

	/**
	 * Starts the transition.
	 */
	@Method()
	start() {
		switch (this.state) {
			case 'completed':
			case 'idle':
			case 'stopped':
				setTimeout(() => {
					this.reset();
					this.state = 'running';
					this.play = true;
					this.requestAnimationFrame = requestAnimationFrame(this.count);
				}, this.delay);
				break;
			case 'paused':
				this.startTime = performance.now() - (this.duration - this.remaining);
				this.state = 'running';
				this.requestAnimationFrame = requestAnimationFrame(this.count);
				break;
		}
	}

	/**
	 * Stops the transition.
	 */
	@Method()
	stop() {
		this.cancelAnimationFrame();
		this.reset();
		this.counter = this.from;
		this.state = 'stopped';
		this.play = false;
	}

	@State()
	counter?: number;

	@State()
	state?: 'idle' | 'completed' | 'paused' | 'running' | 'stopped' = 'idle';

	remaining?: number;

	requestAnimationFrame?: number;

	startTime?: number;

	get easingFunction() {
		// biome-ignore lint: TODO
		return (COUNTER_EASINGS[this.easing] || this.easing) as any;
	}

	get formated() {
		const counter = this.counter ?? this.from;
		const negative = counter < 0 ? '-' : '';
		let result: string;
		let x1: string;
		let x2: string;
		let x3: string;
		result = Math.abs(counter).toFixed(this.decimals);
		result += '';
		const x = result.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? this.decimal + x[1] : '';
		if (this.separator) {
			x3 = '';
			for (let i = 0, length = x1.length; i < length; ++i) {
				if (i !== 0 && i % 3 === 0) {
					x3 = this.separator + x3;
				}
				x3 = x1[length - i - 1] + x3;
			}
			x1 = x3;
		}
		if (this.numerals?.length) {
			x1 = x1.replace(/[0-9]/g, (w) => this.numerals[+w]);
			x2 = x2.replace(/[0-9]/g, (w) => this.numerals[+w]);
		}
		return negative + x1 + x2;
	}

	get reverse() {
		return this.to < this.from;
	}

	@Watch(['play'], true)
	watcher() {
		// TODO: remove requestAnimationFrame
		requestAnimationFrame(() => {
			if (this.play === true && this.state !== 'running') this.start();
			if (this.play !== true && this.state === 'paused') this.stop();
			if (this.play !== true && this.state === 'running') this.stop();
		});
	}

	cancelAnimationFrame() {
		if (this.requestAnimationFrame !== undefined) {
			cancelAnimationFrame(this.requestAnimationFrame);
			this.requestAnimationFrame = undefined;
		}
	}

	@Bind()
	count(timestamp: number) {
		if (!this.startTime) this.startTime = timestamp;

		const progress = timestamp - this.startTime;

		this.remaining = this.duration - progress;

		if (!this.easingFunction) {
			this.counter = this.from + (this.to - this.from) * (progress / this.duration);
		} else if (this.reverse) {
			this.counter =
				this.from - this.easingFunction(progress, 0, this.from - this.to, this.duration);
		} else {
			this.counter = this.easingFunction(progress, this.from, this.to - this.from, this.duration);
		}

		const done = this.reverse ? this.counter < this.to : this.counter > this.to;

		this.counter = done ? this.to : this.counter;

		this.counter = Number(this.counter.toFixed(this.decimals));

		if (progress < this.duration) {
			this.requestAnimationFrame = requestAnimationFrame(this.count);
			return;
		}

		this.complete();

		this.plusComplete();
	}

	reset() {
		this.remaining = undefined;
		this.startTime = undefined;
	}

	disconnectedCallback() {
		this.stop();
	}

	render() {
		return (
			<host state={this.state} value={this}>
				{this.formated}
			</host>
		);
	}
}
