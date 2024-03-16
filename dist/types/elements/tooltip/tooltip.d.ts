/// <reference types="node" />
import type * as FloatingCoreType from '@floating-ui/dom';
import { PlusCore } from "../../core";
import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipReference, TooltipTrigger } from './tooltip.types';
/**
 * @thirdParty
 *
 * @dependencies @floating-ui/dom
 */
export declare class Tooltip extends PlusCore {
    static tag: string;
    static style: string;
    /**
     * Specifies whether to display the arrow or not.
     */
    arrow?: boolean;
    /**
     * Specifies a delay in milliseconds for show or hide.
     * Use a number for both show and hide or
     * create an array of two separate numbers for show and hide.
     */
    delay?: TooltipDelay;
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * TODO
     */
    fixed?: boolean;
    /**
     * TODO
     */
    offset?: TooltipOffset;
    /**
     * Specifies the display location of the element relative to the reference.
     */
    placement?: TooltipPlacement;
    /**
     * Specifies the element to which the tooltip will be attached.
     * Use `next` to attach to the next sibling.
     * Use `parent` to attach to the parent.
     * Use `previous` to attach to the previous sibling.
     * Use a string to find an element to attach to that.
     * Use an element to attach to that.
     */
    reference?: TooltipReference;
    /**
     * Specifies the activation method.
     */
    trigger?: TooltipTrigger;
    /**
     * TODO
     */
    z?: 'auto' | 'vertical' | 'horizontal' | 'move';
    /**
     * Hides the element.
     */
    hide(): void;
    /**
     * Shows the element.
     */
    show(): void;
    /**
     * Updates the element's position.
     */
    update(): void;
    $arrow: HTMLElement;
    $activator?: Element;
    state?: 'hide' | 'show';
    cleanup?: Function;
    timeout?: NodeJS.Timeout;
    get $reference(): Element;
    get options(): Partial<{
        placement?: FloatingCoreType.Placement;
        strategy?: FloatingCoreType.Strategy;
        middleware?: (false | {
            name: string;
            options?: any;
            fn: (state: {
                placement: FloatingCoreType.Placement;
                platform: import("@floating-ui/core").Platform;
                strategy: FloatingCoreType.Strategy;
                x: number;
                y: number;
                initialPlacement: FloatingCoreType.Placement;
                middlewareData: FloatingCoreType.MiddlewareData;
                rects: FloatingCoreType.ElementRects;
                elements: FloatingCoreType.Elements;
            }) => FloatingCoreType.MiddlewareReturn | Promise<FloatingCoreType.MiddlewareReturn>;
        })[];
        platform?: FloatingCoreType.Platform;
    }>;
    watcher(next: any, prev: any, key: any): void;
    bind(): void;
    unbind(): void;
    events(all: boolean): any[];
    observe(active: boolean): void;
    onHide(): void;
    onShow(): void;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface TooltipAttributes {
    /**
    * Specifies whether to display the arrow or not.
    */
    "arrow"?: boolean;
    /**
    * Specifies a delay in milliseconds for show or hide.
    * Use a number for both show and hide or
    * create an array of two separate numbers for show and hide.
    */
    "delay"?: TooltipDelay;
    /**
    * Disables the element functionality.
    */
    "disabled"?: boolean;
    /**
    * TODO
    */
    "fixed"?: boolean;
    /**
    * TODO
    */
    "offset"?: TooltipOffset;
    /**
    * Specifies the display location of the element relative to the reference.
    */
    "placement"?: TooltipPlacement;
    /**
    * Specifies the element to which the tooltip will be attached.
    * Use `next` to attach to the next sibling.
    * Use `parent` to attach to the parent.
    * Use `previous` to attach to the previous sibling.
    * Use a string to find an element to attach to that.
    * Use an element to attach to that.
    */
    "reference"?: TooltipReference;
    /**
    * Specifies the activation method.
    */
    "trigger"?: TooltipTrigger;
    /**
    * TODO
    */
    "z"?: 'auto' | 'vertical' | 'horizontal' | 'move';
}
export interface TooltipEvents {
}
export interface TooltipMethods {
    /**
    * Hides the element.
    */
    hide(): any;
    /**
    * Shows the element.
    */
    show(): any;
    /**
    * Updates the element's position.
    */
    update(): any;
}
export interface TooltipProperties {
    /**
    * Specifies whether to display the arrow or not.
    */
    arrow?: boolean;
    /**
    * Specifies a delay in milliseconds for show or hide.
    * Use a number for both show and hide or
    * create an array of two separate numbers for show and hide.
    */
    delay?: TooltipDelay;
    /**
    * Disables the element functionality.
    */
    disabled?: boolean;
    /**
    * TODO
    */
    fixed?: boolean;
    /**
    * TODO
    */
    offset?: TooltipOffset;
    /**
    * Specifies the display location of the element relative to the reference.
    */
    placement?: TooltipPlacement;
    /**
    * Specifies the element to which the tooltip will be attached.
    * Use `next` to attach to the next sibling.
    * Use `parent` to attach to the parent.
    * Use `previous` to attach to the previous sibling.
    * Use a string to find an element to attach to that.
    * Use an element to attach to that.
    */
    reference?: TooltipReference;
    /**
    * Specifies the activation method.
    */
    trigger?: TooltipTrigger;
    /**
    * TODO
    */
    z?: 'auto' | 'vertical' | 'horizontal' | 'move';
}
export interface TooltipJSX extends TooltipEvents, TooltipProperties {
}
declare global {
    interface HTMLPlusTooltipElement extends HTMLElement, TooltipMethods, TooltipProperties {
    }
    var HTMLPlusTooltipElement: {
        prototype: HTMLPlusTooltipElement;
        new (): HTMLPlusTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tooltip": HTMLPlusTooltipElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tooltip": TooltipEvents & TooltipAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type TooltipElement = globalThis.HTMLPlusTooltipElement;
