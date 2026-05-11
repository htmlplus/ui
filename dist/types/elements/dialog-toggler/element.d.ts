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
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    dialog?: Context;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDialogTogglerAttributesMapper = {
  'connector': 'connector';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDialogTogglerOverridableKeys = 'variant';
export interface PlusDialogTogglerDisables {}
export interface PlusDialogTogglerOverrides {}
export type PlusDialogTogglerAttributes = Filter<PlusDialogTogglerAttributesOverridden, PlusDialogTogglerDisables, PlusDialogTogglerAttributesMapper>;
export type PlusDialogTogglerAttributesOverridden = Override<PlusDialogTogglerAttributesBase, PlusDialogTogglerOverrides, PlusDialogTogglerOverridableKeys, PlusDialogTogglerAttributesMapper>;
export type PlusDialogTogglerAttributesBase = {
  /**
  * This property helps you to attach which dialog this toggler controls.
  * It doesn't matter where the dialog toggler is.
  * You can put the dialog's toggler inside or outside of the dialog.
  * Read more about connectors [here](/connector).
  */
  "connector"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogTogglerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDialogTogglerEvents = Filter<PlusDialogTogglerEventsBase, PlusDialogTogglerDisables>;
export type PlusDialogTogglerEventsBase = {};
export type PlusDialogTogglerEventsJSX = Filter<PlusDialogTogglerEventsBaseJSX, PlusDialogTogglerDisables, {}>;
export type PlusDialogTogglerEventsBaseJSX = {};
export type PlusDialogTogglerMethods = Filter<PlusDialogTogglerMethodsBase, PlusDialogTogglerDisables>;
export type PlusDialogTogglerMethodsBase = {};
export type PlusDialogTogglerProperties = Filter<PlusDialogTogglerPropertiesOverridden, PlusDialogTogglerDisables>;
export type PlusDialogTogglerPropertiesOverridden = Override<PlusDialogTogglerPropertiesBase, PlusDialogTogglerOverrides, PlusDialogTogglerOverridableKeys>;
export type PlusDialogTogglerPropertiesBase = {
  /**
  * This property helps you to attach which dialog this toggler controls.
  * It doesn't matter where the dialog toggler is.
  * You can put the dialog's toggler inside or outside of the dialog.
  * Read more about connectors [here](/connector).
  */
  connector?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogTogglerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-dialog-toggler': {
      properties: PlusDialogTogglerPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogTogglerElement>, HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerJSX>;
    }
  }
}