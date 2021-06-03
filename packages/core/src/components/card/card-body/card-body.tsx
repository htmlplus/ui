import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @internal
 * @group card
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-card-body',
  styleUrl: 'card-body.scss',
  shadow: true,
})
export class CardBody implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
