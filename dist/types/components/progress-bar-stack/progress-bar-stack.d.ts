export declare class ProgressBarStack {
    static TAG: string;
    static STYLES: string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface ProgressBarStackJSX {
}
declare global {
    interface HTMLPlusProgressBarStackElement extends HTMLElement {
    }
    var HTMLPlusProgressBarStackElement: {
        prototype: HTMLPlusProgressBarStackElement;
        new (): HTMLPlusProgressBarStackElement;
    };
    interface HTMLElementTagNameMap {
        "plus-progress-bar-stack": HTMLPlusProgressBarStackElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-progress-bar-stack": ProgressBarStackJSX & {
                [key: string]: any;
            };
        }
    }
}
export type ProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;
