import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { BrowseEvent } from './browse.types';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class Browse extends PlusCore {
    /**
     * One or more
     * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
     * describing file types to allow.
     */
    accept?: string;
    /**
     * Disables the element functionality.
     */
    disabled?: boolean;
    /**
     * Adds droppable ability.
     */
    droppable?: boolean;
    /**
     * Specifies the minimum number of files.
     */
    min?: number;
    /**
     * Specifies the maximum number of files.
     */
    max?: number;
    /**
     * Specifies the minimum size of the file(s) in bytes.
     */
    minSize?: number;
    /**
     * Specifies the maximum size of the file(s) in bytes.
     */
    maxSize?: number;
    /**
     * Allows to select more than one file.
     */
    multiple?: boolean;
    /**
     * Fires when file(s) are selected.
     */
    plusChange: EventEmitter<BrowseEvent>;
    /**
     * Fires when selected invalid file(s).
     */
    plusError: EventEmitter<BrowseEvent>;
    /**
     * Fires when file(s) are added successfully.
     */
    plusSuccess: EventEmitter<BrowseEvent>;
    $input: HTMLElement;
    dragging?: boolean;
    timeout?: any;
    get attributes(): {};
    get types(): string[];
    /**
     * Opens the browse dialog.
     */
    browse(): void;
    do(files: FileList): void;
    onClick(): void;
    onChange(event: any): void;
    onDragLeave(): void;
    onDragOver(event: any): void;
    onDrop(event: any): void;
    render(): any;
}

export interface BrowseAttributes {
  /**
  * One or more
  * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
  * describing file types to allow.
  */
  "accept"?: string;
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * Adds droppable ability.
  */
  "droppable"?: boolean;
  /**
  * Specifies the minimum number of files.
  */
  "min"?: number;
  /**
  * Specifies the maximum number of files.
  */
  "max"?: number;
  /**
  * Specifies the minimum size of the file(s) in bytes.
  */
  "min-size"?: number;
  /**
  * Specifies the maximum size of the file(s) in bytes.
  */
  "max-size"?: number;
  /**
  * Allows to select more than one file.
  */
  "multiple"?: boolean;
}
export interface BrowseEvents {
  /**
  * Fires when file(s) are selected.
  */
  onPlusChange?: (event: CustomEvent<BrowseEvent>) => void;
  /**
  * Fires when selected invalid file(s).
  */
  onPlusError?: (event: CustomEvent<BrowseEvent>) => void;
  /**
  * Fires when file(s) are added successfully.
  */
  onPlusSuccess?: (event: CustomEvent<BrowseEvent>) => void;
}
export interface BrowseMethods {
  /**
  * Opens the browse dialog.
  */
  browse(): void;
}
export interface BrowseProperties {
  /**
  * One or more
  * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
  * describing file types to allow.
  */
  accept?: string;
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * Adds droppable ability.
  */
  droppable?: boolean;
  /**
  * Specifies the minimum number of files.
  */
  min?: number;
  /**
  * Specifies the maximum number of files.
  */
  max?: number;
  /**
  * Specifies the minimum size of the file(s) in bytes.
  */
  minSize?: number;
  /**
  * Specifies the maximum size of the file(s) in bytes.
  */
  maxSize?: number;
  /**
  * Allows to select more than one file.
  */
  multiple?: boolean;
}
export interface BrowseJSX extends BrowseEvents, BrowseProperties {}
declare global {
  interface HTMLPlusBrowseElement extends HTMLElement, BrowseMethods, BrowseProperties {}
  var HTMLPlusBrowseElement: {
    prototype: HTMLPlusBrowseElement;
    new (): HTMLPlusBrowseElement;
  };
  interface HTMLElementTagNameMap {
    "plus-browse": HTMLPlusBrowseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": BrowseEvents & BrowseAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type BrowseElement = globalThis.HTMLPlusBrowseElement;