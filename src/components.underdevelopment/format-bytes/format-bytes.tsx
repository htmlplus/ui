import { Element, Property } from '@htmlplus/element';

import { FormatBytesDisplay, FormatBytesUnit } from './format-bytes.types';

/**
 * TODO
 */
@Element()
export class FormatBytes {
  /**
   * Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".
   */
  @Property()
  display?: FormatBytesDisplay = 'short';

  /**
   * The unit to display.
   */
  @Property()
  unit?: FormatBytesUnit = 'byte';

  /**
   * The number to format in bytes.
   */
  @Property()
  value?: number;

  get format() {
    if (isNaN(this.value)) return ''; 

    const prefixes = ['', 'Kilo', 'Mega', 'Giga', 'Tera', 'Peta'];

    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefixes.length - 1));

    const prefix = prefixes[index];

    const value = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

    const space = this.display == 'narrow' ? '' : ' ';

    const aaa = (this.display == 'long' ? prefix : prefix[0]) || '';

    // const unit = this.unit == 'bit' ? 'bit' : 'byte'


    return value + space + aaa;
    //+ unit[0].toUpperCase();
  }

  // long
  // 12 (bytes|bits)
  // 1.2 kilo(bytes|bits)
  // short
  // 12 (byte|bit)
  // 1.2 k(B|b)
  // narrow
  // 12(B|bit)
  // 1.2k(B|b)

  render() {
    return this.format;
  }
}