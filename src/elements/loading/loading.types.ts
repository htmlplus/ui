export type LoadingResolver = (params: { type: string; }) => Promise<string>;
export type LoadingSize = 'inherit' | 'sm' | 'md' | 'lg' | (number & {}) | (string & {});
