import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
import CropperCore from 'cropperjs';
import * as Utils from '@app/utils';
import { Bind, GlobalConfig } from '@app/services';
import {
  CropperAspectRatio,
  CropperValue,
  CropperMode,
  CropperResizer,
  CropperResizerShape,
  CropperResponsive,
  CropperView,
  CropperViewport,
  CropperViewportMode,
  CropperZoomable,
  CropperZoomData,
} from './cropper.types';

/**
 * TODO https://foliotek.github.io/Croppie/
 * @development
 * @examples default
 */
@Component({
  tag: 'plus-cropper',
  styleUrl: 'cropper.scss',
  shadow: true
})
export class Cropper {

  /**
   * Define the fixed aspect ratio of the viewport. By default, the viewport is free ratio.
   */
  @Prop()
  aspectRatio?: CropperAspectRatio;

  /**
   * Show the black layer above the image and under the viewport.
   */
  @Prop()
  backdrop?: boolean = true;

  /**
   * Show the grid background of the container.
   */
  @Prop()
  background?: boolean;

  /**
   * The minimum height of the canvas (image wrapper).
   */
  // @Prop()
  canvasMinHeight?: number;

  /**
   * The minimum width of the canvas (image wrapper).
   */
  // @Prop()
  canvasMinWidth?: number;

  /**
   * TODO
   */
  @Prop()
  disabled?: boolean;

  /**
   * Show the dashed lines above the viewport.
   */
  @Prop()
  guides?: boolean;

  /**
   * Show the center indicator above the viewport.
   */
  @Prop()
  indicator?: boolean;

  /**
   * Define the dragging mode of the cropper.
   * @value crop - create a new viewport.
   * @value move - move the canvas.
   * @value none - do nothing.
   */
  @Prop()
  mode?: CropperMode = 'move';

  /**
   * TODO
   */
  @Prop()
  resizer?: CropperResizer = 'both';

  /**
   * TODO
   */
  @Prop()
  resizerShape?: CropperResizerShape = 'rect';

  /**
   * Re-render the cropper when resizing the window.
   */
  @Prop()
  responsive?: CropperResponsive = 'reset';

  /**
   * Image source.
   */
  @Prop()
  src?: string;

  /**
   * TODO
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
   * TODO
   */
  @Prop()
  viewport?: CropperViewport = 'rect';

  /**
   * TODO
   */
  @Prop()
  viewportMode?: CropperViewportMode = 'static';

  /**
   * The minimum height of the viewport. This size is relative to the page, not the image.
   */
  // @Prop()
  viewportMinHeight?: number;

  /**
   * The minimum width of the viewport. This size is relative to the page, not the image.
   */
  // @Prop()
  viewportMinWidth?: number;

  /**
   * Enable to zoom the image.
   * @value false - Disable zoom.
   * @value true  - Enable to zoom the image by dragging touch and wheeling mouse.
   * @value touch - Enable to zoom the image by dragging touch.
   * @value wheel - Enable to zoom the image by wheeling mouse.
   * @
   */
  @Prop()
  zoomable?: CropperZoomable = true;

  /**
   * Define zoom ratio when zooming the image by wheeling mouse.
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
   * This event fires when the canvas (image wrapper) or the viewport changed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusCrop!: EventEmitter<void>;

  /**
   * This event fires when a cropper instance starts to zoom in or zoom out its canvas (image wrapper).
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusZoom!: EventEmitter<CropperZoomData>;

  /**
   * Move the canvas (image wrapper) with relative offsets.
   * @param offsetX - Moving size (px) in the `horizontal` direction.
   * @param offsetY - Moving size (px) in the `vertical` direction.
   */
  @Method()
  move(offsetX?: number, offsetY?: number): Promise<void> {
    this.instance?.move(offsetX ?? null, offsetY ?? null);
    return Promise.resolve();
  }

  /**
   * Move the canvas (image wrapper) to an absolute point.
   * @param x - The `left` value of the canvas.
   * @param y - The `top` value of the canvas.
   */
  @Method()
  moveTo(x?: number, y?: number): Promise<void> {
    this.instance?.moveTo(x ?? null, y ?? null);
    return Promise.resolve();
  }

  /**
   * The method creates a Blob object representing the image contained in the canvas; this file 
   * may be cached on the disk or stored in memory at the discretion of the user agent. If type 
   * is not specified, the image type is image/png. The created image is in a resolution of 96dpi.
   * @param type    - A string indicating the image format. The default type is `image/png`.
   * @param quality - A Number between `0` and `1` indicating image quality if the requested 
   *                  type is `image/jpeg` or `image/webp`. If this argument is anything else, 
   *                  the default values `0.92` and `0.80` are used for `image/jpeg` and 
   *                  `image/webp` respectively. Other arguments are ignored.
   * @returns A callback function with the resulting Blob object as a single argument.
   */
  @Method()
  toBlob(type?: string, quality?: number): Promise<Blob> {
    return new Promise((resolve) => {
      this.instance
        .getCroppedCanvas()
        .toBlob(
          (blob) => resolve(blob),
          type,
          quality
        )
    })
  }

