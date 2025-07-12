import { PlusCore } from '../../core';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class ProgressBarStack extends PlusCore {
    render(): any;
}

export interface ProgressBarStackAttributes {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<ProgressBarStackProperties>;
  };
}
export interface ProgressBarStackEvents {}
export interface ProgressBarStackMethods {}
export interface ProgressBarStackProperties {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<ProgressBarStackProperties>;
  };
}
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
      "plus-progress-bar-stack": ProgressBarStackEvents & ProgressBarStackAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": ProgressBarStackEvents & ProgressBarStackAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type ProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;