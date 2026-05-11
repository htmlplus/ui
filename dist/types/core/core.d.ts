export declare class PlusCore {
    $host: HTMLElement;
    tick?: number;
    get dir(): 'ltr' | 'rtl';
    get isRTL(): boolean;
    get $shadowRoot(): ShadowRoot;
    forceUpdate(): void;
}
