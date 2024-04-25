import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Provider,
  Query,
  Watch,
  classes,
  off,
  on
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { toAxis } from '@/helpers';
import { Animation, Scrollbar } from '@/services';

import { DialogContext } from './dialog.context';
import { DialogFullscreen, DialogPlacement, DialogSize } from './dialog.types';

/**
 * @part backdrop - Backdrop element.
 *
 * @slot default - The default slot.
 */
@Element()
export class Dialog extends PlusCore {
  static instances: Dialog[] = [];

  /**
   * TODO
   */
  @Property({ reflect: true })
  animation?: boolean | string;

  /**
   * This property helps you to attach which dialog toggler controls the dialog.
   * It doesn't matter where the dialog toggler is.
   * You can put the dialog's toggler inside or outside of the dialog.
   * Read more about connectors [here](/connector).
   */
  @Property()
  connector?: string;

  /**
   * Set the height of the dialog as much as the screen's height.
   */
  @Property()
  fullHeight?: boolean;

  /**
   * Set the width of the dialog as much as the screen's width.
   */
  @Property()
  fullWidth?: boolean;

  /**
   * Set both width and height of the dialog to occupy the screen size.
   */
  @Property()
  fullscreen?: DialogFullscreen;

  /**
   * Closes the dialog when `escape` key is pressed.
   */
  @Property()
  keyboard?: boolean;

  /**
   * Control dialog to show or not.
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * It prevents the dialog from closing on clicking outside of the element.
   */
  @Property()
  persistent?: boolean;

  /**
   * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
   * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
   */
  @Property()
  placement?: DialogPlacement = 'top';

  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Property()
  scrollable?: boolean;

  /**
   * Determine the width of the dialog.
   */
  @Property()
  size?: DialogSize;

  /**
   * Removes the margin around the dialog's content.
   */
  @Property()
  sticky?: boolean;

  /**
   * Deactivate the dialog's backdrop to show or not.
   */
  @Property()
  transparent?: boolean;

  /**
   * When the dialog is going to hide
   */
  @Event({ cancelable: true })
  plusClose!: EventEmitter<void>;

  /**
   * When the dialog is completely closed and its animation is completed.
   */
  @Event()
  plusClosed!: EventEmitter<void>;

  /**
   * When the dialog is going to show this event triggers
   */
  @Event({ cancelable: true })
  plusOpen!: EventEmitter<void>;

  /**
   * When the dialog is completely shown and its animation is completed.
   */
  @Event()
  plusOpened!: EventEmitter<void>;

  @Query('slot')
  $cell!: HTMLElement;

  @Provider('dialog.connector')
  get state(): DialogContext {
    return {
      open: this.opened,
      toggle: () => {
        this.try(!this.open, false);
      }
    };
  }

  animate = new Animation({
    key: 'state',
    source: () => this.$host,
    target: () => this.$host,
    states: {
      enter: 'open',
      entering: 'opening',
      entered: 'opened',
      leave: 'close',
      leaving: 'closing',
      leaved: 'closed'
    },
    onEnter: () => {
      // remove document's scroll
      Scrollbar.remove(this);

      // add keydown listener
      on(document, 'keydown', this.onEscape, true);

      // remove outside click listener
      on(this.$cell, 'outside', this.onClickOutside, true);

      // set z-index
      this.$host.style.zIndex = this.zIndex;

      // update state
      this.open = this.opened = true;

      // register dialog's instance
      Dialog.instances.push(this);
    },
    onEntering: () => {
      this.opened = this.open = true;
    },
    onEntered: (silent) => {
      if (silent) return;

      this.plusOpened();
    },
    onLeave: () => {},
    onLeaving: () => {
      this.opened = this.open = false;
    },
    onLeaved: (silent) => {
      // reset document's scroll
      Scrollbar.reset(this);

      // remove keydown listener
      off(document, 'keydown', this.onEscape, true);

      // remove outside click listener
      off(this.$cell, 'outside', this.onClickOutside, true);

      // reset z-index
      this.$host.style.zIndex = null;

      // update state
      this.open = this.opened = false;

      // unregister dialog's instance
      Dialog.instances = Dialog.instances.filter((instance) => instance !== this);

      if (silent) return;

      this.plusClosed();
    }
  });

  opened: boolean = false;

  promise?: Promise<boolean>;

  get classes() {
    let placement = this.placement || '';

    if (placement.match(/^(top|bottom)$/)) placement = `-${placement}`;

    let [x, y] = placement.split('-');

    x = x || 'center';

    y = y || 'center';

    x = toAxis(x, this.isRTL);

    return classes(
      [
        'dialog',
        {
          x,
          y,
          size: this.size,
          sticky: this.sticky,
          fullWidth: this.fullWidth,
          fullHeight: this.fullHeight,
          fullscreen: this.fullscreen,
          scrollable: this.scrollable
        }
      ],
      true
    );
  }

  get isCurrent() {
    return Dialog.instances.at(-1) === this;
  }

  get zIndex() {
    if (Dialog.instances.length < 1) return;

    const [instance] = Dialog.instances.slice(-1);

    if (!instance) return;

    const zIndex = window.getComputedStyle(instance.$host).getPropertyValue('z-index');

    return `${parseInt(zIndex) + 1}`;
  }

  /**
   * Hides the element.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the
   * operation was successful or `false` if it was canceled.
   */
  @Method()
  hide(): Promise<boolean> {
    return this.try(false, true);
  }

  /**
   * Shows the element.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the
   * operation was successful or `false` if it was canceled.
   */
  @Method()
  show(): Promise<boolean> {
    return this.try(true, true);
  }

  /**
   * Toggles between `collapse` and `expand` state.
   * @returns {Promise<boolean>} A Promise that resolves to `true` if the
   * operation was successful or `false` if it was canceled.
   */
  @Method()
  toggle(): Promise<boolean> {
    return this.try(!this.open, true);
  }

  @Watch(['open'])
  watcher(next, prev, name) {
    switch (name) {
      case 'open':
        // TODO: problem with `false` and `undefined`
        if (!next == !prev) break;
        this.try(next, true);
        break;
    }
  }

  initialize() {
    this.animate.initialize((this.opened = !!this.open) ? 'entered' : 'leaved');
  }

  terminate() {
    this.animate?.dispose();
  }

  async try(open: boolean, silent?: boolean): Promise<boolean> {
    if (this.opened == open) return await this.promise;

    if (!silent) {
      const event = open ? this.plusOpen : this.plusClose;

      const prevented = event.call(this).defaultPrevented;

      // TODO
      if (prevented) return true;
    }

    this.opened = this.open = open;

    const fn = this.open ? this.animate.enter : this.animate.leave;

    this.promise = fn.bind(this.animate)(silent);

    return await this.promise;
  }

  @Bind()
  onEscape(event) {
    // TODO
    if (!this.opened) return;

    if (!this.isCurrent) return;

    if (!this.keyboard || event.key !== 'Escape') return;

    event.preventDefault();

    this.try(false, false);
  }

  @Bind()
  onClickOutside() {
    // TODO
    if (!this.opened) return;

    if (!this.isCurrent) return;

    if (this.persistent) return;

    this.try(false, false);
  }

  loadedCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <host
        aria-hidden={this.opened ? null : 'true'}
        aria-modal={this.opened ? 'true' : null}
        tabIndex={-1}
        role={this.opened ? 'dialog' : null}
      >
        {!this.transparent && (
          <div className="backdrop" part="backdrop">
            <div />
          </div>
        )}
        <div className={this.classes}>
          <div className="table">
            <div className="cell">
              <slot />
            </div>
          </div>
        </div>
      </host>
    );
  }
}
