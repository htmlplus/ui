import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogContent extends PlusCore {
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
export type PlusDialogContentAttributesMapper = {};
export type PlusDialogContentOverridableKeys = 'preset';
export interface PlusDialogContentDisables {}
export interface PlusDialogContentOverrides {}
export type PlusDialogContentAttributes = Rename<PlusDialogContentProperties, PlusDialogContentAttributesMapper>;
export type PlusDialogContentAttributesOverridden = Rename<PlusDialogContentPropertiesOverridden, PlusDialogContentAttributesMapper>;
export type PlusDialogContentAttributesBase = Rename<PlusDialogContentPropertiesBase, PlusDialogContentAttributesMapper>;
export type PlusDialogContentEvents = Filter<PlusDialogContentEventsBase, PlusDialogContentDisables>;
export type PlusDialogContentEventsBase = ToEventHandlers<Pick<PlusDialogContent, PlusDialogContentEventsKeys>>;
export type PlusDialogContentEventsKeys = never;
export type PlusDialogContentEventsJSX = ToJSXEvent<PlusDialogContentEvents>;
export type PlusDialogContentEventsBaseJSX = ToJSXEvent<PlusDialogContentEventsBase>;
export type PlusDialogContentMethods = Filter<PlusDialogContentMethodsBase, PlusDialogContentDisables>;
export type PlusDialogContentMethodsBase = Pick<PlusDialogContent, PlusDialogContentMethodsKeys>;
export type PlusDialogContentMethodsKeys = never;
export type PlusDialogContentProperties = Filter<PlusDialogContentPropertiesOverridden, PlusDialogContentDisables>;
export type PlusDialogContentPropertiesOverridden = Override<PlusDialogContentPropertiesBase, PlusDialogContentOverrides, PlusDialogContentOverridableKeys>;
export type PlusDialogContentPropertiesBase = Pick<PlusDialogContent, PlusDialogContentPropertiesKeys>;
export type PlusDialogContentPropertiesKeys = 'scrollable' | 'overrides' | 'preset';
export type PlusDialogContentElement = globalThis.HTMLPlusDialogContentElement;
export type PlusDialogContentJSX = PlusDialogContentAttributes & PlusDialogContentEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-content": PlusDialogContentJSX;
  }
}
declare global {
  interface HTMLPlusDialogContentElement extends HTMLElement, PlusDialogContentMethods, PlusDialogContentProperties {}
  var HTMLPlusDialogContentElement: {
    prototype: HTMLPlusDialogContentElement;
    new (): HTMLPlusDialogContentElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-content": HTMLPlusDialogContentElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-content': {
      properties: PlusDialogContentPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogContentElement>, HTMLPlusDialogContentElement>, keyof PlusDialogContentJSX>;
    }
  }
}