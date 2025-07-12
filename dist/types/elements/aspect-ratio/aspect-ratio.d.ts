import { PlusCore } from '../../core';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class AspectRatio extends PlusCore {
    /**
     * Specifies the minimum height.
     */
    minHeight?: number | string;
    /**
     * Specifies the maximum height.
     */
    maxHeight?: number | string;
    /**
     * Specifies the ratio.
     */
    value?: number | string;
    get ratio(): number;
    get style(): any;
    render(): any;
}

export interface AspectRatioAttributes {
  /**
  * Specifies the minimum height.
  */
  "min-height"?: number | string;
  /**
  * Specifies the maximum height.
  */
  "max-height"?: number | string;
  /**
  * Specifies the ratio.
  */
  "value"?: number | string;
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<AspectRatioProperties>;
  };
}
export interface AspectRatioEvents {}
export interface AspectRatioMethods {}
export interface AspectRatioProperties {
  /**
  * Specifies the minimum height.
  */
  minHeight?: number | string;
  /**
  * Specifies the maximum height.
  */
  maxHeight?: number | string;
  /**
  * Specifies the ratio.
  */
  value?: number | string;
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<AspectRatioProperties>;
  };
}
export interface AspectRatioJSX extends AspectRatioEvents, AspectRatioProperties {}
declare global {
  interface HTMLPlusAspectRatioElement extends HTMLElement, AspectRatioMethods, AspectRatioProperties {}
  var HTMLPlusAspectRatioElement: {
    prototype: HTMLPlusAspectRatioElement;
    new (): HTMLPlusAspectRatioElement;
  };
  interface HTMLElementTagNameMap {
    "plus-aspect-ratio": HTMLPlusAspectRatioElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-aspect-ratio": AspectRatioEvents & AspectRatioAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-aspect-ratio": AspectRatioEvents & AspectRatioAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type AspectRatioElement = globalThis.HTMLPlusAspectRatioElement;