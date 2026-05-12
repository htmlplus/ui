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
	Watch,
	classes
} from '@htmlplus/element';

import type CropperCoreType from 'cropperjs';

import { PlusCore } from '@/core';
import { ExternalDependencyError } from '@/errors';
import type { PlusBreakpoint } from '@/types';

import type {
	PlusCropperCropEvent,
	PlusCropperPointerEvent,
	PlusCropperValue,
	PlusCropperZoomEvent
} from './types';

let CropperCore: typeof CropperCoreType;

/**
 * Used for cropping large images to fit a container before uploading them to the server.
 *
 * @thirdParty
 * @stable
 * @dependencies cropperjs
 *
 * @examples default, disabled, shape, indicator, guides, transparent, background, area,
 *           aspect-ratio, mode, zoomable, zoom-ratio, to-base64, to-blob, to-url, styles
 */
@Element()
export class PlusCropper extends PlusCore {
	/**
	 * A number between 0 and 1. Specifies the automatic cropping area size.
	 */
	@Property()
	area: number = 0.75;

	/**
	 * Specifies the initial aspect ratio of the viewport.
	 */
	@Property()
	aspectRatio?: number | string;

	/**
	 * Shows the grid background of the container.
	 */
	@Property()
	background: boolean = false;

	/**
	 * Disables the element functionality.
	 */
	@Property({ reflect: true })
	disabled: boolean = false;

	/**
	 * Shows the dashed lines above the viewport.
	 */
	@Property()
	guides: boolean = false;

	/**
	 * Shows the center indicator above the viewport.
	 */
	@Property()
	indicator: boolean = false;

	/**
	 * Specifies the mode.
	 *
	 * @value crop - Creates a new viewport and allows to move and resize it.
	 * @value move - Moves the canvas and viewport.
	 * @value none - Do nothing.
	 */
	@Property()
	mode: 'crop' | 'move' | 'none' = 'move';

	/**
	 * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
	 *
	 * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
	 * @value edge - Enables to resize the viewport by dragging on the vertices.
	 * @value main - Enables to resize the viewport by dragging on the Sides.
	 */
	@Property()
	resizer: 'both' | 'edge' | 'main' = 'both';

	/**
	 * Specifies the shape of the resizer.
	 *
	 * @value circle - TODO.
	 * @value line   - TODO.
	 * @value square - TODO.
	 */
	@Property()
	resizerShape: 'circle' | 'line' | 'square' = 'square';

	/**
	 * Re-renders when resizing the window.
	 *
	 * @value false - TODO.
	 * @value true  - TODO.
	 * @value reset - Restores the cropped area after resizing the window.
	 */
	@Property()
	responsive: boolean | 'reset' = 'reset';

	/**
	 * Specifies the shape of the viewport.
	 *
	 * @value circle    - TODO.
	 * @value rectangle - TODO.
	 * @value square    - TODO.
	 */
	@Property()
	shape: 'circle' | 'rectangle' | 'square' = 'rectangle';

	/**
	 * Specifies the image's src.
	 */
	@Property()
	src: string = '';

	/**
	 * Hides the black modal above the image and under the viewport.
	 */
	@Property()
	transparent: boolean = false;

	/**
	 * Gets/Sets data.
	 */
	@Property()
	value?: PlusCropperValue;

	/**
	 * Specifies the view.
	 *
	 * @value contain - restrict the minimum canvas size to fit within the container. If the
	 *                    proportions of the canvas and the container differ, the minimum canvas will be
	 *                    surrounded by extra space in one of the dimensions.
	 * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions
	 *                    of the canvas and the container are different, the container will not be able
	 *                    to fit the whole canvas in one of the dimensions.
	 * @value fit      - restrict the viewport to not exceed the size of the canvas.
	 * @value none    - no restrictions.
	 */
	@Property()
	view: 'contain' | 'cover' | 'fit' | 'none' = 'cover';

	/**
	 * Enables to zoom the image.
	 *
	 * @value false - Unable to zoom the image.
	 * @value true  - Enables to zoom the image by touching and wheeling mouse.
	 * @value touch - Enables to zoom the image by touching.
	 * @value wheel - Enables to zoom the image by wheeling mouse.
	 */
	@Property()
	zoomable: boolean | 'touch' | 'wheel' = true;

	/**
	 * Specifies zoom ratio when zooming the image by wheeling the mouse.
	 */
	@Property()
	zoomRatio: number = 0.1;

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
	 * Fires when the `image` or the `viewport` is changed.
	 */
	@Event()
	plusCrop!: EventEmitter<PlusCropperCropEvent>;

