import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @group dialog
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-dialog-header',
  styleUrl: 'dialog-header.scss',
  shadow: true,
})
export class DialogHeader implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
