import { Attributes, Element, Property } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';

@Element()
export class Divider {

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	placement?: DividerPlacement = 'center';

	/**
	 * Specifies different divider styles.
	 */
	@Property({ reflect: true })
	type?: DividerType = 'solid';

	/**
	 * TODO
	 */
	@Property({ reflect: true })
	variant?: DividerVariant = 'full';

	/**
	 * You can use vertical property for vertical division.
	 */
	@Property({ reflect: true })
	vertical?: boolean;

	/**
	 * Determines the width of the divider.
	 */
	@Property({ reflect: true })
	width?: DividerWidth = 'thin'; 

	@Attributes()
	get attributes() {
		return {
			'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
			'empty': !Helpers.host(this).innerHTML?.trim(), // TODO
			'role': 'separator',
		}
	} 

	render() {
		return <slot />;
	}
}