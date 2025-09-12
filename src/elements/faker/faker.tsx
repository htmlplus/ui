import {
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	Variant
} from '@htmlplus/element';

import type { Faker as FakerCoreType } from '@faker-js/faker';

import { PlusCore } from '@/core';
import { ExternalDependencyError } from '@/errors';
import type { Breakpoint } from '@/types';

/**
 * Generates massive amounts of fake (but realistic) data for testing and development. Powered by [Faker](https://fakerjs.dev/).
 *
 * @thirdParty
 * @stable
 * @dependencies @faker-js/faker
 *
 * @examples default, api, arguments, seed, localization, more
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
	arguments?: unknown[] = [];

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

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<string>;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<Breakpoint>;

	get content() {
		const method = this.api?.split('.').reduce((result, key) => result?.[key], this.instance);

		if (!method) return null;

		this.instance.seed(this.seed);

		return method(...this.arguments) || null;
	}

	connectedCallback() {
		if (this.instance) return;

		import('@faker-js/faker')
			.then((module) => {
				this.instance = module.default?.faker || module.faker;
			})
			.catch((error) => {
				throw new ExternalDependencyError(this.$host, '@faker-js/faker', { cause: error });
			});
	}

	render() {
		return this.content;
	}
}
