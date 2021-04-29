import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
// import { } from './toast.types';

/**
 * TODO
 * @internal 
 * @group bottom-navigation
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-bottom-navigation-item',
  styleUrl: 'bottom-navigation-item.scss',
  shadow: true
})
export class BottomNavigationItem {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Prop()
  value?: any;

  @GlobalConfig('bottomNavigationItem')
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
