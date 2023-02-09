import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
import { StickyState, StickyTop } from './sticky.types';
/**
 * @stable
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 */
export declare class Sticky {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the space from top.
     */
    top?: StickyTop;
    /**
     * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
     */
    watcher?: boolean;
    /**
     * Specifies the z-index.
     */
    zIndex?: number;
    /**
     * Fires when the state is changed. To enable, set the `watcher` property to `true`.
     */
    plusChange: EventEmitter<StickyState>;
    $element: HTMLElement;
    state?: StickyState;
    observer?: IntersectionObserver;
    get attributes(): {
        state: StickyState;
        style: string;
    };
    get sizer(): {
        top: string;
    };
    get style(): string;
    bind(): void;
    unbind(): void;
    watchers(next: any, prev: any, key: any): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): uhtml.Hole;
}
export interface StickyJSX {
    /**
     * Specifies the space from top.
     */
    top?: StickyTop;
    /**
     * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
     */
    watcher?: boolean;
    /**
     * Specifies the z-index.
     */
    zIndex?: number;
    /**
     * Fires when the state is changed. To enable, set the `watcher` property to `true`.
     */
    onPlusChange?: (event: CustomEvent<StickyState>) => void;
}
declare global {
    interface HTMLPlusStickyElement extends HTMLElement {
        /**
         * Specifies the space from top.
         */
        top?: StickyTop;
        /**
         * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
         */
        watcher?: boolean;
        /**
         * Specifies the z-index.
         */
        zIndex?: number;
    }
    var HTMLPlusStickyElement: {
        prototype: HTMLPlusStickyElement;
        new (): HTMLPlusStickyElement;
    };
    interface HTMLElementTagNameMap {
        "plus-sticky": HTMLPlusStickyElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-sticky": StickyJSX & {
                [key: string]: any;
            };
        }
    }
}
