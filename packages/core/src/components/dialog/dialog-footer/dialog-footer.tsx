import { Component, Host, h } from '@stencil/core';

/**
 * @group dialog
 * @slot - The default slot
 */
@Component({
  tag: 'plus-dialog-footer',
  styleUrl: 'dialog-footer.scss',
  shadow: true,
})
export class DialogFooter {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
