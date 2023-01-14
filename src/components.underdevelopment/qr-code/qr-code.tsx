import { Element, Property, Watch } from '@htmlplus/element';

import Core from 'qrcode';

import { QRCodeError } from './qr-code.types';

/**
 * TODO
 */
@Element()
export class QRCode {
  /**
   * TODO.
   */
  @Property()
  background?: string = 'white';

  /**
   * TODO.
   */
  @Property()
  color?: string = 'black';

  /**
   * TODO.
   */
  @Property()
  error?: QRCodeError = 'high';

  /**
   * TODO.
   */
  @Property()
  label?: string;

  /**
   * TODO.
   */
  @Property()
  radius?: Number = 0;

  /**
   * TODO.
   */
  @Property()
  size?: Number = 128;

  /**
   * TODO.
   */
  @Property()
  value?: string;

  $canvas!: HTMLCanvasElement;

  get style() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`
    };
  }

  @Watch()
  loadedCallback() {
    Core.toCanvas(this.$canvas, 'sample text', { margin: 0 }, function (error) {
      if (error) console.error(error);
      console.log('success!');
    });
  }

  render() {
    return (
      <canvas
        aria-label={this.label ?? this.value}
        role="img"
        part="canvas"
        ref={($element) => (this.$canvas = $element)}
        style={this.style}
      ></canvas>
    );
  }
}
