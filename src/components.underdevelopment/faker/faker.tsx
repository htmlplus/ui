import { Element, Property } from '@htmlplus/element';

import { faker } from '@faker-js/faker';

/**
 * TODO
 */
@Element()
export class Faker {
  /**
   * TODO
   */
  @Property()
  locale?: string;

  /**
   * TODO
   */
  @Property()
  parameters?: Array<any> = [];

  /**
   * TODO
   */
  @Property()
  seed?: number;

  /**
   * TODO
   */
  @Property()
  type?: string;

  get content() {
    let method: Function = faker as any;

    this.type?.split('.').forEach((section) => {
      method = method?.[section];
    });

    if (!method) return null;

    if (this.locale) {
      faker.setLocale(this.locale);
    }

    faker.seed(this.seed);

    return method(...this.parameters) || null;
  }

  render() {
    return this.content;
  }
}
