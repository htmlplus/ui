import { Component, Host, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import { Animation, Bind, ClickOutside, GlobalConfig, Helper, IsRTL, Media, Scrollbar } from '@app/utils';
import { DrawerLink, Link, rebind } from './drawer.link';
import { DrawerBackdrop, DrawerBreakpoint, DrawerPlacement } from './drawer.types';

/**
 * This component lets you add collapsible side contents like navigation alongside some primary content.
 * @group drawer
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {

  /**
   * Activate the drawer's backdrop to show or not.
   */
  @Prop()
  backdrop?: DrawerBackdrop = 'auto';

  /**
   * Sets the mobile breakpoint to apply alternate styles for mobile devices when the breakpoint value is met.
   */
  @Prop()
  breakpoint?: DrawerBreakpoint = 'md';

  /**
   * This property helps you to attach which drawer toggler controls the drawer. 
   * It doesn't matter where the drawer toggler is. 
   * You can put the drawer's toggler inside or outside of the drawer. 
   * Read more about connectors [here](https://htmlplus.io/features/connector).
   */
  @Prop()
  connector?: string;

  /**
   * Set the width of drawer to the minimum size you specified for the `mini-size` property.
   */
  @Prop()
  mini?: boolean;

  /**
   * Sets the minimum width size of the drawer.
   */
  @Prop()
  miniSize?: string;

  /**
   * Control drawer to show or not.
   */
  @Prop()
  open?: boolean;

  /**
   * If true, don't allow the drawer to be closed by clicking outside of the drawer. If false, the drawer will be closed by clicking outside of it.
   */
  @Prop()
  persistent?: boolean;

  /**
   * Specifies where the drawer will open.
   */
  @Prop()
  placement?: DrawerPlacement;

  /**
   * It controls the flexibility of the drawer's width. If yes, the width of the drawer can be reduced. If false doesn't allow the width of the drawer to reduce. 
   */
  @Prop()
  flexible?: boolean;

  /**
   * Determine the width of the drawer.
   */
  @Prop()
  size?: string;

  /**
   * On default the drawer is considered as a part of the main container. it pushes the other contents on opening. If true it will be opened over other contents and doesn't affect other contents. A temporary drawer sits above its application and uses a backdrop to darken the background. 
   */
  @Prop()
  temporary?: boolean | 'on-breakpoint';

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

  @IsRTL()
  isRTL?: boolean;

  @Link({ scope: '[connector]' })
  link: DrawerLink = {
    toggle: () => this.toggle()
  };

  @State()
  state?: 'desktop' | 'mobile';

  @Element()
  $host!: HTMLElement;

  $content!: HTMLElement;

  animations: { open?: Animation, mini?: Animation } = {};

  get attributes() {
    return {
      state: this.state,
      style: this.styles,
    }
  }

  get classes() {

    const placement = Helper.toAxis(this.placement || 'start', this.isRTL);

    return Helper.classes(
      'content',
      {
        [placement]: true,
        reverse: this.flexible
      }
    );
  }

  get hasBackdrop() {

    if (!this.isTemporary) return false;

    if (this.backdrop === true || this.backdrop === 'auto') return true;

    return false;
  }

  get isOpen() {
    return this.$host.classList.contains('open');
  }

  get isTemporary() {

    if (this.temporary === true) return true;

    if (this.temporary === 'on-breakpoint' && this.state === 'mobile') return true;

    return false;
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

    ClickOutside.remove(this.$content);

    this.$host.classList.remove('open');

    this.open = false;

    this.broadcast(false);
  }

  shown() {

    this.isTemporary && Scrollbar.remove(this);

    ClickOutside.add(this.$content, this.onOutsideClick, false);

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

  @Bind
  @Media('[breakpoint]-down')
  onMedia(event) {

    this.state = event.matches ? 'mobile' : 'desktop';

    if (!event.matches && this.open) this.open = false;
  }

  @Bind
  onOutsideClick() {

    if (!this.isOpen || !this.isTemporary || this.persistent) return;

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
      <Host {...this.attributes}>
        {this.hasBackdrop && (<div class="backdrop"><div /></div>)}
        <div
          class={this.classes}
          ref={(element) => this.$content = element}
        >
          <slot />
        </div>
      </Host >
    )
  }
}
