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
	Query,
	Variant,
	Watch
} from '@htmlplus/element';

import type CoreType from 'signature_pad';
import type { FromDataUrlOptions, Options, PointGroup, ToSVGOptions } from 'signature_pad';

import { PlusForm } from '@/core';
import { ExternalDependencyError } from '@/errors';
import { getCSSColor } from '@/helpers';
import type { PlusBreakpoint, PlusColorOverrides } from '@/types';

let Core: typeof CoreType;

/**
 * Allows user to draw smooth signatures.
 *
 * @thirdParty
 * @stable
 * @dependencies signature_pad
 *
 * @part canvas - The canvas element.
 *
 * @examples default, background-color, pen-color, dimensions, disabled, dot-size, width,
 *           min-distance, clear, history, resizable, clear-on-resize, save, load, events
 */
@Element()
export class PlusSignature extends PlusForm {
	/**
	 * Specifies the background color.
	 */
	@Property()
	backgroundColor?: OverridableValue<string & {}, PlusColorOverrides> = 'lightgray';

	/**
	 * Specifies configuration options for the canvas 2D rendering context.
	 *
	 * These options are passed to `HTMLCanvasElement.getContext('2d', options)`
	 * and control how the drawing context is created (for example, alpha,
	 * color space, or desynchronization behavior).
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getContextAttributes
	 */
	@Property()
	canvasContextOptions?: CanvasRenderingContext2DSettings;

	/**
	 * Clears the canvas after resizing.
	 */
	@Property()
	clearOnResize?: boolean;

	/**
	 * Specifies the color of the strokes.
	 */
	@Property()
	penColor?: OverridableValue<string & {}, PlusColorOverrides> = 'black';

	/**
	 * Add the next point only if the previous one is farther than x pixels.
	 */
	@Property()
	minDistance?: number = 5;

	/**
	 * Specifies the radius of a single dot.
	 */
	@Property()
	dotSize?: number;

	/**
	 * Specifies the maximum width of the strokes.
	 */
	@Property()
	maxWidth?: number = 2.5;

	/**
	 * Specifies the minimum width of the strokes.
	 */
	@Property()
	minWidth?: number = 0.5;

	/**
	 * Observes the element dimensions to apply new changes on the canvas.
	 */
	@Property()
	resizable?: boolean;

	/**
	 * Specifies the time distance between the previous point and the next one.
	 */
	@Property()
	throttle?: number = 16;

	/**
	 * Gets/Sets data.
	 */
	@Property()
	value?: PointGroup[];

	/**
	 * Specifies the velocity based on the previous velocity.
	 */
	@Property()
	velocityFilterWeight?: number = 0.7;

	/**
	 * The canvas element.
	 */
	@Property()
	get canvas(): HTMLCanvasElement {
		return this.$canvas;
	}

	/**
	 * Specifies whether redo can be performed or not.
	 */
	@Property()
	get redoable(): boolean {
		return this.index !== this.history.length - 1;
	}

	/**
	 * Specifies whether undo can be performed or not.
	 */
	@Property()
	get undoable(): boolean {
		return this.index !== -1;
	}

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
	 * Fires after updating the stroke.
	 */
	@Event()
	plusAfter!: EventEmitter<PointerEvent>;

	/**
	 * Fires before updating the stroke.
	 */
	@Event()
	plusBefore!: EventEmitter<PointerEvent>;

	/**
	 * Fires after the latest changes have occurred with a delay to prepare the value.
	 */
	@Event()
	plusChange!: EventEmitter<PointGroup[]>;

	/**
	 * Fires after a stroke ends.
	 */
	@Event()
	plusEnd!: EventEmitter<PointerEvent>;

	/**
	 * Fires when the underlying `signature_pad` instance has been
	 * successfully initialized and the element is ready for interaction.
	 */
	@Event()
	plusReady!: EventEmitter<void>;

	/**
	 * Fires before a stroke starts.
	 */
	@Event()
	plusStart!: EventEmitter<PointerEvent>;

	/**
	 * Clears the canvas
	 */
	@Method()
	clear() {
		if (!this.ensureInstance()) return;

		this.index = -1;

		this.history = [];

		this.instance?.clear();

		this.previous = this.value = undefined;
	}

	/**
	 * Restores the signature from a data URL.
	 *
	 * @param dataUrl - The data URL representing the signature image.
	 * @param options - Optional configuration for restoring the image.
	 */
	@Method()
	async fromDataURL(dataUrl: string, options?: FromDataUrlOptions) {
		if (this.ensureInstance()) {
			await this.instance?.fromDataURL(dataUrl, options);
		}
	}

	/**
	 * Reverts the last undo action.
	 */
	@Method()
	redo() {
		if (!this.ensureInstance()) return;

		if (!this.redoable) return;

		this.index++;

		const data = this.history[this.index] || [];

		this.instance?.fromData(data, { clear: true });

		this.previous = this.value = this.clone();

		this.plusChange(this.value);
	}

	/**
	 * Redraw the canvas.
	 */
	@Method()
	redraw() {
		if (this.ensureInstance()) {
			this.instance?.redraw();
		}
	}

	/**
	 * Syncs the canvas dimensions with the element dimensions.
	 *
	 * @param clear - Clears the canvas after resizing.
	 */
	@Method()
	resize(clear?: boolean) {
		const { width, height, offsetWidth, offsetHeight } = this.$canvas;

		if (width === offsetWidth && height === offsetHeight) return;

		this.$canvas.width = offsetWidth;

		this.$canvas.height = offsetHeight;

		if (!this.ensureInstance()) return;

		if (clear ?? this.clearOnResize) {
			return this.clear();
		}

		this.instance?.fromData(this.clone(), { clear: true });
	}

