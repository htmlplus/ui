import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { DialogLink, Inject, rebind } from '../dialog/dialog.link';

/**
 * @group dialog
 * @slot - The default slot
 */
@Component({
  tag: 'plus-dialog-toggler',
  styleUrl: 'dialog-toggler.scss',
  shadow: true,
})
export class DialogToggler {

  /**
   * TODO
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
