import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../drawer/context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class PlusDrawerToggler extends PlusCore {
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    drawer?: Context;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusDrawerTogglerAttributesMapper = {};
export type PlusDrawerTogglerOverridableKeys = 'preset';
export interface PlusDrawerTogglerDisables {}
export interface PlusDrawerTogglerOverrides {}
export type PlusDrawerTogglerAttributes = Rename<PlusDrawerTogglerProperties, PlusDrawerTogglerAttributesMapper>;
export type PlusDrawerTogglerAttributesOverridden = Rename<PlusDrawerTogglerPropertiesOverridden, PlusDrawerTogglerAttributesMapper>;
export type PlusDrawerTogglerAttributesBase = Rename<PlusDrawerTogglerPropertiesBase, PlusDrawerTogglerAttributesMapper>;
export type PlusDrawerTogglerEvents = Filter<PlusDrawerTogglerEventsBase, PlusDrawerTogglerDisables>;
export type PlusDrawerTogglerEventsBase = ToEventHandlers<Pick<PlusDrawerToggler, PlusDrawerTogglerEventsKeys>>;
export type PlusDrawerTogglerEventsKeys = never;
export type PlusDrawerTogglerEventsJSX = ToJSXEvent<PlusDrawerTogglerEvents>;
export type PlusDrawerTogglerEventsBaseJSX = ToJSXEvent<PlusDrawerTogglerEventsBase>;
export type PlusDrawerTogglerMethods = Filter<PlusDrawerTogglerMethodsBase, PlusDrawerTogglerDisables>;
export type PlusDrawerTogglerMethodsBase = Pick<PlusDrawerToggler, PlusDrawerTogglerMethodsKeys>;
export type PlusDrawerTogglerMethodsKeys = never;
export type PlusDrawerTogglerProperties = Filter<PlusDrawerTogglerPropertiesOverridden, PlusDrawerTogglerDisables>;
export type PlusDrawerTogglerPropertiesOverridden = Override<PlusDrawerTogglerPropertiesBase, PlusDrawerTogglerOverrides, PlusDrawerTogglerOverridableKeys>;
export type PlusDrawerTogglerPropertiesBase = Pick<PlusDrawerToggler, PlusDrawerTogglerPropertiesKeys>;
export type PlusDrawerTogglerPropertiesKeys = 'connector' | 'overrides' | 'preset';
export type PlusDrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
export type PlusDrawerTogglerJSX = PlusDrawerTogglerAttributes & PlusDrawerTogglerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-drawer-toggler": PlusDrawerTogglerJSX;
  }
}
declare global {
  interface HTMLPlusDrawerTogglerElement extends HTMLElement, PlusDrawerTogglerMethods, PlusDrawerTogglerProperties {}
  var HTMLPlusDrawerTogglerElement: {
    prototype: HTMLPlusDrawerTogglerElement;
    new (): HTMLPlusDrawerTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-drawer-toggler": HTMLPlusDrawerTogglerElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-drawer-toggler': {
      properties: PlusDrawerTogglerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-drawer-toggler": PlusDrawerTogglerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDrawerTogglerElement>, HTMLPlusDrawerTogglerElement>, keyof PlusDrawerTogglerJSX>;
    }
  }
}