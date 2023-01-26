import { Element, Property } from '@htmlplus/element';

import type { Faker as Core } from '@faker-js/faker';

/**
 * TODO
 */
@Element()
export class Faker {
  /**
   * TODO
   */
  @Property()
  arguments?: Array<any> = [];

  /**
   * TODO
   */
  @Property()
  instance?: Core;

  /**
   * TODO
   */
  @Property()
  locale?: string;

  /**
   * TODO
   */
  @Property()
  seed?: number;

  /**
   * TODO
   */
  @Property()
  type?: string = 'lorem.paragraph';

  get content() {
    const method = this.type?.split('.').reduce((result, key) => result?.[key], this.instance);

    if (!method) return null;

    if (this.locale) {
      this.instance.setLocale(this.locale);
    }

    this.instance.seed(this.seed);

    return method(...this.arguments) || null;
  }

  render() {
    return this.content;
  }
}
