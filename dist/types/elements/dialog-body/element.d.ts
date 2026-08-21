import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogBody extends PlusCore {
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable: boolean;
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
export type PlusDialogBodyAttributesMapper = {};
export type PlusDialogBodyOverridableKeys = 'preset';
export interface PlusDialogBodyDisables {}
export interface PlusDialogBodyOverrides {}
export type PlusDialogBodyAttributes = Rename<PlusDialogBodyProperties, PlusDialogBodyAttributesMapper>;
export type PlusDialogBodyAttributesOverridden = Rename<PlusDialogBodyPropertiesOverridden, PlusDialogBodyAttributesMapper>;
export type PlusDialogBodyAttributesBase = Rename<PlusDialogBodyPropertiesBase, PlusDialogBodyAttributesMapper>;
export type PlusDialogBodyEvents = Filter<PlusDialogBodyEventsBase, PlusDialogBodyDisables>;
export type PlusDialogBodyEventsBase = ToEventHandlers<Pick<PlusDialogBody, PlusDialogBodyEventsKeys>>;
export type PlusDialogBodyEventsKeys = never;
export type PlusDialogBodyEventsJSX = ToJSXEvent<PlusDialogBodyEvents>;
export type PlusDialogBodyEventsBaseJSX = ToJSXEvent<PlusDialogBodyEventsBase>;
export type PlusDialogBodyMethods = Filter<PlusDialogBodyMethodsBase, PlusDialogBodyDisables>;
export type PlusDialogBodyMethodsBase = Pick<PlusDialogBody, PlusDialogBodyMethodsKeys>;
export type PlusDialogBodyMethodsKeys = never;
export type PlusDialogBodyProperties = Filter<PlusDialogBodyPropertiesOverridden, PlusDialogBodyDisables>;
export type PlusDialogBodyPropertiesOverridden = Override<PlusDialogBodyPropertiesBase, PlusDialogBodyOverrides, PlusDialogBodyOverridableKeys>;
export type PlusDialogBodyPropertiesBase = Pick<PlusDialogBody, PlusDialogBodyPropertiesKeys>;
export type PlusDialogBodyPropertiesKeys = 'scrollable' | 'overrides' | 'preset';
export type PlusDialogBodyElement = globalThis.HTMLPlusDialogBodyElement;
export type PlusDialogBodyJSX = PlusDialogBodyAttributes & PlusDialogBodyEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-body": PlusDialogBodyJSX;
  }
}
declare global {
  interface HTMLPlusDialogBodyElement extends HTMLElement, PlusDialogBodyMethods, PlusDialogBodyProperties {}
  var HTMLPlusDialogBodyElement: {
    prototype: HTMLPlusDialogBodyElement;
    new (): HTMLPlusDialogBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-body": HTMLPlusDialogBodyElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-body': {
      properties: PlusDialogBodyPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogBodyElement>, HTMLPlusDialogBodyElement>, keyof PlusDialogBodyJSX>;
    }
  }
}