	/**
	 * Fires when the `image` or the `viewport` changes are finished.
	 */
	@Event()
	plusCropEnd!: EventEmitter<PlusCropperPointerEvent>;

	/**
	 * Fires when the `image` or the `viewport` is changing.
	 */
	@Event()
	plusCropMove!: EventEmitter<PlusCropperPointerEvent>;

	/**
	 * Fires when the `image` or the `viewport` starts to change.
	 */
	@Event()
	plusCropStart!: EventEmitter<PlusCropperPointerEvent>;

	/**
	 * Fires when the image has been loaded and the element is ready for operation.
	 */
	@Event()
	plusReady!: EventEmitter<void>;

	/**
	 * Fires when the element starts to `zoom in` or `zoom out`.
	 */
	@Event({ cancelable: true })
	plusZoom!: EventEmitter<PlusCropperZoomEvent>;

	/**
	 * Flips horizontally.
	 */
	@Method()
	flipX(): void {
		this.instance.scale(-1, 1);
	}

	/**
	 * Flips vertically.
	 */
	@Method()
	flipY(): void {
		this.instance.scale(1, -1);
	}

	/**
	 * Moves the canvas with relative offsets.
	 * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
	 * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
	 */
	@Method()
	move(offsetX?: number, offsetY?: number): void {
		this.instance.move(offsetX ?? null, offsetY ?? null);
	}

	/**
	 * Moves the canvas to an absolute point.
	 * @param x - The `left` value of the canvas. Use `null` to ignore this.
	 * @param y - The `top` value of the canvas. Use `null` to ignore this.
	 */
	@Method()
	moveTo(x?: number, y?: number): void {
		this.instance.moveTo(x ?? null, y ?? null);
	}

	/**
	 * Resets the image and viewport to their initial states.
	 */
	@Method()
	reset(): void {
		this.instance.reset();
	}

	/**
	 * Rotates the image with a relative degree.
	 */
	@Method()
	rotate(degree: number): void {
		this.instance.rotate(degree);
	}

	/**
	 * Rotates the image to an absolute degree.
	 */
	@Method()
	rotateTo(degree: number): void {
		this.instance.rotateTo(degree);
	}

	/**
	 * Gets `canvas` from the cropped image.
	 */
	@Method()
	toCanvas(): HTMLCanvasElement {
		return this.instance.getCroppedCanvas(/* TODO */);
	}

	/**
	 * Zooms the canvas with a relative ratio.
	 */
	@Method()
	zoom(ratio: number): void {
		this.instance.zoom(ratio);
	}

	/**
	 * Zooms the canvas to an absolute ratio.
	 */
	@Method()
	zoomTo(ratio: number): void {
		this.instance.zoomTo(ratio /*, TODO */);
	}

	@Query('.image')
	$image!: HTMLImageElement;

	instance?: CropperCoreType;

	locked: boolean = false;

	get classes() {
		return classes(
			[
				'wrapper',
				{
					resizer: this.resizer,
					resizerShape: this.resizerShape,
					shape: this.shape
				}
			],
			true
		);
	}

	get options() {
		const aspectRatio = (() => {
			if (this.shape !== 'rectangle') return 1;

			if (typeof this.aspectRatio === 'number') return this.aspectRatio;

			let [valueA, valueB] = `${this.aspectRatio}`
				.split('/')
				.map((item) => (Number.isNaN(Number(item)) ? NaN : parseFloat(item)));

			if (valueB === undefined) valueB = 1;

			if (!Number.isNaN(valueA + valueB)) return valueA / valueB;

			return NaN;
		})();

		const view = (
			{
				none: 0,
				fit: 1,
				contain: 2,
				cover: 3
			} as Record<PlusCropper['view'], CropperCoreType.ViewMode>
		)[this.view];

		const zoomable = (() => {
			const value = `${this.zoomable}`;
			if (['touch', 'wheel'].includes(value)) return value;
			return this.zoomable;
		})();

		return {
			aspectRatio,
			autoCrop: true,
			autoCropArea: this.area,
			background: this.background,
			center: this.indicator,
			checkCrossOrigin: true,
			checkOrientation: true,
			cropBoxMovable: this.mode === 'crop',
			cropBoxResizable: this.mode === 'crop',
			data: this.value,
			dragMode: this.mode,
			guides: this.guides,
			highlight: false,
			initialAspectRatio: NaN,
			minCanvasHeight: 0,
			minCanvasWidth: 0,
			minContainerHeight: 0,
			minContainerWidth: 0,
			minCropBoxHeight: 0,
			minCropBoxWidth: 0,
			modal: !this.transparent,
			movable: true,
			preview: '',
			responsive: !!this.responsive,
			restore: this.responsive === 'reset',
			rotatable: true,
			scalable: true,
			toggleDragModeOnDblclick: false,
			viewMode: view,
			wheelZoomRatio: this.zoomRatio,
			zoomable: !!zoomable,
			zoomOnTouch: zoomable === true || zoomable === 'touch',
			zoomOnWheel: zoomable === true || zoomable === 'wheel',
			crop: this.onCrop,
			cropend: this.onCropEnd,
			cropmove: this.onCropMove,
			cropstart: this.onCropStart,
			ready: this.onReady,
			zoom: this.onZoom
		};
	}

