import { Element, Property } from '@htmlplus/element';

import { FORMAT_BYTES_STANDARD } from './format-bytes.constants';

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
  decimals?: number | [number, number] = 1;

  /**
   * TODO.
   */
  @Property()
  separator?: string;

  /**
   * TODO.
   */
  @Property()
  signed?: boolean;

  /**
   * TODO.
   */
  @Property()
  standard?: 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET' = 'METRIC';

  /**
   * TODO.
   */
  @Property()
  unit?: 'auto' | 'base' | 'kilo' | 'mega' | 'giga' | 'tera' | 'peta' | 'exa' | 'zetta' | 'yotta' = 'auto';

  /**
   * TODO.
   */
  @Property()
  value?: number;

  get formated() {
    if (isNaN(this.value)) return null;

    const bytes = Math.abs(this.value);

    const standard = FORMAT_BYTES_STANDARD[this.standard];

    if (!standard) return null;

    const { base, unit, units } = standard;

    let found;

    for (let index = 0; index < units.length; index++) {
      const [short, long] = units[index];
      
      const from = index ? Math.pow(base, index) : 0;

      const to = Math.pow(base, index + 1);

      found = { from, long, short, to };

      if (this.unit == 'base') break;

      if (this.unit != 'auto') {
        if (this.unit == long) break;
        if (units.some(([, long]) => this.unit == long)) continue;
      }

      if (bytes >= from && bytes < to) break;
    }

    const decimals = [this.decimals].flat();

    const formatter = new Intl.NumberFormat(this.locale, {
      style: 'decimal',
      minimumFractionDigits: decimals[0],
      maximumFractionDigits: decimals[1] || decimals[0],
    });

    let result = '';

    result += this.value < 0 ? '-' : this.signed ? '+' : '';

    result +=  found?.from ? formatter.format(bytes / found.from) : bytes;

    result += this.separator || '';

    result += found?.[this.display] || '';

    result += this.display == 'long' ? unit : '';

    return result;
  }

  render() {
    return this.formated;
  }
}
