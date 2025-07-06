import { Bind, Consumer, Element, State, off, on } from '@htmlplus/element';

import { PlusCore } from '@/core';

import { SplitterContext } from '../splitter/splitter.context';

/**
 * @subset
 *
 * @slot default - The default slot.
 */
@Element()
export class SplitterBar extends PlusCore {
  dragging: boolean = false;

  @State()
  @Consumer('splitter')
  state?: SplitterContext;

  @Bind()
  handleStartDragging() {
    if (this.dragging == true) return;

    this.dragging = true;

    this.$host.setAttribute('dragging', '');
  }

  @Bind()
  handleStopDragging() {
    if (this.dragging != true) return;

    this.dragging = false;

    this.$host.removeAttribute('dragging');
  }

  connectedCallback() {
    ['mousedown', 'touchstart'].forEach((key) => {
      on(this.$host, key, this.handleStartDragging);
    });

    ['mouseup', 'touchend', 'touchcancel'].forEach((key) => {
      on(window.document, key, this.handleStopDragging);
    });
  }

  readyCallback() {
    this.state?.register(this);
  }

  disconnectedCallback() {
    ['mousedown', 'touchstart'].forEach((key) => {
      off(this.$host, key, this.handleStartDragging);
    });

    ['mouseup', 'touchend', 'touchcancel'].forEach((key) => {
      off(window.document, key, this.handleStopDragging);
    });

    this.state?.unregister(this);
  }

  render() {
    return <slot onSlotChange={this.forceUpdate} />;
  }
}
