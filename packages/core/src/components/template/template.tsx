import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
// import { } from './toast.types';

/**
 * TODO
 * @internal 
 * @slot - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-template',
  styleUrl: 'template.scss',
  shadow: true
})
export class Template {

  /**
   * TODO
   */
  @Prop()
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
      <Host>
        <slot />
      </Host>
    )
  }
}
