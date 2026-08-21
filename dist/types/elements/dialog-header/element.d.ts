import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogHeader extends PlusCore {
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
export type PlusDialogHeaderAttributesMapper = {};
export type PlusDialogHeaderOverridableKeys = 'preset';
export interface PlusDialogHeaderDisables {}
export interface PlusDialogHeaderOverrides {}
export type PlusDialogHeaderAttributes = Rename<PlusDialogHeaderProperties, PlusDialogHeaderAttributesMapper>;
export type PlusDialogHeaderAttributesOverridden = Rename<PlusDialogHeaderPropertiesOverridden, PlusDialogHeaderAttributesMapper>;
export type PlusDialogHeaderAttributesBase = Rename<PlusDialogHeaderPropertiesBase, PlusDialogHeaderAttributesMapper>;
export type PlusDialogHeaderEvents = Filter<PlusDialogHeaderEventsBase, PlusDialogHeaderDisables>;
export type PlusDialogHeaderEventsBase = ToEventHandlers<Pick<PlusDialogHeader, PlusDialogHeaderEventsKeys>>;
export type PlusDialogHeaderEventsKeys = never;
export type PlusDialogHeaderEventsJSX = ToJSXEvent<PlusDialogHeaderEvents>;
export type PlusDialogHeaderEventsBaseJSX = ToJSXEvent<PlusDialogHeaderEventsBase>;
export type PlusDialogHeaderMethods = Filter<PlusDialogHeaderMethodsBase, PlusDialogHeaderDisables>;
export type PlusDialogHeaderMethodsBase = Pick<PlusDialogHeader, PlusDialogHeaderMethodsKeys>;
export type PlusDialogHeaderMethodsKeys = never;
export type PlusDialogHeaderProperties = Filter<PlusDialogHeaderPropertiesOverridden, PlusDialogHeaderDisables>;
export type PlusDialogHeaderPropertiesOverridden = Override<PlusDialogHeaderPropertiesBase, PlusDialogHeaderOverrides, PlusDialogHeaderOverridableKeys>;
export type PlusDialogHeaderPropertiesBase = Pick<PlusDialogHeader, PlusDialogHeaderPropertiesKeys>;
export type PlusDialogHeaderPropertiesKeys = 'overrides' | 'preset';
export type PlusDialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;
export type PlusDialogHeaderJSX = PlusDialogHeaderAttributes & PlusDialogHeaderEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-header": PlusDialogHeaderJSX;
  }
}
declare global {
  interface HTMLPlusDialogHeaderElement extends HTMLElement, PlusDialogHeaderMethods, PlusDialogHeaderProperties {}
  var HTMLPlusDialogHeaderElement: {
    prototype: HTMLPlusDialogHeaderElement;
    new (): HTMLPlusDialogHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-header": HTMLPlusDialogHeaderElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-header': {
      properties: PlusDialogHeaderPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": PlusDialogHeaderJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogHeaderElement>, HTMLPlusDialogHeaderElement>, keyof PlusDialogHeaderJSX>;
    }
  }
}