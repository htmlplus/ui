import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { AccordionsContext } from './accordions.context';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class Accordions extends PlusCore {
    /**
     * Specifies that only one accordion can be open.
     */
    persistent?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    state: AccordionsContext;
    open(target: HTMLElement): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface AccordionsAttributesBase {
  /**
  * Specifies that only one accordion can be open.
  */
  "persistent"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, AccordionsVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<AccordionsProperties, "overrides">>;
}
export interface AccordionsAttributesDisables {}
export type AccordionsAttributes = Filter<AccordionsAttributesBase, AccordionsAttributesDisables>;
export interface AccordionsEventsBase {}
export interface AccordionsEventsDisables {}
export type AccordionsEvents = Filter<AccordionsEventsBase, AccordionsEventsDisables>;
export interface AccordionsMethodsBase {}
export interface AccordionsMethodsDisables {}
export type AccordionsMethods = Filter<AccordionsMethodsBase, AccordionsMethodsDisables>;
export interface AccordionsPropertiesBase {
  /**
  * Specifies that only one accordion can be open.
  */
  persistent?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, AccordionsVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<AccordionsProperties, "overrides">>;
}
export interface AccordionsPropertiesDisables {}
export type AccordionsProperties = Filter<AccordionsPropertiesBase, AccordionsPropertiesDisables>;
export interface AccordionsJSX extends AccordionsEvents, AccordionsProperties {}
declare global {
  interface HTMLPlusAccordionsElement extends HTMLElement, AccordionsMethods, AccordionsProperties {}
  var HTMLPlusAccordionsElement: {
    prototype: HTMLPlusAccordionsElement;
    new (): HTMLPlusAccordionsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-accordions": HTMLPlusAccordionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": AccordionsEvents & AccordionsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AccordionsEvents & AccordionsAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": AccordionsEvents & AccordionsAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (AccordionsEvents & AccordionsAttributes)>;
    }
  }
}
export type AccordionsElement = globalThis.HTMLPlusAccordionsElement;
export interface AccordionsVariantOverrides {}