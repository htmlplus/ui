import { Bind, Element, Method, Property, Query, Watch, State, off, on } from '@htmlplus/element';

import type * as FloatingCoreType from '@floating-ui/dom';

import { PlusCore } from '@/core';

import {
  TooltipDelay,
  TooltipOffset,
  TooltipPlacement,
  TooltipReference,
  TooltipTrigger
} from './tooltip.types';

let FloatingCore: typeof FloatingCoreType;

/**
 * @thirdParty
 *
 * @dependencies @floating-ui/dom
 */
@Element()
export class Tooltip extends PlusCore {
  /**
   * Specifies whether to display the arrow or not.
   */
  @Property({ reflect: true })
  arrow?: boolean;

  /**
   * Specifies a delay in milliseconds for show or hide.
   * Use a number for both show and hide or
   * create an array of two separate numbers for show and hide.
   */
  @Property()
  delay?: TooltipDelay;

  /**
   * Disables the element functionality.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * TODO
   */
  @Property({ reflect: true })
  fixed?: boolean;

  /**
   * TODO
   */
  @Property()
  offset?: TooltipOffset = [0, 10];

  /**
   * Specifies the display location of the element relative to the reference.
   */
  @Property()
  placement?: TooltipPlacement;

  /**
   * Specifies the element to which the tooltip will be attached.
   * Use `next` to attach to the next sibling.
   * Use `parent` to attach to the parent.
   * Use `previous` to attach to the previous sibling.
   * Use a string to find an element to attach to that.
   * Use an element to attach to that.
   */
  @Property()
  reference?: TooltipReference = 'previous';

  /**
   * Specifies the activation method.
   */
  @Property()
  trigger?: TooltipTrigger = ['focus', 'hover'];

  /**
   * TODO
   */
  @Property()
  z?: 'auto' | 'vertical' | 'horizontal' | 'move' = 'auto';

