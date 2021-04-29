import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
// import { } from './toast.types';

/**
 * TODO
 * @internal 
 * @group bottom-navigation
 * @slot default - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-bottom-navigation',
  styleUrl: 'bottom-navigation.scss',
  shadow: true
})
export class BottomNavigation {

  /**
   * TODO
   */
  @Prop()
  disabled?: boolean;

  @GlobalConfig('bottomNavigation')
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
