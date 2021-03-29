import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { ToastPlacement, ToastType } from './toast.types';

/**
 * TODO
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
  duration?: number;

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

  @GlobalConfig('toast')
  config?;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
