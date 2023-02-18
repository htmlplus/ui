import { Attributes, Bind, Element, Method, Property, Watch, State } from '@htmlplus/element';

import { arrow, autoUpdate, computePosition, ComputePositionConfig, flip, offset, shift } from '@floating-ui/dom';

import * as Helpers from '@app/helpers';

import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipReference, TooltipTrigger } from './tooltip.types';

/**
 * @dependencies @floating-ui/dom
 * @thirdParty
 */
@Element()
export class Tooltip {
  /**
   * Specifies whether to display the arrow or not.
   */
  @Property({ reflect: true })
  arrow?: boolean;

  /**
   * TODO
   */
  @Property()
  auto?: boolean = true;

  /**
   * Specifies a delay in milliseconds for show or hide.
   * Use a number for both show and hide or
   * create an array of two separate numbers for show and hide.
   */
  @Property()
  delay?: TooltipDelay;

  /**
   * Disables the component functionality.
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
  offset?: TooltipOffset = [5, 0];

  /**
   * Specifies the display location of the component relative to the reference.
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

  @State()
  state?: 'hide' | 'show' = 'hide';

  $activator?: Element;

  cleanup?: Function;

  timeout?: NodeJS.Timeout;

  @Attributes()
  get attributes() {
    return {
      role: 'tooltip',
      state: this.state
    };
  }

  get options() {
    const padding = [this.offset].flat();
    return {
      middleware: [
        offset(padding[0] || 0),
        flip(),
        shift({ padding: padding[1] || 0 }),
        this.arrow && arrow({ element: this.$arrow })
      ],
      placement: this.placement,
      strategy: this.fixed ? 'fixed' : 'absolute'
    } as Partial<ComputePositionConfig>;
  }

  get $arrow() {
    return Helpers.query(this, '[part=arrow]') as HTMLDivElement;
  }

  get $host() {
    return Helpers.host(this);
  }

  get $reference() {
    switch (this.reference) {
      case 'next':
        return this.$host.nextElementSibling;
      case 'parent':
        return this.$host.parentElement;
      case 'previous':
        return this.$host.previousElementSibling;
    }
    return typeof this.reference == 'string' ? document.querySelector(this.reference) : this.reference;
  }

  /**
   * Hides the component.
   */
  @Bind()
  @Method()
  hide() {
    clearTimeout(this.timeout);

    const delay = this.delay?.[1] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'hide';
      this.watch(false);
    }, delay);
  }

  /**
   * Shows the component.
   */
  @Bind()
  @Method()
  show() {
    clearTimeout(this.timeout);

    const delay = this.delay?.[0] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'show';
      this.watch(true);
    }, delay);
  }

  /**
   * Updates the component's position.
   */
  @Bind()
  @Method()
  update() {
    computePosition(this.$activator, this.$host, this.options).then((data) => {
      const { x, y, placement, middlewareData } = data;

      Object.assign(this.$host.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      this.$host.setAttribute('placement-computed', placement);

      if (!this.arrow) return;

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      Object.assign(this.$arrow.style, {
        left: arrowX == null ? '' : `${arrowX}px`,
        top: arrowY == null ? '' : `${arrowY}px`
      });
    });
  }

  events(all: boolean) {
    return [
      ['click', 'click', this.show],
      ['click', 'blur', this.hide],
      ['focus', 'focus', this.show],
      ['focus', 'blur', this.hide],
      ['hover', 'mouseenter', this.show],
      ['hover', 'mouseleave', this.hide]
    ]
      .filter((row: any) => all || [this.trigger].flat().includes(row[0]))
      .map((row: any) => row.slice(1));
  }

  bind() {
    // TODO
    if (this.disabled) return;

    // TODO
    this.$activator = this.$reference;

    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(false).forEach((parameters) => {
      this.$activator.addEventListener.apply(this.$activator, parameters);
    });
  }

  unbind() {
    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(true).forEach((parameters) => {
      this.$activator.removeEventListener.apply(this.$activator, parameters);
    });
  }

  watch(active: boolean) {
    this.cleanup?.();

    if (!this.auto || !active) return;

    this.cleanup = autoUpdate(this.$activator, this.$host, this.update);
  }

  @Watch()
  watcher(next, prev, key) {
    switch (key) {
      case 'auto':
        this.watch(next);
        break;

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

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <>
        <slot />
        <div part="arrow"></div>
      </>
    );
  }
}
