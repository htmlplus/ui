export type PlusPrismResolver = (params: {
    key: 'language' | 'plugin' | 'theme';
    value: string;
}) => Promise<any>;
export type PlusPrismPlugins = {
    [key in string]: boolean | {
        [key in string]: string;
    };
};
