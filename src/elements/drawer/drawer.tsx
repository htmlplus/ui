import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Property,
  Provider,
  Query,
  Method,
  Watch,
  classes,
  on,
  off,
  State,
  toCSSUnit
} from '@htmlplus/element';

import { PlusCore } from '@/core';
import { Breakpoint } from '@/decorators';
import { toAxis } from '@/helpers';
import { Animation, Scrollbar } from '@/services';

import { DrawerContext } from './drawer.context';
import { DrawerPlacement, DrawerFloating } from './drawer.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Drawer extends PlusCore {
  /**
   * TODO
   */
  @Property({ reflect: true })
  animation?: boolean | string;

  /**
   * Activate the drawer's backdrop to show or not. It works when floating is activated.
   */
  @Property()
  backdrop?: boolean;

  /**
   * This property helps you to attach which drawer toggler controls the drawer.
   * It doesn't matter where the drawer toggler is.
   * You can put the drawer's toggler inside or outside of the drawer.
   * Read more about connectors [here](/connector).
   */
  @Property()
  connector?: string;

  /**
   * On default the drawer is considered as a part of the main container.
   * it pushes the other contents on opening.
   * If true it will be opened over other contents and doesn't affect other contents.
   * A floating drawer sits above its application and uses a backdrop to darken the background.
   */
  @Property()
  floating?: DrawerFloating;

  /**
   * Set the width of drawer to the minimum size you specified for the `mini-size` property.
   */
  @Property({ reflect: true })
  mini?: boolean;

  /**
   * Sets the minimum width size of the drawer.
   */
  @Property()
  miniSize?: number | string = 80;

  /**
   * Control drawer to show or not.
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * If true, don't allow the drawer to be closed by clicking outside of the drawer.
   * If false, the drawer will be closed by clicking outside of it.
   */
  @Property()
  persistent?: boolean;

  /**
   * Specifies where the drawer will open.
   */
  @Property()
  placement?: DrawerPlacement;

  /**
   * It controls the flexibility of the drawer's width. If yes, the width of the drawer can be reduced.
   * If false doesn't allow the width of the drawer to reduce.
   */
  @Property()
  flexible?: boolean;

  /**
   * Determine the width of the drawer.
   */
  @Property()
  size?: number | string = 280;

  /**
   * TODO
   */
  @Property({ reflect: true })
  get floated(): boolean {
    if (!this.floating) return false;

    if (this.floating === true) return true;

    const breakpoint = this.floating.split('-').at(1);

    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']; // TODO

    return breakpoints.indexOf(this.breakpoint) <= breakpoints.indexOf(breakpoint);
  }

  /**
   * When the drawer is going to hide
   */
  @Event({ cancelable: true })
  plusClose!: EventEmitter<void>;

  /**
   * When the drawer is completely closed and its animation is completed.
   */
  @Event()
  plusClosed!: EventEmitter<void>;

  /**
   * When the drawer is going to show this event triggers
   */
  @Event({ cancelable: true })
  plusOpen!: EventEmitter<void>;

  /**
   * When the drawer is completely shown and its animation is completed.
   */
  @Event()
  plusOpened!: EventEmitter<void>;

  @State()
  @Breakpoint()
  breakpoint?;

  @Query('[part=root]')
  $root!: HTMLElement;

  @Provider('drawer.connector')
  get state(): DrawerContext {
    return {
      open: this.opened,
      toggle: () => {
        this.try(!this.open, false);
      }
    };
  }

  animate = {
    main: new Animation({
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
        this.floated && Scrollbar.remove(this);

        // remove outside click listener
        on(this.$root, 'outside', this.onClickOutside, true);

        // update state
        this.open = this.opened = true;
      },
      onEntering: () => {
        // this.opened = this.open = true;
      },
      onEntered: (silent) => {
        if (silent) return;

        this.plusOpened();
      },
      onLeave: () => {},
      onLeaving: () => {
        // this.opened = this.open = false;
      },
      onLeaved: (silent) => {
        // reset document's scroll
        Scrollbar.reset(this);

        // remove outside click listener
        off(this.$root, 'outside', this.onClickOutside, true);

        // update state
        this.open = this.opened = false;

        if (silent) return;

        this.plusClosed();
      }
    }),
    mini: new Animation({
      key: 'state-mini',
      source: () => this.$host,
      target: () => this.$host,
      states: {
        enter: 'open',
        entering: 'opening',
        entered: 'opened',
        leave: 'close',
        leaving: 'closing',
        leaved: 'closed'
      }
    })
  };

  opened: boolean = false;

  promise?: Promise<boolean>;

  get classes() {
    const placement = toAxis(this.placement || 'start', this.isRTL);

    return classes(
      [
        {
          [placement]: true,
          reverse: this.flexible
        }
      ],
      true
    );
  }

  get hasBackdrop() {
    return this.backdrop && this.floated;
  }

  get style(): any {
    const size = toCSSUnit(this.size);

    const miniSize = toCSSUnit(this.miniSize);

    const offset = `calc(${
      this.open ? (this.mini ? `-${size} + ${miniSize}` : '0px') : `-${size}`
    })`;

    return {
      '--plus-drawer-size': size,
      '--plus-drawer-offset': offset
    };
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

  @Watch(['breakpoint', 'mini', 'open'])
  watcher(next, prev, name) {
    switch (name) {
      case 'breakpoint':
        if (!this.floated) {
          this.try(false, false);
        }
        break;
      case 'open':
        // TODO: problem with `false` and `undefined`
        if (!next == !prev) break;
        this.try(next, true);
        break;
      case 'mini':
        // TODO: problem with `false` and `undefined`
        if (!next == !prev) break;
        this.animate.mini[next ? 'enter' : 'leave']();
        break;
    }
  }

  initialize() {
    this.opened = !!this.open;

    this.animate.main.initialize(this.open ? 'entered' : 'leaved');
    this.animate.mini.initialize(this.mini ? 'entered' : 'leaved');
  }

  terminate() {
    this.animate.main?.dispose();
    this.animate.mini?.dispose();
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

    const fn = this.open ? this.animate.main.enter : this.animate.main.leave;

    this.promise = fn.bind(this.animate.main)(silent);

    return await this.promise;
  }

  @Bind()
  onClickOutside() {
    // TODO
    if (!this.opened) return;

    if (!this.floated) return;

    if (this.persistent) return;

    this.try(false, false);
  }

  readyCallback() {
    this.initialize();
  }

  disconnectedCallback() {
    this.terminate();
  }

  render() {
    return (
      <>
        {this.hasBackdrop ? (
          <div part="backdrop">
            <div />
          </div>
        ) : null}
        <div className={this.classes} part="root" style={this.style}>
          <slot />
        </div>
      </>
    );
  }
}
