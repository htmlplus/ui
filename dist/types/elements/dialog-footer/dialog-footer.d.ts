import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogFooter extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    render(): any;
}

export interface DialogFooterAttributes {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogFooterProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, DialogFooterVariantOverrides>;
}
export interface DialogFooterEvents {}
export interface DialogFooterMethods {}
export interface DialogFooterProperties {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogFooterProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, DialogFooterVariantOverrides>;
}
export interface DialogFooterJSX extends DialogFooterEvents, DialogFooterProperties {}
declare global {
  interface HTMLPlusDialogFooterElement extends HTMLElement, DialogFooterMethods, DialogFooterProperties {}
  var HTMLPlusDialogFooterElement: {
    prototype: HTMLPlusDialogFooterElement;
    new (): HTMLPlusDialogFooterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-footer": HTMLPlusDialogFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
export interface DialogFooterVariantOverrides {}