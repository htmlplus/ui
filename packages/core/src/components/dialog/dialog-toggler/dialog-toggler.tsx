import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DialogLink, Link, rebind } from '../dialog/dialog.link';

/**
 * @group dialog
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
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

  @Link({ scope: '[connector]' })
  link!: DialogLink;

  get attributes() {
    return {
      'role': 'button',
      'state': this.link.open ? 'open' : 'close',
      'onClick': () => this.link.toggle()
    }
  }

  /**
   * Watchers
   */

  @Watch('connector')
  watcher() {
    rebind(this);
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot>
          {this.link.open ? 'Close' : 'Open'}
        </slot>
        {/* TODO */}
        {/* <slot name="close" /> */}
        {/* <slot name="open" /> */}
      </Host>
    )
  }
}