  /**
   * Hides the element.
   */
  @Method()
  hide() {
    if (this.state == 'hide') return;

    clearTimeout(this.timeout);

    const delay = this.delay?.[1] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'hide';
      this.observe(false);
    }, delay);
  }

  /**
   * Shows the element.
   */
  @Method()
  show() {
    if (this.state == 'show') return;

    clearTimeout(this.timeout);

    const delay = this.delay?.[0] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'show';
      this.observe(true);
    }, delay);
  }

  /**
   * Updates the element's position.
   */
  @Method()
  update() {
    this.$host.removeAttribute('placement-computed');

    FloatingCore.computePosition(this.$activator, this.$host, this.options).then((data) => {
      const { x, y, placement, middlewareData } = data;

      // console.log(1, middlewareData.hide);

      this.$host.setAttribute('placement-computed', placement);

      Object.assign(this.$host.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (!this.arrow) return;

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      Object.assign(this.$arrow.style, {
        left: arrowX == null ? '' : `${arrowX}px`,
        top: arrowY == null ? '' : `${arrowY}px`
      });
    });
  }

  @Query('[part=arrow]')
  $arrow!: HTMLElement;

  $activator?: Element;

  @State()
  state?: 'hide' | 'show' = 'hide';

  cleanup?: Function;

  timeout?: NodeJS.Timeout;

  get $reference() {
    if (typeof this.reference != 'string') return this.reference;

    switch (this.reference) {
      case 'next':
        return this.$host.nextElementSibling;
      case 'parent':
        return this.$host.parentElement;
      case 'previous':
        return this.$host.previousElementSibling;
    }

    return document.querySelector(this.reference);
  }

  get options() {
    const PLACEMENT = {
      'top': 'top',
      'top-left': this.isRTL ? 'top-end' : 'top-start',
      'top-right': this.isRTL ? 'top-start' : 'top-end',
      'top-start': 'top-start',
      'top-end': 'top-end',
      'right': 'right',
      'right-top': 'right-start',
      'right-bottom': 'right-end',
      'bottom': 'bottom',
      'bottom-left': this.isRTL ? 'bottom-end' : 'bottom-start',
      'bottom-right': this.isRTL ? 'bottom-start' : 'bottom-end',
      'bottom-start': 'bottom-start',
      'bottom-end': 'bottom-end',
      'left': 'left',
      'left-top': 'left-start',
      'left-bottom': 'left-end',
      'start': this.isRTL ? 'right' : 'left',
      'start-top': this.isRTL ? 'right-start' : 'left-start',
      'start-bottom': this.isRTL ? 'right-end' : 'left-end',
      'end': this.isRTL ? 'left' : 'right',
      'end-top': this.isRTL ? 'left-start' : 'right-start',
      'end-bottom': this.isRTL ? 'left-end' : 'right-end'
    };

    const padding = [this.offset].flat();

    return {
      middleware: [
        FloatingCore.offset({ crossAxis: padding[0] || 0, mainAxis: padding[1] || 0 }),
        FloatingCore.flip(),
        this.arrow && FloatingCore.arrow({ element: this.$arrow })
        // FloatingCore.hide()
      ],
      placement: PLACEMENT[this.placement],
      strategy: this.fixed ? 'fixed' : 'absolute'
    } as Partial<FloatingCoreType.ComputePositionConfig>;
  }

  @Watch()
  watcher(next, prev, key) {
    switch (key) {
      case 'disabled':
        next ? this.unbind() : this.bind();
        break;

      case 'fixed':
      case 'offset':
      case 'placement':
        if (this.state == 'hide') break;
        this.update();
        break;

      case 'reference':
      case 'trigger':
        this.unbind();
        this.bind();
        break;
    }
  }

  bind() {
    // TODO
    if (this.disabled) return;

    // TODO
    this.$activator = this.$reference;

    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(false).forEach(([type, handler]) => {
      on(this.$activator, type, handler);
    });

    // TODO
    // this.state = 'show';
    // this.observe(true);
    // this.$activator.addEventListener('mousemove', (event: any) => {
    //   const virtualEl = {
    //     getBoundingClientRect() {
    //       return {
    //         width: 0,
    //         height: 0,
    //         x: event.clientX,
    //         y: event.clientY,
    //         left: event.clientX,
    //         right: event.clientX,
    //         top: event.clientY,
    //         bottom: event.clientY
    //       };
    //     }
    //   };
    //   FloatingCore.computePosition(virtualEl, this.$host, this.options).then(({ x, y }) => {
    //     Object.assign(this.$host.style, {
    //       top: `${y}px`,
    //       left: `${x}px`
    //     });
    //   });
    // });
  }

  unbind() {
    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(true).forEach(([type, handler]) => {
      off(this.$activator, type, handler);
    });
  }

  events(all: boolean) {
    return [
      ['click', 'click', this.onShow],
      ['click', 'blur', this.onHide],
      ['click', 'outside', this.onHide],
      ['focus', 'focus', this.onShow],
      ['focus', 'blur', this.onHide],
      ['hover', 'mouseenter', this.onShow],
      ['hover', 'mouseleave', this.onHide]
    ]
      .filter((row: any) => all || [this.trigger].flat().includes(row[0]))
      .map((row: any) => row.slice(1));
  }

  observe(active: boolean) {
    this.cleanup?.();

    if (!active) return;

    this.cleanup = FloatingCore.autoUpdate(this.$activator, this.$host, this.update.bind(this));
  }

  @Bind()
  onHide() {
    this.hide();
  }

  @Bind()
  onShow() {
    this.show();
  }

  connectedCallback() {
    return import('@floating-ui/dom')
      .then((module) => {
        FloatingCore = module;
        this.bind();
      })
      .catch(() => {
        throw new Error(
          "The `tooltip` element depends on an external package, but it doesn't seem to be installed. Running `npm install @floating-ui/dom` will fix this problem."
        );
      });
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <host role="tooltip" state={this.state}>
        <slot />
        <div part="arrow"></div>
      </host>
    );
  }
}
