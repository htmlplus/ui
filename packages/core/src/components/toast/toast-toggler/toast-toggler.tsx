import { Component, ComponentInterface, Host, Prop, h, State } from '@stencil/core';
import { Inject, reconnect } from '../toast/toast.link';

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
export class ToastToggler implements ComponentInterface {

  /**
   * This property helps you to attach which toast this toggler controls. 
   * It doesn't matter where the toast toggler is. 
   * You can put the toast's toggler inside or outside of the toast. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  @Inject()
  toggle?: Function = () => console.log('TODO: can not use out of toast');

  @Inject()
  @State()
  tunnel?: boolean;

  get attributes() {
    return {
      'role': 'button',
      'state': this.tunnel ? 'open' : 'close',
      'onClick': () => this.toggle()
    }
  }

  get text() {
    return this.tunnel ? 'Close' : 'Open';
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    switch (name) {

      case 'connector':

        reconnect(this);

        break;
    }
  }

  render() {
    return (
      <Host {...this.attributes}>
        <slot>
          {this.text}
        </slot>
        {/* TODO */}
        {/* <slot name="close" /> */}
        {/* <slot name="open" /> */}
      </Host>
    )
  }
}
