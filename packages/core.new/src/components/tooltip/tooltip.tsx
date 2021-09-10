import { Bind, Component, Element, EventEmitter, GlobalConfig, Host, IsRTL, Property, State, Watch } from '@app/decorators';
import { createPopper, Instance } from '@popperjs/core';
import { TooltipAnimation, TooltipPlacement, TooltipTrigger, TooltipArrow } from './tooltip.types';

/**
 * @experimental 
 */
@Component()
export class Tooltip {

  // TODO
  // https://popper.js.org
  // https://atomiks.github.io/tippyjs
  // appendTo?: DONE! HTMLElement | Function | 'parent';
  // arrow?: DONE!  boolean | 'round' | 'large' | 'small' | 'wide' | 'narrow' | SVGAElement | Function; in progress
  // delay?;
  // duration?:
  // and animation, aria, content, followCursor, getReferenceClientRect, hideOnClick, ignoreAttributes, inertia, inlinePositioning, interactive, interactiveBorder, interactiveDebounce, maxWidth, moveTransition, offset, onAfterUpdate, onBeforeUpdate, onClickOutside, onCreate, onDestroy, onHidden, onHide, onMount, onShow, onShown, onTrigger, onUntrigger, placement, plugins, popperOptions, render, role, showOnCreate, sticky, theme, touch, trigger, triggerTarget, zIndex

  /**
   * Tooltip animation.
   */
  @Property({ reflect: true })
  animation?: TooltipAnimation = 'fade';

  /**
   * Tooltip append to a element.
   */
  @Property()
  appendTo?: any;

  /**
   * Tooltip arrow model.
   */
  @Property({ reflect: true })
  arrow?: TooltipArrow = 'default';

  /**
   * Delay for show tooltip.
   */
  @Property()
  delay?: number;

  /**
   * Tooltip disable.
   */
  @Property()
  disabled?: boolean;

  /**
   * Add fixed strategy to popper.
   */
  @Property()
  flip?: boolean;

  /**
   * Add fixed strategy to popper.
   */
  @Property()
  fixed?: boolean;

  /**
   * Vertical & horizontal offset from the target.
   */
  // @Property()
  offset?: number = undefined;

  /**
   * Horizontal offset from the target.
   */
  // @Property()
  offsetX?: number;

  /**
   * Vertical offset from the target.
   */
  // @Property()
  offsetY?: number;

  /**
   * How to position the tooltip.
   */
  @Property({ reflect: true })
  placement?: TooltipPlacement = 'auto';

  /**
   * How tooltip is triggered, include click, hover, focus.
   */
  @Property()
  trigger?: TooltipTrigger = ['focus', 'hover'];

  /**
   * When the tooltip is going to hide
   */
  // @Event({ cancelable: true })
  plusClose!: EventEmitter<void>;

  /**
   * When the tooltip is completely closed and its animation is completed.
   */
  // @Event()
  plusClosed!: EventEmitter<void>;

  /**
   * When the tooltip is going to show this event triggers.
   */
  // @Event({ cancelable: true })
  plusOpen!: EventEmitter<void>;

  /**
   * When the tooltip is completely shown and its animation is completed.
   */
  // @Event()
  plusOpened!: EventEmitter<void>;

  @GlobalConfig('tooltip', {
    offset: 0,
    placement: 'auto',
    trigger: ['focus', 'hover'],
  })
  config;

  @IsRTL()
  isRTL?: boolean;

  instance?: Instance;

  @State()
  state?: 'show' | 'hide' = 'hide';

  @Element()
  $host!: HTMLElement;

  $tooltip!: HTMLElement;

  $arrow!: HTMLElement;

  get $activator() {
    return this.appendTo ?? this.$host.parentElement as HTMLElement;
  }

  get attributes() {
    return {
      role: 'tooltip',
      state: this.state,
      animation: this.animation
    }
  }

  get eventsName() {

    const events = {
      hide: [],
      show: [],
    }

    const triggers = [this.trigger].flat(1);

    const mapper = {
      'click': ['click', 'blur'],
      'focus': ['focus', 'blur'],
      'hover': ['mouseenter', 'mouseleave'],
    }

    Object.keys(mapper)
      .filter((key) => triggers.includes(key as any))
      .map((key) => {
        const [show, hide] = mapper[key];
        events.show.push(show);
        events.hide.push(hide);
      });

    return events;
  }

  get options() {

    const offset = [this.offsetX ?? this.offset ?? null, this.offsetY ?? this.offset ?? null];

    const strategy = this.fixed ? 'fixed' : 'absolute' as any;

    return {
      placement: this.placement,
      strategy,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset
          }
        },
        {
          name: 'preventOverflow',
          options: {
            padding: {
              top: 2,
              bottom: 2,
              left: 5,
              right: 5,
            }
          }
        },
        {
          name: 'flip',
          options: {
            enable: this.flip
          },
        },
        {
          name: 'arrow',
          options: {
            element: this.$arrow,
            enable: true
          },
        }
      ]
    }
  }

  /**
   * Internal Methods
   */

  bind() {
    if (this.disabled) return;
    this.eventsName.show.map((eventName) => this.$activator.addEventListener(eventName, this.onShow));
    this.eventsName.hide.map((eventName) => this.$activator.addEventListener(eventName, this.onHide));
  }

  unbind() {
    this.eventsName.show.map((eventName) => this.$activator.removeEventListener(eventName, this.onShow));
    this.eventsName.hide.map((eventName) => this.$activator.removeEventListener(eventName, this.onHide));
  }

  /**
   * Watchers
   */

  @Watch('disabled')
  watcher() {
    this.disabled ? this.unbind() : this.bind();
  }

  /**
   * Events handler
   */

  @Bind()
  onHide() {
    this.instance?.destroy();
    this.state = 'hide';
    this.$tooltip.classList.remove('show');
    // this.plusClose.emit();
    // this.plusClosed.emit();
  }

  @Bind()
  onShow() {
    this.instance = createPopper(this.$activator, this.$tooltip, this.options);
    this.state = 'show';
    this.$tooltip.classList.add('show');
    // this.plusOpen.emit();
    // this.plusOpened.emit();
  }

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="tooltip" ref={(element) => this.$tooltip = element}>
          <slot />
          <span x-arrow ref={element => this.$arrow = element} />
        </div>
      </Host>
    )
  }
}
