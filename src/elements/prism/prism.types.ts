export type PrismResolver = (params: { key: string; value: string }) => Promise<unknown>;
export type PrismPlugins = { [key in string]: boolean | { [key in string]: string } };
