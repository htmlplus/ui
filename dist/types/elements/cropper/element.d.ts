import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { default as CropperCoreType } from 'cropperjs';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { PlusCropperCropEvent, PlusCropperPointerEvent, PlusCropperValue, PlusCropperZoomEvent } from './types';
/**
 * Used for cropping large images to fit a container before uploading them to the server.
 *
 * @thirdParty
 * @stable
 * @dependencies cropperjs
 *
 * @examples default, disabled, shape, indicator, guides, transparent, background, area,
 *           aspect-ratio, mode, zoomable, zoom-ratio, to-base64, to-blob, to-url, styles
 */
export declare class PlusCropper extends PlusCore {
    /**
     * A number between 0 and 1. Specifies the automatic cropping area size.
     */
    area?: number;
    /**
     * Specifies the initial aspect ratio of the viewport.
     */
    aspectRatio?: number | string;
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
     *
     * @value crop - Creates a new viewport and allows to move and resize it.
     * @value move - Moves the canvas and viewport.
     * @value none - Do nothing.
     */
    mode?: 'crop' | 'move' | 'none';
    /**
     * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
     *
     * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
     * @value edge - Enables to resize the viewport by dragging on the vertices.
     * @value main - Enables to resize the viewport by dragging on the Sides.
     */
    resizer?: 'both' | 'edge' | 'main';
    /**
     * Specifies the shape of the resizer.
     *
     * @value circle - TODO.
     * @value line   - TODO.
     * @value square - TODO.
     */
    resizerShape?: 'circle' | 'line' | 'square';
    /**
     * Re-renders when resizing the window.
     *
     * @value false - TODO.
     * @value true  - TODO.
     * @value reset - Restores the cropped area after resizing the window.
     */
    responsive?: boolean | 'reset';
    /**
     * Specifies the shape of the viewport.
     *
     * @value circle    - TODO.
     * @value rectangle - TODO.
     * @value square    - TODO.
     */
    shape?: 'circle' | 'rectangle' | 'square';
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
    value?: PlusCropperValue;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * Specifies the view.
     *
     * @value contain - restrict the minimum canvas size to fit within the container. If the
     *                    proportions of the canvas and the container differ, the minimum canvas will be
     *                    surrounded by extra space in one of the dimensions.
     * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions
     *                    of the canvas and the container are different, the container will not be able
     *                    to fit the whole canvas in one of the dimensions.
     * @value fit      - restrict the viewport to not exceed the size of the canvas.
     * @value none    - no restrictions.
     */
    view?: 'contain' | 'cover' | 'fit' | 'none';
    /**
     * Enables to zoom the image.
     *
     * @value false - Unable to zoom the image.
     * @value true  - Enables to zoom the image by touching and wheeling mouse.
     * @value touch - Enables to zoom the image by touching.
     * @value wheel - Enables to zoom the image by wheeling mouse.
     */
    zoomable?: boolean | 'touch' | 'wheel';
    /**
     * Specifies zoom ratio when zooming the image by wheeling the mouse.
     */
    zoomRatio?: number;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Fires when the `image` or the `viewport` is changed.
     */
    plusCrop: EventEmitter<PlusCropperCropEvent>;
    /**
     * Fires when the `image` or the `viewport` changes are finished.
     */
    plusCropEnd: EventEmitter<PlusCropperPointerEvent>;
    /**
     * Fires when the `image` or the `viewport` is changing.
     */
    plusCropMove: EventEmitter<PlusCropperPointerEvent>;
    /**
     * Fires when the `image` or the `viewport` starts to change.
     */
    plusCropStart: EventEmitter<PlusCropperPointerEvent>;
    /**
     * Fires when the image has been loaded and the element is ready for operation.
     */
    plusReady: EventEmitter<void>;
    /**
     * Fires when the element starts to `zoom in` or `zoom out`.
     */
    plusZoom: EventEmitter<PlusCropperZoomEvent>;
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
        data: PlusCropperValue;
        dragMode: "move" | "none" | "crop";
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
        viewMode: CropperCoreType.ViewMode;
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
    watcher(next: unknown, _prev: unknown, name: string): void;
    initialize(): void;
    sync(value?: any): void;
    terminate(): void;
    onCrop(): void;
    onCropEnd(event: any): void;
    onCropMove(event: any): void;
    onCropStart(event: any): void;
    onReady(): void;
    onZoom(event: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusCropperAttributesBase {
  /**
  * A number between 0 and 1. Specifies the automatic cropping area size.
  */
  "area"?: number;
  /**
  * Specifies the initial aspect ratio of the viewport.
  */
  "aspect-ratio"?: number | string;
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
  *
  * @value crop - Creates a new viewport and allows to move and resize it.
  * @value move - Moves the canvas and viewport.
  * @value none - Do nothing.
  */
  "mode"?: 'crop' | 'move' | 'none';
  /**
  * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
  *
  * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
  * @value edge - Enables to resize the viewport by dragging on the vertices.
  * @value main - Enables to resize the viewport by dragging on the Sides.
  */
  "resizer"?: 'both' | 'edge' | 'main';
  /**
  * Specifies the shape of the resizer.
  *
  * @value circle - TODO.
  * @value line   - TODO.
  * @value square - TODO.
  */
  "resizer-shape"?: 'circle' | 'line' | 'square';
  /**
  * Re-renders when resizing the window.
  *
  * @value false - TODO.
  * @value true  - TODO.
  * @value reset - Restores the cropped area after resizing the window.
  */
  "responsive"?: boolean | 'reset';
  /**
  * Specifies the shape of the viewport.
  *
  * @value circle    - TODO.
  * @value rectangle - TODO.
  * @value square    - TODO.
  */
  "shape"?: 'circle' | 'rectangle' | 'square';
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
  "value"?: PlusCropperValue;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCropperVariantOverrides>;
  /**
  * Specifies the view.
  *
  * @value contain - restrict the minimum canvas size to fit within the container. If the
  *                    proportions of the canvas and the container differ, the minimum canvas will be
  *                    surrounded by extra space in one of the dimensions.
  * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions
  *                    of the canvas and the container are different, the container will not be able
  *                    to fit the whole canvas in one of the dimensions.
  * @value fit      - restrict the viewport to not exceed the size of the canvas.
  * @value none    - no restrictions.
  */
  "view"?: 'contain' | 'cover' | 'fit' | 'none';
  /**
  * Enables to zoom the image.
  *
  * @value false - Unable to zoom the image.
  * @value true  - Enables to zoom the image by touching and wheeling mouse.
  * @value touch - Enables to zoom the image by touching.
  * @value wheel - Enables to zoom the image by wheeling mouse.
  */
  "zoomable"?: boolean | 'touch' | 'wheel';
  /**
  * Specifies zoom ratio when zooming the image by wheeling the mouse.
  */
  "zoom-ratio"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCropperProperties, "overrides">>;
}
export interface PlusCropperAttributesDisables {}
export type PlusCropperAttributes = Filter<PlusCropperAttributesBase, PlusCropperAttributesDisables>;
export interface PlusCropperEventsBase {
  /**
  * Fires when the `image` or the `viewport` is changed.
  */
  onPlusCrop?: (event: CustomEvent<PlusCropperCropEvent>) => void;
  /**
  * Fires when the `image` or the `viewport` changes are finished.
  */
  onPlusCropEnd?: (event: CustomEvent<PlusCropperPointerEvent>) => void;
  /**
  * Fires when the `image` or the `viewport` is changing.
  */
  onPlusCropMove?: (event: CustomEvent<PlusCropperPointerEvent>) => void;
  /**
  * Fires when the `image` or the `viewport` starts to change.
  */
  onPlusCropStart?: (event: CustomEvent<PlusCropperPointerEvent>) => void;
  /**
  * Fires when the image has been loaded and the element is ready for operation.
  */
  onPlusReady?: (event: CustomEvent<void>) => void;
  /**
  * Fires when the element starts to `zoom in` or `zoom out`.
  */
  onPlusZoom?: (event: CustomEvent<PlusCropperZoomEvent>) => void;
}
export interface PlusCropperEventsDisables {}
export type PlusCropperEvents = Filter<PlusCropperEventsBase, PlusCropperEventsDisables>;
export interface PlusCropperMethodsBase {
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
export interface PlusCropperMethodsDisables {}
export type PlusCropperMethods = Filter<PlusCropperMethodsBase, PlusCropperMethodsDisables>;
export interface PlusCropperPropertiesBase {
  /**
  * A number between 0 and 1. Specifies the automatic cropping area size.
  */
  area?: number;
  /**
  * Specifies the initial aspect ratio of the viewport.
  */
  aspectRatio?: number | string;
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
  *
  * @value crop - Creates a new viewport and allows to move and resize it.
  * @value move - Moves the canvas and viewport.
  * @value none - Do nothing.
  */
  mode?: 'crop' | 'move' | 'none';
  /**
  * Enables to resize the viewport by dragging (Works when the value of the `mode` property is `crop`).
  *
  * @value both - Enables to resize the viewport by dragging on the Sides and vertices.
  * @value edge - Enables to resize the viewport by dragging on the vertices.
  * @value main - Enables to resize the viewport by dragging on the Sides.
  */
  resizer?: 'both' | 'edge' | 'main';
  /**
  * Specifies the shape of the resizer.
  *
  * @value circle - TODO.
  * @value line   - TODO.
  * @value square - TODO.
  */
  resizerShape?: 'circle' | 'line' | 'square';
  /**
  * Re-renders when resizing the window.
  *
  * @value false - TODO.
  * @value true  - TODO.
  * @value reset - Restores the cropped area after resizing the window.
  */
  responsive?: boolean | 'reset';
  /**
  * Specifies the shape of the viewport.
  *
  * @value circle    - TODO.
  * @value rectangle - TODO.
  * @value square    - TODO.
  */
  shape?: 'circle' | 'rectangle' | 'square';
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
  value?: PlusCropperValue;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCropperVariantOverrides>;
  /**
  * Specifies the view.
  *
  * @value contain - restrict the minimum canvas size to fit within the container. If the
  *                    proportions of the canvas and the container differ, the minimum canvas will be
  *                    surrounded by extra space in one of the dimensions.
  * @value cover   - restrict the minimum canvas size to fill fit the container. If the proportions
  *                    of the canvas and the container are different, the container will not be able
  *                    to fit the whole canvas in one of the dimensions.
  * @value fit      - restrict the viewport to not exceed the size of the canvas.
  * @value none    - no restrictions.
  */
  view?: 'contain' | 'cover' | 'fit' | 'none';
  /**
  * Enables to zoom the image.
  *
  * @value false - Unable to zoom the image.
  * @value true  - Enables to zoom the image by touching and wheeling mouse.
  * @value touch - Enables to zoom the image by touching.
  * @value wheel - Enables to zoom the image by wheeling mouse.
  */
  zoomable?: boolean | 'touch' | 'wheel';
  /**
  * Specifies zoom ratio when zooming the image by wheeling the mouse.
  */
  zoomRatio?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCropperProperties, "overrides">>;
}
export interface PlusCropperPropertiesDisables {}
export type PlusCropperProperties = Filter<PlusCropperPropertiesBase, PlusCropperPropertiesDisables>;
export type PlusCropperAttributesAndEvents = PlusCropperAttributes & PlusCropperEvents;
export interface PlusCropperJSX extends PlusCropperEvents, PlusCropperProperties {}
declare global {
  interface HTMLPlusCropperElement extends HTMLElement, PlusCropperMethods, PlusCropperProperties {}
  var HTMLPlusCropperElement: {
    prototype: HTMLPlusCropperElement;
    new (): HTMLPlusCropperElement;
  };
  interface HTMLElementTagNameMap {
    "plus-cropper": HTMLPlusCropperElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-cropper": PlusCropperAttributes & PlusCropperEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-cropper": PlusCropperAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCropperElement>, keyof PlusCropperAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-cropper": PlusCropperAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCropperElement>, keyof PlusCropperAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-cropper": PlusCropperAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCropperElement>, keyof PlusCropperAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-cropper": PlusCropperAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCropperElement>, keyof PlusCropperAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-cropper": PlusCropperAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusCropperElement>, keyof PlusCropperAttributesAndEvents>;
    }
  }
}
export type PlusCropperElement = globalThis.HTMLPlusCropperElement;
export interface PlusCropperVariantOverrides {}