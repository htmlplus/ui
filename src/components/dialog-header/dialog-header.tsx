import { Element } from '@htmlplus/element';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogHeader {
  render() {
    return <slot />;
  }
}
