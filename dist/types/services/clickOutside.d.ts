export declare class ClickOutside {
    static targets: Map<any, any>;
    static get type(): "touchstart" | "click";
    static on(element: any, callback: any, self?: boolean, options?: any): void;
    static off(element: any, options?: any): void;
}
