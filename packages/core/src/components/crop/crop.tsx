import { Component, Host, Prop, h } from '@stencil/core';
import Cropper from 'cropperjs';
// import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
// import { CropData, CropDragMode, CropViewMode } from './crop.types';

// TODO: https://fengyuanchen.github.io/cropperjs/

// // Size limitation
// minCanvasWidth?: number = 0,
// minCanvasHeight?: number = 0,
// minCropBoxWidth?: number = 0,
// minCropBoxHeight?: number = 0,
// minContainerWidth?: number = MIN_CONTAINER_WIDTH,
// minContainerHeight?: number = MIN_CONTAINER_HEIGHT,

// // Shortcuts of events
// ready?: (event: ReadyEvent<T>): void = null,
// cropstart?(event: CropStartEvent<T>): void = null;
// cropmove?(event: CropMoveEvent<T>): void = null;
// cropend?(event: CropEndEvent<T>): void = null;
// crop?(event: CropEvent<T>): void = null,
// zoom?(event: ZoomEvent<T>): void = null;

/**
 * TODO
 * @development
 * @examples default
 */
@Component({
  tag: 'plus-crop',
  styleUrl: 'crop.scss',
  shadow: true
})
export class Crop {

  /**
   * TODO
   */
  @Prop()
  aspectRatio?: string | number;

  /**
   * TODO
   */
  // @Prop()
  // autoCrop?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // autoCropArea?: number = 0.8;

  /**
   * TODO
   */
  @Prop()
  background?: boolean;

  /**
   * TODO
   */
  // @Prop()
  // checkCrossOrigin?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // checkOrientation?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // center?: boolean = true;

  /**
   * TODO
   */
  @Prop()
  circle?: boolean;

  /**
   * TODO
   */
  // @Prop()
  // cropBoxMovable?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // cropBoxResizable?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // data?: CropData;

  /**
   * TODO
   */
  // @Prop()
  // dragMode?: CropDragMode = 'crop';

  /**
   * TODO
   */
  // @Prop()
  // guides?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // height?: number;

  /**
   * TODO
   */
  // @Prop()
  // highlight?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // initialAspectRatio?: number;

  /**
   * TODO
   */
  // @Prop()
  // modal?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // movable?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // preview?: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | string;

  /**
   * TODO
   */
  // @Prop()
  // responsive?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // restore?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // rotatable?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // scalable?: boolean = true;

  /**
   * TODO
   */
  @Prop()
  src?: string;

  /**
   * TODO
   */
  // @Prop()
  // toggleDragModeOnDblclick?: boolean = true;

  /**
   * TODO
   */
  // @Prop()
  // viewMode?: CropViewMode = 0;

  /**
   * TODO
   */
  // @Prop()
  // wheelZoomRatio?: number = 0.1;

  /**
   * TODO
   */
  // @Prop()
  // width?: number;

  /**
   * TODO
   */
  @Prop()
  zoomable?: boolean | 'touch' | 'wheel' = true;

  @GlobalConfig('crop')
  config?;

  $image!: HTMLImageElement;

  instance?: Cropper;

  get options() {
    console.log(11111111111, this.zoomable)

    // const boolean = (value) => `${value}` === 'true' || `${value}` === '';

    const aspectRatio = (() => {

      if (typeof this.aspectRatio === 'undefined') return;

      if (typeof this.aspectRatio === 'string') {

        const [valueA, valueB] = this.aspectRatio.split('/').map((item) => parseFloat(item));

        const value = valueA / (valueB || 1);

        return value;
      }

      return this.aspectRatio;
    })();

    // const zoomable = (() => {

    //   const value = `${this.zoomable}`;

    //   if (value === 'touch' || value === 'wheel') return value;

    //   if (value === 'touch' || value === 'wheel') return true;

    //   return boolean(this.zoomable);
    // })();

    return {
      aspectRatio,
      background: !!this.background,
      zoomable: !!this.zoomable,
      zoomOnTouch: this.zoomable === true || this.zoomable === 'touch',
      zoomOnWheel: this.zoomable === true || this.zoomable === 'wheel',
      // dragMode: this.dragMode,
      // viewMode: this.viewMode,
      cropBoxMovable: false,
      movable: true
    }
  }

  componentDidLoad() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    console.log(this.options)

    this.instance?.destroy();

    this.instance = new Cropper(this.$image, this.options);
  }

  disconnectedCallback() {
    this.instance?.destroy();
  }

  render() {
    return (
      <Host>
        <div class={`wrapper${this.circle ? ' circle' : ''}`}>
          <img class="image" ref={(element) => (this.$image = element)} src={this.src} />
        </div>
      </Host>
    )
  }
}
