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
    disabled: boolean;
    /**
     * Specifies the space from top.
     */
    top: string | number;
    /**
     * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
     */
    watcher: boolean;
    /**
     * Specifies the z-index.
     */
    zIndex?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * Fires when the state is changed. To enable, set the `watcher` property to `true`.
     */
    plusChange: EventEmitter<PlusStickyState>;
    $sizer: HTMLElement;
    state?: PlusStickyState;
    observer?: IntersectionObserver;
    get style(): {
        ':host': {
            '--plus-sticky-top': string;
            '--plus-sticky-z-index': number;
        };
    };
    initialize(): void;
    terminate(): void;
    onIntersecting(entries: IntersectionObserverEntry[]): void;
    updatedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusStickyAttributesMapper = {
  'zIndex': 'z-index';
};
export type PlusStickyOverridableKeys = 'preset';
export interface PlusStickyDisables {}
export interface PlusStickyOverrides {}
export type PlusStickyAttributes = Rename<PlusStickyProperties, PlusStickyAttributesMapper>;
export type PlusStickyAttributesOverridden = Rename<PlusStickyPropertiesOverridden, PlusStickyAttributesMapper>;
export type PlusStickyAttributesBase = Rename<PlusStickyPropertiesBase, PlusStickyAttributesMapper>;
export type PlusStickyEvents = Filter<PlusStickyEventsBase, PlusStickyDisables>;
export type PlusStickyEventsBase = ToEventHandlers<Pick<PlusSticky, PlusStickyEventsKeys>>;
export type PlusStickyEventsKeys = 'plusChange';
export type PlusStickyEventsJSX = ToJSXEvent<PlusStickyEvents>;
export type PlusStickyEventsBaseJSX = ToJSXEvent<PlusStickyEventsBase>;
export type PlusStickyMethods = Filter<PlusStickyMethodsBase, PlusStickyDisables>;
export type PlusStickyMethodsBase = Pick<PlusSticky, PlusStickyMethodsKeys>;
export type PlusStickyMethodsKeys = never;
export type PlusStickyProperties = Filter<PlusStickyPropertiesOverridden, PlusStickyDisables>;
export type PlusStickyPropertiesOverridden = Override<PlusStickyPropertiesBase, PlusStickyOverrides, PlusStickyOverridableKeys>;
export type PlusStickyPropertiesBase = Pick<PlusSticky, PlusStickyPropertiesKeys>;
export type PlusStickyPropertiesKeys = 'disabled' | 'top' | 'watcher' | 'zIndex' | 'overrides' | 'preset';
export type PlusStickyElement = globalThis.HTMLPlusStickyElement;
export type PlusStickyJSX = PlusStickyAttributes & PlusStickyEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-sticky": PlusStickyJSX;
  }
}
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-sticky': {
      properties: PlusStickyPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusStickyElement>, HTMLPlusStickyElement>, keyof PlusStickyJSX>;
    }
  }
}