import { Element, Property } from '@htmlplus/element';

import { PlusBase } from '@app/core';

@Element()
export class ProgressBar extends PlusBase {
  /**
   * TODO
   */
  @Property()
  buffer?: number;

  /**
   * TODO
   */
  @Property({ reflect: true })
  immediate?: boolean;

  /**
   * TODO
   */
  @Property()
  label?: boolean;

  /**
   * TODO
   */
  @Property()
  min?: number = 0;

  /**
   * TODO
   */
  @Property()
  max?: number = 100;

  /**
   * TODO
   */
  @Property({ reflect: true })
  variant?: string;

  /**
   * TODO
   */
  @Property()
  value?: number = 0;

  get percentage() {
    return this.progress + '%';
  }

  get progress() {
    return (this.value - this.min) * (100 / Math.abs(this.max - this.min));
  }

  // TODO: get from parent context
  get stacked() {
    return this.$host.parentElement.nodeName == 'PLUS-PROGRESS-BAR-STACK';
  }

  render() {
    return (
      <host
        aria-valuemin={this.min}
        aria-valuemax={this.max}
        aria-valuenow={this.progress}
        role="progressbar"
        style={{
          minWidth: this.stacked ? this.percentage : null
        }}
      >
        <div className="underlay" part="underlay"></div>
        <div
          className="buffer"
          part="buffer"
          style={{
            width: (this.buffer || 0) + '%'
          }}
        ></div>
        <div
          className="indicator"
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
