import { Attributes, Element, Property, styles, toUnit } from '@htmlplus/element';

/**
 * @slot default - The default slot.
 */
@Element()
export class Stack {
  /**
   * TODO.
   */
  @Property()
  gap?: string;

  /**
   * TODO.
   */
  @Property()
  vertical?: boolean;

  @Attributes()
  get attributes() {
    return {
      style: this.style
    };
  }

  get style() {
    return styles({
      'align-items': 'center',
      'display': 'flex',
      'flex-direction': this.vertical ? 'column' : 'row',
      'gap': toUnit(this.gap),
      'justify-content': 'center'
    });
  }

  render() {
    return <slot />;
  }
}
