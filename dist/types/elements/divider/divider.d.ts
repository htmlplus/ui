import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint, ColorOverrides } from '../../types';
import { DividerInset, DividerOrientation, DividerPlacement, DividerSize, DividerStroke } from './divider.types';
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
export declare class Divider extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<string & {}, ColorOverrides>;
    /**
     * Specifies the amount of indentation.
     */
    inset?: OverridableValue<DividerInset>;
    /**
     * Draws the divider in a `horizontal` or `vertical` orientation.
     */
    orientation?: DividerOrientation;
    /**
     * Specifies the location of the default slot.
     */
    placement?: OverridableValue<DividerPlacement>;
    /**
     * Specifies the thickness of the border.
     */
    size?: OverridableValue<DividerSize>;
    /**
     * Specifies the style of the border.
     */
    stroke?: OverridableValue<DividerStroke>;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    get style(): {
        '--plus-divider-color': string;
    };
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface DividerAttributesBase {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the amount of indentation.
  */
  "inset"?: OverridableValue<DividerInset, DividerInsetOverrides>;
  /**
  * Draws the divider in a `horizontal` or `vertical` orientation.
  */
  "orientation"?: DividerOrientation;
  /**
  * Specifies the location of the default slot.
  */
  "placement"?: OverridableValue<DividerPlacement, DividerPlacementOverrides>;
  /**
  * Specifies the thickness of the border.
  */
  "size"?: OverridableValue<DividerSize, DividerSizeOverrides>;
  /**
  * Specifies the style of the border.
  */
  "stroke"?: OverridableValue<DividerStroke, DividerStrokeOverrides>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, DividerVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DividerProperties, "overrides">>;
}
export interface DividerAttributesDisables {}
export type DividerAttributes = Filter<DividerAttributesBase, DividerAttributesDisables>;
export interface DividerEventsBase {}
export interface DividerEventsDisables {}
export type DividerEvents = Filter<DividerEventsBase, DividerEventsDisables>;
export interface DividerMethodsBase {}
export interface DividerMethodsDisables {}
export type DividerMethods = Filter<DividerMethodsBase, DividerMethodsDisables>;
export interface DividerPropertiesBase {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<string & {}, ColorOverrides>;
  /**
  * Specifies the amount of indentation.
  */
  inset?: OverridableValue<DividerInset, DividerInsetOverrides>;
  /**
  * Draws the divider in a `horizontal` or `vertical` orientation.
  */
  orientation?: DividerOrientation;
  /**
  * Specifies the location of the default slot.
  */
  placement?: OverridableValue<DividerPlacement, DividerPlacementOverrides>;
  /**
  * Specifies the thickness of the border.
  */
  size?: OverridableValue<DividerSize, DividerSizeOverrides>;
  /**
  * Specifies the style of the border.
  */
  stroke?: OverridableValue<DividerStroke, DividerStrokeOverrides>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, DividerVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DividerProperties, "overrides">>;
}
export interface DividerPropertiesDisables {}
export type DividerProperties = Filter<DividerPropertiesBase, DividerPropertiesDisables>;
export interface DividerJSX extends DividerEvents, DividerProperties {}
declare global {
  interface HTMLPlusDividerElement extends HTMLElement, DividerMethods, DividerProperties {}
  var HTMLPlusDividerElement: {
    prototype: HTMLPlusDividerElement;
    new (): HTMLPlusDividerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-divider": HTMLPlusDividerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": DividerEvents & DividerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DividerEvents & DividerAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-divider": DividerEvents & DividerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DividerEvents & DividerAttributes)>;
    }
  }
}
export type DividerElement = globalThis.HTMLPlusDividerElement;
export interface DividerInsetOverrides {}
export interface DividerPlacementOverrides {}
export interface DividerSizeOverrides {}
export interface DividerStrokeOverrides {}
export interface DividerVariantOverrides {}