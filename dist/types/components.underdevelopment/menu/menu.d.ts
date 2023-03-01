/// <reference types="react" />
import { EventEmitter } from '@htmlplus/element';
import { MenuAlignX, MenuAlignY, MenuGrowX, MenuGrowY } from './menu.types';
/**
 * @development
 */
export declare class Menu {
    /**
     * TODO
     */
    alignX?: MenuAlignX;
    /**
     * TODO
     */
    alignY?: MenuAlignY;
    /**
     * TODO
     */
    fixed?: boolean;
    /**
     * TODO
     */
    growX?: MenuGrowX;
    /**
     * TODO
     */
    growY?: MenuGrowY;
    /**
     * TODO
     */
    offsetX?: string | number;
    /**
     * TODO
     */
    offsetY?: string | number;
    /**
     * TODO
     */
    open?: boolean;
    /**
     * TODO
     */
    persistent?: boolean;
    /**
     * TODO
     */
    trigger?: 'click' | 'hover';
    /**
     * TODO
     */
    plusClose: EventEmitter<void>;
    x?: string;
    y?: string;
    $activator: HTMLElement;
    $content: HTMLElement;
    observer?: any;
    get $host(): HTMLElement;
    get getGrowX(): string;
    get getGrowY(): "bottom" | "top" | "pointer" | "both";
    get reverse(): boolean;
    get style(): {
        top: string;
        left: string;
        transform: string;
        position: any;
        zIndex: string;
    };
    bind(): void;
    clean(): void;
    click(event: any): void;
    s(basex?: string, basey?: string): {
        top: string;
        left: string;
        transform: string;
        position: any;
        zIndex: string;
    };
    update(entries: any): void;
    onOutsideClick(event: any): void;
    loadedCallback(): void;
    disconnectedCallback(): void;
    render(): JSX.Element;
}
