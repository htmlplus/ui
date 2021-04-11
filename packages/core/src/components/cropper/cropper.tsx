import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
import CropperCore from 'cropperjs';
import * as Utils from '@app/utils';
import { Bind, GlobalConfig } from '@app/services';
import {
  CropperValue,
  CropperMode,
  CropperResizer,
  CropperResizerShape,
  CropperResponsive,
  CropperShape,
  CropperView,
  CropperZoomable,
  CropperZoomData,
} from './cropper.types';

/**
 * An image cropper is a web & mobile component which enable the user to resize, move, crop 
 * an area of images before they're uploaded to the server.
 * @examples default, area, aspect-ratio, backdrop, background, dialog, guides, indicator, mode, shape, styles
 */
@Component({
  tag: 'plus-cropper',
  styleUrl: 'cropper.scss',
  shadow: true
})
export class Cropper {

  /**
   * A number between 0 and 1. Define the automatic cropping area size.
   */
  @Prop()
  area?: number = 0.75;

  /**
   * Defines the initial aspect ratio of the viewport.
   */
  @Prop()
  aspectRatio?: number;

  /**
   * Shows the black modal above the image and under the viewport.
   */
  @Prop()
  backdrop?: boolean = true;

  /**
   * Shows the grid background of the container.
   */
  @Prop()
  background?: boolean;

  /**
   * Disables the cropper.
   */
  @Prop()
  disabled?: boolean;

  /**
   * Shows the dashed lines above the viewport.
   */
  @Prop()
  guides?: boolean;

  /**
   * Shows the center indicator above the viewport.
   */
  @Prop()
  indicator?: boolean;

  /**
   * Defines the cropping mode of the cropper.
   * @value crop - Creates a new viewport and allows you to move and resize it.
   * @value move - moves the canvas and viewport.
   */
  @Prop()
  mode?: CropperMode = 'move';

  /**
   * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
   * @value main - Enables to resize the viewport by dragging on the Sides.
   * @value edge - Enables to resize the viewport by dragging on the vertices.
   * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
   */
  @Prop()
  resizer?: CropperResizer = 'both';

  /**
   * Specifies the shape of the resizer.
   */
  @Prop()
  resizerShape?: CropperResizerShape = 'square';

  /**
   * Re-renders the cropper when resizing the window.
   * @value reset - Restores the cropped area after resizing the window.
   */
  @Prop()
  responsive?: CropperResponsive = 'reset';

  /**
   * Specifies the shape of the viewport.
   */
  @Prop()
  shape?: CropperShape = 'rectangle';

  /**
   * Replace the image's src and rebuild the cropper.
   */
  @Prop()
  src?: string;

  /**
   * The previous cropped data if you had stored, will be passed to value automatically when initialized. 
   */
  @Prop({ mutable: true })
  value?: CropperValue;

  /**
   * Define the view mode of the cropper. If you set viewMode to `none`, the viewport can extend 
   * outside the canvas, while a value of `fit`, `contain` or `cover` will restrict the viewport 
   * to the size of the canvas. A viewMode of `contain` or `cover` will additionally restrict the 
   * canvas to the container. Note that if the proportions of the canvas and the container are 
   * the same, there is no difference between `contain` and `cover`.
   * @value contain - restrict the minimum canvas size to fit within the container. If the 
   *                  proportions of the canvas and the container differ, the minimum canvas will be 
   *                  surrounded by extra space in one of the dimensions.
   * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions 
   *                  of the canvas and the container are different, the container will not be able 
   *                  to fit the whole canvas in one of the dimensions.
   * @value fit     - restrict the viewport to not exceed the size of the canvas.
   * @value none    - no restrictions.
   */
  @Prop()
  view?: CropperView = 'cover';

  /**
   * Enables to zoom the image.
   * @value false - Unable to zoom the image.
   * @value true  - Enables to zoom the image by touching and wheeling mouse.
   * @value touch - Enables to zoom the image by touching.
   * @value wheel - Enables to zoom the image by wheeling mouse.
   * @
   */
  @Prop()
  zoomable?: CropperZoomable = true;

  /**
   * Defines zoom ratio when zooming the image by wheeling mouse.
   */
  @Prop()
  zoomRatio?: number = 0.1;

