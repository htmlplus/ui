import { PlusCore } from '../../core';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class ProgressBarStack extends PlusCore {
    render(): any;
}

export interface ProgressBarStackAttributes {}
export interface ProgressBarStackEvents {}
export interface ProgressBarStackMethods {}
export interface ProgressBarStackProperties {}
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
      "plus-progress-bar-stack": ProgressBarStackEvents & ProgressBarStackAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type ProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;