import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import CropperCore from 'cropperjs';
import * as Utils from '@app/utils';
import { Bind, GlobalConfig } from '@app/services';
import { CropperAspectRatio, CropperData, CropperZoomable, CrroperZoomData/*, CropDragMode, CropViewMode*/ } from './cropper.types';

/**
 * TODO
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
   * Define the fixed aspect ratio of the crop box. By default, the crop box is free ratio.
   */
  @Prop()
  aspectRatio?: CropperAspectRatio;

  /**
   * Show the grid background of the container.
   */
  @Prop()
  background?: boolean = true;

  /**
   * TODO
   */
  @Prop()
  canvasMinHeight?: number;

  /**
   * TODO
   */
  @Prop()
  canvasMinWidth?: number;

  /**
   * TODO
   */
  @Prop()
  containerMinHeight?: number = 100;

  /**
   * TODO
   */
  @Prop()
  containerMinWidth?: number = 200;
  /**
   * TODO
   */
  @Prop()
  cropBoxMinHeight?: number;

  /**
   * TODO
   */
  @Prop()
  cropBoxMinWidth?: number;

  /**
   * TODO
   */
  @Prop()
  data?: CropperData;

  /**
   * TODO
   */
  @Prop()
  dim?: boolean = true;

  /**
   * TODO
   */
  @Prop()
  disabled?: boolean;

  /**
   * Show the dashed lines above the crop box.
   */
  @Prop()
  guides?: boolean = true;

  /**
   * Re-render the cropper when resizing the window.
   */
  @Prop()
  responsive?: boolean = true;

  /**
   * TODO
   */
  @Prop()
  rounded?: boolean;

  /**
   * Reset the cropped area after resizing the window.
   */
  @Prop()
  reset?: boolean;

  /**
   * Image source.
   */
  @Prop()
  src?: string;

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
   * This event fires when the canvas (image wrapper) or the crop box changed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusCrop!: EventEmitter<CropperData>;

  /**
   * This event fires when a cropper instance starts to zoom in or zoom out its canvas (image wrapper).
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusZoom!: EventEmitter<CrroperZoomData>;

  @GlobalConfig('crop', {
    background: true,
    containerMinHeight: 100,
    containerMinWidth: 200,
    dim: true,
    guides: true,
    responsive: true,
    zoomable: true,
    zoomRatio: 0.1,
  })
  config?;

  $image!: HTMLImageElement;

  instance?: CropperCore;

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

    const zoomable = (() => {

      const value = `${this.zoomable}`;

      if (['touch', 'wheel'].includes(value)) return value;

      return Utils.toBoolean(this.zoomable);
    })();

    return {
      aspectRatio: Utils.toBoolean(this.rounded) ? 1 : aspectRatio,
      // autoCrop: true,
      // autoCropArea: this.autoCropArea,
      background: Utils.toBoolean(this.background),
      // center: true,
      // checkCrossOrigin: true,
      // checkOrientation: true,
      // cropBoxMovable: true;
      // cropBoxResizable: true;
      data: this.data,
      // dragMode: 'crop';
      guides: Utils.toBoolean(this.guides),
      highlight: false,
      initialAspectRatio: NaN,
      minCanvasWidth: this.canvasMinWidth,
      minCanvasHeight: this.canvasMinHeight,
      minCropBoxWidth: this.cropBoxMinWidth,
      minCropBoxHeight: this.cropBoxMinHeight,
      minContainerWidth: this.containerMinWidth,
      minContainerHeight: this.containerMinHeight,
      modal: Utils.toBoolean(this.dim),
      movable: true,
      // preview: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | string,
      responsive: Utils.toBoolean(this.responsive),
      restore: Utils.toBoolean(this.reset),
      rotatable: true,
      scalable: true,
      toggleDragModeOnDblclick: false,
      // viewMode: 0;
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

  @Bind
  onCrop(event) {
    this.plusCrop.emit(event.detail);
  }

  @Bind
  onReady() {
    this.plusReady.emit();
  }

  @Bind
  onZoom(event) {

    const difference = event.detail.ratio - event.detail.oldRatio;

    const direction = difference > 0 ? 'IN' : 'OUT';

    const detail: CrroperZoomData = {
      difference,
      direction,
      ratio: event.detail.ratio
    };

    const result = this.plusZoom.emit(detail);

    if (!result.defaultPrevented) return;

    event.preventDefault();
  }

  componentDidLoad() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {

    this.instance?.destroy();

    this.instance = new CropperCore(this.$image, this.options);
  }

  disconnectedCallback() {
    this.instance?.destroy();
  }

  render() {
    return (
      <Host>
        <div class={`wrapper ${this.rounded ? 'rounded' : ''}`}>
          <img class="image" ref={(element) => (this.$image = element)} src={this.src} />
        </div>
      </Host>
    )
  }
}
