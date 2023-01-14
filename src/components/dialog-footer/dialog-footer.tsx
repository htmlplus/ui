import { Element } from '@htmlplus/element';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogFooter {
  render() {
    return <slot />;
  }
}
