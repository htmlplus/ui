import { Element, Property } from '@htmlplus/element';

import type { Faker as FakerCoreType } from '@faker-js/faker';

import { PlusCore } from '@/core';

/**
 * @thirdParty
 * @stable
 * @dependencies @faker-js/faker
 */
@Element()
export class Faker extends PlusCore {
  /**
   * Specifies the [API](https://fakerjs.dev/api).
   */
  @Property()
  api?: string = 'lorem.paragraph';

  /**
   * Specifies the API's arguments as an array.
   */
  @Property()
  arguments?: Array<any> = [];

  /**
   * The [Faker](https://fakerjs.dev/guide/usage.html) object instance.
   */
  @Property()
  instance?: FakerCoreType;

  /**
   * Keeps the result constant.
   */
  @Property()
  seed?: number;

  get content() {
    const method = this.api?.split('.').reduce((result, key) => result?.[key], this.instance);

    if (!method) return null;

    this.instance.seed(this.seed);

    return method(...this.arguments) || null;
  }

  connectCallback() {
    if (this.instance) return;

    return import('@faker-js/faker')
      .then((module) => {
        this.instance = module.faker;
      })
      .catch(() => {
        throw new Error(
          "The `faker` element depends on an external package, but it doesn't seem to be installed. Running `npm install @faker-js/faker` will fix this problem."
        );
      });
  }

  render() {
    return this.content;
  }
}
