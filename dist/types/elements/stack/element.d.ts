import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * A container for arranging elements vertically or horizontally.
 *
 * @slot default - The default slot.
 *
 * @examples default, vertical, divider
 */
export declare class PlusStack extends PlusCore {
    /**
     * The gap between items.
     */
    gap: string | number;
    /**
     * The alignment of items along the cross axis.
     */
    items: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    /**
     * The distribution of items along the main axis.
     */
    justify: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
    /**
     * Whether to reverse the order of items.
     */
    reverse: boolean;
    /**
     * Whether the stack is vertical.
     */
    vertical: boolean;
    /**
     * Controls whether items should wrap onto multiple lines.
     */
    wrap: boolean | 'reverse';
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
            'align-items': string;
            display: string;
            'flex-direction': string;
            gap: string;
            'justify-content': string;
            'flex-wrap': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusStackAttributesMapper = {};
export type PlusStackOverridableKeys = 'preset';
export interface PlusStackDisables {}
export interface PlusStackOverrides {}
export type PlusStackAttributes = Rename<PlusStackProperties, PlusStackAttributesMapper>;
export type PlusStackAttributesOverridden = Rename<PlusStackPropertiesOverridden, PlusStackAttributesMapper>;
export type PlusStackAttributesBase = Rename<PlusStackPropertiesBase, PlusStackAttributesMapper>;
export type PlusStackEvents = Filter<PlusStackEventsBase, PlusStackDisables>;
export type PlusStackEventsBase = ToEventHandlers<Pick<PlusStack, PlusStackEventsKeys>>;
export type PlusStackEventsKeys = never;
export type PlusStackEventsJSX = ToJSXEvent<PlusStackEvents>;
export type PlusStackEventsBaseJSX = ToJSXEvent<PlusStackEventsBase>;
export type PlusStackMethods = Filter<PlusStackMethodsBase, PlusStackDisables>;
export type PlusStackMethodsBase = Pick<PlusStack, PlusStackMethodsKeys>;
export type PlusStackMethodsKeys = never;
export type PlusStackProperties = Filter<PlusStackPropertiesOverridden, PlusStackDisables>;
export type PlusStackPropertiesOverridden = Override<PlusStackPropertiesBase, PlusStackOverrides, PlusStackOverridableKeys>;
export type PlusStackPropertiesBase = Pick<PlusStack, PlusStackPropertiesKeys>;
export type PlusStackPropertiesKeys = 'gap' | 'items' | 'justify' | 'reverse' | 'vertical' | 'wrap' | 'overrides' | 'preset';
export type PlusStackElement = globalThis.HTMLPlusStackElement;
export type PlusStackJSX = PlusStackAttributes & PlusStackEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-stack": PlusStackJSX;
  }
}
declare global {
  interface HTMLPlusStackElement extends HTMLElement, PlusStackMethods, PlusStackProperties {}
  var HTMLPlusStackElement: {
    prototype: HTMLPlusStackElement;
    new (): HTMLPlusStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-stack": HTMLPlusStackElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-stack': {
      properties: PlusStackPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusStackElement>, HTMLPlusStackElement>, keyof PlusStackJSX>;
    }
  }
}