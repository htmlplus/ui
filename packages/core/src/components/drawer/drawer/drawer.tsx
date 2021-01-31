import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { Animation, Bind, GlobalConfig, Media, OutsideClick, Scrollbar } from '@app/services';
import * as Utils from '@app/utils';
import { DrawerLink, Inject, rebind } from './drawer.link';
import { DrawerBackdrop, DrawerBreakpoint, DrawerPlacement } from './drawer.types';

/**
 * TODO
 * @group drawer
 * @slot - The default slot
 */
@Component({
  tag: 'plus-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {

  /**
   * Activate the drawer’s backdrop to show or not.
   */
  @Prop()
  backdrop?: DrawerBackdrop = 'auto';

  /**
   * TODO
   */
  @Prop()
  breakpoint?: DrawerBreakpoint = 'md';

  /**
   * TODO
   */
  @Prop()
  connector?: string;

  /**
   * TODO
   */
  @Prop()
  mini?: boolean;

  /**
   * TODO
   */
  @Prop()
  miniSize?: string;

  /**
   * Control drawer to show or not.
   */
  @Prop()
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
  placement?: DrawerPlacement;

  /**
   * TODO
   */
  @Prop()
  reverse?: boolean;

  /**
   * TODO
   */
  @Prop()
  size?: string;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  temporary?: boolean;

  /**
   * When the drawer is going to hide
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusClose!: EventEmitter<void>;

  /**
   * When the drawer is completely closed and its animation is completed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusClosed!: EventEmitter<void>;

  /**
   * When the drawer is going to show this event triggers
   */
  @Event({
    bubbles: false,
    cancelable: true,
  })
  plusOpen!: EventEmitter<void>;

  /**
   * When the drawer is completely shown and its animation is completed.
   */
  @Event({
    bubbles: false,
    cancelable: false,
  })
  plusOpened!: EventEmitter<void>;

  @GlobalConfig('drawer', {
    backdrop: 'auto',
    breakpoint: 'md'
  })
  config?;

  @Inject({ scope: '[connector]' })
  link: DrawerLink = {
    toggle: () => this.toggle()
  };

  @Element()
  $host!: HTMLElement;

  $content!: HTMLElement;

  animations: { open?: Animation, mini?: Animation } = {};

  get classes() {

    const placement = Utils.toAxis(this.placement || 'start', this.isRTL);

    return Utils.classes(
      'content',
      {
        [placement]: true,
        reverse: this.reverse
      }
    );
  }

  get hasBackdrop() {

    if (!this.temporary) return false;

    if (this.backdrop === true || this.backdrop === 'auto') return true;

    return false;
  }

  get isOpen() {
    return this.$host.classList.contains('open');
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  get styles() {
    return {
      '--plus-drawer-size': this.size,
      '--plus-drawer-mini-size': this.miniSize,
    }
  }

  /**
   * Methods
   */

  hide() {

    if (!this.isOpen) return;

    const event = this.plusClose.emit();

    if (!this.isOpen || event.defaultPrevented) return;

    this.animations.open.leave({
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

    this.animations.open.enter({
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
    this.link.open = value;
  }

  dispose() {
    this.animations.open?.dispose();
    this.animations.mini?.dispose();
  }

  init() {

    this.animations.open = new Animation({
      name: 'drawer',
      source: this.$host,
      target: this.$host
    })

    this.animations.mini = new Animation({
      name: 'drawer-mini',
      source: this.$host,
      target: this.$host
    })
  }

  hidden() {

    Scrollbar.reset(this);

    OutsideClick.remove(this.$content);

    this.$host.classList.remove('open');

    this.open = false;

    this.broadcast(false);
  }

  shown() {

    this.temporary && Scrollbar.remove(this);

    OutsideClick.add(this.$content, this.onOutsideClick, false);

    this.$host.classList.add('open');

    this.open = true;

    this.broadcast(true);
  }

  /**
   * Watchers
   */

  @Watch('connector')
  connectorWatcher() {
    rebind(this);
  }

  @Watch('mini')
  miniWatcher() {

    if (this.mini) {

      this.animations.mini.enter({
        onEnter: () => this.$host.classList.add('mini')
      });
    }
    else {

      this.animations.mini.leave({
        onLeaved: () => this.$host.classList.remove('mini')
      })
    }
  }

  @Watch('open')
  openWatcher() {

    if (this.open) {

      if (this.isOpen) return;

      this.animations.open.enter({
        onEnter: () => this.shown()
      })
    }
    else {

      if (!this.isOpen) return;

      this.animations.open.leave({
        onLeave: () => this.broadcast(false),
        onLeaved: () => this.hidden(),
      })
    }
  }

  /**
   * Events handler
   */

  @Media('[breakpoint]-down')
  onMedia() {
    // TODO : console.log('drawer', event)
  }

  @Bind
  onOutsideClick() {

    if (!this.isOpen || !this.temporary || this.persistent) return;

    this.hide();
  }

  /**
   * Lifecycles
   */

  connectedCallback() {

    this.init();

    this.open && this.shown();
  }

  disconnectedCallback() {
    this.dispose();
  }

  render() {
    return (
      <Host style={this.styles}>
        {this.hasBackdrop && (<div class="backdrop"><div /></div>)}
        <div
          class={this.classes}
          ref={(element) => this.$content = element}
        >
          <slot />
        </div>
      </Host >
    );
  }
}
