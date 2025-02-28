import { Element, Property, Style, toCSSColor } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @slot default - The default slot.
 */
@Element()
export class ProgressBar extends PlusCore {
  /**
   * Specifies the secondary progress of the bar by a number between `min` and `max`.
   */
  @Property()
  buffer?: number;

  /**
   * Specifies the color of the bar.
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * Displays the progress percentage.
   */
  @Property()
  label?: boolean;

  /**
   * Specifies the minimum value of the progress.
   */
  @Property()
  min?: number = 0;

  /**
   * Specifies the maximum value of the progress.
   */
  @Property()
  max?: number = 100;

  /**
   * Eliminates delays in updating value.
   */
  @Property({ reflect: true })
  sync?: boolean;

  /**
   * TODO
   */
  @Property({ reflect: true })
  variant?: string;

  /**
   * Specifies the progress of the bar by a number between `min` and `max`.
   */
  @Property()
  value?: number = 0;

  @Style()
  get style() {
    return {
      'min-width': this.stacked ? this.percentage : null,
      '--plus-progress-bar-indicator-background-color': toCSSColor(this.color)
    };
  }

  get percentage() {
    return this.progress + '%';
  }

  get progress() {
    return (this.value - this.min) * (100 / Math.abs(this.max - this.min));
  }

  get stacked() {
    return this.$host.parentElement.nodeName.startsWith(this.$host.nodeName);
  }

  render() {
    return (
      <host
        aria-valuemin={this.min}
        aria-valuemax={this.max}
        aria-valuenow={this.progress}
        role="progressbar"
      >
        <div part="underlay"></div>
        <div
          part="buffer"
          style={{
            width: `${this.buffer || 0}%`
          }}
        ></div>
        <div
          part="indicator"
          style={{
            width: this.stacked ? '100%' : this.percentage
          }}
        >
          <slot>{this.label ? this.percentage : null}</slot>
        </div>
      </host>
    );
  }
}
