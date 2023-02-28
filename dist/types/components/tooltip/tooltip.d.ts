/// <reference types="node" />
import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { ComputePositionConfig } from '@floating-ui/dom';
import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipReference, TooltipTrigger } from './tooltip.types';
/**
 * @dependencies @floating-ui/dom
 * @stable
 * @thirdParty
 */
export declare class Tooltip {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies whether to display the arrow or not.
     */
    arrow?: boolean;
    /**
     * TODO
     */
    auto?: boolean;
    /**
     * Specifies a delay in milliseconds for show or hide.
     * Use a number for both show and hide or
     * create an array of two separate numbers for show and hide.
     */
    delay?: TooltipDelay;
    /**
     * Disables the component functionality.
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
     * Specifies the display location of the component relative to the reference.
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
    state?: 'hide' | 'show';
    $activator?: Element;
    cleanup?: Function;
    timeout?: NodeJS.Timeout;
    get attributes(): {
        role: string;
        state: "hide" | "show";
    };
    get options(): Partial<ComputePositionConfig>;
    get $arrow(): HTMLDivElement;
    get $host(): HTMLElement;
    get $reference(): Element;
    /**
     * Hides the component.
     */
    hide(): void;
    /**
     * Shows the component.
     */
    show(): void;
    /**
     * Updates the component's position.
     */
    update(): void;
    bind(): void;
    unbind(): void;
    events(all: boolean): any[];
    observe(active: boolean): void;
    watcher(next: any, prev: any, key: any): void;
    onHide(): void;
    onShow(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface TooltipJSX {
    /**
     * Specifies whether to display the arrow or not.
     */
    arrow?: boolean;
    /**
     * TODO
     */
    auto?: boolean;
    /**
     * Specifies a delay in milliseconds for show or hide.
     * Use a number for both show and hide or
     * create an array of two separate numbers for show and hide.
     */
    delay?: TooltipDelay;
    /**
     * Disables the component functionality.
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
     * Specifies the display location of the component relative to the reference.
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
}
declare global {
    interface HTMLPlusTooltipElement extends HTMLElement {
        /**
         * Specifies whether to display the arrow or not.
         */
        arrow?: boolean;
        /**
         * TODO
         */
        auto?: boolean;
        /**
         * Specifies a delay in milliseconds for show or hide.
         * Use a number for both show and hide or
         * create an array of two separate numbers for show and hide.
         */
        delay?: TooltipDelay;
        /**
         * Disables the component functionality.
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
         * Specifies the display location of the component relative to the reference.
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
            "plus-tooltip": TooltipJSX & {
                [key: string]: any;
            };
        }
    }
}
