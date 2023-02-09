type LinkConfig = {
    crawl?: boolean;
    namespace?: (instance: LinkInstance) => string | undefined;
};
type LinkInstance = any;
export declare const createLink: (config?: LinkConfig) => {
    Action: () => (target: any, name: PropertyKey) => void;
    Inject: (state?: boolean) => (target: any, name: PropertyKey) => void;
    Observable: () => (target: any, name: PropertyKey) => void;
    reconnect: (instance: LinkInstance) => void;
};
export {};
