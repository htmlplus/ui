import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { AspectRatioValue } from './aspect-ratio.types';

/**
 * This component helps to specify a fixed ratio for the width and height sizes of a visual object (e.g. Image).
 * @examples default, video, more
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

  @GlobalConfig('aspectRatio')
  config?;

  get ratio() {

    if (typeof this.value === 'undefined') return;

    if (typeof this.value === 'string') {

      const [valueA, valueB] = this.value.split('/').map((item) => parseFloat(item));

      const value = valueA / (valueB || 1);

      return value;
    }

    return this.value;
  }

  get style() {

    if (!this.value) return;

    return {
      paddingTop: `${100 / this.ratio}%`
    }
  }

  render() {
    return (
      <Host>
        {this.style && <div class="sizer" style={this.style} />}
        <slot />
      </Host>
    )
  }
}
