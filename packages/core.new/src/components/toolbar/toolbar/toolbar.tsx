import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
// import { } from './toast.types';

/**
 * @internal 
 * @group toolbar
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-toolbar',
  styleUrl: 'toolbar.scss',
  shadow: true
})
export class Toolbar implements ComponentInterface {

  /**
   * TODO
   */
  @Prop()
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
      <Host>
        <slot />
      </Host>
    )
  }
}
