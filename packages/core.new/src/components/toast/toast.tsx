import { Component, Direction, Element, Event, EventEmitter, GlobalConfig, GlobalState, Host, IsRTL, Property } from '@app/decorators';
import { toAxis } from '@app/helper';
import { Animation } from '@app/services';
import { Action, Observable, reconnect } from './toast.link';
import { ToastGlobalState, ToastPlacement, ToastType } from './toast.types';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class Toast {

  /**
   * TODO
   * 
   * preventDuplicates
   * icon
   * closeButton/dismissable - Dismiss on click
   * override/queue/queueable/Wait for previous to dismiss before showing new/One notification at a time
   * fixed
   * offset/gutter
   * progress
   * 
   * https://izitoast.marcelodolza.com/
   * https://vuetifyjs.com/en/components/snackbars/
   */

  /**
   * TODO
   */
  @Property({ reflect: true })
  animation?: string;

  /**
   * This property helps you to attach which toast toggler controls the toast. 
   * It doesn't matter where the toast toggler is. 
   * You can put the toast's toggler inside or outside of the toast. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Property()
  connector?: string;

  /**
   * TODO
   */
  @Property()
  duration?: number = 3000;

  /**
   * TODO
   */
  @Property()
  fullWidth?: boolean;

  /**
   * TODO
   */
  @Property({
    mutable: true,
    reflect: true,
  })
  open?: boolean;

  /**
   * TODO
   */
  @Property()
  persistent?: boolean;

  /**
   * TODO
   */
  @Property()
  placement?: ToastPlacement = 'top-end';

  /**
   * TODO
   */
  @Property()
  reverse?: boolean;

  /**
   * TODO
   */
  @Property({ reflect: true })
  type?: ToastType;

  /**
   * TODO
   */
  @Event({ cancelable: true })
  plusClose!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event()
  plusClosed!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event({ cancelable: true })
  plusOpen!: EventEmitter<void>;

  /**
   * TODO
   */
  @Event()
  plusOpened!: EventEmitter<void>;

  @GlobalConfig('toast', {
    // TODO
  })
  config?;

  @GlobalState()
  state: ToastGlobalState = {
    instances: []
  }

  @Direction()
  direction?: string;

  @IsRTL()
  isRTL?: boolean;

  @Element()
  $host!: HTMLElement;

  $root!: HTMLElement;

  animate?: Animation;

  isOpen?: boolean;

  // TODO
  timeout?;

  @Observable()
  tunnel?: boolean;

  get attributes() {
    return {
      // TODO
      // 'role': 'alert',
      // 'aria-live': 'assertive',
      // 'aria-atomic': 'true',
    }
  }

  get classes() {

    const { x, y } = this.coordinate(this);

    return {
      'root': true,
      'full-width': this.fullWidth,
      [x]: !!x,
      [y]: !!y,
      [this.direction]: true,
    }
  }

  get isCurrent() {

    const instances = this.state.instances;

    const last = instances.length - 1;

    return instances[last] === this;
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

  @Action()
  toggle() {
    this.isOpen ? this.hide() : this.show();
  }

  /**
   * Internal Methods
   */

  adjust() {

    let offset = 0;

    const { x: x1, y: y1 } = this.coordinate(this);

    const { instances } = this.state;

    const fn = (index) => {

      const instance = instances[index];

      const { x: x2, y: y2 } = this.coordinate(instance);

      if (y1 !== y2 || x1 !== x2) return;

      instance.$root.style[y2] = offset + 'px';

      const rect = instance.$root.getBoundingClientRect();

      // TODO
      offset += 15 + rect.height;
    }

    if (this.reverse)
      for (let i = 0; i < instances.length; i++) fn(i);
    else
      for (let i = instances.length - 1; i >= 0; i--) fn(i);
  }

  broadcast(value) {
    this.tunnel = value;
  }

  // TODO
  coordinate(instance) {

    let [y, x] = instance.placement.split('-');

    if (!y) y = 'top';

    x = toAxis(x, instance.isRTL);

    if (instance.fullWidth) x = undefined;

    return { x, y }
  }

  initialize() {

    this.animate = new Animation({
      key: 'state',
      source: () => this.$host,
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

    if (!this.open) return;

    this.tryShow(false, true);
  }

  terminate() {

    this.onHide();

    this.animate?.dispose();

    // TODO
    // this.unregister();
  }

  tryHide(animation, silent) {

    if (!this.isOpen) return;

    if (!silent && this.plusClose.emit().defaultPrevented) return;

    // TODO
    clearTimeout(this.timeout);

    if (!animation) return this.onHide();

    this.animate.leave({
      onLeave: () => {

        // TODO: experimantal new link
        this.broadcast(false);
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

    // TODO
    clearTimeout(this.timeout);

    if (!animation) return this.onShow();

    this.animate.enter({
      onEnter: () => {
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

        reconnect(this);

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

    // reset z-index
    this.$host.style.zIndex = null;

    // update state
    this.open = this.isOpen = false;

    // unregister dialog's instance
    this.state.instances = this.state.instances.filter((instance) => instance !== this);

    // TODO: experimantal new link
    this.broadcast(false);

    // TODO
    this.adjust();
  }

  onShow() {

    // set z-index
    this.$host.style.zIndex = this.zIndex;

    // update state
    this.open = this.isOpen = true;

    // register dialog's instance
    this.state.instances.push(this);

    // TODO: experimantal new link
    this.broadcast(true);

    // TODO
    this.adjust();

    // TODO
    this.timeout = setTimeout(() => !this.persistent && this.tryHide(true, false), this.duration);
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div
          class={this.classes}
          // TODO part="root"
          ref={(element) => this.$root = element}
        >
          <slot />
        </div>
      </Host>
    )
  }
}
