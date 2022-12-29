import { Bind, Element, Event, EventEmitter, Method, Property, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
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
  CropperZoomData
} from './cropper.types';

@Element()
export class Cropper {
  /**
   * A number between 0 and 1. Specifies the automatic cropping area size.
   */
  @Property()
  area?: number = 0.75;

  /**
   * Specifies the initial aspect ratio of the viewport.
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
   * Disables the component's functionality.
   */
  @Property({ reflect: true })
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
   * Specifies the cropping mode of the cropper.
   */
  @Property()
  mode?: CropperMode = 'move';

  /**
   * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
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
   */
  @Property()
  responsive?: CropperResponsive = 'reset';

  /**
   * Specifies the shape of the viewport.
   */
  @Property()
  shape?: CropperShape = 'rectangle';

  /**
   * Specifies the image's src.
   */
  @Property()
  src?: string;

  /**
   * Gets/Sets the cropper data.
   */
  @Property()
  value?: CropperValue;

  /**
   * Defines the view mode of the cropper.
   */
  @Property()
  view?: CropperView = 'cover';

  /**
   * Enables to zoom the image.
   */
  @Property()
  zoomable?: CropperZoomable = true;

  /**
   * Specifies zoom ratio when zooming the image by wheeling the mouse.
   */
  @Property()
  zoomRatio?: number = 0.1;

  /**
   * Fires when the target image has been loaded and the cropper is ready for operating.
   */
  @Event()
  plusReady!: EventEmitter<void>;

  /**
   * Fires when the canvas or the viewport is changed.
   */
  @Event()
  plusCrop!: EventEmitter<void>;

  /**
   * Fires when the cropper starts to `zoom in` or `zoom out` its canvas.
   */
  @Event({ cancelable: true })
  plusZoom!: EventEmitter<CropperZoomData>;

  $image!: HTMLImageElement;

  instance?: CropperCore;

  lock: boolean = false;

  get classes() {
    return Helpers.classes(
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
      if (typeof this.aspectRatio == 'number') return this.aspectRatio;

      let [valueA, valueB] = `${this.aspectRatio}`
        .split('/')
        .map((item: any) => (isNaN(item) ? NaN : parseFloat(item)));

      if (valueB === undefined) valueB = 1;

      if (!isNaN(valueA + valueB)) return valueA / valueB;

      return NaN;
    })();

    const view = (() => {
      return ({ none: 0, fit: 1, contain: 2, cover: 3 })[this.view] as any
    })();

    const zoomable = (() => {
      const value = `${this.zoomable}`;
      if (['touch', 'wheel'].includes(value)) return value;
      return this.zoomable;
    })();

    return {
      aspectRatio: this.shape == 'rectangle' ? aspectRatio : 1,
      autoCrop: true,
      autoCropArea: this.area,
      background: this.background,
      center: this.indicator,
      checkCrossOrigin: true,
      checkOrientation: true,
      cropBoxMovable: this.mode == 'crop',
      cropBoxResizable: this.mode == 'crop',
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
      modal: this.backdrop,
      movable: true,
      preview: '',
      responsive: !!this.responsive,
      restore: this.responsive == 'reset',
      rotatable: true,
      scalable: true,
      toggleDragModeOnDblclick: false,
      viewMode: view,
      wheelZoomRatio: this.zoomRatio,
      zoomable: !!zoomable,
      zoomOnTouch: zoomable == true || zoomable == 'touch',
      zoomOnWheel: zoomable == true || zoomable == 'wheel',
      crop: null,
      cropend: this.onCrop,
      cropmove: null,
      cropstart: null,
      ready: this.onReady,
      zoom: this.onZoom,
    };
  }

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
    this.instance.zoomTo(ratio/*, TODO */);
  }

  bind() {
    this.instance = new CropperCore(this.$image, this.options);
  }

  unbind() {
    this.instance.destroy();
  }

  rebind() {
    this.unbind();
    this.bind();
  }

  updateValue(value?) {
    if (!this.instance) return;

    const { height, width } = this.instance.getContainerData();

    if (value) {
      const toPixel = (a, b) => (a * b) / 100;

      // TODO this.instance.rotateTo(value.rotate);

      this.instance
        .setCropBoxData({
          top: toPixel(value.top, height),
          left: toPixel(value.left, width),
          width: toPixel(100 - value.right - value.left, width),
          height: toPixel(100 - value.top - value.bottom, height)
        })
        .setCanvasData({
          top: toPixel(value.y, height),
          left: toPixel(value.x, width),
          width: toPixel(value.width, width),
          height: toPixel(value.height, height)
        });

      return;
    }

    const canvas = this.instance.getCanvasData();

    // TODO
    // const data = this.instance.getData();

    const viewport = this.instance.getCropBoxData();

    const toPercent = (a, b) => parseFloat(((a / b) * 100).toFixed(2));

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
      y: toPercent(canvas.top, height)
    };

    this.lock = false;
  }

  @Watch()
  watcher(next, prev, name) {
    if (this.lock) return;

    switch (name) {
      case 'aspectRatio':
      case 'shape':
        this.instance.setAspectRatio(this.options.aspectRatio);
        break;

      case 'disabled':
        next ? this.instance.disable() : this.instance.enable();
        break;

      case 'src':
        this.instance.replace(this.src, false /* TODO */);
        break;

      case 'value':
        this.updateValue(next);
        break;

      case 'area':
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

  @Bind()
  onCrop() {
    // this.updateValue();
    this.plusCrop();
  }

  @Bind()
  onReady() {
    // TODO
    this.value && this.updateValue(this.value);

    if (this.disabled) {
      this.instance.disable();
    }
    this.plusReady();
  }

  @Bind()
  onZoom(event) {
    const difference = event.detail.ratio - event.detail.oldRatio;

    const direction = difference > 0 ? 'IN' : 'OUT';

    const detail: CropperZoomData = {
      difference,
      direction,
      ratio: event.detail.ratio
    };

    const { defaultPrevented } = this.plusZoom(detail);

    if (!defaultPrevented) return this.onCrop();

    event.preventDefault();
  }

  loadedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <div className={this.classes}>
        <img 
          className="image" 
          alt="cropper" 
          ref={($element) => this.$image = $element} 
          src={this.src} 
        />
      </div>
    )
  }
}
