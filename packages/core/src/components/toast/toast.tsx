import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import * as Utils from '@app/utils';
import { Animation, GlobalConfig, GlobalState } from '@app/services';
import { ToastGlobalState, ToastPlacement } from './toast.types';

/**
 * TODO
 * @development
 * @slot - The default slot..
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
  // @Prop()
  // fixed?: boolean = true;

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

  @Element()
  $host!: HTMLElement;

  $container!: HTMLElement;

  animation?: Animation;

  get attributes() {
    return {
      // 'role': 'alert',
      // 'aria-live': 'assertive',
      // 'aria-atomic': 'true',
    }
  }

  get class() {

    let [y, x] = this.placement?.split('-');

    if (!y) y = 'top';

    x = Utils.toAxis(x, this.isRTL);

    return {
      'container': true,
      [x]: !!x,
      [y]: !!y,
      [this.isRTL ? 'rtl' : 'ltr']: true,
    }
  }

  get isOpen() {
    return this.$host.classList.contains('open');
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

    this.animation.leave({
      onLeave: () => this.broadcast(false),
      onLeaved: () => {

        this.hidden();

        this.plusClosed.emit()
      }
    });
  }

  show() {

    if (this.isOpen) return;

    const event = this.plusOpen.emit();

    if (this.isOpen || event.defaultPrevented) return;

    this.animation.enter({
      onEnter: () => this.shown(),
      onEntered: () => this.plusOpened.emit()
    })
  }

  toggle() {
    return this.isOpen ? this.hide() : this.show();
  }

  /**
   * Internal Methods
   */

  broadcast(value) {
    value;
  }

  dispose() {
    this.animation?.dispose();
  }

  hidden() {

    this.$host.classList.remove('open');

    this.open = false;

    this.broadcast(false);
  }

  init() {
    this.animation = new Animation({
      name: 'toast',
      source: this.$container,
      target: this.$host
    })
  }

  shown() {

    this.$host.classList.add('open');

    this.open = true;

    this.broadcast(true);
  }

  /**
   * Watchers
   */

  @Watch('open')
  openWatcher() {

    if (this.open) {

      if (this.isOpen) return;

      this.animation.enter({
        onEnter: () => this.shown()
      })
    }
    else {

      if (!this.isOpen) return;

      this.animation.leave({
        onLeave: () => this.broadcast(false),
        onLeaved: () => this.hidden(),
      })
    }
  }

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  // TODO convert to connectedCallback
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
        <div class={this.class} ref={(element) => this.$container = element}>
          <slot />
        </div>
      </Host>
    )
  }
}
