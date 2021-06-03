import { Component, Host, h } from '@stencil/core';

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
export class CardHeader {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
