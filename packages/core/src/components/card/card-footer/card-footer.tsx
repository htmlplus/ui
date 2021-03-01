import { Component, Host, h } from '@stencil/core';

/**
 * TODO
 * @internal
 * @group card
 * @slot - The default slot
 */
@Component({
  tag: 'plus-card-footer',
  styleUrl: 'card-footer.scss',
  shadow: true,
})
export class CardFooter {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
