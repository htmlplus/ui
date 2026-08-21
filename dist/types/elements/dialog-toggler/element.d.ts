import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../dialog/context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class PlusDialogToggler extends PlusCore {
    /**
     * This property helps you to attach which dialog this toggler controls.
     * It doesn't matter where the dialog toggler is.
     * You can put the dialog's toggler inside or outside of the dialog.
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
    dialog?: Context;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusDialogTogglerAttributesMapper = {};
export type PlusDialogTogglerOverridableKeys = 'preset';
export interface PlusDialogTogglerDisables {}
export interface PlusDialogTogglerOverrides {}
export type PlusDialogTogglerAttributes = Rename<PlusDialogTogglerProperties, PlusDialogTogglerAttributesMapper>;
export type PlusDialogTogglerAttributesOverridden = Rename<PlusDialogTogglerPropertiesOverridden, PlusDialogTogglerAttributesMapper>;
export type PlusDialogTogglerAttributesBase = Rename<PlusDialogTogglerPropertiesBase, PlusDialogTogglerAttributesMapper>;
export type PlusDialogTogglerEvents = Filter<PlusDialogTogglerEventsBase, PlusDialogTogglerDisables>;
export type PlusDialogTogglerEventsBase = ToEventHandlers<Pick<PlusDialogToggler, PlusDialogTogglerEventsKeys>>;
export type PlusDialogTogglerEventsKeys = never;
export type PlusDialogTogglerEventsJSX = ToJSXEvent<PlusDialogTogglerEvents>;
export type PlusDialogTogglerEventsBaseJSX = ToJSXEvent<PlusDialogTogglerEventsBase>;
export type PlusDialogTogglerMethods = Filter<PlusDialogTogglerMethodsBase, PlusDialogTogglerDisables>;
export type PlusDialogTogglerMethodsBase = Pick<PlusDialogToggler, PlusDialogTogglerMethodsKeys>;
export type PlusDialogTogglerMethodsKeys = never;
export type PlusDialogTogglerProperties = Filter<PlusDialogTogglerPropertiesOverridden, PlusDialogTogglerDisables>;
export type PlusDialogTogglerPropertiesOverridden = Override<PlusDialogTogglerPropertiesBase, PlusDialogTogglerOverrides, PlusDialogTogglerOverridableKeys>;
export type PlusDialogTogglerPropertiesBase = Pick<PlusDialogToggler, PlusDialogTogglerPropertiesKeys>;
export type PlusDialogTogglerPropertiesKeys = 'connector' | 'overrides' | 'preset';
export type PlusDialogTogglerElement = globalThis.HTMLPlusDialogTogglerElement;
export type PlusDialogTogglerJSX = PlusDialogTogglerAttributes & PlusDialogTogglerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-toggler": PlusDialogTogglerJSX;
  }
}
declare global {
  interface HTMLPlusDialogTogglerElement extends HTMLElement, PlusDialogTogglerMethods, PlusDialogTogglerProperties {}
  var HTMLPlusDialogTogglerElement: {
    prototype: HTMLPlusDialogTogglerElement;
    new (): HTMLPlusDialogTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-toggler": HTMLPlusDialogTogglerElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-toggler': {
      properties: PlusDialogTogglerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogTogglerElement>, HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerJSX>;
    }
  }
}