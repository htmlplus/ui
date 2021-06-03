import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { SpinnerSize, SpinnerType } from './spinner.types';

/**
 */
@Component({
  tag: 'plus-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {

  /**
   * Specifies the size of the spinner.
   */
  @Prop({ reflect: true })
  size?: SpinnerSize = 'md';

  /**
   * Specifies which variant of the spinner to use.
   */
  @Prop({ reflect: true })
  type?: SpinnerType = 'default';

  @GlobalConfig('spinner', {
    size: 'md',
    type: 'default'
  })
  config?;

  get attributes() {
    return {
      'role': 'status',
      // TODO 'aria-hidden': true
    }
  }

  get elements() {

    const map = {
      'default': 8,
      'double-bounce': 2
    };

    const number = map[this.type] ?? 1;

    return Array.from(Array(number).keys());
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="wrapper">
          {this.elements.map((element) => <div key={element} />)}
        </div>
      </Host>
    )
  }
}
