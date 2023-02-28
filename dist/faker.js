import { _ as __decorate, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{white-space:pre-wrap}";

/**
 * @dependencies @faker-js/faker
 * @stable
 * @thirdParty
 */
let Faker = class Faker {
    constructor() {
        /**
         * Specifies the [API](https://fakerjs.dev/api).
         */
        this.api = 'lorem.paragraph';
        /**
         * Specifies the API's arguments as an array.
         */
        this.arguments = [];
    }
    get content() {
        var _a;
        const method = (_a = this.api) === null || _a === void 0 ? void 0 : _a.split('.').reduce((result, key) => result === null || result === void 0 ? void 0 : result[key], this.instance);
        if (!method)
            return null;
        this.instance.seed(this.seed);
        return method(...this.arguments) || null;
    }
    loadedCallback() {
        if (this.instance)
            return;
        import('@faker-js/faker/locale/en').then(module => {
            this.instance = module.faker;
        }).catch(() => {
            throw new Error("It seems that '@floating-ui/dom' is not installed!");
        });
    }
    render() {
        return this.content;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Faker.TAG = "plus-faker";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Faker.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], Faker.prototype, "api", void 0);
__decorate([
    Property({
        type: 1
    })
], Faker.prototype, "arguments", void 0);
__decorate([
    Property({
        type: 0
    })
], Faker.prototype, "instance", void 0);
__decorate([
    Property({
        type: 64
    })
], Faker.prototype, "seed", void 0);
Faker = __decorate([
    Element("plus-faker")
], Faker);

export { Faker };
