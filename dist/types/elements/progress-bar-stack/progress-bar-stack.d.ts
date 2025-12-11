import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class ProgressBarStack extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface ProgressBarStackAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<ProgressBarStackProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, ProgressBarStackVariantOverrides>;
}
export interface ProgressBarStackAttributesDisables {}
export type ProgressBarStackAttributes = Filter<ProgressBarStackAttributesBase, ProgressBarStackAttributesDisables>;
export interface ProgressBarStackEventsBase {}
export interface ProgressBarStackEventsDisables {}
export type ProgressBarStackEvents = Filter<ProgressBarStackEventsBase, ProgressBarStackEventsDisables>;
export interface ProgressBarStackMethodsBase {}
export interface ProgressBarStackMethodsDisables {}
export type ProgressBarStackMethods = Filter<ProgressBarStackMethodsBase, ProgressBarStackMethodsDisables>;
export interface ProgressBarStackPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<ProgressBarStackProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, ProgressBarStackVariantOverrides>;
}
export interface ProgressBarStackPropertiesDisables {}
export type ProgressBarStackProperties = Filter<ProgressBarStackPropertiesBase, ProgressBarStackPropertiesDisables>;
export interface ProgressBarStackJSX extends ProgressBarStackEvents, ProgressBarStackProperties {}
declare global {
  interface HTMLPlusProgressBarStackElement extends HTMLElement, ProgressBarStackMethods, ProgressBarStackProperties {}
  var HTMLPlusProgressBarStackElement: {
    prototype: HTMLPlusProgressBarStackElement;
    new (): HTMLPlusProgressBarStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-progress-bar-stack": HTMLPlusProgressBarStackElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": ProgressBarStackEvents & ProgressBarStackAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (ProgressBarStackEvents & ProgressBarStackAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": ProgressBarStackEvents & ProgressBarStackAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (ProgressBarStackEvents & ProgressBarStackAttributes)>;
    }
  }
}
export type ProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;
export interface ProgressBarStackVariantOverrides {}