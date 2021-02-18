import { Component, Host, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';

/**
 * TODO
 * @internal
 * @examples default
 */
@Component({
  tag: 'plus-ripple',
  styleUrl: 'ripple.scss',
  shadow: true
})
export class Ripple {

  @GlobalConfig('ripple')
  config?;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
