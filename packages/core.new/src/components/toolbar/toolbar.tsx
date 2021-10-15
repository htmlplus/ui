import { Component, GlobalConfig, Property } from '@app/decorators';

/**
 * @development 
 * @slot default - The default slot.
 */
@Component()
export class Toolbar {

  /**
   * TODO
   */
  @Property()
  disabled?: boolean;

  @GlobalConfig('toolbar')
  config?;

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
