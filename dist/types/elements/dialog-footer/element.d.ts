import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogFooter extends PlusCore {
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusDialogFooterAttributesMapper = {};
export type PlusDialogFooterOverridableKeys = 'preset';
export interface PlusDialogFooterDisables {}
export interface PlusDialogFooterOverrides {}
export type PlusDialogFooterAttributes = Rename<PlusDialogFooterProperties, PlusDialogFooterAttributesMapper>;
export type PlusDialogFooterAttributesOverridden = Rename<PlusDialogFooterPropertiesOverridden, PlusDialogFooterAttributesMapper>;
export type PlusDialogFooterAttributesBase = Rename<PlusDialogFooterPropertiesBase, PlusDialogFooterAttributesMapper>;
export type PlusDialogFooterEvents = Filter<PlusDialogFooterEventsBase, PlusDialogFooterDisables>;
export type PlusDialogFooterEventsBase = ToEventHandlers<Pick<PlusDialogFooter, PlusDialogFooterEventsKeys>>;
export type PlusDialogFooterEventsKeys = never;
export type PlusDialogFooterEventsJSX = ToJSXEvent<PlusDialogFooterEvents>;
export type PlusDialogFooterEventsBaseJSX = ToJSXEvent<PlusDialogFooterEventsBase>;
export type PlusDialogFooterMethods = Filter<PlusDialogFooterMethodsBase, PlusDialogFooterDisables>;
export type PlusDialogFooterMethodsBase = Pick<PlusDialogFooter, PlusDialogFooterMethodsKeys>;
export type PlusDialogFooterMethodsKeys = never;
export type PlusDialogFooterProperties = Filter<PlusDialogFooterPropertiesOverridden, PlusDialogFooterDisables>;
export type PlusDialogFooterPropertiesOverridden = Override<PlusDialogFooterPropertiesBase, PlusDialogFooterOverrides, PlusDialogFooterOverridableKeys>;
export type PlusDialogFooterPropertiesBase = Pick<PlusDialogFooter, PlusDialogFooterPropertiesKeys>;
export type PlusDialogFooterPropertiesKeys = 'overrides' | 'preset';
export type PlusDialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
export type PlusDialogFooterJSX = PlusDialogFooterAttributes & PlusDialogFooterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-footer": PlusDialogFooterJSX;
  }
}
declare global {
  interface HTMLPlusDialogFooterElement extends HTMLElement, PlusDialogFooterMethods, PlusDialogFooterProperties {}
  var HTMLPlusDialogFooterElement: {
    prototype: HTMLPlusDialogFooterElement;
    new (): HTMLPlusDialogFooterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-footer": HTMLPlusDialogFooterElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-footer': {
      properties: PlusDialogFooterPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogFooterElement>, HTMLPlusDialogFooterElement>, keyof PlusDialogFooterJSX>;
    }
  }
}