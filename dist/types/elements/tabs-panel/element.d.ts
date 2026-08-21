import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../tabs/context';
/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsPanel extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    parent?: Context;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusTabsPanelAttributesMapper = {};
export type PlusTabsPanelOverridableKeys = 'preset';
export interface PlusTabsPanelDisables {}
export interface PlusTabsPanelOverrides {}
export type PlusTabsPanelAttributes = Rename<PlusTabsPanelProperties, PlusTabsPanelAttributesMapper>;
export type PlusTabsPanelAttributesOverridden = Rename<PlusTabsPanelPropertiesOverridden, PlusTabsPanelAttributesMapper>;
export type PlusTabsPanelAttributesBase = Rename<PlusTabsPanelPropertiesBase, PlusTabsPanelAttributesMapper>;
export type PlusTabsPanelEvents = Filter<PlusTabsPanelEventsBase, PlusTabsPanelDisables>;
export type PlusTabsPanelEventsBase = ToEventHandlers<Pick<PlusTabsPanel, PlusTabsPanelEventsKeys>>;
export type PlusTabsPanelEventsKeys = never;
export type PlusTabsPanelEventsJSX = ToJSXEvent<PlusTabsPanelEvents>;
export type PlusTabsPanelEventsBaseJSX = ToJSXEvent<PlusTabsPanelEventsBase>;
export type PlusTabsPanelMethods = Filter<PlusTabsPanelMethodsBase, PlusTabsPanelDisables>;
export type PlusTabsPanelMethodsBase = Pick<PlusTabsPanel, PlusTabsPanelMethodsKeys>;
export type PlusTabsPanelMethodsKeys = never;
export type PlusTabsPanelProperties = Filter<PlusTabsPanelPropertiesOverridden, PlusTabsPanelDisables>;
export type PlusTabsPanelPropertiesOverridden = Override<PlusTabsPanelPropertiesBase, PlusTabsPanelOverrides, PlusTabsPanelOverridableKeys>;
export type PlusTabsPanelPropertiesBase = Pick<PlusTabsPanel, PlusTabsPanelPropertiesKeys>;
export type PlusTabsPanelPropertiesKeys = 'value' | 'active' | 'overrides' | 'preset';
export type PlusTabsPanelElement = globalThis.HTMLPlusTabsPanelElement;
export type PlusTabsPanelJSX = PlusTabsPanelAttributes & PlusTabsPanelEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-panel": PlusTabsPanelJSX;
  }
}
declare global {
  interface HTMLPlusTabsPanelElement extends HTMLElement, PlusTabsPanelMethods, PlusTabsPanelProperties {}
  var HTMLPlusTabsPanelElement: {
    prototype: HTMLPlusTabsPanelElement;
    new (): HTMLPlusTabsPanelElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panel": HTMLPlusTabsPanelElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-panel': {
      properties: PlusTabsPanelPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panel": PlusTabsPanelJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsPanelElement>, HTMLPlusTabsPanelElement>, keyof PlusTabsPanelJSX>;
    }
  }
}