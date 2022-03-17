import { Element, Property } from '@htmlplus/element';
// import { } from './template.types';

/**
 * TODO
 * @development 
 * @slot default - The default slot.
 * @examples default
 */
@Element()
export class Template {

  /**
   * TODO
   */
  @Property()
  disabled?: boolean;

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

  /**
   * Watchers
   */

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  render() {
    return (
      <slot />
    )
  }
}
