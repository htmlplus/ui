import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { Animation, Bind, ClickOutside, GlobalConfig, GlobalState, IsRTL, Helper, Portal, Scrollbar } from '@app/utils';
import { Action, Observable, reconnect } from './dialog.link';
import { DialogFullscreen, DialogGlobalState, DialogPlacement, DialogPortalStrategy, DialogPortalTarget, DialogSize } from './dialog.types';

/**
 * A dialog is a `conversation` between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.
 * @group dialog
 * @part backdrop - TODO
 * @slot default - The default slot.
 * @examples default, animation, persistent, placement, size, backdrop, scrollable, specific-scrollable, fullscreen, full-width, full-height, sticky, nesting, prevent
 */
@Component({
  tag: 'plus-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class Dialog {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  animation?: string;

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
  @Prop({
    mutable: true,
    reflect: true,
  })
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
   * Enables or disables the portal.
   * @experimental
   */
  @Prop()
  portal?: boolean;

  /**
   * Specifies the position of the dialog.
   * @experimental
   */
  @Prop()
  portalStrategy?: DialogPortalStrategy = 'append';

  /**
   * Specifies the position of the dialog relative to the target.
   * @experimental
   */
  @Prop()
  portalTarget?: DialogPortalTarget = 'body';

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
    placement: 'top',
    portalStrategy: 'append',
    portalTarget: 'body',
  })
  config?;

  @GlobalState()
  state: DialogGlobalState = {
    instances: []
  }

  @IsRTL()
  isRTL?: boolean;

  @Element()
  $host!: HTMLElement;

  $cell!: HTMLElement;

  animate?: Animation;

  isOpen?: boolean;

  // TODO: replace with FC
  portalInstance?: Portal;

  @Observable()
  tunnel?: boolean;

  get attributes() {

    const attributes = {
      'tabindex': -1,
    }

    if (this.isOpen) {
      attributes['role'] = 'dialog';
      attributes['aria-modal'] = 'true';
    }
    else {
      attributes['aria-hidden'] = 'true';
    }

    return attributes;
  }

  get classes() {

    let placement = (this.placement || '');

    if (placement.match(/^(top|bottom)$/)) placement = `-${placement}`;

    let [x, y] = placement.split('-');

    x = x || 'center';

    y = y || 'center';

    x = Helper.toAxis(x, this.isRTL);

    return Helper.classes(
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
    )
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

  broadcast(value) {
    this.tunnel = value;
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
  }

  tryHide(animation, silent) {

    if (!this.isOpen) return;

    if (!silent && this.plusClose.emit().defaultPrevented) return;

    if (!animation) return this.onHide();

    this.animate.leave({
      onLeave: () => {
        this.broadcast(false);
      },
      onLeaved: () => {

        this.onHide();

        // TODO
        this.portalInstance?.revert();

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

        this.broadcast(true);

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

    // reset document's scroll
    Scrollbar.reset(this);

    // remove outside click listener
    ClickOutside.remove(this.$cell);

    // remove keydown listener
    document.removeEventListener('keydown', this.onEscape, true);

    // reset z-index
    this.$host.style.zIndex = null;

    // update state
    this.open = this.isOpen = false;

    // unregister dialog's instance
    this.state.instances = this.state.instances.filter((instance) => instance !== this);

    // TODO: experimantal new link
    this.broadcast(false);
  }

  onShow() {

    // TODO: experimantal portal
    this.portalInstance = this.portal && new Portal({
      source: this.$host,
      target: this.portalTarget,
      strategy: this.portalStrategy,
    })

    // remove document's scroll
    Scrollbar.remove(this);

    // remove outside click listener
    ClickOutside.add(this.$cell, this.onClickOutside, false);

    // add keydown listener
    document.addEventListener('keydown', this.onEscape, true);

    // set z-index
    this.$host.style.zIndex = this.zIndex;

    // update state
    this.open = this.isOpen = true;

    // register dialog's instance
    this.state.instances.push(this);
  }

  @Bind
  onEscape(event) {

    if (!this.isOpen || !this.isCurrent) return;

    if (!this.keyboard || event.key !== 'Escape') return;

    event.preventDefault();

    this.tryHide(true, false);
  }

  @Bind
  onClickOutside() {

    if (!this.isOpen || !this.isCurrent || this.persistent) return;

    this.tryHide(true, false);
  }

  /**
   * Lifecycles
   */

  // it's can not be `connectedCallback`, because ClickOutside incompatible 
  componentDidLoad() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <Host {...this.attributes}>
        {this.backdrop && (<div class="backdrop" part="backdrop"><div /></div>)}
        <div class={this.classes}>
          <div class="table">
            <div class="cell" ref={($element) => (this.$cell = $element)}>
              <slot />
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
