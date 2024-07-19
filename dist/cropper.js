import { P as PlusCore, m as classes, h as html, a as Property, E as Event, M as Method, Q as Query, W as Watch, B as Bind, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ':host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n/*!\n * Cropper.js v1.6.2\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2024-04-21T07:43:02.731Z\n */\n\n.cropper-container {\n  -webkit-touch-callout: none;\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  backface-visibility: hidden;\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-canvas, .cropper-crop-box, .cropper-drag-box, .cropper-modal, .cropper-wrap-box {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-canvas, .cropper-wrap-box {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center:after, .cropper-center:before {\n  background-color: #eee;\n  content: " ";\n  display: block;\n  position: absolute;\n}\n\n.cropper-center:before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center:after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face, .cropper-line, .cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se:before {\n  background-color: #39f;\n  bottom: -50%;\n  content: " ";\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box, .cropper-disabled .cropper-face, .cropper-disabled .cropper-line, .cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n\n:host {\n  --plus-cropper-backdrop-color: black;\n  --plus-cropper-backdrop-opacity: 0.5;\n  --plus-cropper-guides-color: white;\n  --plus-cropper-guides-opacity: 0.5;\n  --plus-cropper-guides-style: dashed;\n  --plus-cropper-guides-weight: 1px;\n  --plus-cropper-indicator-color: white;\n  --plus-cropper-indicator-opacity: 1;\n  --plus-cropper-indicator-size: 10px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: white;\n  --plus-cropper-resizer-offset: 0px;\n  --plus-cropper-resizer-opacity: 1;\n  --plus-cropper-resizer-size: 5px;\n  --plus-cropper-resizer-weight: 1px;\n  --plus-cropper-viewport-color: white;\n  --plus-cropper-viewport-opacity: 1;\n  --plus-cropper-viewport-style: solid;\n  --plus-cropper-viewport-weight: 1px;\n}\n\n:host {\n  display: block;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.image {\n  display: block;\n  max-width: 100%;\n}\n\n.cropper-modal {\n  background-color: var(--plus-cropper-backdrop-color);\n  opacity: var(--plus-cropper-backdrop-opacity);\n}\n\n.cropper-line {\n  display: none;\n}\n\n.resizer-main .cropper-point.point-ne,\n.resizer-main .cropper-point.point-nw,\n.resizer-main .cropper-point.point-sw,\n.resizer-main .cropper-point.point-se {\n  display: none;\n}\n\n.resizer-edge .cropper-point.point-e,\n.resizer-edge .cropper-point.point-n,\n.resizer-edge .cropper-point.point-w,\n.resizer-edge .cropper-point.point-s {\n  display: none;\n}\n\n.shape-circle .cropper-face,\n.shape-circle .cropper-view-box,\n.shape-circle .cropper-view-box::after {\n  border-radius: 50%;\n}\n\n.shape-circle .cropper-dashed.dashed-h {\n  width: calc(92.5% - var(--plus-cropper-guides-weight));\n}\n\n.shape-circle .cropper-dashed.dashed-v {\n  height: calc(92.5% - var(--plus-cropper-guides-weight));\n}\n\n.shape-circle .cropper-point.point-ne {\n  top: 14.64466%;\n  right: 14.64466%;\n}\n\n.shape-circle .cropper-point.point-nw {\n  top: 14.64466%;\n  left: 14.64466%;\n}\n\n.shape-circle .cropper-point.point-sw {\n  bottom: 14.64466%;\n  left: 14.64466%;\n}\n\n.shape-circle .cropper-point.point-se {\n  right: 14.64466%;\n  bottom: 14.64466%;\n}\n\n.cropper-dashed {\n  border-color: var(--plus-cropper-guides-color);\n  border-style: var(--plus-cropper-guides-style);\n  opacity: var(--plus-cropper-guides-opacity);\n}\n\n.cropper-dashed.dashed-h {\n  left: 50%;\n  transform: translateX(-50%);\n  border-top-width: var(--plus-cropper-guides-weight);\n  border-bottom-width: var(--plus-cropper-guides-weight);\n}\n\n.cropper-dashed.dashed-v {\n  top: 50%;\n  transform: translateY(-50%);\n  border-left-width: var(--plus-cropper-guides-weight);\n  border-right-width: var(--plus-cropper-guides-weight);\n}\n\n.cropper-view-box {\n  outline: none;\n  position: relative;\n}\n\n.cropper-view-box::after {\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-style: var(--plus-cropper-viewport-style);\n  border-color: var(--plus-cropper-viewport-color);\n  border-width: var(--plus-cropper-viewport-weight);\n  opacity: var(--plus-cropper-viewport-opacity);\n}\n\n.cropper-point[class*=point-] {\n  --plus-cropper-resizer-offset-negative: calc((50% + var(--plus-cropper-resizer-offset)) * -1);\n  --plus-cropper-resizer-offset-positive: calc((50% + var(--plus-cropper-resizer-offset)) * +1);\n  margin: 0;\n  height: var(--plus-cropper-resizer-size);\n  width: var(--plus-cropper-resizer-size);\n  opacity: var(--plus-cropper-resizer-opacity);\n  background-color: var(--plus-cropper-resizer-color);\n}\n\n.cropper-point[class*=point-]:before {\n  content: none;\n}\n\n.cropper-point.point-e {\n  right: 0;\n  transform: translate(var(--plus-cropper-resizer-offset-positive), -50%);\n}\n\n.cropper-point.point-n {\n  top: 0;\n  transform: translate(-50%, var(--plus-cropper-resizer-offset-negative));\n}\n\n.cropper-point.point-w {\n  left: 0;\n  transform: translate(var(--plus-cropper-resizer-offset-negative), -50%);\n}\n\n.cropper-point.point-s {\n  bottom: 0;\n  transform: translate(-50%, var(--plus-cropper-resizer-offset-positive));\n}\n\n.cropper-point.point-ne {\n  top: 0;\n  right: 0;\n  transform: translate(var(--plus-cropper-resizer-offset-positive), var(--plus-cropper-resizer-offset-negative));\n}\n\n.cropper-point.point-nw {\n  top: 0;\n  left: 0;\n  transform: translate(var(--plus-cropper-resizer-offset-negative), var(--plus-cropper-resizer-offset-negative));\n}\n\n.cropper-point.point-sw {\n  bottom: 0;\n  left: 0;\n  transform: translate(var(--plus-cropper-resizer-offset-negative), var(--plus-cropper-resizer-offset-positive));\n}\n\n.cropper-point.point-se {\n  right: 0;\n  bottom: 0;\n  transform: translate(var(--plus-cropper-resizer-offset-positive), var(--plus-cropper-resizer-offset-positive));\n}\n\n.resizer-shape-circle .cropper-point[class*=point-] {\n  border-radius: 50%;\n}\n\n.cropper-center {\n  opacity: var(--plus-cropper-indicator-opacity);\n}\n\n.cropper-center:before {\n  background-color: var(--plus-cropper-indicator-color);\n  top: calc(var(--plus-cropper-indicator-weight) / 2 * -1);\n  left: calc(var(--plus-cropper-indicator-size) / 2 * -1);\n  height: var(--plus-cropper-indicator-weight);\n  width: var(--plus-cropper-indicator-size);\n}\n\n.cropper-center:after {\n  background-color: var(--plus-cropper-indicator-color);\n  top: calc(var(--plus-cropper-indicator-size) / 2 * -1);\n  left: calc(var(--plus-cropper-indicator-weight) / 2 * -1);\n  height: var(--plus-cropper-indicator-size);\n  width: var(--plus-cropper-indicator-weight);\n}\n\n.resizer-shape-line .cropper-point[class*=point-] {\n  background-color: transparent;\n  border-style: solid;\n  border-color: var(--plus-cropper-resizer-color);\n  border-width: var(--plus-cropper-resizer-weight);\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-e {\n  border-top: none;\n  border-bottom: none;\n  border-left: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-n {\n  border-right: none;\n  border-bottom: none;\n  border-left: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-w {\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-s {\n  border-top: none;\n  border-right: none;\n  border-left: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-ne {\n  border-bottom: none;\n  border-left: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-nw {\n  border-right: none;\n  border-bottom: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-sw {\n  border-top: none;\n  border-right: none;\n}\n\n.resizer-shape-line .cropper-point[class*=point-].point-se {\n  border-top: none;\n  border-left: none;\n}';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let CropperCore;
let Cropper = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.area = 0.75;
    this.mode = "move";
    this.resizer = "both";
    this.resizerShape = "square";
    this.responsive = "reset";
    this.shape = "rectangle";
    this.view = "cover";
    this.zoomable = true;
    this.zoomRatio = 0.1;
  }
  flipX() {
    this.instance.scale(-1, 1);
  }
  flipY() {
    this.instance.scale(1, -1);
  }
  move(offsetX, offsetY) {
    this.instance.move(offsetX ?? null, offsetY ?? null);
  }
  moveTo(x, y) {
    this.instance.moveTo(x ?? null, y ?? null);
  }
  reset() {
    this.instance.reset();
  }
  rotate(degree) {
    this.instance.rotate(degree);
  }
  rotateTo(degree) {
    this.instance.rotateTo(degree);
  }
  toCanvas() {
    return this.instance.getCroppedCanvas(
      /* TODO */
    );
  }
  zoom(ratio) {
    this.instance.zoom(ratio);
  }
  zoomTo(ratio) {
    this.instance.zoomTo(
      ratio
      /*, TODO */
    );
  }
  get classes() {
    return classes(["wrapper", {
      resizer: this.resizer,
      resizerShape: this.resizerShape,
      shape: this.shape
    }]);
  }
  get options() {
    const aspectRatio = (() => {
      if (this.shape != "rectangle") return 1;
      if (typeof this.aspectRatio == "number") return this.aspectRatio;
      let [valueA, valueB] = `${this.aspectRatio}`.split("/").map((item) => isNaN(item) ? NaN : parseFloat(item));
      if (valueB === void 0) valueB = 1;
      if (!isNaN(valueA + valueB)) return valueA / valueB;
      return NaN;
    })();
    const view = (() => {
      return {
        none: 0,
        fit: 1,
        contain: 2,
        cover: 3
      }[this.view];
    })();
    const zoomable = (() => {
      const value = `${this.zoomable}`;
      if (["touch", "wheel"].includes(value)) return value;
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
      cropBoxMovable: this.mode == "crop",
      cropBoxResizable: this.mode == "crop",
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
      preview: "",
      responsive: !!this.responsive,
      restore: this.responsive == "reset",
      rotatable: true,
      scalable: true,
      toggleDragModeOnDblclick: false,
      viewMode: view,
      wheelZoomRatio: this.zoomRatio,
      zoomable: !!zoomable,
      zoomOnTouch: zoomable == true || zoomable == "touch",
      zoomOnWheel: zoomable == true || zoomable == "wheel",
      crop: this.onCrop,
      cropend: this.onCropEnd,
      cropmove: this.onCropMove,
      cropstart: this.onCropStart,
      ready: this.onReady,
      zoom: this.onZoom
    };
  }
  watcher(next, prev, name) {
    if (this.locked) return;
    switch (name) {
      case "aspectRatio":
      case "shape":
        this.instance.setAspectRatio(this.options.aspectRatio);
        break;
      case "disabled":
        next ? this.instance.disable() : this.instance.enable();
        break;
      case "mode":
        this.terminate();
        this.initialize();
        break;
      case "src":
        this.instance.replace(
          this.src,
          false
          /* TODO */
        );
        break;
      case "value":
        this.sync(next);
        break;
      case "area":
      case "transparent":
      case "background":
      case "guides":
      case "indicator":
      case "responsive":
      case "view":
      case "zoomable":
      case "zoomRatio":
        this.terminate();
        this.initialize();
        break;
    }
  }
  initialize() {
    this.instance = new CropperCore(this.$image, this.options);
  }
  sync(value) {
    if (!this.instance) return;
    const from = (a, b) => a * b / 100;
    const to = (a, b) => a / b * 100;
    const image = this.instance.getCanvasData();
    const viewport = this.instance.getCropBoxData();
    if (value) {
      this.instance.rotateTo(value.rotate);
      const height = to(viewport.height, value.height);
      const width = to(viewport.width, value.width);
      const top = viewport.top + viewport.height / 2 - from(height, value.top + value.height / 2);
      const left = viewport.left + viewport.width / 2 - from(width, value.left + value.width / 2);
      this.instance.setCanvasData({
        top,
        left,
        width,
        height
      });
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
    requestAnimationFrame(() => {
      this.locked = false;
    });
  }
  terminate() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.destroy();
  }
  onCrop() {
    this.sync();
    this.plusCrop(this.value);
  }
  onCropEnd(event) {
    this.plusCropEnd({
      action: event.detail.action,
      event: event.detail.originalEvent
    });
  }
  onCropMove(event) {
    this.plusCropMove({
      action: event.detail.action,
      event: event.detail.originalEvent
    });
  }
  onCropStart(event) {
    this.plusCropStart({
      action: event.detail.action,
      event: event.detail.originalEvent
    });
  }
  onReady() {
    if (this.disabled) {
      this.instance.disable();
    }
    this.plusReady();
  }
  onZoom(event) {
    const difference = event.detail.ratio - event.detail.oldRatio;
    const direction = difference > 0 ? "IN" : "OUT";
    const detail = {
      difference,
      direction,
      event: event.detail.originalEvent,
      ratio: event.detail.ratio
    };
    const {
      defaultPrevented
    } = this.plusZoom(detail);
    if (!defaultPrevented) return;
    event.preventDefault();
  }
  connectedCallback() {
    return import("cropperjs").then((module) => {
      CropperCore = module.default;
    }).catch(() => {
      throw new Error("The `cropper` element depends on an external package, but it doesn't seem to be installed. Running `npm install cropperjs` will fix this problem.");
    });
  }
  loadedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`<div class=${this.classes}>
        <img class="image" alt="cropper" src=${this.src} />
      </div>`;
  }
};
Cropper.tag = "plus-cropper";
Cropper.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 64
  })
], Cropper.prototype, "area", 2);
__decorateClass([
  Property({
    type: 320
  })
], Cropper.prototype, "aspectRatio", 2);
__decorateClass([
  Property({
    type: 2
  })
], Cropper.prototype, "background", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Cropper.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 2
  })
], Cropper.prototype, "guides", 2);
__decorateClass([
  Property({
    type: 2
  })
], Cropper.prototype, "indicator", 2);
__decorateClass([
  Property({
    type: 8
  })
], Cropper.prototype, "mode", 2);
__decorateClass([
  Property({
    type: 8
  })
], Cropper.prototype, "resizer", 2);
__decorateClass([
  Property({
    type: 8
  })
], Cropper.prototype, "resizerShape", 2);
__decorateClass([
  Property({
    type: 10
  })
], Cropper.prototype, "responsive", 2);
__decorateClass([
  Property({
    type: 8
  })
], Cropper.prototype, "shape", 2);
__decorateClass([
  Property({
    type: 256
  })
], Cropper.prototype, "src", 2);
__decorateClass([
  Property({
    type: 2
  })
], Cropper.prototype, "transparent", 2);
__decorateClass([
  Property({
    type: 0
  })
], Cropper.prototype, "value", 2);
__decorateClass([
  Property({
    type: 8
  })
], Cropper.prototype, "view", 2);
__decorateClass([
  Property({
    type: 10
  })
], Cropper.prototype, "zoomable", 2);
__decorateClass([
  Property({
    type: 64
  })
], Cropper.prototype, "zoomRatio", 2);
__decorateClass([
  Event()
], Cropper.prototype, "plusCrop", 2);
__decorateClass([
  Event()
], Cropper.prototype, "plusCropEnd", 2);
__decorateClass([
  Event()
], Cropper.prototype, "plusCropMove", 2);
__decorateClass([
  Event()
], Cropper.prototype, "plusCropStart", 2);
__decorateClass([
  Event()
], Cropper.prototype, "plusReady", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Cropper.prototype, "plusZoom", 2);
__decorateClass([
  Method()
], Cropper.prototype, "flipX", 1);
__decorateClass([
  Method()
], Cropper.prototype, "flipY", 1);
__decorateClass([
  Method()
], Cropper.prototype, "move", 1);
__decorateClass([
  Method()
], Cropper.prototype, "moveTo", 1);
__decorateClass([
  Method()
], Cropper.prototype, "reset", 1);
__decorateClass([
  Method()
], Cropper.prototype, "rotate", 1);
__decorateClass([
  Method()
], Cropper.prototype, "rotateTo", 1);
__decorateClass([
  Method()
], Cropper.prototype, "toCanvas", 1);
__decorateClass([
  Method()
], Cropper.prototype, "zoom", 1);
__decorateClass([
  Method()
], Cropper.prototype, "zoomTo", 1);
__decorateClass([
  Query(".image")
], Cropper.prototype, "$image", 2);
__decorateClass([
  Watch()
], Cropper.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Cropper.prototype, "onCrop", 1);
__decorateClass([
  Bind()
], Cropper.prototype, "onCropEnd", 1);
__decorateClass([
  Bind()
], Cropper.prototype, "onCropMove", 1);
__decorateClass([
  Bind()
], Cropper.prototype, "onCropStart", 1);
__decorateClass([
  Bind()
], Cropper.prototype, "onReady", 1);
__decorateClass([
  Bind()
], Cropper.prototype, "onZoom", 1);
Cropper = __decorateClass([
  Element()
], Cropper);
export {
  Cropper
};
