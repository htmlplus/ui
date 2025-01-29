type AsyncFunction = (...args: any[]) => Promise<any>;

type CacheStore<T extends AsyncFunction> = Record<string, CacheValue<T>>;

type CacheValue<T extends AsyncFunction> = Promise<Awaited<ReturnType<T>>> | Awaited<ReturnType<T>>

type AsyncCacheConfig<T extends AsyncFunction> =
  | {
    type: 'basic';
    resolver: T;
  }
  | {
    type: 'external';
    key: (...params: Parameters<T>) => string;
    cache: () => CacheStore<T>;
    resolver: T;
  }
  | {
    type: 'global';
    namespace: string;
    resolver: T;
  };

export class AsyncCache<T extends AsyncFunction> {
  private static globalCache = {};

  private cache: CacheStore<T> = {};

  constructor(private config: AsyncCacheConfig<T>) { }

  private get currentCache(): CacheStore<T> {
    switch (this.config.type) {
      case 'basic':
        return this.cache;
      case 'external':
        return this.config.cache();
      case 'global':
        return AsyncCache.globalCache;
    }
  }

  private has(key: string): boolean {
    return Object.hasOwn(this.currentCache, key);
  }

  private get(key: string): CacheValue<T> {
    return this.currentCache[key];
  }

  private remove(key: string): void {
    delete this.currentCache[key]
  }

  private set(key: string, value: CacheValue<T>): void {
    this.currentCache[key] = value;
  }

  private getKey(...params: Parameters<T>): string {
    if (this.config.type === 'external') {
      return this.config.key(...params);
    }

    const namespace = this.config.type === 'global' ? this.config.namespace : '';

    const key = [namespace]
      .concat(...params)
      .filter((key) => !!key)
      .map((param) => JSON.stringify(param))
      .join(':')

    return key;
  }

  public async resolve(...params: Parameters<T>): Promise<Awaited<ReturnType<T>>> {
    const key = this.getKey(...params);

    const has = this.has(key);

    const value = this.get(key);

    const pending = value instanceof Promise;

    if (has && !pending) return value;

    if (!has) {
      this.set(key, this.config.resolver(...params));
    }

    try {
      const result = await this.get(key);

      this.set(key, result);

      return result;

    } catch (error) {
      this.remove(key);

      throw error
    }
  }
}