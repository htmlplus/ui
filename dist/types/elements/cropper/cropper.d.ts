import { EventEmitter } from '@htmlplus/element';
import { default as CropperCoreType } from 'cropperjs';
import { PlusCore } from '../../core';
import { CropperCropEvent, CropperAspectRatio, CropperValue, CropperMode, CropperPointerEvent, CropperResizer, CropperResizerShape, CropperResponsive, CropperShape, CropperView, CropperZoomable, CropperZoomEvent } from './cropper.types';
/**
 * @thirdParty
 * @stable
 * @dependencies cropperjs
 */
export declare class Cropper extends PlusCore {
    /**
     * A number between 0 and 1. Specifies the automatic cropping area size.
     */
    area?: number;
    /**
     * Specifies the initial aspect ratio of the viewport.
     */
    aspectRatio?: CropperAspectRatio;
    /**
     * Shows the grid background of the container.
     */
    background?: boolean;
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * Shows the dashed lines above the viewport.
     */
    guides?: boolean;
    /**
     * Shows the center indicator above the viewport.
     */
    indicator?: boolean;
    /**
     * Specifies the mode.
     */
    mode?: CropperMode;
    /**
     * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
     */
    resizer?: CropperResizer;
    /**
     * Specifies the shape of the resizer.
     */
    resizerShape?: CropperResizerShape;
    /**
     * Re-renders when resizing the window.
     */
    responsive?: CropperResponsive;
    /**
     * Specifies the shape of the viewport.
     */
    shape?: CropperShape;
    /**
     * Specifies the image's src.
     */
    src?: string;
    /**
     * Hides the black modal above the image and under the viewport.
     */
    transparent?: boolean;
    /**
     * Gets/Sets data.
     */
    value?: CropperValue;
    /**
     * Specifies the view.
     */
    view?: CropperView;
    /**
     * Enables to zoom the image.
     */
    zoomable?: CropperZoomable;
    /**
     * Specifies zoom ratio when zooming the image by wheeling the mouse.
     */
    zoomRatio?: number;
    /**
     * Fires when the `image` or the `viewport` is changed.
     */
    plusCrop: EventEmitter<CropperCropEvent>;
    /**
     * Fires when the `image` or the `viewport` changes are finished.
     */
    plusCropEnd: EventEmitter<CropperPointerEvent>;
    /**
     * Fires when the `image` or the `viewport` is changing.
     */
    plusCropMove: EventEmitter<CropperPointerEvent>;
    /**
     * Fires when the `image` or the `viewport` starts to change.
     */
    plusCropStart: EventEmitter<CropperPointerEvent>;
    /**
     * Fires when the image has been loaded and the element is ready for operation.
     */
    plusReady: EventEmitter<void>;
    /**
     * Fires when the element starts to `zoom in` or `zoom out`.
     */
    plusZoom: EventEmitter<CropperZoomEvent>;
    /**
     * Flips horizontally.
     */
    flipX(): void;
    /**
     * Flips vertically.
     */
    flipY(): void;
    /**
     * Moves the canvas with relative offsets.
     * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
     * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
     */
    move(offsetX?: number, offsetY?: number): void;
    /**
     * Moves the canvas to an absolute point.
     * @param x - The `left` value of the canvas. Use `null` to ignore this.
     * @param y - The `top` value of the canvas. Use `null` to ignore this.
     */
    moveTo(x?: number, y?: number): void;
    /**
     * Resets the image and viewport to their initial states.
     */
    reset(): void;
    /**
     * Rotates the image with a relative degree.
     */
    rotate(degree: number): void;
    /**
     * Rotates the image to an absolute degree.
     */
    rotateTo(degree: number): void;
    /**
     * Gets `canvas` from the cropped image.
     */
    toCanvas(): HTMLCanvasElement;
    /**
     * Zooms the canvas with a relative ratio.
     */
    zoom(ratio: number): void;
    /**
     * Zooms the canvas to an absolute ratio.
     */
    zoomTo(ratio: number): void;
    $image: HTMLImageElement;
    instance?: CropperCoreType;
    locked?: boolean;
    get classes(): string;
    get options(): {
        aspectRatio: number;
        autoCrop: boolean;
        autoCropArea: number;
        background: boolean;
        center: boolean;
        checkCrossOrigin: boolean;
        checkOrientation: boolean;
        cropBoxMovable: boolean;
        cropBoxResizable: boolean;
        data: CropperValue;
        dragMode: CropperMode;
        guides: boolean;
        highlight: boolean;
        initialAspectRatio: number;
        minCanvasHeight: number;
        minCanvasWidth: number;
        minContainerHeight: number;
        minContainerWidth: number;
        minCropBoxHeight: number;
        minCropBoxWidth: number;
        modal: boolean;
        movable: boolean;
        preview: string;
        responsive: boolean;
        restore: boolean;
        rotatable: boolean;
        scalable: boolean;
        toggleDragModeOnDblclick: boolean;
        viewMode: any;
        wheelZoomRatio: number;
        zoomable: boolean;
        zoomOnTouch: boolean;
        zoomOnWheel: boolean;
        crop: () => void;
        cropend: (event: any) => void;
        cropmove: (event: any) => void;
        cropstart: (event: any) => void;
        ready: () => void;
        zoom: (event: any) => void;
    };
    watcher(next: any, prev: any, name: any): void;
    initialize(): void;
    sync(value?: any): void;
    terminate(): void;
    onCrop(): void;
    onCropEnd(event: any): void;
    onCropMove(event: any): void;
    onCropStart(event: any): void;
    onReady(): void;
    onZoom(event: any): void;
    connectedCallback(): Promise<void>;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface CropperAttributes {
  /**
  * A number between 0 and 1. Specifies the automatic cropping area size.
  */
  "area"?: number;
  /**
  * Specifies the initial aspect ratio of the viewport.
  */
  "aspect-ratio"?: CropperAspectRatio;
  /**
  * Shows the grid background of the container.
  */
  "background"?: boolean;
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Shows the dashed lines above the viewport.
  */
  "guides"?: boolean;
  /**
  * Shows the center indicator above the viewport.
  */
  "indicator"?: boolean;
  /**
  * Specifies the mode.
  */
  "mode"?: CropperMode;
  /**
  * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
  */
  "resizer"?: CropperResizer;
  /**
  * Specifies the shape of the resizer.
  */
  "resizer-shape"?: CropperResizerShape;
  /**
  * Re-renders when resizing the window.
  */
  "responsive"?: CropperResponsive;
  /**
  * Specifies the shape of the viewport.
  */
  "shape"?: CropperShape;
  /**
  * Specifies the image's src.
  */
  "src"?: string;
  /**
  * Hides the black modal above the image and under the viewport.
  */
  "transparent"?: boolean;
  /**
  * Gets/Sets data.
  */
  "value"?: CropperValue;
  /**
  * Specifies the view.
  */
  "view"?: CropperView;
  /**
  * Enables to zoom the image.
  */
  "zoomable"?: CropperZoomable;
  /**
  * Specifies zoom ratio when zooming the image by wheeling the mouse.
  */
  "zoom-ratio"?: number;
}
export interface CropperEvents {
  /**
  * Fires when the `image` or the `viewport` is changed.
  */
  onPlusCrop?: (event: CustomEvent<CropperCropEvent>) => void;
  /**
  * Fires when the `image` or the `viewport` changes are finished.
  */
  onPlusCropEnd?: (event: CustomEvent<CropperPointerEvent>) => void;
  /**
  * Fires when the `image` or the `viewport` is changing.
  */
  onPlusCropMove?: (event: CustomEvent<CropperPointerEvent>) => void;
  /**
  * Fires when the `image` or the `viewport` starts to change.
  */
  onPlusCropStart?: (event: CustomEvent<CropperPointerEvent>) => void;
  /**
  * Fires when the image has been loaded and the element is ready for operation.
  */
  onPlusReady?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the element starts to `zoom in` or `zoom out`.
  */
  onPlusZoom?: (event: CustomEvent<CropperZoomEvent>) => void;
}
export interface CropperMethods {
  /**
  * Flips horizontally.
  */
  flipX(): void;
  /**
  * Flips vertically.
  */
  flipY(): void;
  /**
  * Moves the canvas with relative offsets.
  * @param offsetX - Moving size (px) in the `horizontal` direction. Use `null` to ignore this.
  * @param offsetY - Moving size (px) in the `vertical` direction. Use `null` to ignore this.
  */
  move(offsetX?: number, offsetY?: number): void;
  /**
  * Moves the canvas to an absolute point.
  * @param x - The `left` value of the canvas. Use `null` to ignore this.
  * @param y - The `top` value of the canvas. Use `null` to ignore this.
  */
  moveTo(x?: number, y?: number): void;
  /**
  * Resets the image and viewport to their initial states.
  */
  reset(): void;
  /**
  * Rotates the image with a relative degree.
  */
  rotate(degree: number): void;
  /**
  * Rotates the image to an absolute degree.
  */
  rotateTo(degree: number): void;
  /**
  * Gets `canvas` from the cropped image.
  */
  toCanvas(): HTMLCanvasElement;
  /**
  * Zooms the canvas with a relative ratio.
  */
  zoom(ratio: number): void;
  /**
  * Zooms the canvas to an absolute ratio.
  */
  zoomTo(ratio: number): void;
}
export interface CropperProperties {
  /**
  * A number between 0 and 1. Specifies the automatic cropping area size.
  */
  area?: number;
  /**
  * Specifies the initial aspect ratio of the viewport.
  */
  aspectRatio?: CropperAspectRatio;
  /**
  * Shows the grid background of the container.
  */
  background?: boolean;
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Shows the dashed lines above the viewport.
  */
  guides?: boolean;
  /**
  * Shows the center indicator above the viewport.
  */
  indicator?: boolean;
  /**
  * Specifies the mode.
  */
  mode?: CropperMode;
  /**
  * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
  */
  resizer?: CropperResizer;
  /**
  * Specifies the shape of the resizer.
  */
  resizerShape?: CropperResizerShape;
  /**
  * Re-renders when resizing the window.
  */
  responsive?: CropperResponsive;
  /**
  * Specifies the shape of the viewport.
  */
  shape?: CropperShape;
  /**
  * Specifies the image's src.
  */
  src?: string;
  /**
  * Hides the black modal above the image and under the viewport.
  */
  transparent?: boolean;
  /**
  * Gets/Sets data.
  */
  value?: CropperValue;
  /**
  * Specifies the view.
  */
  view?: CropperView;
  /**
  * Enables to zoom the image.
  */
  zoomable?: CropperZoomable;
  /**
  * Specifies zoom ratio when zooming the image by wheeling the mouse.
  */
  zoomRatio?: number;
}
export interface CropperJSX extends CropperEvents, CropperProperties {}
declare global {
  interface HTMLPlusCropperElement extends HTMLElement, CropperMethods, CropperProperties {}
  var HTMLPlusCropperElement: {
    prototype: HTMLPlusCropperElement;
    new (): HTMLPlusCropperElement;
  };
  interface HTMLElementTagNameMap {
    "plus-cropper": HTMLPlusCropperElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-cropper": CropperEvents & CropperAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type CropperElement = globalThis.HTMLPlusCropperElement;