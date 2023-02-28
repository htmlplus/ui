/// <reference types="react" />
import { EventEmitter } from '@htmlplus/element';
import { ScrollToTopChangeEvent, ScrollToTopReference } from './scroll-to-top.types';
/**
 * TODO
 * @slot default - The default slot.
 */
export declare class ScrollToTop {
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * TODO
     */
    offset?: number;
    /**
     * Specifies the reference of the scroll.
     */
    reference?: ScrollToTopReference;
    /**
     * TODO
     */
    smooth?: boolean;
    /**
     * TODO
     */
    plusChange: EventEmitter<ScrollToTopChangeEvent>;
    state: ScrollToTopChangeEvent;
    get attributes(): {
        role: string;
        state: ScrollToTopChangeEvent;
    };
    get $host(): HTMLElement;
    get $reference(): Element | (Window & typeof globalThis);
    /**
     * TODO
     */
    scroll(): void;
    bind(): void;
    unbind(): void;
    scrollable(element: Element): boolean;
    onClick(): void;
    onKeyDown(event: any): void;
    onScroll(event: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
