import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { Animation, GlobalConfig, GlobalState } from '@app/services';
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
   * fixed
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
  @Prop({ reflect: true })
  animation?: string;

  /**
   * TODO
   */
  @Prop()
  duration?: number = 5000;

  /**
   * TODO
   */
  @Prop()
  fullWidth?: boolean;

  /**
   * TODO
   */
  @Prop({
    mutable: true,
    reflect: true
  })
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
    // TODO
  })
  config?;

  @GlobalState()
  state: ToastGlobalState = {
    instances: []
  };

  @Element()
  $host!: HTMLElement;

  $container!: HTMLElement;

  @State()
  isOpen?: boolean;

  animate?: Animation;

  get attributes() {
    return {
      // TODO
      // 'role': 'alert',
      // 'aria-live': 'assertive',
      // 'aria-atomic': 'true',
    }
  }

  get classes() {

    let [y, x] = this.placement?.split('-');

    if (!y) y = 'top';

    x = Utils.toAxis(x, this.isRTL);

    if (this.fullWidth) x = undefined;

    return {
      'container': true,
      'full-width': this.fullWidth,
      [x]: !!x,
      [y]: !!y,
      [this.isRTL ? 'rtl' : 'ltr']: true,
    }
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  /**
   * External Methods
   */

  hide() {

    if (!this.isOpen) return;

    const event = this.plusClose.emit();

    if (!this.isOpen || event.defaultPrevented) return;

    this.animate.leave({
      onLeave: () => this.broadcast(false),
      onLeaved: () => {

        this.hidden();

        this.plusClosed.emit()
      }
    })
  }

  show() {

    if (this.isOpen) return;

    const event = this.plusOpen.emit();

    if (this.isOpen || event.defaultPrevented) return;

    this.animate.enter({
      onEnter: () => this.shown(),
      onEntered: () => this.plusOpened.emit()
    })
  }

  toggle() {
    this.isOpen ? this.hide() : this.show();
  }

  /**
   * Internal Methods
   */

  broadcast(value) {
    value;
  }

  dispose() {
    this.animate?.dispose();
  }

  hidden() {

    // TODO
    this.isOpen = false;

    this.open = false;

    this.broadcast(false);
  }

  init() {
    this.animate = new Animation({
      state: !!this.open,
      source: this.$container,
      target: this.$host
    })
  }

  shown() {

    // TODO
    this.isOpen = true;

    this.open = true;

    this.broadcast(true);

    // TODO
    // setTimeout(() => !this.persistent && this.hide(), this.duration);
  }

  /**
   * Watchers
   */

  @Watch('open')
  enter() {

    if (!this.open) return;

    if (this.isOpen) return;

    this.animate.enter({
      onEnter: () => this.shown()
    })
  }

  @Watch('open')
  leave() {

    if (this.open) return;

    if (!this.isOpen) return;

    this.animate.leave({
      onLeave: () => this.broadcast(false),
      onLeaved: () => this.hidden(),
    })
  }

  @Watch('persistent')
  persistentWatcher() {

    // TODO
    // setTimeout(() => !this.persistent && this.hide(), this.duration);
  }

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  // TODO: convert to connectedCallback
  componentDidLoad() {

    this.init();

    this.open && this.shown();
  }

  disconnectedCallback() {
    this.dispose();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div
          class={this.classes}
          ref={(element) => this.$container = element}
        >
          <slot />
        </div>
      </Host>
    )
  }
}
