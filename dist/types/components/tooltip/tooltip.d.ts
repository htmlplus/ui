/// <reference types="node" />
import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { ComputePositionConfig } from '@floating-ui/dom';
import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipSource, TooltipTrigger } from './tooltip.types';
/**
 * @dependencies @floating-ui/dom
 * @thirdParty
 */
export declare class Tooltip {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    arrow?: boolean;
    /**
     * TODO
     */
    delay?: TooltipDelay;
    /**
     * TODO
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
     * TODO
     */
    placement?: TooltipPlacement;
    /**
     * TODO
     */
    source?: TooltipSource;
    /**
     * TODO
     */
    trigger?: TooltipTrigger;
    $activator?: Element;
    timeout?: NodeJS.Timeout;
    get attributes(): {
        role: string;
    };
    get options(): Partial<ComputePositionConfig>;
    get $arrow(): HTMLDivElement;
    get $source(): Element;
    get $tooltip(): HTMLElement;
    /**
     * TODO
     */
    hide(): void;
    /**
     * TODO
     */
    show(): void;
    events(all: boolean): any[];
    bind(): void;
    unbind(): void;
    update(): void;
    watcher(next: any, prev: any, key: any): void;
    onHide(): void;
    onShow(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface TooltipJSX {
    /**
     * TODO
     */
    arrow?: boolean;
    /**
     * TODO
     */
    delay?: TooltipDelay;
    /**
     * TODO
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
     * TODO
     */
    placement?: TooltipPlacement;
    /**
     * TODO
     */
    source?: TooltipSource;
    /**
     * TODO
     */
    trigger?: TooltipTrigger;
}
declare global {
    interface HTMLPlusTooltipElement extends HTMLElement {
        /**
         * TODO
         */
        arrow?: boolean;
        /**
         * TODO
         */
        delay?: TooltipDelay;
        /**
         * TODO
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
         * TODO
         */
        placement?: TooltipPlacement;
        /**
         * TODO
         */
        source?: TooltipSource;
        /**
         * TODO
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
