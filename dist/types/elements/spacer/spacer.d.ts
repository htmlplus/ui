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
    variant?: OverridableValue<string & {}>;
    get style(): {
        'flex-grow': number;
    };
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface SpacerAttributesBase {
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
  "variant"?: OverridableValue<string & {}, SpacerVariantOverrides>;
}
export interface SpacerAttributesDisables {}
export type SpacerAttributes = Filter<SpacerAttributesBase, SpacerAttributesDisables>;
export interface SpacerEventsBase {}
export interface SpacerEventsDisables {}
export type SpacerEvents = Filter<SpacerEventsBase, SpacerEventsDisables>;
export interface SpacerMethodsBase {}
export interface SpacerMethodsDisables {}
export type SpacerMethods = Filter<SpacerMethodsBase, SpacerMethodsDisables>;
export interface SpacerPropertiesBase {
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
  variant?: OverridableValue<string & {}, SpacerVariantOverrides>;
}
export interface SpacerPropertiesDisables {}
export type SpacerProperties = Filter<SpacerPropertiesBase, SpacerPropertiesDisables>;
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
      "plus-spacer": SpacerEvents & SpacerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SpacerEvents & SpacerAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spacer": SpacerEvents & SpacerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SpacerEvents & SpacerAttributes)>;
    }
  }
}
export type SpacerElement = globalThis.HTMLPlusSpacerElement;
export interface SpacerVariantOverrides {}