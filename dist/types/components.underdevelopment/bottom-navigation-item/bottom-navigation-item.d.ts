/**
 * @development
 * @group bottom-navigation
 * @slot default - The default slot.
 */
export declare class BottomNavigationItem {
    /**
     * TODO
     */
    disabled?: boolean;
    /**
     * TODO
     */
    value?: any;
    request?: Function;
    tunnel?: any;
    get attributes(): {
        grow: any;
        role: string;
        state: string;
        onClick: () => void;
    };
    get classes(): string;
    get key(): any;
    get state(): "active" | "deactive";
    /**
     * Events handler
     */
    onClick(): void;
    /**
     * Lifecycles
     */
    render(): any;
}