	@Watch()
	watcher(next: unknown, _prev: unknown, name: string) {
		if (this.locked) return;

		switch (name) {
			case 'aspectRatio':
			case 'shape':
				this.instance.setAspectRatio(this.options.aspectRatio);
				break;

			case 'disabled':
				next ? this.instance.disable() : this.instance.enable();
				break;

			case 'mode':
				// TODO: Doesn't work.
				// this.instance.setDragMode(next);
				// TODO: Remove this after fixing the above issue.
				this.terminate();
				this.initialize();
				break;

			case 'src':
				this.instance.replace(this.src, false /* TODO */);
				break;

			case 'value':
				this.sync(next);
				break;

			case 'area':
			case 'transparent':
			case 'background':
			case 'guides':
			case 'indicator':
			case 'responsive':
			case 'view':
			case 'zoomable':
			case 'zoomRatio':
				this.terminate();
				this.initialize();
				break;
		}
	}

	initialize() {
		if (!CropperCore) return;

		if (this.instance) return;

		this.instance = new CropperCore(this.$image, this.options);
	}

	sync(value?) {
		if (!this.instance) return;

		const from = (a, b) => (a * b) / 100;

		const to = (a, b) => (a / b) * 100;

		const image = this.instance.getCanvasData();

		const viewport = this.instance.getCropBoxData();

		if (value) {
			this.instance.rotateTo(value.rotate);

			const height = to(viewport.height, value.height);
			const width = to(viewport.width, value.width);

			const top = viewport.top + viewport.height / 2 - from(height, value.top + value.height / 2);
			const left = viewport.left + viewport.width / 2 - from(width, value.left + value.width / 2);

			this.instance.setCanvasData({ top, left, width, height });

			return;
		}

		this.locked = true;

		// TODO: This assignment applies additional rendering during cropping
		this.value = {
			rotate: this.instance.getData().rotate,
			top: to(viewport.top - image.top, image.height),
			left: to(viewport.left - image.left, image.width),
			height: to(viewport.height, image.height),
			width: to(viewport.width, image.width)
		};

		// TODO
		requestAnimationFrame(() => {
			this.locked = false;
		});
	}

	terminate() {
		// TODO: has a problem in documentation
		this.instance?.destroy();

		this.instance = undefined;
	}

	@Bind()
	onCrop() {
		this.sync();
		this.plusCrop(this.value as PlusCropperCropEvent);
	}

	@Bind()
	onCropEnd(event) {
		this.plusCropEnd({
			action: event.detail.action,
			event: event.detail.originalEvent
		});
	}

	@Bind()
	onCropMove(event) {
		this.plusCropMove({
			action: event.detail.action,
			event: event.detail.originalEvent
		});
	}

	@Bind()
	onCropStart(event) {
		this.plusCropStart({
			action: event.detail.action,
			event: event.detail.originalEvent
		});
	}

	@Bind()
	onReady() {
		if (this.disabled) {
			this.instance.disable();
		}
		this.plusReady();
	}

	@Bind()
	onZoom(event) {
		const difference = event.detail.ratio - event.detail.oldRatio;

		const direction = difference > 0 ? 'IN' : 'OUT';

		const detail: PlusCropperZoomEvent = {
			difference,
			direction,
			event: event.detail.originalEvent,
			ratio: event.detail.ratio
		};

		const { defaultPrevented } = this.plusZoom(detail);

		if (!defaultPrevented) return;

		event.preventDefault();
	}

	connectedCallback() {
		import('cropperjs')
			.then((module) => {
				CropperCore = module.default;
				this.initialize();
			})
			.catch((error) => {
				throw new ExternalDependencyError(this.$host, 'cropperjs', {
					cause: error
				});
			});
	}

	disconnectedCallback() {
		this.terminate();
	}

	render() {
		return (
			<div className={this.classes}>
				<img className="image" alt="cropper" src={this.src} />
			</div>
		);
	}
}
