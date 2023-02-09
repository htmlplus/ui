/// <reference types="react" />
/**
 * TODO
 * @slot default - The default slot.
 */
export declare class ScrollToTop {
    /**
     * Disables the component functionality.
     */
    disabled?: boolean;
    /**
     * Specifies the source of the scroll.
     */
    source?: HTMLElement | 'auto' | 'document' | string;
    get $source(): Element;
    onClick(): void;
    render(): JSX.Element;
}
