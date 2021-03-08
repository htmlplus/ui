import { Component, Host, Prop, h } from '@stencil/core';
import Cropper from 'cropperjs';
import * as Utils from '@app/utils';
import { GlobalConfig } from '@app/services';
import { } from './crop.types';

/**
 * TODO
 * @development
 * @examples default
 */
@Component({
  tag: 'plus-crop',
  styleUrl: 'crop.scss',
  shadow: true
})
export class Crop {

  /**
   * TODO
   */
  @Prop()
  src?: string;

  @GlobalConfig('crop')
  config?;

  instance?: Cropper;

  render() {
    return (
      <Host>
        <div class="wrapper" />
      </Host>
    )
  }
}
