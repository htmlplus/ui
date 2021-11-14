import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @internal
 * @group card
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-card-footer',
  styleUrl: 'card-footer.scss',
  shadow: true,
})
export class CardFooter implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
