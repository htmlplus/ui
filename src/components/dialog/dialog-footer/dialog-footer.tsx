import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @group dialog
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-dialog-footer',
  styleUrl: 'dialog-footer.scss',
  shadow: true,
})
export class DialogFooter implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
