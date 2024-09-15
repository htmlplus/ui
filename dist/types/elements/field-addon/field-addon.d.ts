import { PlusCore } from '../../core';

export declare class FieldAddon extends PlusCore {
    render(): any;
}

export interface FieldAddonAttributes {}
export interface FieldAddonEvents {}
export interface FieldAddonMethods {}
export interface FieldAddonProperties {}
export interface FieldAddonJSX extends FieldAddonEvents, FieldAddonProperties {}
declare global {
  interface HTMLPlusFieldAddonElement extends HTMLElement, FieldAddonMethods, FieldAddonProperties {}
  var HTMLPlusFieldAddonElement: {
    prototype: HTMLPlusFieldAddonElement;
    new (): HTMLPlusFieldAddonElement;
  };
  interface HTMLElementTagNameMap {
    "plus-field-addon": HTMLPlusFieldAddonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-field-addon": FieldAddonEvents & FieldAddonAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type FieldAddonElement = globalThis.HTMLPlusFieldAddonElement;