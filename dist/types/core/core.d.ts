export declare class PlusCore {
    static experimentalBreakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    $host: HTMLElement;
    tick?: number;
    get dir(): 'ltr' | 'rtl';
    get isRTL(): boolean;
    forceUpdate(): void;
}
