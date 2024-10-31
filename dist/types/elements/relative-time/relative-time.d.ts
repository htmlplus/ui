import { PlusCore } from '../../core';
export declare class RelativeTime extends PlusCore {
    /**
     * The format style for the relative time.
     */
    format?: 'long' | 'short' | 'narrow';
    /**
     * Determines whether the numeric value should always be displayed.
     */
    numeric?: 'always' | 'auto';
    /**
     * Determines whether the relative time should be updated automatically.
     */
    sync?: boolean;
    /**
     * The date and time to be displayed in a relative format.
     */
    value?: Date;
    formatted?: string;
    tick?: number;
    timeout: number;
    get isValid(): boolean;
    get lang(): string;
    refresh(): void;
    disconnectedCallback(): void;
    updateCallback(): void;
    render(): any;
}

export interface RelativeTimeAttributes {
  /**
  * The format style for the relative time.
  */
  "format"?: 'long' | 'short' | 'narrow';
  /**
  * Determines whether the numeric value should always be displayed.
  */
  "numeric"?: 'always' | 'auto';
  /**
  * Determines whether the relative time should be updated automatically.
  */
  "sync"?: boolean;
  /**
  * The date and time to be displayed in a relative format.
  */
  "value"?: Date;
}
export interface RelativeTimeEvents {}
export interface RelativeTimeMethods {}
export interface RelativeTimeProperties {
  /**
  * The format style for the relative time.
  */
  format?: 'long' | 'short' | 'narrow';
  /**
  * Determines whether the numeric value should always be displayed.
  */
  numeric?: 'always' | 'auto';
  /**
  * Determines whether the relative time should be updated automatically.
  */
  sync?: boolean;
  /**
  * The date and time to be displayed in a relative format.
  */
  value?: Date;
}
export interface RelativeTimeJSX extends RelativeTimeEvents, RelativeTimeProperties {}
declare global {
  interface HTMLPlusRelativeTimeElement extends HTMLElement, RelativeTimeMethods, RelativeTimeProperties {}
  var HTMLPlusRelativeTimeElement: {
    prototype: HTMLPlusRelativeTimeElement;
    new (): HTMLPlusRelativeTimeElement;
  };
  interface HTMLElementTagNameMap {
    "plus-relative-time": HTMLPlusRelativeTimeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": RelativeTimeEvents & RelativeTimeAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type RelativeTimeElement = globalThis.HTMLPlusRelativeTimeElement;