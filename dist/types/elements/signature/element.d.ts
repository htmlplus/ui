import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { default as CoreType, FromDataUrlOptions, Options, PointGroup, ToSVGOptions } from 'signature_pad';
import { PlusForm } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
/**
 * Allows user to draw smooth signatures.
 *
 * @thirdParty
 * @stable
 * @dependencies signature_pad
 *
 * @part canvas - The canvas element.
 *
 * @examples default, background-color, pen-color, dimensions, disabled, dot-size, width,
 *           min-distance, clear, history, resizable, clear-on-resize, save, load, events
 */
export declare class PlusSignature extends PlusForm {
    /**
     * Specifies the background color.
     */
    backgroundColor?: OverridableValue<string & {}, PlusColorOverrides>;
    /**
     * Specifies configuration options for the canvas 2D rendering context.
     *
     * These options are passed to `HTMLCanvasElement.getContext('2d', options)`
     * and control how the drawing context is created (for example, alpha,
     * color space, or desynchronization behavior).
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getContextAttributes
     */
    canvasContextOptions?: CanvasRenderingContext2DSettings;
    /**
     * Clears the canvas after resizing.
     */
    clearOnResize?: boolean;
    /**
     * Specifies the color of the strokes.
     */
    penColor?: OverridableValue<string & {}, PlusColorOverrides>;
    /**
     * Add the next point only if the previous one is farther than x pixels.
     */
    minDistance?: number;
    /**
     * Specifies the radius of a single dot.
     */
    dotSize?: number;
    /**
     * Specifies the maximum width of the strokes.
     */
    maxWidth?: number;
    /**
     * Specifies the minimum width of the strokes.
     */
    minWidth?: number;
    /**
     * Observes the element dimensions to apply new changes on the canvas.
     */
    resizable?: boolean;
    /**
     * Specifies the time distance between the previous point and the next one.
     */
    throttle?: number;
    /**
     * Gets/Sets data.
     */
    value?: PointGroup[];
    /**
     * Specifies the velocity based on the previous velocity.
     */
    velocityFilterWeight?: number;
    /**
     * The canvas element.
     */
    get canvas(): HTMLCanvasElement;
    /**
     * Specifies whether redo can be performed or not.
     */
    get redoable(): boolean;
    /**
     * Specifies whether undo can be performed or not.
     */
    get undoable(): boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Fires after updating the stroke.
     */
    plusAfter: EventEmitter<PointerEvent>;
    /**
     * Fires before updating the stroke.
     */
    plusBefore: EventEmitter<PointerEvent>;
    /**
     * Fires after the latest changes have occurred with a delay to prepare the value.
     */
    plusChange: EventEmitter<PointGroup[]>;
    /**
     * Fires after a stroke ends.
     */
    plusEnd: EventEmitter<PointerEvent>;
    /**
     * Fires when the underlying `signature_pad` instance has been
     * successfully initialized and the element is ready for interaction.
     */
    plusReady: EventEmitter<void>;
    /**
     * Fires before a stroke starts.
     */
    plusStart: EventEmitter<PointerEvent>;
    /**
     * Clears the canvas
     */
    clear(): void;
    /**
     * Restores the signature from a data URL.
     *
     * @param dataUrl - The data URL representing the signature image.
     * @param options - Optional configuration for restoring the image.
     */
    fromDataURL(dataUrl: string, options?: FromDataUrlOptions): Promise<void>;
    /**
     * Reverts the last undo action.
     */
    redo(): void;
    /**
     * Redraw the canvas.
     */
    redraw(): void;
    /**
     * Syncs the canvas dimensions with the element dimensions.
     *
     * @param clear - Clears the canvas after resizing.
     */
    resize(clear?: boolean): void;
    /**
     * Returns the current signature as a data URL.
     *
     * The returned string can be used to display the signature image,
     * upload it to a server, or store it for later use.
     *
     * @param type - The image MIME type (e.g. `image/png`, `image/jpeg`).
     *               Defaults to `image/png`.
     * @param quality - A number between `0` and `1` indicating image quality.
     *                  Applies only to `image/jpeg` or `image/webp`.
     *
     * @returns A data URL representing the signature, or `undefined`
     *          if the signature pad has not been initialized.
     *
     * @see https://mdn.io/todataurl
     */
    toDataURL(type?: string, quality?: number): string | undefined;
    /**
     * Returns the current signature as an SVG string.
     *
     * @param options - Optional configuration for the SVG output.
     *
     * @returns A string containing the SVG markup of the signature,
     *          or `undefined` if the signature pad has not been initialized.
     */
    toSVG(options: ToSVGOptions): string | undefined;
    /**
     * Reverts the last action.
     */
    undo(): void;
    $canvas: HTMLCanvasElement;
    instance?: CoreType;
    history: PointGroup[][];
    index: number;
    observer: ResizeObserver;
    previous?: PointGroup[];
    timeout: number;
    get options(): Options;
    watcher(next: unknown, _prev: unknown, name: string): void;
    clone(): PointGroup[];
    ensureInstance(): boolean;
    initialize(): void;
    terminate(): void;
    onReset(): void;
    onStart(): void;
    onEnd(): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusSignatureAttributesBase {
  /**
  * Specifies the background color.
  */
  "background-color"?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Specifies configuration options for the canvas 2D rendering context.
  *
  * These options are passed to `HTMLCanvasElement.getContext('2d', options)`
  * and control how the drawing context is created (for example, alpha,
  * color space, or desynchronization behavior).
  *
  * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getContextAttributes
  */
  "canvas-context-options"?: CanvasRenderingContext2DSettings;
  /**
  * Clears the canvas after resizing.
  */
  "clear-on-resize"?: boolean;
  /**
  * Specifies the color of the strokes.
  */
  "pen-color"?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Add the next point only if the previous one is farther than x pixels.
  */
  "min-distance"?: number;
  /**
  * Specifies the radius of a single dot.
  */
  "dot-size"?: number;
  /**
  * Specifies the maximum width of the strokes.
  */
  "max-width"?: number;
  /**
  * Specifies the minimum width of the strokes.
  */
  "min-width"?: number;
  /**
  * Observes the element dimensions to apply new changes on the canvas.
  */
  "resizable"?: boolean;
  /**
  * Specifies the time distance between the previous point and the next one.
  */
  "throttle"?: number;
  /**
  * Gets/Sets data.
  */
  "value"?: PointGroup[];
  /**
  * Specifies the velocity based on the previous velocity.
  */
  "velocity-filter-weight"?: number;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusSignatureVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSignatureProperties, "overrides">>;
}
export interface PlusSignatureAttributesDisables {}
export type PlusSignatureAttributes = Filter<PlusSignatureAttributesBase, PlusSignatureAttributesDisables>;
export interface PlusSignatureEventsBase {
  /**
  * Fires after updating the stroke.
  */
  onPlusAfter?: (event: CustomEvent<PointerEvent>) => void;
  /**
  * Fires before updating the stroke.
  */
  onPlusBefore?: (event: CustomEvent<PointerEvent>) => void;
  /**
  * Fires after the latest changes have occurred with a delay to prepare the value.
  */
  onPlusChange?: (event: CustomEvent<PointGroup[]>) => void;
  /**
  * Fires after a stroke ends.
  */
  onPlusEnd?: (event: CustomEvent<PointerEvent>) => void;
  /**
  * Fires when the underlying `signature_pad` instance has been
  * successfully initialized and the element is ready for interaction.
  */
  onPlusReady?: (event: CustomEvent<void>) => void;
  /**
  * Fires before a stroke starts.
  */
  onPlusStart?: (event: CustomEvent<PointerEvent>) => void;
}
export interface PlusSignatureEventsDisables {}
export type PlusSignatureEvents = Filter<PlusSignatureEventsBase, PlusSignatureEventsDisables>;
export interface PlusSignatureMethodsBase {
  /**
  * Clears the canvas
  */
  clear();
  /**
  * Restores the signature from a data URL.
  *
  * @param dataUrl - The data URL representing the signature image.
  * @param options - Optional configuration for restoring the image.
  */
  fromDataURL(dataUrl: string, options?: FromDataUrlOptions);
  /**
  * Reverts the last undo action.
  */
  redo();
  /**
  * Redraw the canvas.
  */
  redraw();
  /**
  * Syncs the canvas dimensions with the element dimensions.
  *
  * @param clear - Clears the canvas after resizing.
  */
  resize(clear?: boolean);
  /**
  * Returns the current signature as a data URL.
  *
  * The returned string can be used to display the signature image,
  * upload it to a server, or store it for later use.
  *
  * @param type - The image MIME type (e.g. `image/png`, `image/jpeg`).
  *               Defaults to `image/png`.
  * @param quality - A number between `0` and `1` indicating image quality.
  *                  Applies only to `image/jpeg` or `image/webp`.
  *
  * @returns A data URL representing the signature, or `undefined`
  *          if the signature pad has not been initialized.
  *
  * @see https://mdn.io/todataurl
  */
  toDataURL(type?: string, quality?: number): string | undefined;
  /**
  * Returns the current signature as an SVG string.
  *
  * @param options - Optional configuration for the SVG output.
  *
  * @returns A string containing the SVG markup of the signature,
  *          or `undefined` if the signature pad has not been initialized.
  */
  toSVG(options: ToSVGOptions): string | undefined;
  /**
  * Reverts the last action.
  */
  undo();
}
export interface PlusSignatureMethodsDisables {}
export type PlusSignatureMethods = Filter<PlusSignatureMethodsBase, PlusSignatureMethodsDisables>;
export interface PlusSignaturePropertiesBase {
  /**
  * Specifies the background color.
  */
  backgroundColor?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Specifies configuration options for the canvas 2D rendering context.
  *
  * These options are passed to `HTMLCanvasElement.getContext('2d', options)`
  * and control how the drawing context is created (for example, alpha,
  * color space, or desynchronization behavior).
  *
  * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getContextAttributes
  */
  canvasContextOptions?: CanvasRenderingContext2DSettings;
  /**
  * Clears the canvas after resizing.
  */
  clearOnResize?: boolean;
  /**
  * Specifies the color of the strokes.
  */
  penColor?: OverridableValue<string & {}, PlusColorOverrides>;
  /**
  * Add the next point only if the previous one is farther than x pixels.
  */
  minDistance?: number;
  /**
  * Specifies the radius of a single dot.
  */
  dotSize?: number;
  /**
  * Specifies the maximum width of the strokes.
  */
  maxWidth?: number;
  /**
  * Specifies the minimum width of the strokes.
  */
  minWidth?: number;
  /**
  * Observes the element dimensions to apply new changes on the canvas.
  */
  resizable?: boolean;
  /**
  * Specifies the time distance between the previous point and the next one.
  */
  throttle?: number;
  /**
  * Gets/Sets data.
  */
  value?: PointGroup[];
  /**
  * Specifies the velocity based on the previous velocity.
  */
  velocityFilterWeight?: number;
  /**
  * The canvas element.
  */
  readonly canvas: HTMLCanvasElement;
  /**
  * Specifies whether redo can be performed or not.
  */
  readonly redoable: boolean;
  /**
  * Specifies whether undo can be performed or not.
  */
  readonly undoable: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusSignatureVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSignatureProperties, "overrides">>;
}
export interface PlusSignaturePropertiesDisables {}
export type PlusSignatureProperties = Filter<PlusSignaturePropertiesBase, PlusSignaturePropertiesDisables>;
export interface PlusSignatureJSX extends PlusSignatureEvents, PlusSignatureProperties {}
declare global {
  interface HTMLPlusSignatureElement extends HTMLElement, PlusSignatureMethods, PlusSignatureProperties {}
  var HTMLPlusSignatureElement: {
    prototype: HTMLPlusSignatureElement;
    new (): HTMLPlusSignatureElement;
  };
  interface HTMLElementTagNameMap {
    "plus-signature": HTMLPlusSignatureElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-signature": PlusSignatureAttributes & PlusSignatureEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": PlusSignatureAttributes & PlusSignatureEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSignatureElement>, HTMLPlusSignatureElement>, keyof (PlusSignatureAttributes & PlusSignatureEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": PlusSignatureAttributes & PlusSignatureEvents & Omit<HTMLAttributes<HTMLPlusSignatureElement>, keyof (PlusSignatureAttributes & PlusSignatureEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": PlusSignatureAttributes & PlusSignatureEvents & Omit<HTMLAttributes<HTMLPlusSignatureElement>, keyof (PlusSignatureAttributes & PlusSignatureEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": PlusSignatureAttributes & PlusSignatureEvents & Omit<HTMLAttributes<HTMLPlusSignatureElement>, keyof (PlusSignatureAttributes & PlusSignatureEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": PlusSignatureAttributes & PlusSignatureEvents & Omit<HTMLAttributes<HTMLPlusSignatureElement>, keyof (PlusSignatureAttributes & PlusSignatureEvents)>;
    }
  }
}
export type PlusSignatureElement = globalThis.HTMLPlusSignatureElement;
export interface PlusSignatureVariantOverrides {}