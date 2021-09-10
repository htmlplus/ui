import { Component, GlobalConfig, Host, Property } from '@app/decorators';
// import { } from './toolbar-spacer.types';

/**
 * @development 
 */
@Component()
export class ToolbarSpacer {

  /**
   * TODO
   */
  @Property()
  disabled?: boolean;

  @GlobalConfig('toolbarSpacer')
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
      <Host>
        <slot />
      </Host>
    )
  }
}
