import { Component, Host, Prop, Watch, h } from '@stencil/core';
import { ToastLink, Link, rebind } from '../toast/toast.link';

/**
 * @group toast
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
@Component({
  tag: 'plus-toast-toggler',
  styleUrl: 'toast-toggler.scss',
  shadow: true,
})
export class ToastToggler {

  /**
   * This property helps you to attach which toast this toggler controls. 
   * It doesn't matter where the toast toggler is. 
   * You can put the toast's toggler inside or outside of the toast. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  @Link({ scope: '[connector]' })
  link!: ToastLink;

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
