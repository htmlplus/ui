import { Component, GlobalConfig, Property } from '@app/decorators';
// import { } from './template.types';

/**
 * TODO
 * @development 
 * @slot default - The default slot.
 * @examples default
 */
@Component()
export class Template {

  /**
   * TODO
   */
  @Property()
  disabled?: boolean;

  @GlobalConfig('template')
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
