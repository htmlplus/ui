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
    accept: string;
    /**
     * Disables the element functionality.
     */
    disabled: boolean;
    /**
     * Adds droppable ability.
     */
    droppable: boolean;
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
    multiple: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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
    dragging: boolean;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusBrowseAttributesMapper = {
  'minSize': 'min-size';
  'maxSize': 'max-size';
};
export type PlusBrowseOverridableKeys = 'preset';
export interface PlusBrowseDisables {}
export interface PlusBrowseOverrides {}
export type PlusBrowseAttributes = Rename<PlusBrowseProperties, PlusBrowseAttributesMapper>;
export type PlusBrowseAttributesOverridden = Rename<PlusBrowsePropertiesOverridden, PlusBrowseAttributesMapper>;
export type PlusBrowseAttributesBase = Rename<PlusBrowsePropertiesBase, PlusBrowseAttributesMapper>;
export type PlusBrowseEvents = Filter<PlusBrowseEventsBase, PlusBrowseDisables>;
export type PlusBrowseEventsBase = ToEventHandlers<Pick<PlusBrowse, PlusBrowseEventsKeys>>;
export type PlusBrowseEventsKeys = 'plusChange' | 'plusError' | 'plusSuccess';
export type PlusBrowseEventsJSX = ToJSXEvent<PlusBrowseEvents>;
export type PlusBrowseEventsBaseJSX = ToJSXEvent<PlusBrowseEventsBase>;
export type PlusBrowseMethods = Filter<PlusBrowseMethodsBase, PlusBrowseDisables>;
export type PlusBrowseMethodsBase = Pick<PlusBrowse, PlusBrowseMethodsKeys>;
export type PlusBrowseMethodsKeys = 'browse';
export type PlusBrowseProperties = Filter<PlusBrowsePropertiesOverridden, PlusBrowseDisables>;
export type PlusBrowsePropertiesOverridden = Override<PlusBrowsePropertiesBase, PlusBrowseOverrides, PlusBrowseOverridableKeys>;
export type PlusBrowsePropertiesBase = Pick<PlusBrowse, PlusBrowsePropertiesKeys>;
export type PlusBrowsePropertiesKeys = 'accept' | 'disabled' | 'droppable' | 'min' | 'max' | 'minSize' | 'maxSize' | 'multiple' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-browse': {
      properties: PlusBrowsePropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-browse": PlusBrowseJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusBrowseElement>, HTMLPlusBrowseElement>, keyof PlusBrowseJSX>;
    }
  }
}