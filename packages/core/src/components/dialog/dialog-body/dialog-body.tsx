import { Component, Host, Prop, h } from '@stencil/core';

/**
 * @group dialog
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-dialog-body',
  styleUrl: 'dialog-body.scss',
  shadow: true,
})
export class DialogBody {

  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Prop({ reflect: true })
  scrollable?: boolean;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
