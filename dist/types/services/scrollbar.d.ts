export declare class Scrollbar {
    static keys: Set<any>;
    static style: Partial<Pick<CSSStyleDeclaration, 'overflow' | 'paddingLeft' | 'paddingRight'>>;
    static get width(): number;
    static remove(key: any): void;
    static reset(key: any): void;
}
