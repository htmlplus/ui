import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { Animation, Bind, ClickOutside, GlobalConfig, GlobalState, Scrollbar } from '@app/services';
import * as Utils from '@app/utils';
import { DialogLink, Inject, rebind } from './dialog.link';
import { DialogFullscreen, DialogGlobalState, DialogPlacement, DialogPlacementMap, DialogSize } from './dialog.types';

/**
 * A dialog is a `conversation` between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.
 * @group dialog
 * @slot - The default slot
 * @examples default, animation, persistent, placement, size, backdrop, scrollable, specific-scrollable, fullscreen, full-width, full-height, sticky, nesting, prevent
 */
@Component({
  tag: 'plus-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class Dialog {

  /**
   * Activate the dialog's backdrop to show or not.
   */
  @Prop()
  backdrop?: boolean = true;

  /**
   * This property helps you to attach which dialog toggler controls the dialog. 
   * It doesn't matter where the dialog toggler is. 
   * You can put the dialog's toggler inside or outside of the dialog. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  /**
   * Set the height of the dialog as much as the screen's height.
   */
  @Prop()
  fullHeight?: boolean;

  /**
   * Set the width of the dialog as much as the screen's width.
   */
  @Prop()
  fullWidth?: boolean;

  /**
   * Set both width and height of the dialog to occupy the screen size.
   */
  @Prop()
  fullscreen?: DialogFullscreen;

  /**
   * Closes the dialog when `escape` key is pressed.
   */
  @Prop()
  keyboard?: boolean = true;

  /**
   * Control dialog to show or not.
   */
  @Prop({ reflect: true })
  open?: boolean;

  /**
   * It prevents the dialog from closing on clicking outside of the element.
   */
  @Prop()
  persistent?: boolean;

  /**
   * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
   * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
   */
  @Prop()
  placement?: DialogPlacement = 'top';

  /**
   * It makes the user able to scroll the content by adding a scroll beside it.
   */
  @Prop()
  scrollable?: boolean;

  /**
   * Determine the width of the dialog.
   */
  @Prop()
  size?: DialogSize;

  /**
   * Removes the margin around the dialog's content.
   */
  @Prop()
  sticky?: boolean;

  /**
   * When the dialog is going to hide
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusClose!: EventEmitter<void>;

  /**
   * When the dialog is completely closed and its animation is completed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusClosed!: EventEmitter<void>;

  /**
   * When the dialog is going to show this event triggers
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusOpen!: EventEmitter<void>;

  /**
   * When the dialog is completely shown and its animation is completed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusOpened!: EventEmitter<void>;

  @GlobalConfig('dialog', {
    backdrop: true,
    keyboard: true,
    placement: 'top'
  })
  config?;

  @GlobalState()
  state: DialogGlobalState = {
    instances: []
  };

  @Element()
  $host!: HTMLElement;

  $cell!: HTMLElement;

  animation?: Animation;

  @Inject({ scope: '[connector]' })
  link: DialogLink = {
    toggle: () => this.tryToggle()
  };

  get classes() {

    let [x, y] = (DialogPlacementMap[this.placement] || '').split('-');

    x = Utils.toAxis(x, this.isRTL);

    return Utils.classes(
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
    );
  }

  get isCurrent() {

    const instances = this.state.instances;

    const last = instances.length - 1;

    return instances[last] === this;
  }

  get isOpen() {
    return this.$host.classList.contains('open');
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  /**
   * Methods
   */

  @Watch('connector')
  connectorWatcher() {
    rebind(this);
  }

  @Watch('open')
  openWatcher() {

    if (this.open) {

      if (this.isOpen) return;

      this.animation.enter({
        onEnter: () => this.show()
      })
    }
    else {

      if (!this.isOpen) return;

      this.animation.leave({
        onLeave: () => this.broadcast(false),
        onLeaved: () => this.hide(),
      })
    }
  }

  broadcast(value) {
    this.link.open = value;
  }

  init() {
    this.animation = new Animation({
      name: 'dialog',
      source: this.$host,
      target: this.$host
    })
  }

  hide() {

    this.resetAttributes();
    this.resetEvents();
    ClickOutside.remove(this.$cell);
    Scrollbar.reset(this);
    this.resetZIndex();

    this.state.instances = this.state.instances.filter((instance) => instance !== this);

    this.$host.classList.remove('open');

    this.open = false;

    this.broadcast(false);
  }

  show() {

    this.setAttributes();
    this.setEvents();
    ClickOutside.add(this.$cell, this.onOutsideClick, false);
    Scrollbar.remove(this);
    this.setZIndex();

    this.state.instances.push(this);

    this.$host.classList.add('open');

    this.open = true;

    this.broadcast(true);
  }

  tryToHide() {

    if (!this.isOpen) return;

    const event = this.plusClose.emit();

    if (!this.isOpen || event.defaultPrevented) return;

    this.animation.leave({
      onLeave: () => this.broadcast(false),
      onLeaved: () => {

        this.hide();

        this.plusClosed.emit()
      }
    })
  }

  tryToShow() {

    if (this.isOpen) return;

    const event = this.plusOpen.emit();

    if (this.isOpen || event.defaultPrevented) return;

    this.animation.enter({
      onEnter: () => this.show(),
      onEntered: () => this.plusOpened.emit()
    })
  }

  tryToggle() {
    this.isOpen ? this.tryToHide() : this.tryToShow();
  }

  dispose() {

    this.animation?.dispose();

    this.resetEvents();
    ClickOutside.remove(this.$cell);
    Scrollbar.reset(this);
    this.state.instances = this.state.instances.filter((instance) => instance !== this);
  }

  /**
   * Attributes
   */

  setAttributes() {
    this.$host.removeAttribute('aria-hidden');
    this.$host.setAttribute('aria-modal', 'true');
    this.$host.setAttribute('role', 'dialog');
  }

  resetAttributes() {
    this.$host.setAttribute('aria-hidden', 'true');
    this.$host.removeAttribute('aria-modal');
    this.$host.removeAttribute('role');
  }

  /**
   * Events
   */

  setEvents() {
    document.addEventListener('keydown', this.onEscape, true);
  }

  resetEvents() {
    document.removeEventListener('keydown', this.onEscape, true);
  }

  /**
   * z-index
   */

  setZIndex() {

    const [instance] = this.state.instances.slice(-1);

    if (!instance) return;

    const zIndex = getComputedStyle(instance.$host).getPropertyValue('z-index');

    this.$host.style.zIndex = `${parseInt(zIndex) + 1}`;
  }

  resetZIndex() {
    this.$host.style.zIndex = null;
  }

  /**
   * Events handler
   */

  @Bind
  onEscape(event) {

    if (!this.isOpen || !this.isCurrent) return;

    if (!this.keyboard || event.key !== 'Escape') return;

    event.preventDefault();

    this.tryToHide();
  }

  @Bind
  onOutsideClick() {

    if (!this.isOpen || !this.isCurrent) return;
    
    this.tryToHide();
  }

  /**
   * Lifecycles
   */

  connectedCallback() {

    this.init();

    this.open && this.show();
  }

  disconnectedCallback() {
    this.dispose();
  }

  render() {
    return (
      <Host aria-hidden="true" tabindex="-1">
        {this.backdrop && (<div class="backdrop"><div /></div>)}
        <div class={this.classes}>
          <div class="table">
            <div class="cell" ref={(element) => (this.$cell = element)}>
              <slot />
            </div>
          </div>
        </div>
      </Host >
    );
  }
}