  // no need
  // getData(rounded?: boolean): Cropper.Data;
  // setData(data: Cropper.SetDataOptions): Cropper;

  // backlog
  // clear(): Cropper;
  // crop(): Cropper;
  // destroy(): Cropper;
  // disable(): Cropper;
  // enable(): Cropper;
  // getCanvasData(): Cropper.CanvasData;
  // getContainerData(): Cropper.ContainerData;
  // getCropBoxData(): Cropper.CropBoxData;
  // getCroppedCanvas(options?: Cropper.GetCroppedCanvasOptions): HTMLCanvasElement;
  // getImageData(): Cropper.ImageData;
  // replace(url: string, onlyColorChanged?: boolean): Cropper;
  // reset(): Cropper;
  // rotate(degree: number): Cropper;
  // rotateTo(degree: number): Cropper;
  // scale(scaleX: number, scaleY?: number): Cropper;
  // scaleX(scaleX: number): Cropper;
  // scaleY(scaleY: number): Cropper;
  // setAspectRatio(aspectRatio: number): Cropper;
  // setCanvasData(data: Cropper.SetCanvasDataOptions): Cropper;
  // setCropBoxData(data: Cropper.SetCropBoxDataOptions): Cropper;
  // setDragMode(dragMode: Cropper.DragMode): Cropper;
  // zoom(ratio: number): Cropper;
  // zoomTo(ratio: number, pivot?: { x: number; y: number }): Cropper;

  @GlobalConfig('crop', {
    // TODO
  })
  config?;

  @Element()
  $host!: HTMLElement;

  $image!: HTMLImageElement;

  instance?: CropperCore;

  // TODO
  lock: boolean = false;

  get classes() {
    return Utils.classes(
      'wrapper',
      {
        viewport: this.viewport,
        resizer: this.resizer,
        resizerShape: this.resizerShape
      }
    )
  }

  get options() {

    const aspectRatio = (() => {

      if (typeof this.aspectRatio === 'undefined') return;

      if (typeof this.aspectRatio === 'string') {

        const [valueA, valueB] = this.aspectRatio.split('/').map((item) => parseFloat(item));

        const value = valueA / (valueB || 1);

        return value;
      }

      return this.aspectRatio;
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
      aspectRatio: Utils.toBoolean(this.viewport === 'round') ? 1 : aspectRatio,
      // autoCrop: true,
      // autoCropArea: this.autoCropArea,
      background: Utils.toBoolean(this.background),
      center: Utils.toBoolean(this.indicator),
      // checkCrossOrigin: false, // TODO
      // checkOrientation: true,
      cropBoxMovable: this.viewportMode === 'movable' || this.viewportMode === 'both',// TODO
      cropBoxResizable: this.viewportMode === 'resizable' || this.viewportMode === 'both',// TODO
      data: this.value,
      dragMode: this.mode,
      guides: Utils.toBoolean(this.guides),
      highlight: false,
      initialAspectRatio: NaN,
      minCanvasWidth: this.canvasMinWidth,
      minCanvasHeight: this.canvasMinHeight,
      minCropBoxWidth: this.viewportMinWidth,
      minCropBoxHeight: this.viewportMinHeight,
      minContainerWidth: 0,
      minContainerHeight: 0,
      modal: Utils.toBoolean(this.backdrop),
      movable: true, // TODO: make auto
      // preview: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | string,
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
      crop: this.onCrop,
      ready: this.onReady,
      // cropstart: (e) => console.log('cropstart', e),
      // cropmove: (e) => console.log('cropmove', e),
      // cropend: (e) => console.log('cropend', e),
      zoom: this.onZoom
    }
  }

  /**
   * Internal Methods
   */

  bind() {
    this.unbind();
    this.instance = new CropperCore(this.$image, this.options);
  }

  unbind() {
    this.instance?.destroy();
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev || this.lock) return;

    const value = this[name];

    switch (name) {

      case 'value':
        this.instance?.setData(value);
        break;
    }
  }

  /**
   * Events handler
   */

  @Bind
  onCrop(event) {

    this.lock = true;

    this.value = event.detail;

    this.lock = false;

    this.plusCrop.emit();
  }

  @Bind
  onReady() {
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

    if (!result.defaultPrevented) return;

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
    console.log(this.instance)
    return (
      <Host>
        <div class={this.classes}>
          <img class="image" ref={(element) => (this.$image = element)} src={this.src} />
        </div>
      </Host>
    )
  }
}
