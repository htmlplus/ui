/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
export declare class ToastToggler {
    /**
     * This property helps you to attach which toast this toggler controls.
     * It doesn't matter where the toast toggler is.
     * You can put the toast's toggler inside or outside of the toast.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    toggle?: Function;
    tunnel?: boolean;
    get attributes(): {
        role: string;
        state: string;
        onClick: () => any;
    };
    get text(): "Close" | "Open";
    /**
     * Watchers
     */
    watcher(): void;
    render(): any;
}
