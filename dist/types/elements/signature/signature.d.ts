import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { default as CoreType, PointGroup } from 'signature_pad';
import { PlusForm } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
/**
 * Allows user to draw smooth signatures.
 *
 * @thirdParty
 * @stable
 * @dependencies signature_pad
 *
 * @part canvas - The canvas element.
 *
 * @examples default, background-color, color, dimensions, disabled, value,
 *           width, distance, clear, history, resizable, clear-on-resize, save
 */
export declare class Signature extends PlusForm {
    /**
     * Specifies the background color.
     */
    backgroundColor?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Clears the canvas after resizing.
     */
    clearOnResize?: boolean;
    /**
     * Specifies the color of the strokes.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
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
     * Gets/Sets data.
     */
    value?: string;
    /**
     * Specifies the velocity based on the previous velocity.
     */
    velocity?: number;
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
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * Fires after the latest changes have occurred with a delay to prepare the value.
     */
    plusChange: EventEmitter<void>;
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
    history: PointGroup[][];
    index: number;
    observer: ResizeObserver;
    previous?: string;
    timeout?: number;
    watcher(next: any, prev: any, name: any): NodeJS.Timeout;
    clone(): any;
    initialize(): void;
    load(): void;
    reset(includeValue: boolean): void;
    terminate(): void;
    toSVG(): string;
    update(force: boolean, silent: boolean): void;
    onReset(): void;
    onStart(): void;
    onEnd(): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface SignatureAttributesBase {
  /**
  * Specifies the background color.
  */
  "background-color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Clears the canvas after resizing.
  */
  "clear-on-resize"?: boolean;
  /**
  * Specifies the color of the strokes.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
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
  * Gets/Sets data.
  */
  "value"?: string;
  /**
  * Specifies the velocity based on the previous velocity.
  */
  "velocity"?: number;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, SignatureVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<SignatureProperties, "overrides">>;
}
export interface SignatureAttributesDisables {}
export type SignatureAttributes = Filter<SignatureAttributesBase, SignatureAttributesDisables>;
export interface SignatureEventsBase {
  /**
  * Fires after the latest changes have occurred with a delay to prepare the value.
  */
  onPlusChange?: (event: CustomEvent<void>) => void;
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
export interface SignatureEventsDisables {}
export type SignatureEvents = Filter<SignatureEventsBase, SignatureEventsDisables>;
export interface SignatureMethodsBase {
  /**
  * Reverts the last undo action.
  */
  redo();
  /**
  * Syncs the canvas dimensions with the element dimensions.
  * @param clear - Clears the canvas after resizing.
  */
  resize(clear?: boolean);
  /**
  * Reverts the last action.
  */
  undo();
}
export interface SignatureMethodsDisables {}
export type SignatureMethods = Filter<SignatureMethodsBase, SignatureMethodsDisables>;
export interface SignaturePropertiesBase {
  /**
  * Specifies the background color.
  */
  backgroundColor?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Clears the canvas after resizing.
  */
  clearOnResize?: boolean;
  /**
  * Specifies the color of the strokes.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
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
  * Gets/Sets data.
  */
  value?: string;
  /**
  * Specifies the velocity based on the previous velocity.
  */
  velocity?: number;
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
  variant?: OverridableValue<never, SignatureVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<SignatureProperties, "overrides">>;
}
export interface SignaturePropertiesDisables {}
export type SignatureProperties = Filter<SignaturePropertiesBase, SignaturePropertiesDisables>;
export interface SignatureJSX extends SignatureEvents, SignatureProperties {}
declare global {
  interface HTMLPlusSignatureElement extends HTMLElement, SignatureMethods, SignatureProperties {}
  var HTMLPlusSignatureElement: {
    prototype: HTMLPlusSignatureElement;
    new (): HTMLPlusSignatureElement;
  };
  interface HTMLElementTagNameMap {
    "plus-signature": HTMLPlusSignatureElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": SignatureEvents & SignatureAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SignatureEvents & SignatureAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-signature": SignatureEvents & SignatureAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SignatureEvents & SignatureAttributes)>;
    }
  }
}
export type SignatureElement = globalThis.HTMLPlusSignatureElement;
export interface SignatureVariantOverrides {}