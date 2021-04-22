import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { AnimationV2, GlobalConfig, GlobalState, Helper } from '@app/utils';
import { ToastLink, Link, rebind } from './toast.link';
import { ToastGlobalState, ToastPlacement, ToastType } from './toast.types';

/**
 * TODO
 * @development
 * @slot default - The default slot.
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
  @Prop({ mutable: true })
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
  @Prop({ reflect: true })
  type?: ToastType;

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

  isOpen?: boolean;

  animate?: AnimationV2;

  @Link({ scope: '[connector]' })
  link: ToastLink = {
    toggle: () => this.toggle()
  }

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

    x = Helper.toAxis(x, this.isRTL);

    if (this.fullWidth) x = undefined;

    return {
      'container': true,
      'full-width': this.fullWidth,
      [x]: !!x,
      [y]: !!y,
      [this.isRTL ? 'rtl' : 'ltr']: true,
    }
  }

  get isCurrent() {

    const instances = this.state.instances;

    const last = instances.length - 1;

    return instances[last] === this;
  }

  get isRTL() {
    return Helper.isRTL(this);
  }

  get zIndex() {

    if (this.state.instances.length < 1) return;

    const [instance] = this.state.instances.slice(-1);

    if (!instance) return;

    const zIndex = getComputedStyle(instance.$host).getPropertyValue('z-index');

    return `${parseInt(zIndex) + 1}`;
  }

  /**
   * External Methods
   */

  hide() {
    this.tryHide(true, false);
  }

  show() {
    this.tryShow(true, false);
  }

  toggle() {
    this.isOpen ? this.hide() : this.show();
  }

  /**
   * Internal Methods
   */

  dispose() {

    this.animate?.dispose();

    // TODO
    this.onHide();

    // TODO
    // this.unregister();
  }

  init() {
    this.animate = new AnimationV2({
      key: 'state',
      source: () => this.$container,
      target: () => this.$host,
      state: this.open ? 'entered' : 'leaved',
      states: {
        enter: 'open',
        entering: 'opening',
        entered: 'opened',
        leave: 'close',
        leaving: 'closing',
        leaved: 'closed',
      }
    })
  }

  tryHide(animation, silent) {

    if (!this.isOpen) return;

    if (!silent && this.plusClose.emit().defaultPrevented) return;

    if (!animation) return this.onHide();

    this.animate.leave({
      onLeave: () => {
        this.link.open = false;
      },
      onLeaved: () => {

        this.onHide();

        if (silent) return;

        this.plusClosed.emit()
      }
    })
  }

  tryShow(animation, silent) {

    if (this.isOpen) return;

    if (!silent && this.plusOpen.emit().defaultPrevented) return;

    if (!animation) return this.onShow();

    this.animate.enter({
      onEnter: () => {

        this.link.open = true;

        this.onShow();
      },
      onEntered: () => {

        if (silent) return;

        this.plusOpened.emit();
      }
    })
  }

  /**
   * Watchers
   */

  componentShouldUpdate(next, prev, name) {

    if (next === prev) return false;

    const value = this[name];

    switch (name) {

      case 'connector':

        rebind(this);

        break;

      case 'open':

        value && !this.isOpen && this.tryShow(true, true);

        !value && this.isOpen && this.tryHide(true, true);

        break;
    }
  }

  /**
   * Events handler
   */

  onHide() {
    this.$host.style.zIndex = null;
    this.isOpen = false;
    this.open = false;
    this.state.instances = this.state.instances.filter((instance) => instance !== this);
  }

  onShow() {
    this.$host.style.zIndex = this.zIndex;
    this.isOpen = true;
    this.open = true;
    this.state.instances.push(this);
  }

  /**
   * Lifecycles
   */

  connectedCallback() {

    this.init();

    if (!this.open) return;

    this.tryShow(false, true);
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
