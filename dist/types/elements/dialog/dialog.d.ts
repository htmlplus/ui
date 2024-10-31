import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Animation } from '../../services';
import { DialogContext } from './dialog.context';
import { DialogFullscreen, DialogPlacement, DialogSize } from './dialog.types';
/**
 * @part backdrop - Backdrop element.
 *
 * @slot default - The default slot.
 */
export declare class Dialog extends PlusCore {
    static instances: Dialog[];
    /**
     * TODO
     */
    animation?: boolean | string;
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
     * Deactivate the dialog's backdrop to show or not.
     */
    transparent?: boolean;
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
    get state(): DialogContext;
    animate: Animation;
    opened: boolean;
    promise?: Promise<boolean>;
    get classes(): string;
    get isCurrent(): boolean;
    get zIndex(): string;
    /**
     * Hides the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    hide(): Promise<boolean>;
    /**
     * Shows the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    show(): Promise<boolean>;
    /**
     * Toggles between `collapse` and `expand` state.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    toggle(): Promise<boolean>;
    watcher(next: any, prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    try(open: boolean, silent?: boolean): Promise<boolean>;
    onEscape(event: any): void;
    onClickOutside(): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface DialogAttributes {
  /**
  * TODO
  */
  "animation"?: boolean | string;
  /**
  * This property helps you to attach which dialog toggler controls the dialog.
  * It doesn't matter where the dialog toggler is.
  * You can put the dialog's toggler inside or outside of the dialog.
  * Read more about connectors [here](/connector).
  */
  "connector"?: string;
  /**
  * Set the height of the dialog as much as the screen's height.
  */
  "full-height"?: boolean;
  /**
  * Set the width of the dialog as much as the screen's width.
  */
  "full-width"?: boolean;
  /**
  * Set both width and height of the dialog to occupy the screen size.
  */
  "fullscreen"?: DialogFullscreen;
  /**
  * Closes the dialog when `escape` key is pressed.
  */
  "keyboard"?: boolean;
  /**
  * Control dialog to show or not.
  */
  "open"?: boolean;
  /**
  * It prevents the dialog from closing on clicking outside of the element.
  */
  "persistent"?: boolean;
  /**
  * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
  * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
  */
  "placement"?: DialogPlacement;
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * Determine the width of the dialog.
  */
  "size"?: DialogSize;
  /**
  * Removes the margin around the dialog's content.
  */
  "sticky"?: boolean;
  /**
  * Deactivate the dialog's backdrop to show or not.
  */
  "transparent"?: boolean;
}
export interface DialogEvents {
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
export interface DialogMethods {
  /**
  * Hides the element.
  * @returns {Promise<boolean>} A Promise that resolves to `true` if the
  * operation was successful or `false` if it was canceled.
  */
  hide(): Promise<boolean>;
  /**
  * Shows the element.
  * @returns {Promise<boolean>} A Promise that resolves to `true` if the
  * operation was successful or `false` if it was canceled.
  */
  show(): Promise<boolean>;
  /**
  * Toggles between `collapse` and `expand` state.
  * @returns {Promise<boolean>} A Promise that resolves to `true` if the
  * operation was successful or `false` if it was canceled.
  */
  toggle(): Promise<boolean>;
}
export interface DialogProperties {
  /**
  * TODO
  */
  animation?: boolean | string;
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
  * Deactivate the dialog's backdrop to show or not.
  */
  transparent?: boolean;
}
export interface DialogJSX extends DialogEvents, DialogProperties {}
declare global {
  interface HTMLPlusDialogElement extends HTMLElement, DialogMethods, DialogProperties {}
  var HTMLPlusDialogElement: {
    prototype: HTMLPlusDialogElement;
    new (): HTMLPlusDialogElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog": HTMLPlusDialogElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": DialogEvents & DialogAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type DialogElement = globalThis.HTMLPlusDialogElement;