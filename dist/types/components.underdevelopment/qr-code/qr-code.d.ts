import { QRCodeError } from './qr-code.types';
/**
 * TODO
 */
export declare class QRCode {
    /**
     * TODO.
     */
    background?: string;
    /**
     * TODO.
     */
    color?: string;
    /**
     * TODO.
     */
    error?: QRCodeError;
    /**
     * TODO.
     */
    label?: string;
    /**
     * TODO.
     */
    radius?: Number;
    /**
     * TODO.
     */
    size?: Number;
    /**
     * TODO.
     */
    value?: string;
    $canvas: HTMLCanvasElement;
    get style(): {
        width: string;
        height: string;
    };
    loadedCallback(): void;
    render(): any;
}
