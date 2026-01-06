import {
	Consumer,
	Element,
	type OverridableValue,
	Overrides,
	type OverridesConfig,
	Property,
	State,
	Variant
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import type { PlusBreakpoint } from '@/types';

import type { Context } from '../drawer/context';

/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
@Element()
export class PlusDrawerToggler extends PlusCore {
	/**
	 * This property helps you to attach which drawer this toggler controls.
	 * It doesn't matter where the drawer toggler is.
	 * You can put the drawer's toggler inside or outside of the drawer.
	 * Read more about connectors [here](/connector).
	 */
	@Property()
	connector?: string;

	/**
	 * TODO
	 */
	@Property()
	@Overrides()
	overrides?: OverridesConfig<PlusBreakpoint>;

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	@Variant()
	variant?: OverridableValue<never>;

	@State()
	@Consumer('drawer.connector')
	drawer?: Context;

	render() {
		return (
			<host
				role="button"
				state={this.drawer?.open ? 'opened' : 'closed'}
				onClick={this.drawer?.toggle}
			>
				<slot>{this.drawer?.open ? 'Close' : 'Open'}</slot>
				<slot name={this.drawer?.open ? 'close' : 'open'}></slot>
			</host>
		);
	}
}
