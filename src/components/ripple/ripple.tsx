import { Component, ComponentInterface, Host, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';

/**
 * @internal
 */
@Component({
  tag: 'plus-ripple',
  styleUrl: 'ripple.scss',
  shadow: true
})
export class Ripple implements ComponentInterface {

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
