import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { PlusBrowseEvent } from './types';
/**
 * Allows you to select file or files by using click or drag & drop functionality.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, multiple, accept, min-and-max, min-and-max-size, droppable
 */
export declare class PlusBrowse extends PlusCore {
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
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * Fires when file(s) are selected.
     */
    plusChange: EventEmitter<PlusBrowseEvent>;
    /**
     * Fires when selected invalid file(s).
     */
    plusError: EventEmitter<PlusBrowseEvent>;
    /**
     * Fires when file(s) are added successfully.
     */
    plusSuccess: EventEmitter<PlusBrowseEvent>;
    $input: HTMLElement;
    dragging?: boolean;
    timeout?: number;
    get attributes(): any;
    get types(): string[];
    /**
     * Opens the browse dialog.
     */
    browse(): void;
    do(files?: FileList): void;
    onClick(): void;
    onChange(event: any): void;
    onDragLeave(): void;
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusBrowseAttributesBase {
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
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusBrowseProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusBrowseVariantOverrides>;
}
export interface PlusBrowseAttributesDisables {}
export type PlusBrowseAttributes = Filter<PlusBrowseAttributesBase, PlusBrowseAttributesDisables>;
export interface PlusBrowseEventsBase {
  /**
  * Fires when file(s) are selected.
  */
  onPlusChange?: (event: CustomEvent<PlusBrowseEvent>) => void;
  /**
  * Fires when selected invalid file(s).
  */
  onPlusError?: (event: CustomEvent<PlusBrowseEvent>) => void;
  /**
  * Fires when file(s) are added successfully.
  */
  onPlusSuccess?: (event: CustomEvent<PlusBrowseEvent>) => void;
}
export interface PlusBrowseEventsDisables {}
export type PlusBrowseEvents = Filter<PlusBrowseEventsBase, PlusBrowseEventsDisables>;
export interface PlusBrowseMethodsBase {
  /**
  * Opens the browse dialog.
  */
  browse(): void;
}
export interface PlusBrowseMethodsDisables {}
export type PlusBrowseMethods = Filter<PlusBrowseMethodsBase, PlusBrowseMethodsDisables>;
export interface PlusBrowsePropertiesBase {
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
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusBrowseProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusBrowseVariantOverrides>;
}
export interface PlusBrowsePropertiesDisables {}
export type PlusBrowseProperties = Filter<PlusBrowsePropertiesBase, PlusBrowsePropertiesDisables>;
export interface PlusBrowseJSX extends PlusBrowseEvents, PlusBrowseProperties {}
declare global {
  interface HTMLPlusBrowseElement extends HTMLElement, PlusBrowseMethods, PlusBrowseProperties {}
  var HTMLPlusBrowseElement: {
    prototype: HTMLPlusBrowseElement;
    new (): HTMLPlusBrowseElement;
  };
  interface HTMLElementTagNameMap {
    "plus-browse": HTMLPlusBrowseElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-browse": PlusBrowseAttributes & PlusBrowseEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseAttributes & PlusBrowseEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusBrowseElement>, HTMLPlusBrowseElement>, keyof (PlusBrowseAttributes & PlusBrowseEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseAttributes & PlusBrowseEvents & Omit<HTMLAttributes<HTMLPlusBrowseElement>, keyof (PlusBrowseAttributes & PlusBrowseEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseAttributes & PlusBrowseEvents & Omit<HTMLAttributes<HTMLPlusBrowseElement>, keyof (PlusBrowseAttributes & PlusBrowseEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseAttributes & PlusBrowseEvents & Omit<HTMLAttributes<HTMLPlusBrowseElement>, keyof (PlusBrowseAttributes & PlusBrowseEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseAttributes & PlusBrowseEvents & Omit<HTMLAttributes<HTMLPlusBrowseElement>, keyof (PlusBrowseAttributes & PlusBrowseEvents)>;
    }
  }
}
export type PlusBrowseElement = globalThis.HTMLPlusBrowseElement;
export interface PlusBrowseVariantOverrides {}