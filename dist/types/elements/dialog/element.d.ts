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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDialogAttributesMapper = {
  'animation': 'animation';
  'connector': 'connector';
  'fullHeight': 'full-height';
  'fullWidth': 'full-width';
  'fullscreen': 'fullscreen';
  'keyboard': 'keyboard';
  'open': 'open';
  'persistent': 'persistent';
  'placement': 'placement';
  'scrollable': 'scrollable';
  'size': 'size';
  'sticky': 'sticky';
  'transparent': 'transparent';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDialogOverridableKeys = 'variant';
export interface PlusDialogDisables {}
export interface PlusDialogOverrides {}
export type PlusDialogAttributes = Filter<PlusDialogAttributesOverridden, PlusDialogDisables, PlusDialogAttributesMapper>;
export type PlusDialogAttributesOverridden = Override<PlusDialogAttributesBase, PlusDialogOverrides, PlusDialogOverridableKeys, PlusDialogAttributesMapper>;
export type PlusDialogAttributesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDialogEvents = Filter<PlusDialogEventsBase, PlusDialogDisables>;
export type PlusDialogEventsBase = {
  /**
  * When the dialog is going to hide
  */
  plusClose?: (event: CustomEvent<void>) => void;
  /**
  * When the dialog is completely closed and its animation is completed.
  */
  plusClosed?: (event: CustomEvent<void>) => void;
  /**
  * When the dialog is going to show this event triggers
  */
  plusOpen?: (event: CustomEvent<void>) => void;
  /**
  * When the dialog is completely shown and its animation is completed.
  */
  plusOpened?: (event: CustomEvent<void>) => void;
};
export type PlusDialogEventsJSX = Filter<PlusDialogEventsBaseJSX, PlusDialogDisables, {
  plusClose: 'onPlusClose';
  plusClosed: 'onPlusClosed';
  plusOpen: 'onPlusOpen';
  plusOpened: 'onPlusOpened';
}>;
export type PlusDialogEventsBaseJSX = {
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
};
export type PlusDialogMethods = Filter<PlusDialogMethodsBase, PlusDialogDisables>;
export type PlusDialogMethodsBase = {
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
};
export type PlusDialogProperties = Filter<PlusDialogPropertiesOverridden, PlusDialogDisables>;
export type PlusDialogPropertiesOverridden = Override<PlusDialogPropertiesBase, PlusDialogOverrides, PlusDialogOverridableKeys>;
export type PlusDialogPropertiesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog': {
      properties: PlusDialogPropertiesOverridden;
    };
  }
}
export type PlusDialogElement = globalThis.HTMLPlusDialogElement;
export type PlusDialogJSX = PlusDialogAttributes & PlusDialogEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog": PlusDialogJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog": PlusDialogJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogElement>, HTMLPlusDialogElement>, keyof PlusDialogJSX>;
    }
  }
}