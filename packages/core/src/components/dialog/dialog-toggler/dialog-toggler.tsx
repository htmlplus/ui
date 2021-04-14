import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DialogLink, Inject, rebind } from '../dialog/dialog.link';

/**
 * @group dialog
 * @slot - The default slot.
 * @slot open - Specifies the content of toggler when it's opened.
 * @slot close - Specifies the content of toggler when it's closed.
 */
@Component({
  tag: 'plus-dialog-toggler',
  styleUrl: 'dialog-toggler.scss',
  shadow: true,
})
export class DialogToggler {

  /**
   * This property helps you to attach which dialog this toggler controls. 
   * It doesn't matter where the dialog toggler is. 
   * You can put the dialog's toggler inside or outside of the dialog. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  @Inject({ scope: '[connector]' })
  link!: DialogLink;

  @Watch('connector')
  connectorWatcher() {
    rebind(this);
  }

  render() {
    return (
      <Host
        state={this.link.open ? 'open' : 'close'}
        role="button"
        onClick={() => this.link.toggle()}
      >
        <slot>
          {this.link.open ? 'Close' : 'Open'}
        </slot>
        <slot name="close" />
        <slot name="open" />
      </Host>
    );
  }
}
