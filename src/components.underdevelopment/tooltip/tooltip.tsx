import { Attributes, Bind, Element, Property, State, Watch } from '@htmlplus/element';

import { arrow, computePosition, ComputePositionConfig, flip, offset, shift } from '@floating-ui/dom';

import * as Helpers from '@app/helpers';

import { TooltipDelay, TooltipOffset, TooltipPlacement, TooltipTrigger } from './tooltip.types';

/**
 * TODO
 */
@Element()
export class Tooltip {
  /**
   * TODO
   */
  @Property()
  delay?: TooltipDelay;

  /**
   * TODO
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
  offset?: TooltipOffset;

  /**
   * TODO
   */
  @Property()
  placement?: TooltipPlacement;

  /**
   * TODO
   */
  @Property()
  trigger?: TooltipTrigger = ['focus', 'hover'];

  @State()
  state?: 'show' | 'hide' = 'hide';

  timeout?: NodeJS.Timeout;

  @Attributes()
  get attributes() {
    return {
      role: 'tooltip',
      state: this.state
    };
  }

  get $activator() {
    return Helpers.host(this).previousElementSibling;
  }

  get $arrow() {
    return Helpers.query(this, 'div');
  }

  get $tooltip() {
    return Helpers.host(this);
  }

  get options() {
    const padding = [this.offset].flat();
    return {
      middleware: [
        offset(padding[0] || 0),
        flip(),
        shift({ padding: padding[1] || 0 }),
        arrow({ element: this.$arrow })
      ],
      placement: this.placement,
      strategy: this.fixed ? 'fixed' : 'absolute'
    } as Partial<ComputePositionConfig>;
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

    this.events(false).forEach((parameters) => {
      this.$activator.addEventListener.apply(this.$activator, parameters);
    });
  }

  unbind() {
    clearTimeout(this.timeout);

    this.events(true).forEach((parameters) => {
      this.$activator.removeEventListener.apply(this.$activator, parameters);
    });
  }

  update() {
    computePosition(this.$activator, this.$tooltip, this.options).then((data) => {
      const { x, y, placement, middlewareData } = data;

      Object.assign(this.$tooltip.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];

      Object.assign(this.$arrow.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px'
      });
    });
  }

  @Watch(['disabled', 'trigger'])
  watcher(next, prev, key) {
    switch (key) {
      case 'disabled':
        next ? this.unbind() : this.bind();
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
      this.state = 'hide';
      this.$tooltip.style.display = '';
    }, delay);
  }

  @Bind()
  onShow() {
    clearTimeout(this.timeout);

    const delay = this.delay?.[0] || this.delay || 0;

    this.timeout = setTimeout(() => {
      this.state = 'show';
      this.$tooltip.style.display = 'block';
      this.update();
    }, delay);
  }

  connectedCallback() {
    if (this.disabled) return;
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
