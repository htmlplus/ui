import { Element, Property } from '@htmlplus/element';

import { PlusCore } from '@/core';

/**
 * @stable
 *
 * @slot default - The default slot.
 */
@Element()
export class AspectRatio extends PlusCore {
  /**
   * Specifies the minimum height.
   */
  @Property()
  minHeight?: number | string = undefined;

  /**
   * Specifies the maximum height.
   */
  @Property()
  maxHeight?: number | string = undefined;

  /**
   * Specifies the ratio.
   */
  @Property()
  value?: number | string = 1;

  get ratio() {
    if (typeof this.value === 'number') return this.value;

    let [valueA, valueB] = `${this.value}`
      .split('/')
      .map((item: any) => (isNaN(item) ? NaN : parseFloat(item)));

    valueB = valueB ?? 1;

    if (!isNaN(valueA + valueB)) return valueA / valueB;
  }

  get style(): any {
    const ratio = this.ratio;

    if (!ratio) return;

    // TODO: parse number in @Property()
    const minHeight = isNaN(this.minHeight as any) ? this.minHeight : `${this.minHeight}px`;
    const maxHeight = isNaN(this.maxHeight as any) ? this.maxHeight : `${this.maxHeight}px`;

    const paddingTop =
      minHeight || maxHeight
        ? `clamp(${minHeight || 0}, ${100 / ratio}%, ${maxHeight || '9999px'})`
        : `${100 / ratio}%`;

    return { paddingTop };
  }

  render() {
    return (
      <div className="root" style={this.style}>
        <slot />
      </div>
    );
  }
}
