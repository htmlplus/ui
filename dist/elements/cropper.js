import { P as PlusCore, l as classes, h as html, a as Property, c as Event, M as Method, Q as Query, W as Watch, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ':host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}/*!\n * Cropper.js v1.6.2\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2024-04-21T07:43:02.731Z\n */.cropper-container{-webkit-touch-callout:none;direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none !important;max-width:none !important;min-height:0 !important;min-width:0 !important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51, 153, 255, 0.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media(min-width: 768px){.cropper-point.point-se{height:15px;width:15px}}@media(min-width: 992px){.cropper-point.point-se{height:10px;width:10px}}@media(min-width: 1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none !important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}:host{--plus-cropper-backdrop-color: black;--plus-cropper-backdrop-opacity: 0.5;--plus-cropper-guides-color: white;--plus-cropper-guides-opacity: 0.5;--plus-cropper-guides-style: dashed;--plus-cropper-guides-weight: 1px;--plus-cropper-indicator-color: white;--plus-cropper-indicator-opacity: 1;--plus-cropper-indicator-size: 10px;--plus-cropper-indicator-weight: 2px;--plus-cropper-resizer-color: white;--plus-cropper-resizer-offset: 0px;--plus-cropper-resizer-opacity: 1;--plus-cropper-resizer-size: 5px;--plus-cropper-resizer-weight: 1px;--plus-cropper-viewport-color: white;--plus-cropper-viewport-opacity: 1;--plus-cropper-viewport-style: solid;--plus-cropper-viewport-weight: 1px}:host{display:block}.wrapper{width:100%;height:100%}.image{display:block;max-width:100%}.cropper-modal{background-color:var(--plus-cropper-backdrop-color);opacity:var(--plus-cropper-backdrop-opacity)}.cropper-line{display:none}.resizer-main .cropper-point.point-ne,.resizer-main .cropper-point.point-nw,.resizer-main .cropper-point.point-sw,.resizer-main .cropper-point.point-se{display:none}.resizer-edge .cropper-point.point-e,.resizer-edge .cropper-point.point-n,.resizer-edge .cropper-point.point-w,.resizer-edge .cropper-point.point-s{display:none}.shape-circle .cropper-face,.shape-circle .cropper-view-box,.shape-circle .cropper-view-box::after{border-radius:50%}.shape-circle .cropper-dashed.dashed-h{width:calc(92.5% - var(--plus-cropper-guides-weight))}.shape-circle .cropper-dashed.dashed-v{height:calc(92.5% - var(--plus-cropper-guides-weight))}.shape-circle .cropper-point.point-ne{top:14.64466%;right:14.64466%}.shape-circle .cropper-point.point-nw{top:14.64466%;left:14.64466%}.shape-circle .cropper-point.point-sw{bottom:14.64466%;left:14.64466%}.shape-circle .cropper-point.point-se{right:14.64466%;bottom:14.64466%}.cropper-dashed{border-color:var(--plus-cropper-guides-color);border-style:var(--plus-cropper-guides-style);opacity:var(--plus-cropper-guides-opacity)}.cropper-dashed.dashed-h{left:50%;transform:translateX(-50%);border-top-width:var(--plus-cropper-guides-weight);border-bottom-width:var(--plus-cropper-guides-weight)}.cropper-dashed.dashed-v{top:50%;transform:translateY(-50%);border-left-width:var(--plus-cropper-guides-weight);border-right-width:var(--plus-cropper-guides-weight)}.cropper-view-box{outline:none;position:relative}.cropper-view-box::after{top:0;right:0;left:0;bottom:0;content:"";position:absolute;width:100%;height:100%;border-style:var(--plus-cropper-viewport-style);border-color:var(--plus-cropper-viewport-color);border-width:var(--plus-cropper-viewport-weight);opacity:var(--plus-cropper-viewport-opacity)}.cropper-point[class*=point-]{--plus-cropper-resizer-offset-negative: calc((50% + var(--plus-cropper-resizer-offset)) * -1);--plus-cropper-resizer-offset-positive: calc((50% + var(--plus-cropper-resizer-offset)) * +1);margin:0;height:var(--plus-cropper-resizer-size);width:var(--plus-cropper-resizer-size);opacity:var(--plus-cropper-resizer-opacity);background-color:var(--plus-cropper-resizer-color)}.cropper-point[class*=point-]:before{content:none}.cropper-point.point-e{right:0;transform:translate(var(--plus-cropper-resizer-offset-positive), -50%)}.cropper-point.point-n{top:0;transform:translate(-50%, var(--plus-cropper-resizer-offset-negative))}.cropper-point.point-w{left:0;transform:translate(var(--plus-cropper-resizer-offset-negative), -50%)}.cropper-point.point-s{bottom:0;transform:translate(-50%, var(--plus-cropper-resizer-offset-positive))}.cropper-point.point-ne{top:0;right:0;transform:translate(var(--plus-cropper-resizer-offset-positive), var(--plus-cropper-resizer-offset-negative))}.cropper-point.point-nw{top:0;left:0;transform:translate(var(--plus-cropper-resizer-offset-negative), var(--plus-cropper-resizer-offset-negative))}.cropper-point.point-sw{bottom:0;left:0;transform:translate(var(--plus-cropper-resizer-offset-negative), var(--plus-cropper-resizer-offset-positive))}.cropper-point.point-se{right:0;bottom:0;transform:translate(var(--plus-cropper-resizer-offset-positive), var(--plus-cropper-resizer-offset-positive))}.resizer-shape-circle .cropper-point[class*=point-]{border-radius:50%}.cropper-center{opacity:var(--plus-cropper-indicator-opacity)}.cropper-center:before{background-color:var(--plus-cropper-indicator-color);top:calc(var(--plus-cropper-indicator-weight)/2*-1);left:calc(var(--plus-cropper-indicator-size)/2*-1);height:var(--plus-cropper-indicator-weight);width:var(--plus-cropper-indicator-size)}.cropper-center:after{background-color:var(--plus-cropper-indicator-color);top:calc(var(--plus-cropper-indicator-size)/2*-1);left:calc(var(--plus-cropper-indicator-weight)/2*-1);height:var(--plus-cropper-indicator-size);width:var(--plus-cropper-indicator-weight)}.resizer-shape-line .cropper-point[class*=point-]{background-color:rgba(0,0,0,0);border-style:solid;border-color:var(--plus-cropper-resizer-color);border-width:var(--plus-cropper-resizer-weight)}.resizer-shape-line .cropper-point[class*=point-].point-e{border-top:none;border-bottom:none;border-left:none}.resizer-shape-line .cropper-point[class*=point-].point-n{border-right:none;border-bottom:none;border-left:none}.resizer-shape-line .cropper-point[class*=point-].point-w{border-top:none;border-right:none;border-bottom:none}.resizer-shape-line .cropper-point[class*=point-].point-s{border-top:none;border-right:none;border-left:none}.resizer-shape-line .cropper-point[class*=point-].point-ne{border-bottom:none;border-left:none}.resizer-shape-line .cropper-point[class*=point-].point-nw{border-right:none;border-bottom:none}.resizer-shape-line .cropper-point[class*=point-].point-sw{border-top:none;border-right:none}.resizer-shape-line .cropper-point[class*=point-].point-se{border-top:none;border-left:none}';
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
    type: 128
  })
], Cropper.prototype, "area", 2);
__decorateClass([
  Property({
    type: 640
  })
], Cropper.prototype, "aspectRatio", 2);
__decorateClass([
  Property({
    type: 4
  })
], Cropper.prototype, "background", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Cropper.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], Cropper.prototype, "guides", 2);
__decorateClass([
  Property({
    type: 4
  })
], Cropper.prototype, "indicator", 2);
__decorateClass([
  Property({
    type: 16
  })
], Cropper.prototype, "mode", 2);
__decorateClass([
  Property({
    type: 16
  })
], Cropper.prototype, "resizer", 2);
__decorateClass([
  Property({
    type: 16
  })
], Cropper.prototype, "resizerShape", 2);
__decorateClass([
  Property({
    type: 20
  })
], Cropper.prototype, "responsive", 2);
__decorateClass([
  Property({
    type: 16
  })
], Cropper.prototype, "shape", 2);
__decorateClass([
  Property({
    type: 512
  })
], Cropper.prototype, "src", 2);
__decorateClass([
  Property({
    type: 4
  })
], Cropper.prototype, "transparent", 2);
__decorateClass([
  Property({
    type: 0
  })
], Cropper.prototype, "value", 2);
__decorateClass([
  Property({
    type: 16
  })
], Cropper.prototype, "view", 2);
__decorateClass([
  Property({
    type: 20
  })
], Cropper.prototype, "zoomable", 2);
__decorateClass([
  Property({
    type: 128
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
