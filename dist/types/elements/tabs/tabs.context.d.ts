export interface TabsContext {
    current?: number | string;
    change(value: number | string): void;
}
