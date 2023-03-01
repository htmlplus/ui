import type { Faker as FakerCoreType } from '@faker-js/faker';
/**
 * @dependencies @faker-js/faker
 * @stable
 * @thirdParty
 */
export declare class Faker {
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
export interface FakerJSX {
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
declare global {
    interface HTMLPlusFakerElement extends HTMLElement {
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
    var HTMLPlusFakerElement: {
        prototype: HTMLPlusFakerElement;
        new (): HTMLPlusFakerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-faker": HTMLPlusFakerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-faker": FakerJSX & {
                [key: string]: any;
            };
        }
    }
}
