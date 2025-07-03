import { Consumer, Element, Property, State } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { SplitterContext } from '../splitter/splitter.context';

@Element()
export class SplitterPanel extends PlusCore {
  /**
   * Minimum size of element.
   */
  @Property()
  minSize?: number;

  /**
   * Maximum size of element.
   */
  @Property()
  maxSize?: number;

  /**
   * Initial size of element in percents or CSS values.
   */
  @Property()
  size?: number;

  /**
   * Snap to minimum size offset in pixels.
   */
  @Property()
  snapOffset?: number;

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
    return <slot />;
  }
}
