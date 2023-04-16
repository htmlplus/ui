import { _ as __decorate, f as classes, a as __awaiter, u as uhtml, P as Property, E as Event, M as Method, W as Watch, B as Bind, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}\n\n/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cropper-container img{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:\" \";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:\" \";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}:host{--plus-cropper-backdrop-color:#000;--plus-cropper-backdrop-opacity:0.5;--plus-cropper-guides-color:#fff;--plus-cropper-guides-opacity:0.5;--plus-cropper-guides-style:dashed;--plus-cropper-guides-weight:1px;--plus-cropper-indicator-color:#fff;--plus-cropper-indicator-opacity:1;--plus-cropper-indicator-size:10px;--plus-cropper-indicator-weight:2px;--plus-cropper-resizer-color:#fff;--plus-cropper-resizer-offset:0px;--plus-cropper-resizer-opacity:1;--plus-cropper-resizer-size:5px;--plus-cropper-resizer-weight:1px;--plus-cropper-viewport-color:#fff;--plus-cropper-viewport-opacity:1;--plus-cropper-viewport-style:solid;--plus-cropper-viewport-weight:1px}:host{display:block}.wrapper{height:100%;width:100%}.image{display:block;max-width:100%}.cropper-modal{background-color:var(--plus-cropper-backdrop-color);opacity:var(--plus-cropper-backdrop-opacity)}.cropper-line,.resizer-edge .cropper-point.point-e,.resizer-edge .cropper-point.point-n,.resizer-edge .cropper-point.point-s,.resizer-edge .cropper-point.point-w,.resizer-main .cropper-point.point-ne,.resizer-main .cropper-point.point-nw,.resizer-main .cropper-point.point-se,.resizer-main .cropper-point.point-sw{display:none}.shape-circle .cropper-face,.shape-circle .cropper-view-box,.shape-circle .cropper-view-box:after{border-radius:50%}.shape-circle .cropper-dashed.dashed-h{width:calc(92.5% - var(--plus-cropper-guides-weight))}.shape-circle .cropper-dashed.dashed-v{height:calc(92.5% - var(--plus-cropper-guides-weight))}.shape-circle .cropper-point.point-ne{right:14.64466%;top:14.64466%}.shape-circle .cropper-point.point-nw{left:14.64466%;top:14.64466%}.shape-circle .cropper-point.point-sw{bottom:14.64466%;left:14.64466%}.shape-circle .cropper-point.point-se{bottom:14.64466%;right:14.64466%}.cropper-dashed{border-color:var(--plus-cropper-guides-color);border-style:var(--plus-cropper-guides-style);opacity:var(--plus-cropper-guides-opacity)}.cropper-dashed.dashed-h{border-bottom-width:var(--plus-cropper-guides-weight);border-top-width:var(--plus-cropper-guides-weight);left:50%;transform:translateX(-50%)}.cropper-dashed.dashed-v{border-left-width:var(--plus-cropper-guides-weight);border-right-width:var(--plus-cropper-guides-weight);top:50%;transform:translateY(-50%)}.cropper-view-box{outline:none;position:relative}.cropper-view-box:after{border-color:var(--plus-cropper-viewport-color);border-style:var(--plus-cropper-viewport-style);border-width:var(--plus-cropper-viewport-weight);bottom:0;content:\"\";height:100%;left:0;opacity:var(--plus-cropper-viewport-opacity);position:absolute;right:0;top:0;width:100%}.cropper-point[class*=point-]{--plus-cropper-resizer-offset-negative:calc((50% + var(--plus-cropper-resizer-offset))*-1);--plus-cropper-resizer-offset-positive:calc((50% + var(--plus-cropper-resizer-offset))*1);background-color:var(--plus-cropper-resizer-color);height:var(--plus-cropper-resizer-size);margin:0;opacity:var(--plus-cropper-resizer-opacity);width:var(--plus-cropper-resizer-size)}.cropper-point[class*=point-]:before{content:none}.cropper-point.point-e{right:0;transform:translate(var(--plus-cropper-resizer-offset-positive),-50%)}.cropper-point.point-n{top:0;transform:translate(-50%,var(--plus-cropper-resizer-offset-negative))}.cropper-point.point-w{left:0;transform:translate(var(--plus-cropper-resizer-offset-negative),-50%)}.cropper-point.point-s{bottom:0;transform:translate(-50%,var(--plus-cropper-resizer-offset-positive))}.cropper-point.point-ne{right:0;top:0;transform:translate(var(--plus-cropper-resizer-offset-positive),var(--plus-cropper-resizer-offset-negative))}.cropper-point.point-nw{left:0;top:0;transform:translate(var(--plus-cropper-resizer-offset-negative),var(--plus-cropper-resizer-offset-negative))}.cropper-point.point-sw{bottom:0;left:0;transform:translate(var(--plus-cropper-resizer-offset-negative),var(--plus-cropper-resizer-offset-positive))}.cropper-point.point-se{bottom:0;right:0;transform:translate(var(--plus-cropper-resizer-offset-positive),var(--plus-cropper-resizer-offset-positive))}.resizer-shape-circle .cropper-point[class*=point-]{border-radius:50%}.cropper-center{opacity:var(--plus-cropper-indicator-opacity)}.cropper-center:before{height:var(--plus-cropper-indicator-weight);left:calc(var(--plus-cropper-indicator-size)/2*-1);top:calc(var(--plus-cropper-indicator-weight)/2*-1);width:var(--plus-cropper-indicator-size)}.cropper-center:after,.cropper-center:before{background-color:var(--plus-cropper-indicator-color)}.cropper-center:after{height:var(--plus-cropper-indicator-size);left:calc(var(--plus-cropper-indicator-weight)/2*-1);top:calc(var(--plus-cropper-indicator-size)/2*-1);width:var(--plus-cropper-indicator-weight)}.resizer-shape-line .cropper-point[class*=point-]{background-color:transparent;border-color:var(--plus-cropper-resizer-color);border-style:solid;border-width:var(--plus-cropper-resizer-weight)}.resizer-shape-line .cropper-point[class*=point-].point-e{border-bottom:none;border-left:none;border-top:none}.resizer-shape-line .cropper-point[class*=point-].point-n{border-bottom:none;border-left:none;border-right:none}.resizer-shape-line .cropper-point[class*=point-].point-w{border-bottom:none;border-right:none;border-top:none}.resizer-shape-line .cropper-point[class*=point-].point-s{border-left:none;border-right:none;border-top:none}.resizer-shape-line .cropper-point[class*=point-].point-ne{border-bottom:none;border-left:none}.resizer-shape-line .cropper-point[class*=point-].point-nw{border-bottom:none;border-right:none}.resizer-shape-line .cropper-point[class*=point-].point-sw{border-right:none;border-top:none}.resizer-shape-line .cropper-point[class*=point-].point-se{border-left:none;border-top:none}";

let CropperCore;
/**
 * @dependencies cropperjs
 * @stable
 * @thirdParty
 */
let Cropper = class Cropper {
    constructor() {
        /**
         * A number between 0 and 1. Specifies the automatic cropping area size.
         */
        this.area = 0.75;
        /**
         * Shows the black modal above the image and under the viewport.
         */
        this.backdrop = true;
        /**
         * Specifies the mode.
         */
        this.mode = 'move';
        /**
         * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
         */
        this.resizer = 'both';
        /**
         * Specifies the shape of the resizer.
         */
        this.resizerShape = 'square';
        /**
         * Re-renders when resizing the window.
         */
        this.responsive = 'reset';
        /**
         * Specifies the shape of the viewport.
         */
        this.shape = 'rectangle';
        /**
         * Specifies the view.
         */
        this.view = 'cover';
        /**
         * Enables to zoom the image.
         */
        this.zoomable = true;
        /**
         * Specifies zoom ratio when zooming the image by wheeling the mouse.
         */
        this.zoomRatio = 0.1;
    }
    get classes() {
        return classes(['wrapper', {
                resizer: this.resizer,
                resizerShape: this.resizerShape,
                shape: this.shape
            }], true);
    }
    get options() {
        const aspectRatio = (() => {
            if (this.shape != 'rectangle')
                return 1;
            if (typeof this.aspectRatio == 'number')
                return this.aspectRatio;
            let [valueA, valueB] = `${this.aspectRatio}`.split('/').map((item) => isNaN(item) ? NaN : parseFloat(item));
            if (valueB === undefined)
                valueB = 1;
            if (!isNaN(valueA + valueB))
                return valueA / valueB;
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
            if (['touch', 'wheel'].includes(value))
                return value;
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
    flipX() {
        this.instance.scale(-1, 1);
    }
    /**
     * Flips vertically.
     */
    flipY() {
        this.instance.scale(1, -1);
    }
    /**
     * Moves the canvas with relative offsets.
     * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
     * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
     */
    move(offsetX, offsetY) {
        this.instance.move(offsetX !== null && offsetX !== void 0 ? offsetX : null, offsetY !== null && offsetY !== void 0 ? offsetY : null);
    }
    /**
     * Moves the canvas to an absolute point.
     * @param x - The `left` value of the canvas. Use `null` to ignore this.
     * @param y - The `top` value of the canvas. Use `null` to ignore this.
     */
    moveTo(x, y) {
        this.instance.moveTo(x !== null && x !== void 0 ? x : null, y !== null && y !== void 0 ? y : null);
    }
    /**
     * Resets the image and viewport to their initial states.
     */
    reset() {
        this.instance.reset();
    }
    /**
     * Rotates the image with a relative degree.
     */
    rotate(degree) {
        this.instance.rotate(degree);
    }
    /**
     * Rotates the image to an absolute degree.
     */
    rotateTo(degree) {
        this.instance.rotateTo(degree);
    }
    /**
     * Gets `canvas` from the cropped image.
     */
    toCanvas() {
        return this.instance.getCroppedCanvas( /* TODO */);
    }
    /**
     * Zooms the canvas with a relative ratio.
     */
    zoom(ratio) {
        this.instance.zoom(ratio);
    }
    /**
     * Zooms the canvas to an absolute ratio.
     */
    zoomTo(ratio) {
        this.instance.zoomTo(ratio /*, TODO */);
    }
    bind() {
        this.instance = new CropperCore(this.$image, this.options);
    }
    unbind() {
        var _a;
        // TODO: has a problem in documentation
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    sync(value) {
        if (!this.instance)
            return;
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
        // TODO
        requestAnimationFrame(() => {
            this.locked = false;
        });
    }
    watcher(next, prev, name) {
        if (this.locked)
            return;
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
        const direction = difference > 0 ? 'IN' : 'OUT';
        const detail = {
            difference,
            direction,
            event: event.detail.originalEvent,
            ratio: event.detail.ratio
        };
        const { defaultPrevented } = this.plusZoom(detail);
        if (!defaultPrevented)
            return;
        event.preventDefault();
    }
    connectCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                CropperCore = (yield import('cropperjs')).default;
            }
            catch (_a) {
                throw new Error("The `cropper` component depends on an external package, but it doesn't seem to be installed. Running `npm install cropperjs` will fix this problem.");
            }
        });
    }
    loadedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return uhtml.html `<div class=${this.classes}>
        <img class="image" alt="cropper" ref=${$element => this.$image = $element} src=${this.src} />
      </div>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Cropper.TAG = "plus-cropper";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Cropper.STYLES = css_248z;
__decorate([
    Property({
        type: 64
    })
], Cropper.prototype, "area", void 0);
__decorate([
    Property({
        type: 320
    })
], Cropper.prototype, "aspectRatio", void 0);
__decorate([
    Property({
        type: 2
    })
], Cropper.prototype, "backdrop", void 0);
__decorate([
    Property({
        type: 2
    })
], Cropper.prototype, "background", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Cropper.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Cropper.prototype, "guides", void 0);
__decorate([
    Property({
        type: 2
    })
], Cropper.prototype, "indicator", void 0);
__decorate([
    Property({
        type: 8
    })
], Cropper.prototype, "mode", void 0);
__decorate([
    Property({
        type: 8
    })
], Cropper.prototype, "resizer", void 0);
__decorate([
    Property({
        type: 8
    })
], Cropper.prototype, "resizerShape", void 0);
__decorate([
    Property({
        type: 10
    })
], Cropper.prototype, "responsive", void 0);
__decorate([
    Property({
        type: 8
    })
], Cropper.prototype, "shape", void 0);
__decorate([
    Property({
        type: 256
    })
], Cropper.prototype, "src", void 0);
__decorate([
    Property({
        type: 0
    })
], Cropper.prototype, "value", void 0);
__decorate([
    Property({
        type: 8
    })
], Cropper.prototype, "view", void 0);
__decorate([
    Property({
        type: 10
    })
], Cropper.prototype, "zoomable", void 0);
__decorate([
    Property({
        type: 64
    })
], Cropper.prototype, "zoomRatio", void 0);
__decorate([
    Event()
], Cropper.prototype, "plusCrop", void 0);
__decorate([
    Event()
], Cropper.prototype, "plusCropEnd", void 0);
__decorate([
    Event()
], Cropper.prototype, "plusCropMove", void 0);
__decorate([
    Event()
], Cropper.prototype, "plusCropStart", void 0);
__decorate([
    Event()
], Cropper.prototype, "plusReady", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Cropper.prototype, "plusZoom", void 0);
__decorate([
    Method()
], Cropper.prototype, "flipX", null);
__decorate([
    Method()
], Cropper.prototype, "flipY", null);
__decorate([
    Method()
], Cropper.prototype, "move", null);
__decorate([
    Method()
], Cropper.prototype, "moveTo", null);
__decorate([
    Method()
], Cropper.prototype, "reset", null);
__decorate([
    Method()
], Cropper.prototype, "rotate", null);
__decorate([
    Method()
], Cropper.prototype, "rotateTo", null);
__decorate([
    Method()
], Cropper.prototype, "toCanvas", null);
__decorate([
    Method()
], Cropper.prototype, "zoom", null);
__decorate([
    Method()
], Cropper.prototype, "zoomTo", null);
__decorate([
    Watch()
], Cropper.prototype, "watcher", null);
__decorate([
    Bind()
], Cropper.prototype, "onCrop", null);
__decorate([
    Bind()
], Cropper.prototype, "onCropEnd", null);
__decorate([
    Bind()
], Cropper.prototype, "onCropMove", null);
__decorate([
    Bind()
], Cropper.prototype, "onCropStart", null);
__decorate([
    Bind()
], Cropper.prototype, "onReady", null);
__decorate([
    Bind()
], Cropper.prototype, "onZoom", null);
Cropper = __decorate([
    Element()
], Cropper);

export { Cropper };
