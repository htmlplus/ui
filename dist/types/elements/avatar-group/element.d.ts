import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @stable
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusAvatarGroup extends PlusCore {
    /**
     * Specifies whether to prominent the avatar when the mouse is entered or not.
     */
    hoverable: boolean;
    /**
     * Specifies whether avatars should be displayed compressed or not.
     */
    stacked: boolean;
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
export type PlusAvatarGroupAttributesMapper = {};
export type PlusAvatarGroupOverridableKeys = 'preset';
export interface PlusAvatarGroupDisables {}
export interface PlusAvatarGroupOverrides {}
export type PlusAvatarGroupAttributes = Rename<PlusAvatarGroupProperties, PlusAvatarGroupAttributesMapper>;
export type PlusAvatarGroupAttributesOverridden = Rename<PlusAvatarGroupPropertiesOverridden, PlusAvatarGroupAttributesMapper>;
export type PlusAvatarGroupAttributesBase = Rename<PlusAvatarGroupPropertiesBase, PlusAvatarGroupAttributesMapper>;
export type PlusAvatarGroupEvents = Filter<PlusAvatarGroupEventsBase, PlusAvatarGroupDisables>;
export type PlusAvatarGroupEventsBase = ToEventHandlers<Pick<PlusAvatarGroup, PlusAvatarGroupEventsKeys>>;
export type PlusAvatarGroupEventsKeys = never;
export type PlusAvatarGroupEventsJSX = ToJSXEvent<PlusAvatarGroupEvents>;
export type PlusAvatarGroupEventsBaseJSX = ToJSXEvent<PlusAvatarGroupEventsBase>;
export type PlusAvatarGroupMethods = Filter<PlusAvatarGroupMethodsBase, PlusAvatarGroupDisables>;
export type PlusAvatarGroupMethodsBase = Pick<PlusAvatarGroup, PlusAvatarGroupMethodsKeys>;
export type PlusAvatarGroupMethodsKeys = never;
export type PlusAvatarGroupProperties = Filter<PlusAvatarGroupPropertiesOverridden, PlusAvatarGroupDisables>;
export type PlusAvatarGroupPropertiesOverridden = Override<PlusAvatarGroupPropertiesBase, PlusAvatarGroupOverrides, PlusAvatarGroupOverridableKeys>;
export type PlusAvatarGroupPropertiesBase = Pick<PlusAvatarGroup, PlusAvatarGroupPropertiesKeys>;
export type PlusAvatarGroupPropertiesKeys = 'hoverable' | 'stacked' | 'overrides' | 'preset';
export type PlusAvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;
export type PlusAvatarGroupJSX = PlusAvatarGroupAttributes & PlusAvatarGroupEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-avatar-group": PlusAvatarGroupJSX;
  }
}
declare global {
  interface HTMLPlusAvatarGroupElement extends HTMLElement, PlusAvatarGroupMethods, PlusAvatarGroupProperties {}
  var HTMLPlusAvatarGroupElement: {
    prototype: HTMLPlusAvatarGroupElement;
    new (): HTMLPlusAvatarGroupElement;
  };
  interface HTMLElementTagNameMap {
    "plus-avatar-group": HTMLPlusAvatarGroupElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-avatar-group': {
      properties: PlusAvatarGroupPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-avatar-group": PlusAvatarGroupJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAvatarGroupElement>, HTMLPlusAvatarGroupElement>, keyof PlusAvatarGroupJSX>;
    }
  }
}