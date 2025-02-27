import { Element, Method, Property, Query, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @part bar - The bar element.
 */
@Element()
export class AppProgressBar extends PlusCore {
  /**
   * Determines the minimum percentage used upon starting, which must be a value between `0.0` and `1.0`.
   */
  @Property()
  minimum?: number = 0.08;

  /**
   * Turn off the automatic incrementing behavior by setting this to `true`.
   */
  @Property()
  trickleDisabled?: boolean;

  /**
   * The rate at which the progress bar increments when trickling.
   */
  @Property()
  trickleRate?: number = 0.02;

  /**
   * Adjust how often to trickle/increment, in ms.
   */
  @Property()
  trickleSpeed?: number = 800;

  @Query('[part=bar]')
  $bar!: HTMLDivElement;

  @State()
  state?: 'completed' | 'idle' | 'progressing' = 'idle';

  progress: number | null = null;

  timeout?: number;

  /**
   * Hides the progress bar. If true is passed, the bar briefly appears before hiding.
   */
  @Method()
  done(force?: boolean): void {
    if (!force && !this.progress) return;

    this.set(1);
  }

  /**
   * Increments by a random amount.
   */
  @Method()
  increase(amount?: number): void {
    if (!this.progress) {
      return this.start();
    }

    if (typeof amount !== 'number') {
      amount = (1 - this.progress) * this.clamp(Math.random() * this.progress, 0.1, 0.95);
    }

    amount = this.clamp(this.progress + amount, 0, 0.994);

    this.set(amount);
  }

  /**
   * Adjusts the progress of the bar, with the argument representing a value between `0` and `1`.
   */
  @Method()
  set(progress: number): void {
    clearTimeout(this.timeout);

    progress = this.clamp(progress, this.minimum, 1);

    this.progress = progress === 1 ? null : progress;

    if (this.state != 'progressing') {
      this.state = 'progressing';
      this.update(0);
    }

    requestAnimationFrame(() => {
      this.update(progress);

      if (progress !== 1) return;

      const speed = parseFloat(getComputedStyle(this.$bar).transitionDuration) * 1000;

      this.timeout = window.setTimeout(() => {
        this.state = 'completed';

        const speed = parseFloat(getComputedStyle(this.$host).transitionDuration) * 1000;

        this.timeout = window.setTimeout(() => (this.state = 'idle'), speed);
      }, speed);
    });
  }

  /**
   * Shows the progress bar.
   */
  @Method()
  start(): void {
    if (!this.progress) this.set(0);

    if (this.trickleDisabled) return;

    this.refresh();
  }

  /**
   * Increments the progress by a random amount based on the trickle rate.
   */
  @Method()
  trickle(): void {
    this.increase(Math.random() * this.trickleRate);
  }

  clamp(input: number, min: number, max: number) {
    if (input < min) return min;
    if (input > max) return max;
    return input;
  }

  refresh() {
    setTimeout(() => {
      if (!this.progress) return;

      this.trickle();

      this.refresh();
    }, this.trickleSpeed);
  }

  update(progress: number) {
    this.$bar.style.transform = `translate3d(${(-1 + progress) * 100}%, 0, 0)`;
  }

  disconnectedCallback() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <host state={this.state}>
        <div part="bar"></div>
      </host>
    );
  }
}
