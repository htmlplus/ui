import { Component, GlobalConfig, Property } from '@app/decorators';
import { AspectRatioValue } from './aspect-ratio.types';

/**
 * @slot default - The default slot.
 */
@Component()
export class AspectRatio {

  /**
   * Specifies the ratio.
   */
  @Property()
  value?: AspectRatioValue = 1;

  @GlobalConfig('aspectRatio', {
    value: 1
  })
  config?;

  get ratio() {

    if (typeof this.value === 'number') return this.value;

    let [valueA, valueB] = `${this.value}`
      .split('/')
      .map((item: any) => isNaN(item) ? NaN : parseFloat(item));

    valueB = valueB ?? 1;

    if (!isNaN(valueA + valueB)) return valueA / valueB;
  }

  get style() {

    const ratio = this.ratio;

    if (!ratio) return;

    return `padding-top: ${100 / ratio}%`;
  }

  render() {
    return (
      <>
        <div class="sizer" style={this.style} />
        <slot />
      </>
    )
  }
}
