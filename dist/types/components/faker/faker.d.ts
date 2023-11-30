import type { Faker as FakerCoreType } from '@faker-js/faker';
import { PlusCore } from "../../core";
/**
 * @dependencies @faker-js/faker
 * @stable
 * @thirdParty
 */
export declare class Faker extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the [API](https://fakerjs.dev/api).
     */
    api?: string;
    /**
     * Specifies the API's arguments as an array.
     */
    arguments?: Array<any>;
    /**
     * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
     */
    instance?: FakerCoreType;
    /**
     * Keeps the result constant.
     */
    seed?: number;
    get content(): any;
    connectCallback(): Promise<void>;
    render(): any;
}
export interface FakerAttributes {
    /**
    * Specifies the [API](https://fakerjs.dev/api).
    */
    "api"?: string;
    /**
    * Specifies the API's arguments as an array.
    */
    "arguments"?: Array<any>;
    /**
    * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
    */
    "instance"?: FakerCoreType;
    /**
    * Keeps the result constant.
    */
    "seed"?: number;
}
export interface FakerEvents {
}
export interface FakerMethods {
}
export interface FakerProperties {
    /**
    * Specifies the [API](https://fakerjs.dev/api).
    */
    api?: string;
    /**
    * Specifies the API's arguments as an array.
    */
    arguments?: Array<any>;
    /**
    * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
    */
    instance?: FakerCoreType;
    /**
    * Keeps the result constant.
    */
    seed?: number;
}
export interface FakerJSX extends FakerEvents, FakerProperties {
}
declare global {
    interface HTMLPlusFakerElement extends HTMLElement, FakerMethods, FakerProperties {
    }
    var HTMLPlusFakerElement: {
        prototype: HTMLPlusFakerElement;
        new (): HTMLPlusFakerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-faker": HTMLPlusFakerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-faker": FakerEvents & FakerAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type FakerElement = globalThis.HTMLPlusFakerElement;
