import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { PlusStickyState } from './types';
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
export declare class PlusSticky extends PlusCore {
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * Specifies the space from top.
     */
    top?: string | number;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
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
    plusChange: EventEmitter<PlusStickyState>;
    $sizer: HTMLElement;
    state?: PlusStickyState;
    observer?: IntersectionObserver;
    get style(): {
        '--plus-sticky-top': string;
        '--plus-sticky-z-index': number;
    };
    initialize(): void;
    terminate(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    updatedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusStickyAttributesBase {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusStickyProperties, "overrides">>;
  /**
  * Specifies the space from top.
  */
  "top"?: string | number;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusStickyVariantOverrides>;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  "watcher"?: boolean;
  /**
  * Specifies the z-index.
  */
  "z-index"?: number;
}
export interface PlusStickyAttributesDisables {}
export type PlusStickyAttributes = Filter<PlusStickyAttributesBase, PlusStickyAttributesDisables>;
export interface PlusStickyEventsBase {
  /**
  * Fires when the state is changed. To enable, set the `watcher` property to `true`.
  */
  onPlusChange?: (event: CustomEvent<PlusStickyState>) => void;
}
export interface PlusStickyEventsDisables {}
export type PlusStickyEvents = Filter<PlusStickyEventsBase, PlusStickyEventsDisables>;
export interface PlusStickyMethodsBase {}
export interface PlusStickyMethodsDisables {}
export type PlusStickyMethods = Filter<PlusStickyMethodsBase, PlusStickyMethodsDisables>;
export interface PlusStickyPropertiesBase {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusStickyProperties, "overrides">>;
  /**
  * Specifies the space from top.
  */
  top?: string | number;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusStickyVariantOverrides>;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  watcher?: boolean;
  /**
  * Specifies the z-index.
  */
  zIndex?: number;
}
export interface PlusStickyPropertiesDisables {}
export type PlusStickyProperties = Filter<PlusStickyPropertiesBase, PlusStickyPropertiesDisables>;
export interface PlusStickyJSX extends PlusStickyEvents, PlusStickyProperties {}
declare global {
  interface HTMLPlusStickyElement extends HTMLElement, PlusStickyMethods, PlusStickyProperties {}
  var HTMLPlusStickyElement: {
    prototype: HTMLPlusStickyElement;
    new (): HTMLPlusStickyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-sticky": HTMLPlusStickyElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-sticky": PlusStickyAttributes & PlusStickyEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyAttributes & PlusStickyEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusStickyElement>, HTMLPlusStickyElement>, keyof (PlusStickyAttributes & PlusStickyEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyAttributes & PlusStickyEvents & Omit<HTMLAttributes<HTMLPlusStickyElement>, keyof (PlusStickyAttributes & PlusStickyEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyAttributes & PlusStickyEvents & Omit<HTMLAttributes<HTMLPlusStickyElement>, keyof (PlusStickyAttributes & PlusStickyEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyAttributes & PlusStickyEvents & Omit<HTMLAttributes<HTMLPlusStickyElement>, keyof (PlusStickyAttributes & PlusStickyEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyAttributes & PlusStickyEvents & Omit<HTMLAttributes<HTMLPlusStickyElement>, keyof (PlusStickyAttributes & PlusStickyEvents)>;
    }
  }
}
export type PlusStickyElement = globalThis.HTMLPlusStickyElement;
export interface PlusStickyVariantOverrides {}