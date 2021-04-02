import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { GlobalConfig, GlobalState } from '@app/services';
import { ToastGlobalState, ToastPlacement } from './toast.types';

/**
 * TODO
 * @development
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
   * closeButton
   * preventDuplicates
   * icon
   * queueable - Wait for previous to dismiss before showing new
   * dismissable - Dismiss on click
   * One notification at a time
   * override/queue
   * 
   * offset/gutter
   * progress
   * type
   * 
   * https://izitoast.marcelodolza.com/
   * https://vuetifyjs.com/en/components/snackbars/
   */

  /**
   * TODO
   */
  @Prop()
  duration?: number = 5000;

  /**
   * TODO
   */
  @Prop()
  fixed?: boolean = true;

  /**
   * TODO
   */
  @Prop()
  fullWidth?: boolean;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  open?: boolean;

  /**
   * TODO
   */
  @Prop()
  persistent?: boolean;

  /**
   * TODO
   */
  @Prop()
  placement?: ToastPlacement = 'top-end';

  /**
   * TODO
   */
  @Prop()
  reverse?: boolean;

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
    fixed: true,
    placement: 'top-end'
  })
  config?;

  @GlobalState()
  state: ToastGlobalState = {
    instances: []
  };

  get attributes() {
    return {
      'role': 'alert',
      'aria-live': 'assertive',
      'aria-atomic': 'true'
    }
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

  /**
   * Watchers
   */

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  render() {
    return (
      <Host {...this.attributes}>
        <slot />
      </Host>
    )
  }
}
