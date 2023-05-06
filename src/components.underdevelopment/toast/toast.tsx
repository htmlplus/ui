import {
  Element,
  Event,
  EventEmitter,
  Property,
  Watch,
  classes,
  direction,
  host,
  isRTL
} from '@htmlplus/element';

import { toAxis } from '@app/helpers';
import { Animation } from '@app/services';

import { ToastPlacement, ToastType } from './toast.types';

// const { Action, Observable, reconnect } = createLink('Toast');

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
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
   * Read more about connectors [here](/connector).
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
  @Property({ reflect: true })
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

  static instances = [];

  $root!: HTMLElement;

  animate?: Animation;

  isOpen?: boolean;

  // TODO
  timeout?;

  // @Observable()
  tunnel?: boolean;

  get $host() {
    return host(this);
  }

  get attributes() {
    return {
      // TODO
      // 'role': 'alert',
      // 'aria-live': 'assertive',
      // 'aria-atomic': 'true',
    };
  }

  get classes() {
    const { x, y } = this.coordinate(this);

    return classes({
      'root': true,
      'full-width': this.fullWidth,
      [x]: !!x,
      [y]: !!y,
      [direction(this)]: true
    });
  }

  get isCurrent() {
    const instances = Toast.instances;

    const last = instances.length - 1;

    return instances[last] === this;
  }

  get zIndex() {
    if (Toast.instances.length < 1) return;

    const [instance] = Toast.instances.slice(-1);

    if (!instance) return;

    const zIndex = window.getComputedStyle(instance.$host).getPropertyValue('z-index');

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

  // @Action()
  toggle() {
    this.isOpen ? this.hide() : this.show();
  }

  /**
   * Internal Methods
   */

  adjust() {
    let offset = 0;

    const { x: x1, y: y1 } = this.coordinate(this);

    const fn = (index) => {
      const instance = Toast.instances[index];

      const { x: x2, y: y2 } = this.coordinate(instance);

      if (y1 !== y2 || x1 !== x2) return;

      instance.$root.style[y2] = offset + 'px';

      const rect = instance.$root.getBoundingClientRect();

      // TODO
      offset += 15 + rect.height;
    };

    if (this.reverse) for (let i = 0; i < Toast.instances.length; i++) fn(i);
    else for (let i = Toast.instances.length - 1; i >= 0; i--) fn(i);
  }

  broadcast(value) {
    this.tunnel = value;
  }

  // TODO
  coordinate(instance) {
    let [y, x] = instance.placement.split('-');

    if (!y) y = 'top';

    x = toAxis(x, isRTL(instance));

    if (instance.fullWidth) x = undefined;

    return { x, y };
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
        leaved: 'closed'
      }
    });

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

    if (!silent && this.plusClose().defaultPrevented) return;

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

        this.plusClosed();
      }
    });
  }

  tryShow(animation, silent) {
    if (this.isOpen) return;

    if (!silent && this.plusOpen().defaultPrevented) return;

    // TODO
    clearTimeout(this.timeout);

    if (!animation) return this.onShow();

    this.animate.enter({
      onEnter: () => {
        this.onShow();
      },
      onEntered: () => {
        if (silent) return;

        this.plusOpened();
      }
    });
  }

  /**
   * Watchers
   */

  @Watch(['connector', 'open'])
  watcher(next, prev, name) {
    switch (name) {
      case 'connector':
        // reconnect(this);

        break;

      case 'open':
        next && !this.isOpen && this.tryShow(true, true);

        !next && this.isOpen && this.tryHide(true, true);

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
    Toast.instances = Toast.instances.filter((instance) => instance !== this);

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
    Toast.instances.push(this);

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
      <>
        <div className={this.classes} part="root" ref={($element) => (this.$root = $element)}>
          <slot />
        </div>
      </>
    );
  }
}
