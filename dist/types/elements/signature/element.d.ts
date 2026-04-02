import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { default as CoreType, FromDataUrlOptions, Options, PointGroup, ToSVGOptions } from 'signature_pad';
import { PlusForm } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
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
    backgroundColor?: OverridableValue<PlusColor>;
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
    penColor?: OverridableValue<PlusColor>;
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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusSignatureAttributesMapper = {
  'backgroundColor': 'background-color';
  'canvasContextOptions': 'canvas-context-options';
  'clearOnResize': 'clear-on-resize';
  'penColor': 'pen-color';
  'minDistance': 'min-distance';
  'dotSize': 'dot-size';
  'maxWidth': 'max-width';
  'minWidth': 'min-width';
  'resizable': 'resizable';
  'throttle': 'throttle';
  'value': 'value';
  'velocityFilterWeight': 'velocity-filter-weight';
  'canvas': 'canvas';
  'redoable': 'redoable';
  'undoable': 'undoable';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusSignatureOverridableKeys = 'backgroundColor' | 'penColor' | 'variant';
export interface PlusSignatureDisables {}
export interface PlusSignatureOverrides {}
export type PlusSignatureAttributes = Filter<PlusSignatureAttributesOverridden, PlusSignatureDisables, PlusSignatureAttributesMapper>;
export type PlusSignatureAttributesOverridden = Override<PlusSignatureAttributesBase, PlusSignatureOverrides, PlusSignatureOverridableKeys, PlusSignatureAttributesMapper>;
export type PlusSignatureAttributesBase = {
  /**
  * Specifies the background color.
  */
  "background-color"?: OverridableValue<PlusColor>;
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
  "pen-color"?: OverridableValue<PlusColor>;
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSignatureProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusSignatureEvents = Filter<PlusSignatureEventsBase, PlusSignatureDisables>;
export type PlusSignatureEventsBase = {
  /**
  * Fires after updating the stroke.
  */
  plusAfter?: (event: CustomEvent<PointerEvent>) => void;
  /**
  * Fires before updating the stroke.
  */
  plusBefore?: (event: CustomEvent<PointerEvent>) => void;
  /**
  * Fires after the latest changes have occurred with a delay to prepare the value.
  */
  plusChange?: (event: CustomEvent<PointGroup[]>) => void;
  /**
  * Fires after a stroke ends.
  */
  plusEnd?: (event: CustomEvent<PointerEvent>) => void;
  /**
  * Fires when the underlying `signature_pad` instance has been
  * successfully initialized and the element is ready for interaction.
  */
  plusReady?: (event: CustomEvent<void>) => void;
  /**
  * Fires before a stroke starts.
  */
  plusStart?: (event: CustomEvent<PointerEvent>) => void;
};
export type PlusSignatureEventsJSX = Filter<PlusSignatureEventsBaseJSX, PlusSignatureDisables, {
  plusAfter: 'onPlusAfter';
  plusBefore: 'onPlusBefore';
  plusChange: 'onPlusChange';
  plusEnd: 'onPlusEnd';
  plusReady: 'onPlusReady';
  plusStart: 'onPlusStart';
}>;
export type PlusSignatureEventsBaseJSX = {
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
};
export type PlusSignatureMethods = Filter<PlusSignatureMethodsBase, PlusSignatureDisables>;
export type PlusSignatureMethodsBase = {
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
};
export type PlusSignatureProperties = Filter<PlusSignaturePropertiesOverridden, PlusSignatureDisables>;
export type PlusSignaturePropertiesOverridden = Override<PlusSignaturePropertiesBase, PlusSignatureOverrides, PlusSignatureOverridableKeys>;
export type PlusSignaturePropertiesBase = {
  /**
  * Specifies the background color.
  */
  backgroundColor?: OverridableValue<PlusColor>;
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
  penColor?: OverridableValue<PlusColor>;
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSignatureProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-signature': {
      properties: PlusSignaturePropertiesOverridden;
    };
  }
}
export type PlusSignatureElement = globalThis.HTMLPlusSignatureElement;
export type PlusSignatureJSX = PlusSignatureAttributes & PlusSignatureEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-signature": PlusSignatureJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": PlusSignatureJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSignatureElement>, HTMLPlusSignatureElement>, keyof PlusSignatureJSX>;
    }
  }
}