export interface ScrollDetectorChangeEvent {
    /**
     * Equals with `scrollTop` or `scrollLeft` based on the `vertical` property.
     */
    offset: number;
    /**
     * Difference between `total` with `viewport`.
     */
    overflow: number;
    /**
     * Percentage of progress.
     */
    progress: number;
    /**
     * Equals with `scrollHeight` or `scrollWidth` based on the `vertical` property.
     */
    total: number;
    /**
     * Equals with `clientHeight` or `clientWidth` based on the `vertical` property.
     */
    viewport: number;
}
export type ScrollDetectorReference = Element | 'document' | (string & {});
