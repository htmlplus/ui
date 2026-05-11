import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Toggles the state of a single item on or off.
 *
 * @examples default, checked, disabled, event, customized, three-dimensional
 */
export declare class PlusSwitch extends PlusCore {
    /**
     * Puts the switch in checked state.
     * @model
     */
    checked: boolean;
    /**
     * Disables the switch.
     */
    disabled: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    /**
     * When the switch state is changed this event triggers.
     * @model
     */
    plusChange: EventEmitter<void>;
    toggle(): void;
    onClick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusSwitchAttributesMapper = {
  'checked': 'checked';
  'disabled': 'disabled';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusSwitchOverridableKeys = 'variant';
export interface PlusSwitchDisables {}
export interface PlusSwitchOverrides {}
export type PlusSwitchAttributes = Filter<PlusSwitchAttributesOverridden, PlusSwitchDisables, PlusSwitchAttributesMapper>;
export type PlusSwitchAttributesOverridden = Override<PlusSwitchAttributesBase, PlusSwitchOverrides, PlusSwitchOverridableKeys, PlusSwitchAttributesMapper>;
export type PlusSwitchAttributesBase = {
  /**
  * Puts the switch in checked state.
  * @model
  */
  "checked"?: boolean;
  /**
  * Disables the switch.
  */
  "disabled"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSwitchProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusSwitchEvents = Filter<PlusSwitchEventsBase, PlusSwitchDisables>;
export type PlusSwitchEventsBase = {
  /**
  * When the switch state is changed this event triggers.
  * @model
  */
  plusChange?: (event: CustomEvent<void>) => void;
};
export type PlusSwitchEventsJSX = Filter<PlusSwitchEventsBaseJSX, PlusSwitchDisables, {
  plusChange: 'onPlusChange';
}>;
export type PlusSwitchEventsBaseJSX = {
  /**
  * When the switch state is changed this event triggers.
  * @model
  */
  onPlusChange?: (event: CustomEvent<void>) => void;
};
export type PlusSwitchMethods = Filter<PlusSwitchMethodsBase, PlusSwitchDisables>;
export type PlusSwitchMethodsBase = {};
export type PlusSwitchProperties = Filter<PlusSwitchPropertiesOverridden, PlusSwitchDisables>;
export type PlusSwitchPropertiesOverridden = Override<PlusSwitchPropertiesBase, PlusSwitchOverrides, PlusSwitchOverridableKeys>;
export type PlusSwitchPropertiesBase = {
  /**
  * Puts the switch in checked state.
  * @model
  */
  checked?: boolean;
  /**
  * Disables the switch.
  */
  disabled?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSwitchProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-switch': {
      properties: PlusSwitchPropertiesOverridden;
    };
  }
}
export type PlusSwitchElement = globalThis.HTMLPlusSwitchElement;
export type PlusSwitchJSX = PlusSwitchAttributes & PlusSwitchEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-switch": PlusSwitchJSX;
  }
}
declare global {
  interface HTMLPlusSwitchElement extends HTMLElement, PlusSwitchMethods, PlusSwitchProperties {}
  var HTMLPlusSwitchElement: {
    prototype: HTMLPlusSwitchElement;
    new (): HTMLPlusSwitchElement;
  };
  interface HTMLElementTagNameMap {
    "plus-switch": HTMLPlusSwitchElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSwitchElement>, HTMLPlusSwitchElement>, keyof PlusSwitchJSX>;
    }
  }
}