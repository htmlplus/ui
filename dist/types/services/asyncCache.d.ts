type AsyncFunction = (...args: any[]) => Promise<any>;
type CacheStore<T extends AsyncFunction> = Record<string, CacheValue<T>>;
type CacheValue<T extends AsyncFunction> = Promise<Awaited<ReturnType<T>>> | Awaited<ReturnType<T>>;
type AsyncCacheConfig<T extends AsyncFunction> = {
    type: 'basic';
    resolver: T;
} | {
    type: 'external';
    key: (...params: Parameters<T>) => string;
    cache: () => CacheStore<T>;
    resolver: T;
} | {
    type: 'global';
    namespace: string;
    resolver: T;
};
export declare class AsyncCache<T extends AsyncFunction> {
    private config;
    private static globalCache;
    private cache;
    constructor(config: AsyncCacheConfig<T>);
    private get currentCache();
    private has;
    private get;
    private remove;
    private set;
    private getKey;
    resolve(...params: Parameters<T>): Promise<Awaited<ReturnType<T>>>;
}
export {};
