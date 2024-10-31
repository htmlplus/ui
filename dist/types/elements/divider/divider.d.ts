import { PlusCore } from '../../core';
import { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';
/**
 * @stable
 *
 * @part line    - The prefix and suffix element.
 * @part prefix  - The prefix element.
 * @part suffix  - The suffix element.
 *
 * @slot default - The default slot.
 */
export declare class Divider extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Specifies the location of the default slot.
     */
    placement?: DividerPlacement;
    /**
     * Specifies the width of the border.
     */
    width?: DividerWidth;
    /**
     * Specifies the style of the border.
     */
    type?: DividerType;
    /**
     * Specifies the amount of indentation.
     */
    variant?: DividerVariant;
    /**
     *  Draws the divider in a vertical orientation.
     */
    vertical?: boolean;
    get style(): {
        '--plus-divider-color': string;
    };
    render(): any;
}

export interface DividerAttributes {
  /**
  * Specifies the color.
  */
  "color"?: string;
  /**
  * Specifies the location of the default slot.
  */
  "placement"?: DividerPlacement;
  /**
  * Specifies the width of the border.
  */
  "width"?: DividerWidth;
  /**
  * Specifies the style of the border.
  */
  "type"?: DividerType;
  /**
  * Specifies the amount of indentation.
  */
  "variant"?: DividerVariant;
  /**
  *  Draws the divider in a vertical orientation.
  */
  "vertical"?: boolean;
}
export interface DividerEvents {}
export interface DividerMethods {}
export interface DividerProperties {
  /**
  * Specifies the color.
  */
  color?: string;
  /**
  * Specifies the location of the default slot.
  */
  placement?: DividerPlacement;
  /**
  * Specifies the width of the border.
  */
  width?: DividerWidth;
  /**
  * Specifies the style of the border.
  */
  type?: DividerType;
  /**
  * Specifies the amount of indentation.
  */
  variant?: DividerVariant;
  /**
  *  Draws the divider in a vertical orientation.
  */
  vertical?: boolean;
}
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
      "plus-divider": DividerEvents & DividerAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type DividerElement = globalThis.HTMLPlusDividerElement;