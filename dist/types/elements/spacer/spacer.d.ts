import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @examples default
 */
export declare class Spacer extends PlusCore {
    /**
     * TODO
     */
    grow?: number;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    get style(): {
        'flex-grow': number;
    };
}

export interface SpacerAttributes {
  /**
  * TODO
  */
  "grow"?: number;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<SpacerProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, SpacerVariantOverrides>;
}
export interface SpacerEvents {}
export interface SpacerMethods {}
export interface SpacerProperties {
  /**
  * TODO
  */
  grow?: number;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<SpacerProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, SpacerVariantOverrides>;
}
export interface SpacerJSX extends SpacerEvents, SpacerProperties {}
declare global {
  interface HTMLPlusSpacerElement extends HTMLElement, SpacerMethods, SpacerProperties {}
  var HTMLPlusSpacerElement: {
    prototype: HTMLPlusSpacerElement;
    new (): HTMLPlusSpacerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spacer": HTMLPlusSpacerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": SpacerEvents & SpacerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": SpacerEvents & SpacerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type SpacerElement = globalThis.HTMLPlusSpacerElement;
export interface SpacerVariantOverrides {}