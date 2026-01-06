type FormatBytesStandardMap = {
    [key in 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET']: {
        base: number;
        unit: string;
        units: readonly [symbol: string, prefix: string][];
    };
};
export declare const FORMAT_BYTES_STANDARD: FormatBytesStandardMap;
export {};
