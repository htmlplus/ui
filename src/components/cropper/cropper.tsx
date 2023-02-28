import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Watch,
  classes
} from '@htmlplus/element';

import type CoreType from 'cropperjs';

import {
  CropperCropEvent,
  CropperAspectRatio,
  CropperValue,
  CropperMode,
  CropperPointerEvent,
  CropperResizer,
  CropperResizerShape,
  CropperResponsive,
  CropperShape,
  CropperView,
  CropperZoomable,
  CropperZoomEvent
} from './cropper.types';

let Core;

/**
 * @stable
 */
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
   * Disables the component functionality.
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
   * Specifies the mode.
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
   * Re-renders when resizing the window.
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
   * Gets/Sets data.
   */
  @Property()
  value?: CropperValue;

  /**
   * Specifies the view.
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
   * Fires when the `image` or the `viewport` is changed.
   */
  @Event()
  plusCrop!: EventEmitter<CropperCropEvent>;

  /**
   * Fires when the `image` or the `viewport` changes are finished.
   */
  @Event()
  plusCropEnd!: EventEmitter<CropperPointerEvent>;

  /**
   * Fires when the `image` or the `viewport` is changing.
   */
  @Event()
  plusCropMove!: EventEmitter<CropperPointerEvent>;

  /**
   * Fires when the `image` or the `viewport` starts to change.
   */
  @Event()
  plusCropStart!: EventEmitter<CropperPointerEvent>;

  /**
   * Fires when the image has been loaded and the component is ready for operation.
   */
  @Event()
  plusReady!: EventEmitter<void>;

  /**
   * Fires when the component starts to `zoom in` or `zoom out`.
   */
  @Event({ cancelable: true })
  plusZoom!: EventEmitter<CropperZoomEvent>;

  $image!: HTMLImageElement;

  instance?: CoreType;

  locked?: boolean;

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
      if (this.shape != 'rectangle') return 1;

      if (typeof this.aspectRatio == 'number') return this.aspectRatio;

      let [valueA, valueB] = `${this.aspectRatio}`
        .split('/')
        .map((item: any) => (isNaN(item) ? NaN : parseFloat(item)));

      if (valueB === undefined) valueB = 1;

      if (!isNaN(valueA + valueB)) return valueA / valueB;

      return NaN;
    })();

    const view = (() => {
      return { none: 0, fit: 1, contain: 2, cover: 3 }[this.view] as any;
    })();

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
      crop: this.onCrop,
      cropend: this.onCropEnd,
      cropmove: this.onCropMove,
      cropstart: this.onCropStart,
      ready: this.onReady,
      zoom: this.onZoom
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
    this.instance.zoomTo(ratio /*, TODO */);
  }

  bind() {
    this.instance = new Core(this.$image, this.options);
  }

  unbind() {
    // TODO: has a problem in documentation
    this.instance?.destroy();
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

  @Watch()
  watcher(next, prev, name) {
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
        this.unbind();
        this.bind();
        break;

      case 'src':
        this.instance.replace(this.src, false /* TODO */);
        break;

      case 'value':
        this.sync(next);
        break;

      case 'area':
      case 'backdrop':
      case 'background':
      case 'guides':
      case 'indicator':
      case 'responsive':
      case 'view':
      case 'zoomable':
      case 'zoomRatio':
        this.unbind();
        this.bind();
        break;
    }
  }

  @Bind()
  onCrop() {
    this.sync();
    this.plusCrop(this.value as any);
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

    const detail: CropperZoomEvent = {
      difference,
      direction,
      event: event.detail.originalEvent,
      ratio: event.detail.ratio
    };

    const { defaultPrevented } = this.plusZoom(detail);

    if (!defaultPrevented) return;

    event.preventDefault();
  }

  loadedCallback() {
    import('cropperjs').then((moddule) => {
      Core = moddule.default;
      this.bind();
    });
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
          ref={($element) => (this.$image = $element)}
          src={this.src}
        />
      </div>
    );
  }
}
