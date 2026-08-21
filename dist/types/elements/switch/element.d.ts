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
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusSwitchAttributesMapper = {};
export type PlusSwitchOverridableKeys = 'preset';
export interface PlusSwitchDisables {}
export interface PlusSwitchOverrides {}
export type PlusSwitchAttributes = Rename<PlusSwitchProperties, PlusSwitchAttributesMapper>;
export type PlusSwitchAttributesOverridden = Rename<PlusSwitchPropertiesOverridden, PlusSwitchAttributesMapper>;
export type PlusSwitchAttributesBase = Rename<PlusSwitchPropertiesBase, PlusSwitchAttributesMapper>;
export type PlusSwitchEvents = Filter<PlusSwitchEventsBase, PlusSwitchDisables>;
export type PlusSwitchEventsBase = ToEventHandlers<Pick<PlusSwitch, PlusSwitchEventsKeys>>;
export type PlusSwitchEventsKeys = 'plusChange';
export type PlusSwitchEventsJSX = ToJSXEvent<PlusSwitchEvents>;
export type PlusSwitchEventsBaseJSX = ToJSXEvent<PlusSwitchEventsBase>;
export type PlusSwitchMethods = Filter<PlusSwitchMethodsBase, PlusSwitchDisables>;
export type PlusSwitchMethodsBase = Pick<PlusSwitch, PlusSwitchMethodsKeys>;
export type PlusSwitchMethodsKeys = never;
export type PlusSwitchProperties = Filter<PlusSwitchPropertiesOverridden, PlusSwitchDisables>;
export type PlusSwitchPropertiesOverridden = Override<PlusSwitchPropertiesBase, PlusSwitchOverrides, PlusSwitchOverridableKeys>;
export type PlusSwitchPropertiesBase = Pick<PlusSwitch, PlusSwitchPropertiesKeys>;
export type PlusSwitchPropertiesKeys = 'checked' | 'disabled' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-switch': {
      properties: PlusSwitchPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSwitchElement>, HTMLPlusSwitchElement>, keyof PlusSwitchJSX>;
    }
  }
}