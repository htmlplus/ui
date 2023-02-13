import { Attributes, Bind, Element, Method, Property, Watch, styles } from '@htmlplus/element';

import { arrow, autoUpdate, computePosition, ComputePositionConfig, flip, offset, shift } from '@floating-ui/dom';

import * as Helpers from '@app/helpers';

import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipSource, TooltipTrigger } from './tooltip.types';

/**
 * @dependencies @floating-ui/dom
 * @thirdParty
 */
@Element()
export class Tooltip {
  /**
   * Specifies whether to display the arrow or not.
   */
  @Property()
  arrow?: boolean;

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
  @Property()
  fixed?: boolean;

  /**
   * TODO
   */
  @Property()
  offset?: TooltipOffset = [5, 0];

  /**
   * TODO
   */
  @Property()
  placement?: TooltipPlacement;

  /**
   * TODO
   */
  @Property()
  source?: TooltipSource = 'previous';

  /**
   * TODO
   */
  @Property()
  trigger?: TooltipTrigger = ['focus', 'hover'];

  $activator?: Element;

  cleanup?: () => void;

  timeout?: NodeJS.Timeout;

  @Attributes()
  get attributes() {
    return {
      role: 'tooltip',
      style: styles({
        position: this.strategy
      })
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
      strategy: this.strategy
    } as Partial<ComputePositionConfig>;
  }

  get strategy() {
    return this.fixed ? 'fixed' : 'absolute';
  }

  get $arrow() {
    return Helpers.query(this, '[part=arrow]') as HTMLDivElement;
  }

  get $source() {
    switch (this.source) {
      case 'next':
        return Helpers.host(this).nextElementSibling;
      case 'parent':
        return Helpers.host(this).parentElement;
      case 'previous':
        return Helpers.host(this).previousElementSibling;
    }
    return typeof this.source == 'string' ? document.querySelector(this.source) : this.source;
  }

  get $tooltip() {
    return Helpers.host(this);
  }

  /**
   * TODO
   */
  @Method()
  hide() {
    this.onHide();
  }

  /**
   * TODO
   */
  @Method()
  show() {
    this.onShow();
  }

  events(all: boolean) {
    return [
      ['click', 'click', this.onShow],
      ['click', 'blur', this.onHide],
      ['focus', 'focus', this.onShow],
      ['focus', 'blur', this.onHide],
      ['hover', 'mouseenter', this.onShow],
      ['hover', 'mouseleave', this.onHide]
    ]
      .filter((row: any) => all || [this.trigger].flat().includes(row[0]))
      .map((row: any) => row.slice(1));
  }

  bind() {
    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(false).forEach((parameters) => {
      this.$activator.addEventListener.apply(this.$activator, parameters);
    });

    this.cleanup = autoUpdate(this.$activator, this.$tooltip, this.update, {
      ancestorScroll: true,
      ancestorResize: true,
      elementResize: true,
      animationFrame: false
    });
  }

  unbind() {
    clearTimeout(this.timeout);

    if (!this.$activator) return;

    this.events(true).forEach((parameters) => {
      this.$activator.removeEventListener.apply(this.$activator, parameters);
    });

    this.cleanup();
  }

  @Bind()
  update() {
    computePosition(this.$activator, this.$tooltip, this.options).then((data) => {
      const { x, y, placement, middlewareData } = data;

      Object.assign(this.$tooltip.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (!this.arrow) return;

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      Object.assign(this.$arrow.style, {
        left: arrowX == null ? '' : `${arrowX}px`,
        top: arrowY == null ? '' : `${arrowY}px`
      });

      this.$tooltip.setAttribute('placement-computed', placement);
    });
  }

  @Watch(['disabled', 'source', 'trigger'])
  watcher(next, prev, key) {
    switch (key) {
      case 'disabled':
        next ? this.unbind() : this.bind();
        break;
      case 'source':
        this.unbind();
        this.$activator = this.$source;
        this.bind();
        break;
      case 'trigger':
        this.unbind();
        this.bind();
        break;
    }
  }

  @Bind()
  onHide() {
    clearTimeout(this.timeout);

    const delay = this.delay?.[1] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.$tooltip.style.display = '';
    }, delay);
  }

  @Bind()
  onShow() {
    clearTimeout(this.timeout);

    const delay = this.delay?.[0] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.$tooltip.style.display = 'block';
      this.update();
    }, delay);
  }

  connectedCallback() {
    if (this.disabled) return;

    // TODO
    this.$activator = this.$source;

    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <>
        <slot />
        {this.arrow && <div part="arrow"></div>}
      </>
    );
  }
}
