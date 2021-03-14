import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import CropperCore from 'cropperjs';
import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
import { CropperAspectRatio, CropperData, CropperZoomable,/*, CropDragMode, CropViewMode*/ } from './cropper.types';

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
  data?: CropperData;

  /**
   * TODO
   */
  @Prop()
  dim?: boolean = true;

  /**
   * Show the dashed lines above the crop box.
   */
  @Prop()
  guides?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // height?: number;

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
   * TODO
   */
  // @Prop()
  // width?: number;

  /**
   * TODO
   * @value false - TODO1
   * @value true  - TODO2
   * @value touch - TODO3
   * @value wheel - TODO4
   * @
   */
  @Prop()
  zoomable?: CropperZoomable = true;

  /**
   * TODO: only on wheel
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

  // Size limitation
  // minCanvasWidth?: number = 0,
  // minCanvasHeight?: number = 0,
  // minCropBoxWidth?: number = 0,
  // minCropBoxHeight?: number = 0,
  // minContainerWidth?: number = MIN_CONTAINER_WIDTH,
  // minContainerHeight?: number = MIN_CONTAINER_HEIGHT,

  @GlobalConfig('crop', {
    background: true,
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
      // preview: document.querySelector('.p'),

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
      modal: Utils.toBoolean(this.dim),
      movable: true,
      // preview: '',
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
      crop: (event) => this.plusCrop.emit(event.detail),
      ready: () => this.plusReady.emit(),
      // cropstart: (e) => console.log('cropstart', e),
      // cropmove: (e) => console.log('cropmove', e),
      // cropend: (e) => console.log('cropend', e),
      // zoom: (e) => console.log('zoom', e),
    }
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
