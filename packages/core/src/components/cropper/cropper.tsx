import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import CropperCore from 'cropperjs';
import * as Utils from '@app/utils';
import { Bind, GlobalConfig } from '@app/services';
import {
  CropperAspectRatio,
  CropperData,
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
  data?: CropperData;

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
  plusCrop!: EventEmitter<CropperData>;

  /**
   * This event fires when a cropper instance starts to zoom in or zoom out its canvas (image wrapper).
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusZoom!: EventEmitter<CropperZoomData>;

  @GlobalConfig('crop', {

  })
  config?;

  @Element()
  $host!: HTMLElement;

  $image!: HTMLImageElement;

  instance?: CropperCore;

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
      data: this.data,
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
   * Events handler
   */

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

  componentDidUpdate() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host>
        <div class={this.classes}>
          <img class="image" ref={(element) => (this.$image = element)} src={this.src} />
        </div>
      </Host>
    )
  }
}
