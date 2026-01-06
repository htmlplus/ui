import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColorOverrides } from '../../types';
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
    color?: OverridableValue<string & {}, PlusColorOverrides>;
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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    get style(): {
        '--plus-divider-color': string;
    };
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDividerAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, PlusColorOverrides>;
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
  "size"?: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl', PlusDividerSizeOverrides>;
  /**
  * Specifies the style of the border.
  */
  "stroke"?: OverridableValue<'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid', PlusDividerStrokeOverrides>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDividerVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDividerProperties, "overrides">>;
}
export interface PlusDividerAttributesDisables {}
export type PlusDividerAttributes = Filter<PlusDividerAttributesBase, PlusDividerAttributesDisables>;
export interface PlusDividerEventsBase {}
export interface PlusDividerEventsDisables {}
export type PlusDividerEvents = Filter<PlusDividerEventsBase, PlusDividerEventsDisables>;
export interface PlusDividerMethodsBase {}
export interface PlusDividerMethodsDisables {}
export type PlusDividerMethods = Filter<PlusDividerMethodsBase, PlusDividerMethodsDisables>;
export interface PlusDividerPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, PlusColorOverrides>;
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
  size?: OverridableValue<'xs' | 'sm' | 'md' | 'lg' | 'xl', PlusDividerSizeOverrides>;
  /**
  * Specifies the style of the border.
  */
  stroke?: OverridableValue<'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' | 'ridge' | 'solid', PlusDividerStrokeOverrides>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDividerVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDividerProperties, "overrides">>;
}
export interface PlusDividerPropertiesDisables {}
export type PlusDividerProperties = Filter<PlusDividerPropertiesBase, PlusDividerPropertiesDisables>;
export type PlusDividerAttributesAndEvents = PlusDividerAttributes & PlusDividerEvents;
export interface PlusDividerJSX extends PlusDividerEvents, PlusDividerProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-divider": PlusDividerAttributes & PlusDividerEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDividerElement>, keyof PlusDividerAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDividerElement>, keyof PlusDividerAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDividerElement>, keyof PlusDividerAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDividerElement>, keyof PlusDividerAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": PlusDividerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDividerElement>, keyof PlusDividerAttributesAndEvents>;
    }
  }
}
export type PlusDividerElement = globalThis.HTMLPlusDividerElement;
export interface PlusDividerSizeOverrides {}
export interface PlusDividerStrokeOverrides {}
export interface PlusDividerVariantOverrides {}