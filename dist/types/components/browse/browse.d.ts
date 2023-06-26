import { EventEmitter } from '@htmlplus/element';
import { PlusBase } from '@app/core';
import { BrowseEvent } from './browse.types';
/**
 * @slot default - The default slot.
 */
export declare class Browse extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * One or more
     * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
     * describing file types to allow.
     */
    accept?: string;
    /**
     * Disables the component functionality.
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
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface BrowseJSX {
    /**
     * One or more
     * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
     * describing file types to allow.
     */
    accept?: string;
    /**
     * Disables the component functionality.
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
declare global {
    interface HTMLPlusBrowseElement extends HTMLElement {
        /**
         * One or more
         * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
         * describing file types to allow.
         */
        accept?: string;
        /**
         * Disables the component functionality.
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
    var HTMLPlusBrowseElement: {
        prototype: HTMLPlusBrowseElement;
        new (): HTMLPlusBrowseElement;
    };
    interface HTMLElementTagNameMap {
        "plus-browse": HTMLPlusBrowseElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-browse": BrowseJSX & {
                [key: string]: any;
            };
        }
    }
}
export type BrowseElement = globalThis.HTMLPlusBrowseElement;