	/**
	 * Returns the current signature as a data URL.
	 *
	 * The returned string can be used to display the signature image,
	 * upload it to a server, or store it for later use.
	 *
	 * @param type - The image MIME type (e.g. `image/png`, `image/jpeg`).
	 *               Defaults to `image/png`.
	 * @param quality - A number between `0` and `1` indicating image quality.
	 *                  Applies only to `image/jpeg` or `image/webp`.
	 *
	 * @returns A data URL representing the signature, or `undefined`
	 *          if the signature pad has not been initialized.
	 *
	 * @see https://mdn.io/todataurl
	 */
	@Method()
	toDataURL(type?: string, quality?: number): string | undefined {
		if (this.ensureInstance()) {
			return this.$canvas?.toDataURL(type, quality);
		}
	}

	/**
	 * Returns the current signature as an SVG string.
	 *
	 * @param options - Optional configuration for the SVG output.
	 *
	 * @returns A string containing the SVG markup of the signature,
	 *          or `undefined` if the signature pad has not been initialized.
	 */
	@Method()
	toSVG(options: ToSVGOptions): string | undefined {
		if (this.ensureInstance()) {
			return this.instance?.toSVG(options);
		}
	}

	/**
	 * Reverts the last action.
	 */
	@Method()
	undo() {
		if (!this.ensureInstance()) return;

		if (!this.undoable) return;

		this.index--;

		const data = this.history[this.index] || [];

		this.instance?.fromData(data, { clear: true });

		this.previous = this.value = this.clone();

		this.plusChange(this.value);
	}

	@Query('canvas')
	$canvas!: HTMLCanvasElement;

	instance?: CoreType;

	history: PointGroup[][] = [];

	index: number = -1;

	observer: ResizeObserver = new ResizeObserver(() => this.resize());

	previous?: PointGroup[];

	timeout: number = 0;

	get options(): Options {
		return {
			backgroundColor: getCSSColor(this.$host, this.backgroundColor),
			canvasContextOptions: this.canvasContextOptions,
			dotSize: this.dotSize,
			minDistance: this.minDistance,
			minWidth: this.minWidth,
			maxWidth: this.maxWidth,
			penColor: getCSSColor(this.$host, this.penColor),
			throttle: this.throttle,
			velocityFilterWeight: this.velocityFilterWeight
		};
	}

	// TODO
	@Watch()
	watcher(next: unknown, _prev: unknown, name: string) {
		if (!this.instance) return;
		switch (name) {
			case 'backgroundColor':
				this.instance.backgroundColor =
					getCSSColor(this.$host, this.backgroundColor) || this.instance.backgroundColor;
				break;
			case 'penColor':
				this.instance.penColor = getCSSColor(this.$host, this.penColor) || this.instance.penColor;
				break;
			case 'disabled':
				if (this.disabled) {
					this.instance.off();
				} else {
					this.instance.on();
				}
				break;
			case 'canvasContextOptions':
			case 'dotSize':
			case 'maxWidth':
			case 'minDistance':
			case 'minWidth':
			case 'throttle':
			case 'velocityFilterWeight':
				// biome-ignore lint: TODO
				this.instance[name] = next as any;
				break;
			case 'resizable':
				if (this.resizable) {
					this.observer.observe(this.$host);
				} else {
					this.observer.unobserve(this.$host);
				}
				break;
			case 'value':
				if (this.value !== this.previous) {
					this.previous = this.value || [];
					this.instance.fromData(this.value || [], { clear: true });
				}
				break;
		}
	}

	clone(): PointGroup[] {
		return JSON.parse(JSON.stringify(this.instance?.toData() || []));
	}

	ensureInstance(): boolean {
		if (this.instance) return true;

		console.warn(
			'[Signature] Cannot perform operation because signature_pad is not initialized. ' +
				'Wait for the `ready` event before calling this method.'
		);

		return false;
	}

	initialize() {
		this.instance = new Core(this.$canvas, this.options);

		this.instance?.addEventListener('beginStroke', this.onStart);
		this.instance?.addEventListener('endStroke', this.onEnd);

		const events = {
			afterUpdateStroke: this.plusAfter,
			beforeUpdateStroke: this.plusBefore,
			beginStroke: this.plusStart,
			endStroke: this.plusEnd
		};

		for (const key in events) {
			if (Object.hasOwn(events, key)) {
				// biome-ignore lint: TODO
				this.instance?.addEventListener(key, (event: any) => {
					events[key as keyof typeof events].call(this, event.detail);
				});
			}
		}

		if (this.disabled) {
			this.instance?.off();
		}

		if (this.resizable) {
			this.observer.observe(this.$host);
		}

		this.resize();

		this.plusReady();
	}

	terminate() {
		this.observer.disconnect();
		this.instance?.off();
	}

	@Bind()
	onReset() {
		this.clear();
		this.plusChange(this.value);
	}

	@Bind()
	onStart() {
		if (this.value && this.index === -1) {
			this.clear();
		}
	}

	@Bind()
	onEnd() {
		this.index++;

		this.history[this.index] = this.clone();

		this.history.length = this.index + 1;

		this.previous = this.value = this.clone();

		this.plusChange(this.value);
	}

	readyCallback() {
		import('signature_pad')
			.then((module) => {
				Core = module.default;
				this.initialize();
			})
			.catch((error) => {
				throw new ExternalDependencyError(this.$host, 'signature_pad', { cause: error });
			});
	}

	disconnectedCallback() {
		this.terminate();
	}

	render() {
		// TODO: tabIndex
		return <canvas part="canvas" tabIndex={0}></canvas>;
	}
}
