import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Animation } from '../../services';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
import { PlusDrawerPlacement } from './types';
/**
 * This element lets you add collapsible side contents like navigation alongside some primary content.
 *
 * @slot default - The default slot.
 *
 * @examples default
 */
export declare class PlusDrawer extends PlusCore {
    /**
     * TODO
     */
    animation?: boolean | string;
    /**
     * Activate the drawer's backdrop to show or not. It works when floating is activated.
     */
    backdrop: boolean;
    /**
     * This property helps you to attach which drawer toggler controls the drawer.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector: string;
    /**
     * On default the drawer is considered as a part of the main container.
     * it pushes the other contents on opening.
     * If true it will be opened over other contents and doesn't affect other contents.
     * A floating drawer sits above its application and uses a backdrop to darken the background.
     */
    floating: boolean;
    /**
     * Set the width of drawer to the minimum size you specified for the `mini-size` property.
     */
    mini: boolean;
    /**
     * Sets the minimum width size of the drawer.
     */
    miniSize: number | string;
    /**
     * Control drawer to show or not.
     */
    open: boolean;
    /**
     * If true, don't allow the drawer to be closed by clicking outside of the drawer.
     * If false, the drawer will be closed by clicking outside of it.
     */
    persistent: boolean;
    /**
     * Specifies where the drawer will open.
     */
    placement?: PlusDrawerPlacement;
    /**
     * It controls the flexibility of the drawer's width. If yes, the width of the drawer can be reduced.
     * If false doesn't allow the width of the drawer to reduce.
     */
    flexible: boolean;
    /**
     * Determine the width of the drawer.
     */
    size: number | string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * When the drawer is going to hide
     */
    plusClose: EventEmitter<void>;
    /**
     * When the drawer is completely closed and its animation is completed.
     */
    plusClosed: EventEmitter<void>;
    /**
     * When the drawer is going to show this event triggers
     */
    plusOpen: EventEmitter<void>;
    /**
     * When the drawer is completely shown and its animation is completed.
     */
    plusOpened: EventEmitter<void>;
    $root: HTMLElement;
    get state(): Context;
    animate: {
        main: Animation;
        mini: Animation;
    };
    opened: boolean;
    promise?: Promise<boolean>;
    get classes(): string;
    get hasBackdrop(): boolean;
    get style(): Record<string, string | undefined>;
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
    onClickOutside(): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusDrawerAttributesMapper = {
  'miniSize': 'mini-size';
};
export type PlusDrawerOverridableKeys = 'preset';
export interface PlusDrawerDisables {}
export interface PlusDrawerOverrides {}
export type PlusDrawerAttributes = Rename<PlusDrawerProperties, PlusDrawerAttributesMapper>;
export type PlusDrawerAttributesOverridden = Rename<PlusDrawerPropertiesOverridden, PlusDrawerAttributesMapper>;
export type PlusDrawerAttributesBase = Rename<PlusDrawerPropertiesBase, PlusDrawerAttributesMapper>;
export type PlusDrawerEvents = Filter<PlusDrawerEventsBase, PlusDrawerDisables>;
export type PlusDrawerEventsBase = ToEventHandlers<Pick<PlusDrawer, PlusDrawerEventsKeys>>;
export type PlusDrawerEventsKeys = 'plusClose' | 'plusClosed' | 'plusOpen' | 'plusOpened';
export type PlusDrawerEventsJSX = ToJSXEvent<PlusDrawerEvents>;
export type PlusDrawerEventsBaseJSX = ToJSXEvent<PlusDrawerEventsBase>;
export type PlusDrawerMethods = Filter<PlusDrawerMethodsBase, PlusDrawerDisables>;
export type PlusDrawerMethodsBase = Pick<PlusDrawer, PlusDrawerMethodsKeys>;
export type PlusDrawerMethodsKeys = 'hide' | 'show' | 'toggle';
export type PlusDrawerProperties = Filter<PlusDrawerPropertiesOverridden, PlusDrawerDisables>;
export type PlusDrawerPropertiesOverridden = Override<PlusDrawerPropertiesBase, PlusDrawerOverrides, PlusDrawerOverridableKeys>;
export type PlusDrawerPropertiesBase = Pick<PlusDrawer, PlusDrawerPropertiesKeys>;
export type PlusDrawerPropertiesKeys = 'animation' | 'backdrop' | 'connector' | 'floating' | 'mini' | 'miniSize' | 'open' | 'persistent' | 'placement' | 'flexible' | 'size' | 'overrides' | 'preset';
export type PlusDrawerElement = globalThis.HTMLPlusDrawerElement;
export type PlusDrawerJSX = PlusDrawerAttributes & PlusDrawerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-drawer": PlusDrawerJSX;
  }
}
declare global {
  interface HTMLPlusDrawerElement extends HTMLElement, PlusDrawerMethods, PlusDrawerProperties {}
  var HTMLPlusDrawerElement: {
    prototype: HTMLPlusDrawerElement;
    new (): HTMLPlusDrawerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-drawer": HTMLPlusDrawerElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-drawer': {
      properties: PlusDrawerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer": PlusDrawerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDrawerElement>, HTMLPlusDrawerElement>, keyof PlusDrawerJSX>;
    }
  }
}