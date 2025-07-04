import { Consumer, Element, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { SplitterContext } from '../splitter/splitter.context';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class SplitterBar extends PlusCore {
  @State()
  @Consumer('splitter')
  state?: SplitterContext;

  readyCallback() {
    this.state?.register(this);
  }

  updatedCallback() {
    this.state?.unregister(this);
    this.state?.register(this);
  }

  disconnectedCallback() {
    this.state?.unregister(this);
  }

  render() {
    return <slot onSlotChange={this.forceUpdate} />;
  }
}
