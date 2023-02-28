import { Element, Property } from '@htmlplus/element';

import type { Faker as Core } from '@faker-js/faker';

/**
 * @dependencies @faker-js/faker
 * @stable
 * @thirdParty
 */
@Element()
export class Faker {
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
  instance?: Core;

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

  loadedCallback() {
    if (this.instance) return;
    import('@faker-js/faker/locale/en')
      .then((module) => {
        this.instance = module.faker;
      })
      .catch(() => {
        throw new Error("It seems that '@floating-ui/dom' is not installed!");
      });
  }

  render() {
    return this.content;
  }
}
