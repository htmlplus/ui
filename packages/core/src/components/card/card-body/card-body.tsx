import { Component, Host, h } from '@stencil/core';

/**
 * TODO
 * @internal
 * @group card
 * @slot - The default slot
 */
@Component({
  tag: 'plus-card-body',
  styleUrl: 'card-body.scss',
  shadow: true,
})
export class CardBody {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
