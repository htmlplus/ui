export type Context = {
    current?: string;
    change(value: string): void;
};
