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
    backdrop?: boolean;
    /**
     * This property helps you to attach which drawer toggler controls the drawer.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * On default the drawer is considered as a part of the main container.
     * it pushes the other contents on opening.
     * If true it will be opened over other contents and doesn't affect other contents.
     * A floating drawer sits above its application and uses a backdrop to darken the background.
     */
    floating?: boolean;
    /**
     * Set the width of drawer to the minimum size you specified for the `mini-size` property.
     */
    mini?: boolean;
    /**
     * Sets the minimum width size of the drawer.
     */
    miniSize?: number | string;
    /**
     * Control drawer to show or not.
     */
    open?: boolean;
    /**
     * If true, don't allow the drawer to be closed by clicking outside of the drawer.
     * If false, the drawer will be closed by clicking outside of it.
     */
    persistent?: boolean;
    /**
     * Specifies where the drawer will open.
     */
    placement?: PlusDrawerPlacement;
    /**
     * It controls the flexibility of the drawer's width. If yes, the width of the drawer can be reduced.
     * If false doesn't allow the width of the drawer to reduce.
     */
    flexible?: boolean;
    /**
     * Determine the width of the drawer.
     */
    size?: number | string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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
    get style(): Record<string, string>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDrawerAttributesMapper = {
  'animation': 'animation';
  'backdrop': 'backdrop';
  'connector': 'connector';
  'floating': 'floating';
  'mini': 'mini';
  'miniSize': 'mini-size';
  'open': 'open';
  'persistent': 'persistent';
  'placement': 'placement';
  'flexible': 'flexible';
  'size': 'size';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDrawerOverridableKeys = 'variant';
export interface PlusDrawerDisables {}
export interface PlusDrawerOverrides {}
export type PlusDrawerAttributes = Filter<PlusDrawerAttributesOverridden, PlusDrawerDisables, PlusDrawerAttributesMapper>;
export type PlusDrawerAttributesOverridden = Override<PlusDrawerAttributesBase, PlusDrawerOverrides, PlusDrawerOverridableKeys, PlusDrawerAttributesMapper>;
export type PlusDrawerAttributesBase = {
  /**
  * TODO
  */
  "animation"?: boolean | string;
  /**
  * Activate the drawer's backdrop to show or not. It works when floating is activated.
  */
  "backdrop"?: boolean;
  /**
  * This property helps you to attach which drawer toggler controls the drawer.
  * It doesn't matter where the drawer toggler is.
  * You can put the drawer's toggler inside or outside of the drawer.
  * Read more about connectors [here](/connector).
  */
  "connector"?: string;
  /**
  * On default the drawer is considered as a part of the main container.
  * it pushes the other contents on opening.
  * If true it will be opened over other contents and doesn't affect other contents.
  * A floating drawer sits above its application and uses a backdrop to darken the background.
  */
  "floating"?: boolean;
  /**
  * Set the width of drawer to the minimum size you specified for the `mini-size` property.
  */
  "mini"?: boolean;
  /**
  * Sets the minimum width size of the drawer.
  */
  "mini-size"?: number | string;
  /**
  * Control drawer to show or not.
  */
  "open"?: boolean;
  /**
  * If true, don't allow the drawer to be closed by clicking outside of the drawer.
  * If false, the drawer will be closed by clicking outside of it.
  */
  "persistent"?: boolean;
  /**
  * Specifies where the drawer will open.
  */
  "placement"?: PlusDrawerPlacement;
  /**
  * It controls the flexibility of the drawer's width. If yes, the width of the drawer can be reduced.
  * If false doesn't allow the width of the drawer to reduce.
  */
  "flexible"?: boolean;
  /**
  * Determine the width of the drawer.
  */
  "size"?: number | string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDrawerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDrawerEvents = Filter<PlusDrawerEventsBase, PlusDrawerDisables>;
export type PlusDrawerEventsBase = {
  /**
  * When the drawer is going to hide
  */
  plusClose?: (event: CustomEvent<void>) => void;
  /**
  * When the drawer is completely closed and its animation is completed.
  */
  plusClosed?: (event: CustomEvent<void>) => void;
  /**
  * When the drawer is going to show this event triggers
  */
  plusOpen?: (event: CustomEvent<void>) => void;
  /**
  * When the drawer is completely shown and its animation is completed.
  */
  plusOpened?: (event: CustomEvent<void>) => void;
};
export type PlusDrawerEventsJSX = Filter<PlusDrawerEventsBaseJSX, PlusDrawerDisables, {
  plusClose: 'onPlusClose';
  plusClosed: 'onPlusClosed';
  plusOpen: 'onPlusOpen';
  plusOpened: 'onPlusOpened';
}>;
export type PlusDrawerEventsBaseJSX = {
  /**
  * When the drawer is going to hide
  */
  onPlusClose?: (event: CustomEvent<void>) => void;
  /**
  * When the drawer is completely closed and its animation is completed.
  */
  onPlusClosed?: (event: CustomEvent<void>) => void;
  /**
  * When the drawer is going to show this event triggers
  */
  onPlusOpen?: (event: CustomEvent<void>) => void;
  /**
  * When the drawer is completely shown and its animation is completed.
  */
  onPlusOpened?: (event: CustomEvent<void>) => void;
};
export type PlusDrawerMethods = Filter<PlusDrawerMethodsBase, PlusDrawerDisables>;
export type PlusDrawerMethodsBase = {
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
export type PlusDrawerProperties = Filter<PlusDrawerPropertiesOverridden, PlusDrawerDisables>;
export type PlusDrawerPropertiesOverridden = Override<PlusDrawerPropertiesBase, PlusDrawerOverrides, PlusDrawerOverridableKeys>;
export type PlusDrawerPropertiesBase = {
  /**
  * TODO
  */
  animation?: boolean | string;
  /**
  * Activate the drawer's backdrop to show or not. It works when floating is activated.
  */
  backdrop?: boolean;
  /**
  * This property helps you to attach which drawer toggler controls the drawer.
  * It doesn't matter where the drawer toggler is.
  * You can put the drawer's toggler inside or outside of the drawer.
  * Read more about connectors [here](/connector).
  */
  connector?: string;
  /**
  * On default the drawer is considered as a part of the main container.
  * it pushes the other contents on opening.
  * If true it will be opened over other contents and doesn't affect other contents.
  * A floating drawer sits above its application and uses a backdrop to darken the background.
  */
  floating?: boolean;
  /**
  * Set the width of drawer to the minimum size you specified for the `mini-size` property.
  */
  mini?: boolean;
  /**
  * Sets the minimum width size of the drawer.
  */
  miniSize?: number | string;
  /**
  * Control drawer to show or not.
  */
  open?: boolean;
  /**
  * If true, don't allow the drawer to be closed by clicking outside of the drawer.
  * If false, the drawer will be closed by clicking outside of it.
  */
  persistent?: boolean;
  /**
  * Specifies where the drawer will open.
  */
  placement?: PlusDrawerPlacement;
  /**
  * It controls the flexibility of the drawer's width. If yes, the width of the drawer can be reduced.
  * If false doesn't allow the width of the drawer to reduce.
  */
  flexible?: boolean;
  /**
  * Determine the width of the drawer.
  */
  size?: number | string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDrawerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-drawer': {
      properties: PlusDrawerPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer": PlusDrawerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDrawerElement>, HTMLPlusDrawerElement>, keyof PlusDrawerJSX>;
    }
  }
}