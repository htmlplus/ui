import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Animation } from '../../services';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
import { PlusDialogPlacement } from './types';
/**
 * A dialog is a `conversation` between the system and the user.
 * It is prompted when the system needs input from the user or to
 * give the user urgent information concerning their current workflow.
 *
 * @part backdrop - Backdrop element.
 *
 * @slot default - The default slot.
 *
 * @examples default, animation, persistent, placement, size, transparent, scrollable,
 *           specific-scrollable, fullscreen, full-width, full-height, sticky, nesting, prevent
 */
export declare class PlusDialog extends PlusCore {
    static instances: PlusDialog[];
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
    fullscreen?: boolean;
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
    placement?: PlusDialogPlacement;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    /**
     * Determine the width of the dialog.
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Removes the margin around the dialog's content.
     */
    sticky?: boolean;
    /**
     * Deactivate the dialog's backdrop to show or not.
     */
    transparent?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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
    get state(): Context;
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
    watcher(next: unknown, prev: unknown, name: string): void;
    initialize(): void;
    terminate(): void;
    try(open: boolean, silent?: boolean): Promise<boolean>;
    onEscape(event: any): void;
    onClickOutside(): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDialogAttributesBase {
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
  "fullscreen"?: boolean;
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
  "placement"?: PlusDialogPlacement;
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * Determine the width of the dialog.
  */
  "size"?: 'sm' | 'md' | 'lg' | 'xl';
  /**
  * Removes the margin around the dialog's content.
  */
  "sticky"?: boolean;
  /**
  * Deactivate the dialog's backdrop to show or not.
  */
  "transparent"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDialogVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogProperties, "overrides">>;
}
export interface PlusDialogAttributesDisables {}
export type PlusDialogAttributes = Filter<PlusDialogAttributesBase, PlusDialogAttributesDisables>;
export interface PlusDialogEventsBase {
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
export interface PlusDialogEventsDisables {}
export type PlusDialogEvents = Filter<PlusDialogEventsBase, PlusDialogEventsDisables>;
export interface PlusDialogMethodsBase {
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
export interface PlusDialogMethodsDisables {}
export type PlusDialogMethods = Filter<PlusDialogMethodsBase, PlusDialogMethodsDisables>;
export interface PlusDialogPropertiesBase {
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
  fullscreen?: boolean;
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
  placement?: PlusDialogPlacement;
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * Determine the width of the dialog.
  */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
  * Removes the margin around the dialog's content.
  */
  sticky?: boolean;
  /**
  * Deactivate the dialog's backdrop to show or not.
  */
  transparent?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDialogVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogProperties, "overrides">>;
}
export interface PlusDialogPropertiesDisables {}
export type PlusDialogProperties = Filter<PlusDialogPropertiesBase, PlusDialogPropertiesDisables>;
export type PlusDialogAttributesAndEvents = PlusDialogAttributes & PlusDialogEvents;
export interface PlusDialogJSX extends PlusDialogEvents, PlusDialogProperties {}
declare global {
  interface HTMLPlusDialogElement extends HTMLElement, PlusDialogMethods, PlusDialogProperties {}
  var HTMLPlusDialogElement: {
    prototype: HTMLPlusDialogElement;
    new (): HTMLPlusDialogElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog": HTMLPlusDialogElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog": PlusDialogAttributes & PlusDialogEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": PlusDialogAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogElement>, keyof PlusDialogAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": PlusDialogAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogElement>, keyof PlusDialogAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": PlusDialogAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogElement>, keyof PlusDialogAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": PlusDialogAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogElement>, keyof PlusDialogAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": PlusDialogAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogElement>, keyof PlusDialogAttributesAndEvents>;
    }
  }
}
export type PlusDialogElement = globalThis.HTMLPlusDialogElement;
export interface PlusDialogVariantOverrides {}