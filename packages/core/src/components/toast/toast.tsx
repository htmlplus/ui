import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { ToastPlacement, ToastType } from './toast.types';

/**
 * TODO
 * @slot - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-toast',
  styleUrl: 'toast.scss',
  shadow: true
})
export class Toast {

  /**
   * TODO
   */
  @Prop()
  duration?: number = 5000;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  open?: boolean;

  /**
   * TODO
   */
  @Prop()
  placement?: ToastPlacement = 'top-end';

  /**
   * TODO
   */
  @Prop()
  type?: ToastType = 'default';

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusClose!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusClosed!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusOpen!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusOpened!: EventEmitter<void>;

  @GlobalConfig('toast', {
    duration: 5000,
    placement: 'top-end',
    type: 'default',
  })
  config?;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
