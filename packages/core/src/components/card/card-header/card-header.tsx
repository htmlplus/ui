import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @internal
 * @group card
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-card-header',
  styleUrl: 'card-header.scss',
  shadow: true,
})
export class CardHeader implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
