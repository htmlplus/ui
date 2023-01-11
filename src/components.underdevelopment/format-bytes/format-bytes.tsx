import { Element, Property } from '@htmlplus/element';

import { FORMAT_BYTES_TABLES } from './format-bytes.constants';

/**
 * TODO
 */
@Element()
export class FormatBytes {
  /**
   * TODO.
   */
  @Property()
  display?: 'long' | 'short' = 'short';

  /**
   * TODO.
   */
  @Property()
  locale?: string | string[];

  /**
   * TODO.
   */
  @Property()
  precision?: number = 1;

  /**
   * TODO.
   */
  @Property()
  spacer?: string;

  /**
   * TODO.
   */
  @Property()
  unit?: 'iec' | 'iec-octet' | 'metric' | 'metric-octet' = 'metric';

  /**
   * TODO.
   */
  @Property()
  value?: number;

  get formated() {
    if (isNaN(this.value)) return this.value;

    const prefix = this.value < 0 ? '-' : '';

    const bytes = Math.abs(this.value);

    const TABLE = FORMAT_BYTES_TABLES[this.unit];

    if (!TABLE) return this.value;

    const { base, unit, units } = TABLE;

    let found;

    for (let index = 0; index < units.length; index++) {
      const [short, long] = units[index];
      
      const from = index ? Math.pow(base, index) : 0;

      const to = Math.pow(base, index + 1);

      found = { from, long, short, to };

      if (index == units.length - 1) break;

      if (bytes >= from && bytes < to) break;
    }

    const formatter = new Intl.NumberFormat(this.locale, {
      style: 'decimal',
      minimumFractionDigits: this.precision,
      maximumFractionDigits: this.precision,
    });

    let result = '';

    result += prefix;

    result +=  found?.from ? formatter.format(bytes / found.from) : bytes;

    result += this.spacer || '';

    result += found?.[this.display] || '';

    result += this.display == 'long' ? unit : '';

    return result;
  }

  render() {
    return this.formated;
  }
}
