import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
// import { } from './toast.types';

/**
 * TODO
 * @internal 
 * @slot default - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-template',
  styleUrl: 'template.scss',
  shadow: true
})
export class Template implements ComponentInterface {

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
