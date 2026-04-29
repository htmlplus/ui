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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
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
    get attributes(): {
        dragging?: boolean;
        onClick?: (event: MouseEvent) => void;
        onDragLeave?: (event: DragEvent) => void;
        onDragOver?: (event: DragEvent) => void;
        onDrop?: (event: DragEvent) => void;
    };
    get types(): string[];
    /**
     * Opens the browse dialog.
     */
    browse(): void;
    do(files?: FileList): void;
    onClick(): void;
    onChange(event: Event): void;
    onDragLeave(): void;
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusBrowseAttributesMapper = {
  'accept': 'accept';
  'disabled': 'disabled';
  'droppable': 'droppable';
  'min': 'min';
  'max': 'max';
  'minSize': 'min-size';
  'maxSize': 'max-size';
  'multiple': 'multiple';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusBrowseOverridableKeys = 'variant';
export interface PlusBrowseDisables {}
export interface PlusBrowseOverrides {}
export type PlusBrowseAttributes = Filter<PlusBrowseAttributesOverridden, PlusBrowseDisables, PlusBrowseAttributesMapper>;
export type PlusBrowseAttributesOverridden = Override<PlusBrowseAttributesBase, PlusBrowseOverrides, PlusBrowseOverridableKeys, PlusBrowseAttributesMapper>;
export type PlusBrowseAttributesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusBrowseProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusBrowseEvents = Filter<PlusBrowseEventsBase, PlusBrowseDisables>;
export type PlusBrowseEventsBase = {
  /**
  * Fires when file(s) are selected.
  */
  plusChange?: (event: CustomEvent<PlusBrowseEvent>) => void;
  /**
  * Fires when selected invalid file(s).
  */
  plusError?: (event: CustomEvent<PlusBrowseEvent>) => void;
  /**
  * Fires when file(s) are added successfully.
  */
  plusSuccess?: (event: CustomEvent<PlusBrowseEvent>) => void;
};
export type PlusBrowseEventsJSX = Filter<PlusBrowseEventsBaseJSX, PlusBrowseDisables, {
  plusChange: 'onPlusChange';
  plusError: 'onPlusError';
  plusSuccess: 'onPlusSuccess';
}>;
export type PlusBrowseEventsBaseJSX = {
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
};
export type PlusBrowseMethods = Filter<PlusBrowseMethodsBase, PlusBrowseDisables>;
export type PlusBrowseMethodsBase = {
  /**
  * Opens the browse dialog.
  */
  browse(): void;
};
export type PlusBrowseProperties = Filter<PlusBrowsePropertiesOverridden, PlusBrowseDisables>;
export type PlusBrowsePropertiesOverridden = Override<PlusBrowsePropertiesBase, PlusBrowseOverrides, PlusBrowseOverridableKeys>;
export type PlusBrowsePropertiesBase = {
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
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusBrowseProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-browse': {
      properties: PlusBrowsePropertiesOverridden;
    };
  }
}
export type PlusBrowseElement = globalThis.HTMLPlusBrowseElement;
export type PlusBrowseJSX = PlusBrowseAttributes & PlusBrowseEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-browse": PlusBrowseJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusBrowseElement>, HTMLPlusBrowseElement>, keyof PlusBrowseJSX>;
    }
  }
}