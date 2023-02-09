import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
import { Animation } from '@app/services';
import { DrawerBackdrop, DrawerBreakpoint, DrawerPlacement, DrawerPlatform, DrawerTemporary } from './drawer.types';
/**
 * @slot default - The default slot.
 */
export declare class Drawer {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    animation?: string;
    /**
     * Activate the drawer's backdrop to show or not.
     */
    backdrop?: DrawerBackdrop;
    /**
     * Sets the mobile breakpoint to apply alternate styles for mobile devices
     * when the breakpoint value is met.
     */
    breakpoint?: DrawerBreakpoint;
    /**
     * This property helps you to attach which drawer toggler controls the drawer.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * Set the width of drawer to the minimum size you specified for the `mini-size` property.
     */
    mini?: boolean;
    /**
     * Sets the minimum width size of the drawer.
     */
    miniSize?: string;
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
    size?: string;
    /**
     * On default the drawer is considered as a part of the main container.
     * it pushes the other contents on opening.
     * If true it will be opened over other contents and doesn't affect other contents.
     * A temporary drawer sits above its application and uses a backdrop to darken the background.
     */
    temporary?: DrawerTemporary;
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
    platform?: DrawerPlatform;
    $root: HTMLElement;
    animations: {
        open?: Animation;
        mini?: Animation;
    };
    isOpen?: boolean;
    tunnel?: boolean;
    get $host(): HTMLElement;
    get attributes(): {
        platform: DrawerPlatform;
        style: string;
    };
    get classes(): string;
    get hasBackdrop(): boolean;
    get isTemporary(): boolean;
    get styles(): string;
    /**
     * Methods
     */
    hide(): void;
    show(): void;
    toggle(): void;
    /**
     * Internal Methods
     */
    broadcast(value: any): void;
    initialize(): void;
    terminate(): void;
    tryHide(animation: any, silent: any): void;
    tryShow(animation: any, silent: any): void;
    /**
     * Watchers
     */
    watcher(next: any, prev: any, name: any): void;
    /**
     * Events handler
     */
    onHide(): void;
    onShow(): void;
    onMedia(event: any): void;
    onClickOutside(): void;
    /**
     * Lifecycles
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface DrawerJSX {
    /**
     * TODO
     */
    animation?: string;
    /**
     * Activate the drawer's backdrop to show or not.
     */
    backdrop?: DrawerBackdrop;
    /**
     * Sets the mobile breakpoint to apply alternate styles for mobile devices
     * when the breakpoint value is met.
     */
    breakpoint?: DrawerBreakpoint;
    /**
     * This property helps you to attach which drawer toggler controls the drawer.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * Set the width of drawer to the minimum size you specified for the `mini-size` property.
     */
    mini?: boolean;
    /**
     * Sets the minimum width size of the drawer.
     */
    miniSize?: string;
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
    size?: string;
    /**
     * On default the drawer is considered as a part of the main container.
     * it pushes the other contents on opening.
     * If true it will be opened over other contents and doesn't affect other contents.
     * A temporary drawer sits above its application and uses a backdrop to darken the background.
     */
    temporary?: DrawerTemporary;
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
declare global {
    interface HTMLPlusDrawerElement extends HTMLElement {
        /**
         * TODO
         */
        animation?: string;
        /**
         * Activate the drawer's backdrop to show or not.
         */
        backdrop?: DrawerBackdrop;
        /**
         * Sets the mobile breakpoint to apply alternate styles for mobile devices
         * when the breakpoint value is met.
         */
        breakpoint?: DrawerBreakpoint;
        /**
         * This property helps you to attach which drawer toggler controls the drawer.
         * It doesn't matter where the drawer toggler is.
         * You can put the drawer's toggler inside or outside of the drawer.
         * Read more about connectors [here](/connector).
         */
        connector?: string;
        /**
         * Set the width of drawer to the minimum size you specified for the `mini-size` property.
         */
        mini?: boolean;
        /**
         * Sets the minimum width size of the drawer.
         */
        miniSize?: string;
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
        size?: string;
        /**
         * On default the drawer is considered as a part of the main container.
         * it pushes the other contents on opening.
         * If true it will be opened over other contents and doesn't affect other contents.
         * A temporary drawer sits above its application and uses a backdrop to darken the background.
         */
        temporary?: DrawerTemporary;
    }
    var HTMLPlusDrawerElement: {
        prototype: HTMLPlusDrawerElement;
        new (): HTMLPlusDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-drawer": HTMLPlusDrawerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-drawer": DrawerJSX & {
                [key: string]: any;
            };
        }
    }
}