/// <reference types="react" />
import { FloatingOffset, FloatingPlacement } from './floating.types';
/**
 * TODO
 * @slot default - The default slot.
 */
export declare class Floating {
    /**
     * TODO
     */
    fixed?: boolean;
    /**
     * TODO
     */
    offset?: FloatingOffset;
    /**
     * TODO
     */
    placement?: FloatingPlacement;
    get style(): string;
    get attributes(): {
        style: string;
    };
    render(): JSX.Element;
}
