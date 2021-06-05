import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * @group dialog
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-dialog-content',
  styleUrl: 'dialog-content.scss',
  shadow: true,
})
export class DialogContent implements ComponentInterface {

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