  /**
   * This event fires when the target image has been loaded and the cropper instance is ready for operating.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusReady!: EventEmitter<void>;

  /**
   * This event fires when the canvas or the viewport changed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusCrop!: EventEmitter<void>;

  /**
   * This event fires when a cropper instance starts to zoom in or zoom out its canvas.
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusZoom!: EventEmitter<CropperZoomData>;

  @GlobalConfig('crop', {
    area: 0.75,
    backdrop: true,
    mode: 'move',
    resizer: 'both',
    resizerShape: 'square',
    responsive: 'reset',
    shape: 'rectangle',
    view: 'cover',
    zoomable: true,
    zoomRatio: 0.1,
  })
  config?;

  @Element()
  $host!: HTMLElement;

  $image!: HTMLImageElement;

  instance?: CropperCore;

  lock: boolean = false;

  get classes() {
    return Utils.classes(
      'wrapper',
      {
        resizer: this.resizer,
        resizerShape: this.resizerShape,
        shape: this.shape,
      }
    )
  }

  get options() {

    const aspectRatio = (() => {

      if (typeof this.aspectRatio === 'undefined') return NaN;

      if (typeof this.aspectRatio === 'string') {

        const [valueA, valueB] = `${this.aspectRatio}`.split('/').map((item) => parseFloat(item));

        const value = valueA / (valueB || 1);

        return value;
      }

      return this.aspectRatio ?? NaN;
    })();

    const responsive = (() => {

      if (this.responsive === 'reset') return this.responsive;

      return Utils.toBoolean(this.responsive);
    })();

    const view = (() => ({ none: 0, fit: 1, contain: 2, cover: 3 })[this.view] as any)();

    const zoomable = (() => {

      const value = `${this.zoomable}`;

      if (['touch', 'wheel'].includes(value)) return value;

      return Utils.toBoolean(this.zoomable);
    })();

    return {
      /**
       * TODO
       * autoCrop        : true,
       * checkCrossOrigin: true,
       * checkOrientation: true,
       * minCanvasWidth  : this.canvasMinWidth,
       * minCanvasHeight : this.canvasMinHeight,
       * minCropBoxWidth : this.viewportMinWidth,
       * minCropBoxHeight: this.viewportMinHeight,
       * preview         : HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | string,
       * cropstart       : (e) => console.log('cropstart', e),
       * cropmove        : (e) => console.log('cropmove', e),
       * cropend         : (e) => console.log('cropend', e),
       */
      autoCropArea: parseFloat(`${this.area}`),
      aspectRatio: this.shape === 'rectangle' ? aspectRatio : 1,
      background: Utils.toBoolean(this.background),
      center: Utils.toBoolean(this.indicator),
      cropBoxMovable: this.mode === 'crop',
      cropBoxResizable: this.mode === 'crop',
      data: this.value,
      dragMode: this.mode,
      guides: Utils.toBoolean(this.guides),
      highlight: false,
      initialAspectRatio: NaN,
      minContainerWidth: 0,
      minContainerHeight: 0,
      modal: Utils.toBoolean(this.backdrop),
      movable: true,
      responsive: !!responsive,
      restore: responsive === 'reset',
      rotatable: true,
      scalable: true,
      toggleDragModeOnDblclick: false,
      viewMode: view,
      wheelZoomRatio: this.zoomRatio,
      zoomable: !!zoomable,
      zoomOnTouch: zoomable === true || zoomable === 'touch',
      zoomOnWheel: zoomable === true || zoomable === 'wheel',
      cropend: this.onCrop,
      ready: this.onReady,
      zoom: this.onZoom
    }
  }

  /**
   * External Methods
   */

  /**
   * Flip horizontal.
   */
  @Method()
  flipX(): Promise<void> {
    this.instance?.scale(-1, 1);
    return Promise.resolve();
  }

  /**
   * Flip vertical.
   */
  @Method()
  flipY(): Promise<void> {
    this.instance?.scale(1, -1);
    return Promise.resolve();
  }

  /**
   * Move the canvas with relative offsets.
   * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
   * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
   */
  @Method()
  move(offsetX?: number, offsetY?: number): Promise<void> {
    this.instance?.move(offsetX ?? null, offsetY ?? null);
    return Promise.resolve();
  }

  /**
   * Move the canvas to an absolute point.
   * @param x - The `left` value of the canvas. Use `null` to ignore this.
   * @param y - The `top` value of the canvas. Use `null` to ignore this.
   */
  @Method()
  moveTo(x?: number, y?: number): Promise<void> {
    this.instance?.moveTo(x ?? null, y ?? null);
    return Promise.resolve();
  }

  /**
   * Reset the image and viewport to their initial states.
   */
  @Method()
  reset(): Promise<void> {
    this.instance?.reset();
    return Promise.resolve();
  }

  /**
   * Rotate the image with a relative degree.
   */
  @Method()
  rotate(degree: number): Promise<void> {
    this.instance?.rotate(degree);
    return Promise.resolve();
  }

  /**
   * Rotate the image to an absolute degree.
   */
  @Method()
  rotateTo(degree: number): Promise<void> {
    this.instance?.rotateTo(degree);
    return Promise.resolve();
  }

  /**
   * Gets `blob` value from the cropped image.
   */
  @Method()
  toBlob(): Promise<Blob> {
    return new Promise((resolve) => {
      this.instance
        .getCroppedCanvas()
        .toBlob((blob) => resolve(blob))
    })
  }

  /**
   * Gets `canvas` from the cropped image.
   */
  @Method()
  toCanvas(): Promise<HTMLCanvasElement> {
    const canvas = this.instance.getCroppedCanvas();
    return Promise.resolve(canvas);
  }

  /**
   * Gets `base64` from the cropped image.
   */
  @Method()
  toBase64(): Promise<string> {
    const base64 = this.instance
      .getCroppedCanvas()
      .toDataURL();
    return Promise.resolve(base64);
  }

  /**
   * Gets `blob url` from the cropped image.
   */
  @Method()
  toURL(): Promise<string> {
    return new Promise((resolve) => {
      this.instance
        .getCroppedCanvas()
        .toBlob(
          (blob) => resolve(URL.createObjectURL(blob))
        )
    })
  }

  /**
   * Zoom the canvas with a relative ratio.
   */
  @Method()
  zoom(ratio: number): Promise<void> {
    this.instance?.zoom(ratio);
    return Promise.resolve();
  }

  /**
   * Zoom the canvas to an absolute ratio.
   */
  @Method()
  zoomTo(ratio: number): Promise<void> {
    this.instance?.zoomTo(ratio);
    return Promise.resolve();
  }

  /**
   * Internal Methods
   */

  bind() {
    this.instance = new CropperCore(this.$image, this.options);
  }

  unbind() {
    this.instance?.destroy();
  }

  rebind() {
    this.unbind();
    this.bind();
  }

  updateValue(value?) {

    if (!this.instance) return;

    const { height, width } = this.instance?.getContainerData();

    if (value) {

      const toPixel = (a, b) => a * b / 100;

      // TODO this.instance.rotateTo(value.rotate);

      this.instance
        .setCropBoxData({
          top: toPixel(value.top, height),
          left: toPixel(value.left, width),
          width: toPixel(100 - value.right - value.left, width),
          height: toPixel(100 - value.top - value.bottom, height),
        })
        .setCanvasData({
          top: toPixel(value.y, height),
          left: toPixel(value.x, width),
          width: toPixel(value.width, width),
          height: toPixel(value.height, height),
        });

      return;
    }

    const
      canvas = this.instance.getCanvasData(),
      // TODO data = this.instance.getData(),
      viewport = this.instance.getCropBoxData();

    const toPercent = (a, b) => parseFloat((a / b * 100).toFixed(2));

    this.lock = true;

    this.value = {
      // TODO rotate: data.rotate,
      top: toPercent(viewport.top, height),
      right: toPercent(width - viewport.left - viewport.width, width),
      bottom: toPercent(height - viewport.top - viewport.height, height),
      left: toPercent(viewport.left, width),
      width: toPercent(canvas.width, width),
      height: toPercent(canvas.height, height),
      x: toPercent(canvas.left, width),
      y: toPercent(canvas.top, height),
    };

    this.lock = false;
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev || this.lock) return;

    const value = this[name];

    switch (name) {

      case 'aspectRatio':
        if (this.shape !== 'rectangle') break;
        this.instance?.setAspectRatio(value);
        break;

      case 'disabled':
        value ? this.instance?.disable() : this.instance?.enable();
        break;

      case 'src':
        this.instance?.replace(this.src, false);
        break;

      case 'value':
        this.updateValue(value);
        break;

      case 'resizer':
      case 'resizerShape':
        break;

      case 'shape':

        const aspectRatio = this.shape === 'rectangle' ? this.options.aspectRatio : 1;

        this.instance?.setAspectRatio(aspectRatio);

        break;

      case 'backdrop':
      case 'background':
      case 'guides':
      case 'indicator':
      case 'mode':
      case 'responsive':
      case 'view':
      case 'zoomable':
      case 'zoomRatio':
        this.rebind();
        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onCrop() {

    this.updateValue();

    this.plusCrop.emit();
  }

  @Bind
  onReady() {

    // TODO
    this.value && this.updateValue(this.value);

    this.disabled && this.instance?.disable();

    this.plusReady.emit();
  }

  @Bind
  onZoom(event) {

    const difference = event.detail.ratio - event.detail.oldRatio;

    const direction = difference > 0 ? 'in' : 'out';

    const detail: CropperZoomData = {
      difference,
      direction,
      ratio: event.detail.ratio
    };

    const result = this.plusZoom.emit(detail);

    if (!result.defaultPrevented) return this.onCrop();

    event.preventDefault();
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    console.log(this.options, this.area)
    return (
      <Host>
        <div class={this.classes}>
          <img class="image" ref={(element) => (this.$image = element)} src={this.src} />
        </div>
      </Host>
    )
  }
}
