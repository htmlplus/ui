/// <reference types="react" />
import { PlaygroundReferences } from './playground.types';
/**
 * TODO
 * @slot default - The default slot.
 */
export declare class Playground {
    /**
     * TODO
     */
    properties?: any[];
    /**
     * TODO
     */
    references?: PlaygroundReferences;
    get $host(): HTMLElement;
    get $references(): (Element | PlaygroundReferences[])[];
    render(): JSX.Element;
}
