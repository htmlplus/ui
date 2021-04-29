import { Component, Host, h } from '@stencil/core';

/**
 * @group dialog
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-dialog-header',
  styleUrl: 'dialog-header.scss',
  shadow: true,
})
export class DialogHeader {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
