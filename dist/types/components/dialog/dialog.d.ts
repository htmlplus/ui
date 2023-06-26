import { EventEmitter } from '@htmlplus/element';
import { PlusBase } from '@app/core';
import { Animation, Portal } from '@app/services';
import { DialogFullscreen, DialogPlacement, DialogPortalStrategy, DialogPortalTarget, DialogSize } from './dialog.types';
/**
 * @part backdrop - Backdrop element.
 * @slot default - The default slot.
 */
export declare class Dialog extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    animation?: string;
    /**
     * Activate the dialog's backdrop to show or not.
     */
    backdrop?: boolean;
    /**
     * This property helps you to attach which dialog toggler controls the dialog.
     * It doesn't matter where the dialog toggler is.
     * You can put the dialog's toggler inside or outside of the dialog.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * Set the height of the dialog as much as the screen's height.
     */
    fullHeight?: boolean;
    /**
     * Set the width of the dialog as much as the screen's width.
     */
    fullWidth?: boolean;
    /**
     * Set both width and height of the dialog to occupy the screen size.
     */
    fullscreen?: DialogFullscreen;
    /**
     * Closes the dialog when `escape` key is pressed.
     */
    keyboard?: boolean;
    /**
     * Control dialog to show or not.
     */
    open?: boolean;
    /**
     * It prevents the dialog from closing on clicking outside of the element.
     */
    persistent?: boolean;
    /**
     * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
     * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
     */
    placement?: DialogPlacement;
    /**
     * Enables or disables the portal.
     * @experimental
     */
    portal?: boolean;
    /**
     * Specifies the position of the dialog.
     * @experimental
     */
    portalStrategy?: DialogPortalStrategy;
    /**
     * Specifies the position of the dialog relative to the target.
     * @experimental
     */
    portalTarget?: DialogPortalTarget;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    /**
     * Determine the width of the dialog.
     */
    size?: DialogSize;
    /**
     * Removes the margin around the dialog's content.
     */
    sticky?: boolean;
    /**
     * When the dialog is going to hide
     */
    plusClose: EventEmitter<void>;
    /**
     * When the dialog is completely closed and its animation is completed.
     */
    plusClosed: EventEmitter<void>;
    /**
     * When the dialog is going to show this event triggers
     */
    plusOpen: EventEmitter<void>;
    /**
     * When the dialog is completely shown and its animation is completed.
     */
    plusOpened: EventEmitter<void>;
    $cell: HTMLElement;
    static instances: any[];
    animate?: Animation;
    isOpen?: boolean;
    portalInstance?: Portal;
    tunnel?: boolean;
    get classes(): string;
    get isCurrent(): boolean;
    get zIndex(): string;
    watcher(next: any, prev: any, name: any): void;
    hide(): void;
    show(): void;
    toggle(): void;
    broadcast(value: any): void;
    initialize(): void;
    terminate(): void;
    tryHide(animation: any, silent: any): void;
    tryShow(animation: any, silent: any): void;
    onHide(): void;
    onShow(): void;
    onEscape(event: any): void;
    onClickOutside(): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface DialogJSX {
    /**
     * TODO
     */
    animation?: string;
    /**
     * Activate the dialog's backdrop to show or not.
     */
    backdrop?: boolean;
    /**
     * This property helps you to attach which dialog toggler controls the dialog.
     * It doesn't matter where the dialog toggler is.
     * You can put the dialog's toggler inside or outside of the dialog.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * Set the height of the dialog as much as the screen's height.
     */
    fullHeight?: boolean;
    /**
     * Set the width of the dialog as much as the screen's width.
     */
    fullWidth?: boolean;
    /**
     * Set both width and height of the dialog to occupy the screen size.
     */
    fullscreen?: DialogFullscreen;
    /**
     * Closes the dialog when `escape` key is pressed.
     */
    keyboard?: boolean;
    /**
     * Control dialog to show or not.
     */
    open?: boolean;
    /**
     * It prevents the dialog from closing on clicking outside of the element.
     */
    persistent?: boolean;
    /**
     * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
     * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
     */
    placement?: DialogPlacement;
    /**
     * Enables or disables the portal.
     * @experimental
     */
    portal?: boolean;
    /**
     * Specifies the position of the dialog.
     * @experimental
     */
    portalStrategy?: DialogPortalStrategy;
    /**
     * Specifies the position of the dialog relative to the target.
     * @experimental
     */
    portalTarget?: DialogPortalTarget;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    /**
     * Determine the width of the dialog.
     */
    size?: DialogSize;
    /**
     * Removes the margin around the dialog's content.
     */
    sticky?: boolean;
    /**
     * When the dialog is going to hide
     */
    onPlusClose?: (event: CustomEvent<void>) => void;
    /**
     * When the dialog is completely closed and its animation is completed.
     */
    onPlusClosed?: (event: CustomEvent<void>) => void;
    /**
     * When the dialog is going to show this event triggers
     */
    onPlusOpen?: (event: CustomEvent<void>) => void;
    /**
     * When the dialog is completely shown and its animation is completed.
     */
    onPlusOpened?: (event: CustomEvent<void>) => void;
}
declare global {
    interface HTMLPlusDialogElement extends HTMLElement {
        /**
         * TODO
         */
        animation?: string;
        /**
         * Activate the dialog's backdrop to show or not.
         */
        backdrop?: boolean;
        /**
         * This property helps you to attach which dialog toggler controls the dialog.
         * It doesn't matter where the dialog toggler is.
         * You can put the dialog's toggler inside or outside of the dialog.
         * Read more about connectors [here](/connector).
         */
        connector?: string;
        /**
         * Set the height of the dialog as much as the screen's height.
         */
        fullHeight?: boolean;
        /**
         * Set the width of the dialog as much as the screen's width.
         */
        fullWidth?: boolean;
        /**
         * Set both width and height of the dialog to occupy the screen size.
         */
        fullscreen?: DialogFullscreen;
        /**
         * Closes the dialog when `escape` key is pressed.
         */
        keyboard?: boolean;
        /**
         * Control dialog to show or not.
         */
        open?: boolean;
        /**
         * It prevents the dialog from closing on clicking outside of the element.
         */
        persistent?: boolean;
        /**
         * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
         * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
         */
        placement?: DialogPlacement;
        /**
         * Enables or disables the portal.
         * @experimental
         */
        portal?: boolean;
        /**
         * Specifies the position of the dialog.
         * @experimental
         */
        portalStrategy?: DialogPortalStrategy;
        /**
         * Specifies the position of the dialog relative to the target.
         * @experimental
         */
        portalTarget?: DialogPortalTarget;
        /**
         * It makes the user able to scroll the content by adding a scroll beside it.
         */
        scrollable?: boolean;
        /**
         * Determine the width of the dialog.
         */
        size?: DialogSize;
        /**
         * Removes the margin around the dialog's content.
         */
        sticky?: boolean;
    }
    var HTMLPlusDialogElement: {
        prototype: HTMLPlusDialogElement;
        new (): HTMLPlusDialogElement;
    };
    interface HTMLElementTagNameMap {
        "plus-dialog": HTMLPlusDialogElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-dialog": DialogJSX & {
                [key: string]: any;
            };
        }
    }
}
export type DialogElement = globalThis.HTMLPlusDialogElement;
