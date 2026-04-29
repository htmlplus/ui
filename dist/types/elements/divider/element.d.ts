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
    color?: OverridableValue<PlusColor>;
    /**
     * Specifies the amount of indentation.
     */
    inset?: 'none' | 'start' | 'end' | 'both' | (string & {});
    /**
     * Draws the divider in a `horizontal` or `vertical` orientation.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Specifies the location of the default slot.
     */
    placement?: 'start' | 'center' | 'end';
    /**
     * Specifies the thickness of the border.
     */
    size?: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
    /**
     * Specifies the style of the border.
     */
    stroke?: OverridableValue<'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid'>;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    get style(): {
        ':host': {
            '--plus-divider-color': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusDividerAttributesMapper = {
  'color': 'color';
  'inset': 'inset';
  'orientation': 'orientation';
  'placement': 'placement';
  'size': 'size';
  'stroke': 'stroke';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusDividerOverridableKeys = 'color' | 'size' | 'stroke' | 'variant';
export interface PlusDividerDisables {}
export interface PlusDividerOverrides {}
export type PlusDividerAttributes = Filter<PlusDividerAttributesOverridden, PlusDividerDisables, PlusDividerAttributesMapper>;
export type PlusDividerAttributesOverridden = Override<PlusDividerAttributesBase, PlusDividerOverrides, PlusDividerOverridableKeys, PlusDividerAttributesMapper>;
export type PlusDividerAttributesBase = {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<PlusColor>;
  /**
  * Specifies the amount of indentation.
  */
  "inset"?: 'none' | 'start' | 'end' | 'both' | (string & {});
  /**
  * Draws the divider in a `horizontal` or `vertical` orientation.
  */
  "orientation"?: 'horizontal' | 'vertical';
  /**
  * Specifies the location of the default slot.
  */
  "placement"?: 'start' | 'center' | 'end';
  /**
  * Specifies the thickness of the border.
  */
  "size"?: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
  /**
  * Specifies the style of the border.
  */
  "stroke"?: OverridableValue<'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid'>;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDividerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusDividerEvents = Filter<PlusDividerEventsBase, PlusDividerDisables>;
export type PlusDividerEventsBase = {};
export type PlusDividerEventsJSX = Filter<PlusDividerEventsBaseJSX, PlusDividerDisables, {}>;
export type PlusDividerEventsBaseJSX = {};
export type PlusDividerMethods = Filter<PlusDividerMethodsBase, PlusDividerDisables>;
export type PlusDividerMethodsBase = {};
export type PlusDividerProperties = Filter<PlusDividerPropertiesOverridden, PlusDividerDisables>;
export type PlusDividerPropertiesOverridden = Override<PlusDividerPropertiesBase, PlusDividerOverrides, PlusDividerOverridableKeys>;
export type PlusDividerPropertiesBase = {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<PlusColor>;
  /**
  * Specifies the amount of indentation.
  */
  inset?: 'none' | 'start' | 'end' | 'both' | (string & {});
  /**
  * Draws the divider in a `horizontal` or `vertical` orientation.
  */
  orientation?: 'horizontal' | 'vertical';
  /**
  * Specifies the location of the default slot.
  */
  placement?: 'start' | 'center' | 'end';
  /**
  * Specifies the thickness of the border.
  */
  size?: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
  /**
  * Specifies the style of the border.
  */
  stroke?: OverridableValue<'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid'>;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDividerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-divider': {
      properties: PlusDividerPropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDividerElement>, HTMLPlusDividerElement>, keyof PlusDividerJSX>;
    }
  }
}