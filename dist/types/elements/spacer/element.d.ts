import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @examples default
 */
export declare class PlusSpacer extends PlusCore {
    /**
     * TODO
     */
    grow: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    get style(): {
        ':host': {
            'flex-grow': number;
        };
    };
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusSpacerAttributesMapper = {};
export type PlusSpacerOverridableKeys = 'preset';
export interface PlusSpacerDisables {}
export interface PlusSpacerOverrides {}
export type PlusSpacerAttributes = Rename<PlusSpacerProperties, PlusSpacerAttributesMapper>;
export type PlusSpacerAttributesOverridden = Rename<PlusSpacerPropertiesOverridden, PlusSpacerAttributesMapper>;
export type PlusSpacerAttributesBase = Rename<PlusSpacerPropertiesBase, PlusSpacerAttributesMapper>;
export type PlusSpacerEvents = Filter<PlusSpacerEventsBase, PlusSpacerDisables>;
export type PlusSpacerEventsBase = ToEventHandlers<Pick<PlusSpacer, PlusSpacerEventsKeys>>;
export type PlusSpacerEventsKeys = never;
export type PlusSpacerEventsJSX = ToJSXEvent<PlusSpacerEvents>;
export type PlusSpacerEventsBaseJSX = ToJSXEvent<PlusSpacerEventsBase>;
export type PlusSpacerMethods = Filter<PlusSpacerMethodsBase, PlusSpacerDisables>;
export type PlusSpacerMethodsBase = Pick<PlusSpacer, PlusSpacerMethodsKeys>;
export type PlusSpacerMethodsKeys = never;
export type PlusSpacerProperties = Filter<PlusSpacerPropertiesOverridden, PlusSpacerDisables>;
export type PlusSpacerPropertiesOverridden = Override<PlusSpacerPropertiesBase, PlusSpacerOverrides, PlusSpacerOverridableKeys>;
export type PlusSpacerPropertiesBase = Pick<PlusSpacer, PlusSpacerPropertiesKeys>;
export type PlusSpacerPropertiesKeys = 'grow' | 'overrides' | 'preset';
export type PlusSpacerElement = globalThis.HTMLPlusSpacerElement;
export type PlusSpacerJSX = PlusSpacerAttributes & PlusSpacerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-spacer": PlusSpacerJSX;
  }
}
declare global {
  interface HTMLPlusSpacerElement extends HTMLElement, PlusSpacerMethods, PlusSpacerProperties {}
  var HTMLPlusSpacerElement: {
    prototype: HTMLPlusSpacerElement;
    new (): HTMLPlusSpacerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spacer": HTMLPlusSpacerElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-spacer': {
      properties: PlusSpacerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": PlusSpacerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSpacerElement>, HTMLPlusSpacerElement>, keyof PlusSpacerJSX>;
    }
  }
}