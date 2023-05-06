import { EventEmitter } from '@htmlplus/element';
import { Animation } from '@app/services';
import { ToastPlacement, ToastType } from './toast.types';
/**
 * @development
 * @slot default - The default slot.
 */
export declare class Toast {
    /**
     * TODO
     *
     * preventDuplicates
     * icon
     * closeButton/dismissable - Dismiss on click
     * override/queue/queueable/Wait for previous to dismiss before showing new/One notification at a time
     * fixed
     * offset/gutter
     * progress
     *
     * https://izitoast.marcelodolza.com/
     * https://vuetifyjs.com/en/components/snackbars/
     */
    /**
     * TODO
     */
    animation?: string;
    /**
     * This property helps you to attach which toast toggler controls the toast.
     * It doesn't matter where the toast toggler is.
     * You can put the toast's toggler inside or outside of the toast.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * TODO
     */
    duration?: number;
    /**
     * TODO
     */
    fullWidth?: boolean;
    /**
     * TODO
     */
    open?: boolean;
    /**
     * TODO
     */
    persistent?: boolean;
    /**
     * TODO
     */
    placement?: ToastPlacement;
    /**
     * TODO
     */
    reverse?: boolean;
    /**
     * TODO
     */
    type?: ToastType;
    /**
     * TODO
     */
    plusClose: EventEmitter<void>;
    /**
     * TODO
     */
    plusClosed: EventEmitter<void>;
    /**
     * TODO
     */
    plusOpen: EventEmitter<void>;
    /**
     * TODO
     */
    plusOpened: EventEmitter<void>;
    static instances: any[];
    $root: HTMLElement;
    animate?: Animation;
    isOpen?: boolean;
    timeout?: any;
    tunnel?: boolean;
    get $host(): HTMLElement;
    get attributes(): {};
    get classes(): string;
    get isCurrent(): boolean;
    get zIndex(): string;
    /**
     * External Methods
     */
    hide(): void;
    show(): void;
    toggle(): void;
    /**
     * Internal Methods
     */
    adjust(): void;
    broadcast(value: any): void;
    coordinate(instance: any): {
        x: any;
        y: any;
    };
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
    /**
     * Lifecycles
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}
