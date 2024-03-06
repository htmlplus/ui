import { EventEmitter } from '@htmlplus/element';
import type CoreType from 'signature_pad';
import { PlusForm } from "../../core";
import { SignatureFromDataURLOptions, SignaturePointGroup } from './signature.types';
/**
 * @stable
 *
 * @part canvas - The canvas element.
 */
export declare class Signature extends PlusForm {
    static tag: string;
    static style: string;
    /**
     * Specifies the background color.
     */
    backgroundColor?: string;
    /**
     * Clears the canvas after resizing.
     */
    clearOnResize?: boolean;
    /**
     * Specifies the color of the strokes.
     */
    color?: string;
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * Specifies the distance between the previous point and the next one.
     */
    distance?: number;
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
     * Specifies the velocity based on the previous velocity.
     */
    velocity?: number;
    /**
     * Fires after updating the stroke.
     */
    plusAfter: EventEmitter<PointerEvent>;
    /**
     * Fires before updating the stroke.
     */
    plusBefore: EventEmitter<PointerEvent>;
    /**
     * Fires after a stroke ends.
     */
    plusEnd: EventEmitter<PointerEvent>;
    /**
     * Fires before a stroke starts.
     */
    plusStart: EventEmitter<PointerEvent>;
    /**
     * Specifies whether redo can be performed or not.
     */
    canRedo(): boolean;
    /**
     * Specifies whether undo can be performed or not.
     */
    canUndo(): boolean;
    /**
     * The canvas element.
     */
    canvas(): HTMLCanvasElement;
    /**
     * Clears the canvas.
     */
    clear(): void;
    /**
     * Draws from the data.
     * @param data  - Collections of points.
     * @param clear - Clears the canvas before drawing new points.
     */
    fromData(data: SignaturePointGroup[], clear?: boolean): void;
    /**
     * Draws from the data URL. [More](https://mdn.io/drawImage).
     * This method does not populate the internal data structure that represents the drawn signature.
     * Thus, after using `fromDataURL`, `toData` won't work properly.
     * @param dataUrl - A string containing the [data URL](https://mdn.io/dataURL).
     * @param options - TODO
     */
    fromDataURL(dataUrl: string, options?: SignatureFromDataURLOptions): Promise<void>;
    /**
     * Returns `true` if canvas is empty.
     */
    isEmpty(): boolean;
    /**
     * Returns data of the canvas.
     * @returns Collections of points.
     */
    toData(): SignaturePointGroup[];
    /**
     * Returns [data URL](https://mdn.io/dataURL). [More](https://mdn.io/toDataURL).
     */
    toDataURL(type?: string, encoderOptions?: number): string;
    toDataURL(type: 'image/svg+xml', includeBackgroundColor?: boolean): string;
    /**
     * Returns SVG string.
     * @param includeBackgroundColor - Adds the background color to the SVG output.
     */
    toSVG(includeBackgroundColor?: boolean): string;
    /**
     * Reverts the last undo action.
     */
    redo(): void;
    /**
     * Syncs the canvas dimensions with the element dimensions.
     * @param clear - Clears the canvas after resizing.
     */
    resize(clear?: boolean): void;
    /**
     * Reverts the last action.
     */
    undo(): void;
    $canvas: HTMLCanvasElement;
    instance?: CoreType;
    history: SignaturePointGroup[][];
    index: number;
    observer: ResizeObserver;
    watcher(next: any, prev: any, name: any): void;
    bind(): void;
    unbind(): void;
    onEnd(): void;
    onResize(): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface SignatureAttributes {
    /**
    * Specifies the background color.
    */
    "background-color"?: string;
    /**
    * Clears the canvas after resizing.
    */
    "clear-on-resize"?: boolean;
    /**
    * Specifies the color of the strokes.
    */
    "color"?: string;
    /**
    * Disables the element functionality.
    */
    "disabled"?: boolean;
    /**
    * Specifies the distance between the previous point and the next one.
    */
    "distance"?: number;
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
    * Specifies the velocity based on the previous velocity.
    */
    "velocity"?: number;
}
export interface SignatureEvents {
    /**
    * Fires after updating the stroke.
    */
    onPlusAfter?: (event: CustomEvent<PointerEvent>) => void;
    /**
    * Fires before updating the stroke.
    */
    onPlusBefore?: (event: CustomEvent<PointerEvent>) => void;
    /**
    * Fires after a stroke ends.
    */
    onPlusEnd?: (event: CustomEvent<PointerEvent>) => void;
    /**
    * Fires before a stroke starts.
    */
    onPlusStart?: (event: CustomEvent<PointerEvent>) => void;
}
export interface SignatureMethods {
    /**
    * Specifies whether redo can be performed or not.
    */
    canRedo(): boolean;
    /**
    * Specifies whether undo can be performed or not.
    */
    canUndo(): boolean;
    /**
    * The canvas element.
    */
    canvas(): HTMLCanvasElement;
    /**
    * Clears the canvas.
    */
    clear(): any;
    /**
    * Draws from the data.
    * @param data  - Collections of points.
    * @param clear - Clears the canvas before drawing new points.
    */
    fromData(data: SignaturePointGroup[], clear?: boolean): any;
    /**
    * Draws from the data URL. [More](https://mdn.io/drawImage).
    * This method does not populate the internal data structure that represents the drawn signature.
    * Thus, after using `fromDataURL`, `toData` won't work properly.
    * @param dataUrl - A string containing the [data URL](https://mdn.io/dataURL).
    * @param options - TODO
    */
    fromDataURL(dataUrl: string, options?: SignatureFromDataURLOptions): any;
    /**
    * Returns `true` if canvas is empty.
    */
    isEmpty(): boolean;
    /**
    * Returns data of the canvas.
    * @returns Collections of points.
    */
    toData(): SignaturePointGroup[];
    toDataURL(type?: string, options?: any): string;
    /**
    * Returns SVG string.
    * @param includeBackgroundColor - Adds the background color to the SVG output.
    */
    toSVG(includeBackgroundColor?: boolean): string;
    /**
    * Reverts the last undo action.
    */
    redo(): any;
    /**
    * Syncs the canvas dimensions with the element dimensions.
    * @param clear - Clears the canvas after resizing.
    */
    resize(clear?: boolean): any;
    /**
    * Reverts the last action.
    */
    undo(): any;
}
export interface SignatureProperties {
    /**
    * Specifies the background color.
    */
    backgroundColor?: string;
    /**
    * Clears the canvas after resizing.
    */
    clearOnResize?: boolean;
    /**
    * Specifies the color of the strokes.
    */
    color?: string;
    /**
    * Disables the element functionality.
    */
    disabled?: boolean;
    /**
    * Specifies the distance between the previous point and the next one.
    */
    distance?: number;
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
    * Specifies the velocity based on the previous velocity.
    */
    velocity?: number;
}
export interface SignatureJSX extends SignatureEvents, SignatureProperties {
}
declare global {
    interface HTMLPlusSignatureElement extends HTMLElement, SignatureMethods, SignatureProperties {
    }
    var HTMLPlusSignatureElement: {
        prototype: HTMLPlusSignatureElement;
        new (): HTMLPlusSignatureElement;
    };
    interface HTMLElementTagNameMap {
        "plus-signature": HTMLPlusSignatureElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-signature": SignatureEvents & SignatureAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type SignatureElement = globalThis.HTMLPlusSignatureElement;
