import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @development
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class CardBody extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface CardBodyAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CardBodyProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, CardBodyVariantOverrides>;
}
export interface CardBodyAttributesDisables {}
export type CardBodyAttributes = Filter<CardBodyAttributesBase, CardBodyAttributesDisables>;
export interface CardBodyEventsBase {}
export interface CardBodyEventsDisables {}
export type CardBodyEvents = Filter<CardBodyEventsBase, CardBodyEventsDisables>;
export interface CardBodyMethodsBase {}
export interface CardBodyMethodsDisables {}
export type CardBodyMethods = Filter<CardBodyMethodsBase, CardBodyMethodsDisables>;
export interface CardBodyPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CardBodyProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, CardBodyVariantOverrides>;
}
export interface CardBodyPropertiesDisables {}
export type CardBodyProperties = Filter<CardBodyPropertiesBase, CardBodyPropertiesDisables>;
export interface CardBodyJSX extends CardBodyEvents, CardBodyProperties {}
declare global {
  interface HTMLPlusCardBodyElement extends HTMLElement, CardBodyMethods, CardBodyProperties {}
  var HTMLPlusCardBodyElement: {
    prototype: HTMLPlusCardBodyElement;
    new (): HTMLPlusCardBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card-body": HTMLPlusCardBodyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": CardBodyEvents & CardBodyAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CardBodyEvents & CardBodyAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": CardBodyEvents & CardBodyAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CardBodyEvents & CardBodyAttributes)>;
    }
  }
}
export type CardBodyElement = globalThis.HTMLPlusCardBodyElement;
export interface CardBodyVariantOverrides {}