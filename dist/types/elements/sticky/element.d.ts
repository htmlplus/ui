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
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusStickyAttributesMapper = {
  'disabled': 'disabled';
  'top': 'top';
  'watcher': 'watcher';
  'zIndex': 'z-index';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusStickyOverridableKeys = 'variant';
export interface PlusStickyDisables {}
export interface PlusStickyOverrides {}
export type PlusStickyAttributes = Filter<PlusStickyAttributesOverridden, PlusStickyDisables, PlusStickyAttributesMapper>;
export type PlusStickyAttributesOverridden = Override<PlusStickyAttributesBase, PlusStickyOverrides, PlusStickyOverridableKeys, PlusStickyAttributesMapper>;
export type PlusStickyAttributesBase = {
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Specifies the space from top.
  */
  "top"?: string | number;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  "watcher"?: boolean;
  /**
  * Specifies the z-index.
  */
  "z-index"?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusStickyProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusStickyEvents = Filter<PlusStickyEventsBase, PlusStickyDisables>;
export type PlusStickyEventsBase = {
  /**
  * Fires when the state is changed. To enable, set the `watcher` property to `true`.
  */
  plusChange?: (event: CustomEvent<PlusStickyState>) => void;
};
export type PlusStickyEventsJSX = Filter<PlusStickyEventsBaseJSX, PlusStickyDisables, {
  plusChange: 'onPlusChange';
}>;
export type PlusStickyEventsBaseJSX = {
  /**
  * Fires when the state is changed. To enable, set the `watcher` property to `true`.
  */
  onPlusChange?: (event: CustomEvent<PlusStickyState>) => void;
};
export type PlusStickyMethods = Filter<PlusStickyMethodsBase, PlusStickyDisables>;
export type PlusStickyMethodsBase = {};
export type PlusStickyProperties = Filter<PlusStickyPropertiesOverridden, PlusStickyDisables>;
export type PlusStickyPropertiesOverridden = Override<PlusStickyPropertiesBase, PlusStickyOverrides, PlusStickyOverridableKeys>;
export type PlusStickyPropertiesBase = {
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Specifies the space from top.
  */
  top?: string | number;
  /**
  * To active `state` attribute, `change` event, `normal` slot, or `stick` slot, Set it to `true`.
  */
  watcher?: boolean;
  /**
  * Specifies the z-index.
  */
  zIndex?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusStickyProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-sticky': {
      properties: PlusStickyPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-sticky": PlusStickyJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusStickyElement>, HTMLPlusStickyElement>, keyof PlusStickyJSX>;
    }
  }
}