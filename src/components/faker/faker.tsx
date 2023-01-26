import { Element, Property } from '@htmlplus/element';

import type { Faker as Core } from '@faker-js/faker';

/**
 * TODO
 * @dependencies @faker-js/faker
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
   * Localizes the result. [More](https://fakerjs.dev/guide/localization.html).
   */
  @Property()
  locale?: string;

  /**
   * Keeps the result constant.
   */
  @Property()
  seed?: number;

  get content() {
    const method = this.api?.split('.').reduce((result, key) => result?.[key], this.instance);

    if (!method) return null;

    if (this.locale) {
      this.instance.setLocale(this.locale);
    }

    this.instance.seed(this.seed);

    return method(...this.arguments) || null;
  }

  connectedCallback() {
    if (this.instance) return;

    import('@faker-js/faker/locale/en').then((module) => {
      this.instance = module.faker;
    });
  }

  render() {
    return this.content;
  }
}
