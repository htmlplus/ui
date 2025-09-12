import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Animation } from '../../services';
import { Breakpoint } from '../../types';
import { DrawerContext } from './drawer.context';
import { DrawerPlacement } from './drawer.types';
/**
 * This element lets you add collapsible side contents like navigation alongside some primary content.
 *
 * @slot default - The default slot.
 *
 * @examples default
 */
export declare class Drawer extends PlusCore {
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
    placement?: DrawerPlacement;
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
     * TODO
     */
    variant?: OverridableValue<string>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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
    get state(): DrawerContext;
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
    watcher(next: any, prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    try(open: boolean, silent?: boolean): Promise<boolean>;
    onClickOutside(): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface DrawerAttributes {
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
  "placement"?: DrawerPlacement;
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
  * TODO
  */
  "variant"?: OverridableValue<string, DrawerVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DrawerProperties, "overrides">>;
}
export interface DrawerEvents {
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
}
export interface DrawerMethods {
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
export interface DrawerProperties {
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
  placement?: DrawerPlacement;
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
  * TODO
  */
  variant?: OverridableValue<string, DrawerVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DrawerProperties, "overrides">>;
}
export interface DrawerJSX extends DrawerEvents, DrawerProperties {}
declare global {
  interface HTMLPlusDrawerElement extends HTMLElement, DrawerMethods, DrawerProperties {}
  var HTMLPlusDrawerElement: {
    prototype: HTMLPlusDrawerElement;
    new (): HTMLPlusDrawerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-drawer": HTMLPlusDrawerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer": DrawerEvents & DrawerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer": DrawerEvents & DrawerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DrawerElement = globalThis.HTMLPlusDrawerElement;
export interface DrawerVariantOverrides {}