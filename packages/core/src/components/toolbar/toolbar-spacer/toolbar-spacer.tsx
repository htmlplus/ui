import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
// import { } from './toast.types';

/**
 * TODO
 * @internal 
 * @group toolbar
 */
@Component({
  tag: 'plus-toolbar-spacer',
  styleUrl: 'toolbar-spacer.scss',
  shadow: true
})
export class ToolbarSpacer {

  /**
   * TODO
   */
  @Prop()
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
