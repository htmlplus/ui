import { Attributes, Element, Property } from '@htmlplus/element';
import { SpinnerSize, SpinnerType } from './spinner.types';

@Element()
export class Spinner {
  /**
   * Specifies the size of the spinner.
   */
  @Property({ reflect: true })
  size?: SpinnerSize = 'md';

  /**
   * Specifies which variant of the spinner to use.
   */
  @Property({ reflect: true })
  type?: SpinnerType = 'default';

  @Attributes()
  get attributes() {
    return {
      'role': 'status',
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
      <div className="wrapper">
        {this.elements.map((element) => <div key={element} />)}
      </div>
    )
  }
}