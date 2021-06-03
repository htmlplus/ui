import { Component, Host, Prop, h } from '@stencil/core';
import { Debug, GlobalConfig } from '@app/utils';
import { AspectRatioValue } from './aspect-ratio.types';

/**
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-aspect-ratio',
  styleUrl: 'aspect-ratio.scss',
  shadow: true
})
export class AspectRatio {

  /**
   * Specifies the ratio.
   */
  @Prop()
  value?: AspectRatioValue;

  @Debug('aspectRatio')
  debug?;

  @GlobalConfig('aspectRatio')
  config?;

  get ratio() {

    if (typeof this.value === 'number') return this.value;

    let [valueA, valueB] = `${this.value}`
      .split('/')
      .map((item: any) => isNaN(item) ? NaN : parseFloat(item));

    if (valueB === undefined) valueB = 1;

    if (!isNaN(valueA + valueB)) return valueA / valueB;

    this.debug('TODO: invalid value \'%s\'', this.value);
  }

  get style() {

    const ratio = this.ratio;

    if (!ratio) return;

    return {
      paddingTop: `${100 / ratio}%`
    }
  }

  render() {
    return (
      <Host>
        <div class="sizer" style={this.style} />
        <slot />
      </Host>
    )
  }
}
