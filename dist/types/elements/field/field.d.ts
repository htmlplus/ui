import { PlusCore } from '../../core';
import { FieldSize } from './field.types';

export declare class Field extends PlusCore {
    dense?: boolean;
    down?: string;
    error?: boolean | string;
    for?: string;
    hint?: string;
    label?: string;
    loading?: boolean;
    plain?: boolean;
    size?: FieldSize;
    success?: boolean | string;
    up?: string;
    get state(): string;
    tick?: number;
    slots?: any;
    $input?: HTMLElement;
    observer?: MutationObserver;
    get details(): "details error" | "details success" | "details hint";
    get hasHeader(): true;
    get hasFooter(): true;
    get offset(): {
        start: string;
        end: string;
    };
    get tiles(): string;
    get type(): string;
    $part(key: string): HTMLElement;
    $slot(key?: string): HTMLSlotElement;
    has(key: string): true;
    refresh(): void;
    onInputChange(): void;
    connectedCallback(): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface FieldAttributes {
  "dense"?: boolean;
  "down"?: string;
  "error"?: boolean | string;
  "for"?: string;
  "hint"?: string;
  "label"?: string;
  "loading"?: boolean;
  "plain"?: boolean;
  "size"?: FieldSize;
  "success"?: boolean | string;
  "up"?: string;
}
export interface FieldEvents {}
export interface FieldMethods {}
export interface FieldProperties {
  dense?: boolean;
  down?: string;
  error?: boolean | string;
  for?: string;
  hint?: string;
  label?: string;
  loading?: boolean;
  plain?: boolean;
  size?: FieldSize;
  success?: boolean | string;
  up?: string;
  state;
}
export interface FieldJSX extends FieldEvents, FieldProperties {}
declare global {
  interface HTMLPlusFieldElement extends HTMLElement, FieldMethods, FieldProperties {}
  var HTMLPlusFieldElement: {
    prototype: HTMLPlusFieldElement;
    new (): HTMLPlusFieldElement;
  };
  interface HTMLElementTagNameMap {
    "plus-field": HTMLPlusFieldElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-field": FieldEvents & FieldAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type FieldElement = globalThis.HTMLPlusFieldElement;