export interface Config {
    asset?: {
        [key: string]: any;
    };
    element?: {
        [key: string]: {
            property?: {
                [key: string]: any;
            };
        };
    };
}
export declare const getConfig: (...parameters: string[]) => any;
export declare const setConfig: (config: Config, override?: boolean) => void;
