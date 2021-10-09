import { Bind, Classes, Component, Event, EventEmitter, GlobalConfig, Host, Method, Property, Watch } from '@app/decorators';
import CropperCore from 'cropperjs';
import {
  CropperAspectRatio,
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
 */
@Component()
export class Cropper {

  /**
   * A number between 0 and 1. Define the automatic cropping area size.
   */
  @Property()
  area?: number = 0.75;

  /**
   * Defines the initial aspect ratio of the viewport.
   */
  @Property()
  aspectRatio?: CropperAspectRatio;

  /**
   * Shows the black modal above the image and under the viewport.
   */
  @Property()
  backdrop?: boolean = true;

  /**
   * Shows the grid background of the container.
   */
  @Property()
  background?: boolean;

  /**
   * Disables the cropper.
   */
  @Property()
  disabled?: boolean;

  /**
   * Shows the dashed lines above the viewport.
   */
  @Property()
  guides?: boolean;

  /**
   * Shows the center indicator above the viewport.
   */
  @Property()
  indicator?: boolean;

  /**
   * Defines the cropping mode of the cropper.
   * @value crop - Creates a new viewport and allows you to move and resize it.
   * @value move - moves the canvas and viewport.
   */
  @Property()
  mode?: CropperMode = 'move';

  /**
   * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
   * @value main - Enables to resize the viewport by dragging on the Sides.
   * @value edge - Enables to resize the viewport by dragging on the vertices.
   * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
   */
  @Property()
  resizer?: CropperResizer = 'both';

  /**
   * Specifies the shape of the resizer.
   */
  @Property()
  resizerShape?: CropperResizerShape = 'square';

  /**
   * Re-renders the cropper when resizing the window.
   * @value reset - Restores the cropped area after resizing the window.
   */
  @Property()
  responsive?: CropperResponsive = 'reset';

  /**
   * Specifies the shape of the viewport.
   */
  @Property()
  shape?: CropperShape = 'rectangle';

  /**
   * Replace the image's src and rebuild the cropper.
   */
  @Property()
  src?: string;

  /**
   * The previous cropped data if you had stored, will be passed to value automatically when initialized. 
   */
  @Property({ mutable: true })
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
  @Property()
  view?: CropperView = 'cover';

  /**
   * Enables to zoom the image.
   * @value false - Unable to zoom the image.
   * @value true  - Enables to zoom the image by touching and wheeling mouse.
   * @value touch - Enables to zoom the image by touching.
   * @value wheel - Enables to zoom the image by wheeling mouse.
   * @
   */
  @Property()
  zoomable?: CropperZoomable = true;

  /**
   * Defines zoom ratio when zooming the image by wheeling mouse.
   */
  @Property()
  zoomRatio?: number = 0.1;

  /**
   * This event fires when the target image has been loaded and the cropper instance is ready for operating.
   */
  @Event()
  plusReady!: EventEmitter<void>;

  /**
   * This event fires when the canvas or the viewport changed.
   */
  @Event()
  plusCrop!: EventEmitter<void>;

  /**
   * This event fires when a cropper instance starts to zoom in or zoom out its canvas.
   */
  @Event({ cancelable: true })
  plusZoom!: EventEmitter<CropperZoomData>;

  @GlobalConfig('cropper', {
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

  @Host()
  $host!: HTMLElement;

  $image!: HTMLImageElement;

  instance?: CropperCore;

  lock: boolean = false;

  @Classes(true)
  get classes() {
    return [
      'wrapper',
      {
        resizer: this.resizer,
        resizerShape: this.resizerShape,
        shape: this.shape,
      }
    ]
  }

  get options() {

    const aspectRatio = (() => {

      if (typeof this.aspectRatio === 'number') return this.aspectRatio;

      let [valueA, valueB] = `${this.aspectRatio}`
        .split('/')
        .map((item: any) => isNaN(item) ? NaN : parseFloat(item));

      if (valueB === undefined) valueB = 1;

      if (!isNaN(valueA + valueB)) return valueA / valueB;

      return NaN;
    })();

    const responsive = (() => {

      if (this.responsive === 'reset') return this.responsive;

      return this.responsive;
    })();

    const view = (() => ({ none: 0, fit: 1, contain: 2, cover: 3 })[this.view] as any)();

    const zoomable = (() => {

      const value = `${this.zoomable}`;

      if (['touch', 'wheel'].includes(value)) return value;

      return this.zoomable;
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
      background: this.background,
      center: this.indicator,
      cropBoxMovable: this.mode === 'crop',
      cropBoxResizable: this.mode === 'crop',
      data: this.value,
      dragMode: this.mode,
      guides: this.guides,
      highlight: false,
      initialAspectRatio: NaN,
      minContainerWidth: 0,
      minContainerHeight: 0,
      modal: this.backdrop,
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
  flipX(): void {
    this.instance?.scale(-1, 1);
  }

  /**
   * Flip vertical.
   */
  @Method()
  flipY(): void {
    this.instance?.scale(1, -1);
  }

  /**
   * Move the canvas with relative offsets.
   * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
   * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
   */
  @Method()
  move(offsetX?: number, offsetY?: number): void {
    this.instance?.move(offsetX ?? null, offsetY ?? null);
  }

  /**
   * Move the canvas to an absolute point.
   * @param x - The `left` value of the canvas. Use `null` to ignore this.
   * @param y - The `top` value of the canvas. Use `null` to ignore this.
   */
  @Method()
  moveTo(x?: number, y?: number): void {
    this.instance?.moveTo(x ?? null, y ?? null);
  }

  /**
   * Reset the image and viewport to their initial states.
   */
  @Method()
  reset(): void {
    this.instance?.reset();
  }

  /**
   * Rotate the image with a relative degree.
   */
  @Method()
  rotate(degree: number): void {
    this.instance?.rotate(degree);
  }

  /**
   * Rotate the image to an absolute degree.
   */
  @Method()
  rotateTo(degree: number): void {
    this.instance?.rotateTo(degree);
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
  toCanvas(): HTMLCanvasElement {
    return this.instance.getCroppedCanvas();
  }

  /**
   * Gets `base64` from the cropped image.
   */
  @Method()
  toBase64(): string {
    return this.instance.getCroppedCanvas().toDataURL();
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
  zoom(ratio: number): void {
    this.instance?.zoom(ratio);
  }

  /**
   * Zoom the canvas to an absolute ratio.
   */
  @Method()
  zoomTo(ratio: number): void {
    this.instance?.zoomTo(ratio);
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

  @Watch(
    'aspectRatio',
    'disabled',
    'src',
    'value',
    'resizer',
    'resizerShape',
    'shape',
    'backdrop',
    'background',
    'guides',
    'indicator',
    'mode',
    'responsive',
    'view',
    'zoomable',
    'zoomRatio',
  )
  watcher(next, prev, name) {

    if (this.lock) return;

    switch (name) {

      case 'aspectRatio':
        if (this.shape !== 'rectangle') break;
        this.instance?.setAspectRatio(next);
        break;

      case 'disabled':
        next ? this.instance?.disable() : this.instance?.enable();
        break;

      case 'src':
        this.instance?.replace(this.src, false);
        break;

      case 'value':
        this.updateValue(next);
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

  @Bind()
  onCrop() {

    this.updateValue();

    this.plusCrop();
  }

  @Bind()
  onReady() {

    // TODO
    this.value && this.updateValue(this.value);

    this.disabled && this.instance?.disable();

    this.plusReady();
  }

  @Bind()
  onZoom(event) {

    const difference = event.detail.ratio - event.detail.oldRatio;

    const direction = difference > 0 ? 'in' : 'out';

    const detail: CropperZoomData = {
      difference,
      direction,
      ratio: event.detail.ratio
    };

    const result = this.plusZoom(detail);

    if (!result.defaultPrevented) return this.onCrop();

    event.preventDefault();
  }

  /**
   * Lifecycles
   */

  // TODO: convert 'componentDidLoad' to 'connectedCallback'
  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <div class={this.classes}>
        <img class="image" alt="cropper" ref={this.$image} src={this.src} />
      </div>
    )
  }
}
