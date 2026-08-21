import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
/**
 * A thin line that divides the content vertically or horizontally.
 *
 * @stable
 *
 * @part line   - The prefix and suffix element.
 * @part prefix  - The prefix element.
 * @part suffix  - The suffix element.
 *
 * @slot default - The default slot.
 *
 * @examples default, size, stroke, color, inset, placement, horizontal, vertical, icon, sticky, customized
 */
export declare class PlusDivider extends PlusCore {
    /**
     * Specifies the color.
     */
    color: OverridableValue<PlusColor>;
    /**
     * Specifies the amount of indentation.
     */
    inset: 'none' | 'start' | 'end' | 'both' | (string & {});
    /**
     * Draws the divider in a `horizontal` or `vertical` orientation.
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Specifies the location of the default slot.
     */
    placement: 'start' | 'center' | 'end';
    /**
     * Specifies the thickness of the border.
     */
    size: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
    /**
     * Specifies the style of the border.
     */
    stroke: OverridableValue<'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid'>;
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
            '--plus-divider-color': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusDividerAttributesMapper = {};
export type PlusDividerOverridableKeys = 'color' | 'size' | 'stroke' | 'preset';
export interface PlusDividerDisables {}
export interface PlusDividerOverrides {}
export type PlusDividerAttributes = Rename<PlusDividerProperties, PlusDividerAttributesMapper>;
export type PlusDividerAttributesOverridden = Rename<PlusDividerPropertiesOverridden, PlusDividerAttributesMapper>;
export type PlusDividerAttributesBase = Rename<PlusDividerPropertiesBase, PlusDividerAttributesMapper>;
export type PlusDividerEvents = Filter<PlusDividerEventsBase, PlusDividerDisables>;
export type PlusDividerEventsBase = ToEventHandlers<Pick<PlusDivider, PlusDividerEventsKeys>>;
export type PlusDividerEventsKeys = never;
export type PlusDividerEventsJSX = ToJSXEvent<PlusDividerEvents>;
export type PlusDividerEventsBaseJSX = ToJSXEvent<PlusDividerEventsBase>;
export type PlusDividerMethods = Filter<PlusDividerMethodsBase, PlusDividerDisables>;
export type PlusDividerMethodsBase = Pick<PlusDivider, PlusDividerMethodsKeys>;
export type PlusDividerMethodsKeys = never;
export type PlusDividerProperties = Filter<PlusDividerPropertiesOverridden, PlusDividerDisables>;
export type PlusDividerPropertiesOverridden = Override<PlusDividerPropertiesBase, PlusDividerOverrides, PlusDividerOverridableKeys>;
export type PlusDividerPropertiesBase = Pick<PlusDivider, PlusDividerPropertiesKeys>;
export type PlusDividerPropertiesKeys = 'color' | 'inset' | 'orientation' | 'placement' | 'size' | 'stroke' | 'overrides' | 'preset';
export type PlusDividerElement = globalThis.HTMLPlusDividerElement;
export type PlusDividerJSX = PlusDividerAttributes & PlusDividerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-divider": PlusDividerJSX;
  }
}
declare global {
  interface HTMLPlusDividerElement extends HTMLElement, PlusDividerMethods, PlusDividerProperties {}
  var HTMLPlusDividerElement: {
    prototype: HTMLPlusDividerElement;
    new (): HTMLPlusDividerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-divider": HTMLPlusDividerElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-divider': {
      properties: PlusDividerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDividerElement>, HTMLPlusDividerElement>, keyof PlusDividerJSX>;
    }
  }
}