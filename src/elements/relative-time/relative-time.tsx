import { Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { RELATIVE_TIME_UNITS } from './relative-time.constants';

@Element()
export class RelativeTime extends PlusCore {
  /**
   * The format style for the relative time.
   */
  @Property()
  format?: 'long' | 'short' | 'narrow' = 'long';

  /**
   * Determines whether the numeric value should always be displayed.
   */
  @Property()
  numeric?: 'always' | 'auto' = 'auto';

  /**
   * Determines whether the relative time should be updated automatically.
   */
  @Property()
  sync?: boolean = false;

  /**
   * The date and time to be displayed in a relative format.
   */
  @Property()
  value?: Date = new Date();

  @State()
  formatted?: string;

  timeout: number;

  get isValid() {
    return this.value instanceof Date;
  }

  get lang() {
    return `${this.$host.lang || window.document.documentElement.lang || window.navigator.language}`.toLowerCase();
  }

  refresh() {
    clearTimeout(this.timeout);

    if (!this.isValid) return;

    const difference = this.value.getTime() - Date.now();

    const unit = RELATIVE_TIME_UNITS.findLast((unit, index) => {
      return Math.floor(Math.abs(difference) / unit.value) || !index;
    });

    const formatter = new Intl.RelativeTimeFormat(this.lang, {
      numeric: this.numeric,
      style: this.format
    });

    this.formatted = formatter.format(Math.ceil(difference / unit.value), unit.name);

    if (!this.sync) return;

    const interval = (difference > 0 ? 0 : unit.value) + (difference % unit.value);

    this.timeout = window.setTimeout(() => {
      this.forceUpdate();
    }, interval);
  }

  disconnectedCallback() {
    clearTimeout(this.timeout);
  }

  updateCallback() {
    this.refresh();
  }

  render() {
    if (!this.isValid || !this.formatted) return 'Invalid date';
    return <time dateTime={this.value.toISOString()}>{this.formatted}</time>;
  }
}
