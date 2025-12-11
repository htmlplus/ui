import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { StickyState, StickyTop } from './sticky.types';
/**
 * Element content is positioned based on the user's scroll position.
 *
 * @stable
 *
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 *
 * @examples default, top, contacts, state-attribute, slots, sidebar
 */
export declare class Sticky extends PlusCore {
    /**
     * Specifies the space from top.
     */
    top?: StickyTop;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
     */
    watcher?: boolean;
    /**
     * Specifies the z-index.
     */
    zIndex?: number;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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
        top?: undefined;
    } | {
        top: string;
    };
    watchers(next: any, _prev: any, key: any): void;
    initialize(): void;
    terminate(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    readyCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface StickyAttributesBase {
  /**
  * Specifies the space from top.
  */
  "top"?: StickyTop;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, StickyVariantOverrides>;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  "watcher"?: boolean;
  /**
  * Specifies the z-index.
  */
  "z-index"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<StickyProperties, "overrides">>;
}
export interface StickyAttributesDisables {}
export type StickyAttributes = Filter<StickyAttributesBase, StickyAttributesDisables>;
export interface StickyEventsBase {
  /**
  * Fires when the state is changed. To enable, set the `watcher` property to `true`.
  */
  onPlusChange?: (event: CustomEvent<StickyState>) => void;
}
export interface StickyEventsDisables {}
export type StickyEvents = Filter<StickyEventsBase, StickyEventsDisables>;
export interface StickyMethodsBase {}
export interface StickyMethodsDisables {}
export type StickyMethods = Filter<StickyMethodsBase, StickyMethodsDisables>;
export interface StickyPropertiesBase {
  /**
  * Specifies the space from top.
  */
  top?: StickyTop;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, StickyVariantOverrides>;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  watcher?: boolean;
  /**
  * Specifies the z-index.
  */
  zIndex?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<StickyProperties, "overrides">>;
}
export interface StickyPropertiesDisables {}
export type StickyProperties = Filter<StickyPropertiesBase, StickyPropertiesDisables>;
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
      "plus-sticky": StickyEvents & StickyAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (StickyEvents & StickyAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": StickyEvents & StickyAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (StickyEvents & StickyAttributes)>;
    }
  }
}
export type StickyElement = globalThis.HTMLPlusStickyElement;
export interface StickyVariantOverrides {}