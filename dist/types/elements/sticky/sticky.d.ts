import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { StickyState, StickyTop } from './sticky.types';
/**
 * @stable
 *
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 */
export declare class Sticky extends PlusCore {
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
    $sizer: HTMLElement;
    state?: StickyState;
    observer?: IntersectionObserver;
    get style(): {
        top: string;
        'z-index': number;
    };
    get sizer(): {
        top: string;
    };
    watchers(next: any, prev: any, key: any): void;
    initialize(): void;
    terminate(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface StickyAttributes {
  /**
  * Specifies the space from top.
  */
  "top"?: StickyTop;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  "watcher"?: boolean;
  /**
  * Specifies the z-index.
  */
  "z-index"?: number;
}
export interface StickyEvents {
  /**
  * Fires when the state is changed. To enable, set the `watcher` property to `true`.
  */
  onPlusChange?: (event: CustomEvent<StickyState>) => void;
}
export interface StickyMethods {}
export interface StickyProperties {
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
export interface StickyJSX extends StickyEvents, StickyProperties {}
declare global {
  interface HTMLPlusStickyElement extends HTMLElement, StickyMethods, StickyProperties {}
  var HTMLPlusStickyElement: {
    prototype: HTMLPlusStickyElement;
    new (): HTMLPlusStickyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-sticky": HTMLPlusStickyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": StickyEvents & StickyAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type StickyElement = globalThis.HTMLPlusStickyElement;