import { Element, Property, styles } from '@htmlplus/element';

import { PlusCore } from '@/core';
import { isValidCSSColor } from '@/helpers';

import { SpinnerSize, SpinnerType } from './spinner.types';

/**
 * @stable
 */
@Element()
export class Spinner extends PlusCore {
  /**
   * Specifies the color.
   */
  @Property({ reflect: true })
  color?: string;

  /**
   * Specifies the size of the spinner.
   */
  @Property({ reflect: true })
  size?: SpinnerSize = 'inherit';

  /**
   * Specifies which variant of the spinner to use.
   */
  @Property({ reflect: true })
  type?: SpinnerType = 'default';

  get style() {
    return styles({
      color: isValidCSSColor(this.color) ? this.color : null
    });
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
      <host role="status" style={this.style}>
        <div className="root">
          {this.elements.map((element) => (
            <div key={element} />
          ))}
        </div>
      </host>
    );
  }
}
