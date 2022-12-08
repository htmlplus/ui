import { Element, Property } from '@htmlplus/element';
// import { } from './template.types';

@Element()
export class Signature {

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
