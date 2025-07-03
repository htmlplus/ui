import { Debounce, Element, Event, EventEmitter, Property, Provider } from '@htmlplus/element';

import Split from 'split.js';

import { PlusCore } from '@/core';

import { SplitterBar } from '../splitter-bar/splitter-bar';
import { SplitterPanel } from '../splitter-panel/splitter-panel';
import { SplitterContext } from './splitter.context';

@Element()
export class Splitter extends PlusCore {
  /**
   * Number of pixels to drag.
   */
  @Property()
  dragInterval?: number = 1;

  /**
   * Direction to split: horizontal or vertical.
   */
  @Property({ reflect: true })
  direction?: 'horizontal' | 'vertical' = 'horizontal';

  // // Cursor to display while dragging.
  // cursor?: string

  /**
   * TODO: Callback on drag.
   */
  @Event()
  plusDrag!: EventEmitter<void>;

  /**
   * TODO: Callback on drag start.
   */
  @Event()
  plusDragStart!: EventEmitter<void>;

  /**
   * TODO: Callback on drag end.
   */
  @Event()
  plusDragEnd!: EventEmitter<void>;

  // // Called to set the style of each element.
  // elementStyle?(
  //     dimension: 'width' | 'height',
  //     elementSize: number,
  //     gutterSize: number,
  //     index: number,
  // ): CSSStyleDeclarationPartial

  // // Called to set the style of the gutter.
  // gutterStyle?(
  //     dimension: 'width' | 'height',
  //     gutterSize: number,
  //     index: number,
  // ): CSSStyleDeclarationPartial

  @Provider('splitter')
  state: SplitterContext = {
    register: this.register.bind(this),
    unregister: this.unregister.bind(this)
  };

  children = new Set<PlusCore>();

  instance?: Split.Instance;

  @Debounce(0)
  do() {
    const children = Array.from(this.children).sort((a, b) => {
      const i = Array.from(this.$host.children).indexOf(a.$host);
      const j = Array.from(this.$host.children).indexOf(b.$host);
      return i < j ? -1 : +1;
    });

    const bars = children.filter((instance) =>
      instance.$host.localName.endsWith('bar')
    ) as SplitterBar[];

    const panels = children.filter((instance) =>
      instance.$host.localName.endsWith('panel')
    ) as SplitterPanel[];

    const options: Split.Options = {
      gutterSize: 0,
      expandToMin: true,
      direction: this.direction,
      dragInterval: this.dragInterval,
      minSize: panels.map(($panel) => $panel.minSize ?? 0),
      maxSize: panels.map(($panel) => $panel.maxSize ?? Infinity),
      sizes: panels.map(($panel) => $panel.size ?? 100 / panels.length),
      snapOffset: panels.map(($panel) => $panel.snapOffset ?? 0),
      gutter: (index) => {
        return bars[index - 1].$host;
      },
      gutterStyle: (dimension, gutterSize, index) => {
        return {
          [dimension]: getComputedStyle(bars[index - 1].$host).getPropertyValue(dimension)
        };
      },
      onDrag: () => {
        this.plusDrag();
      },
      onDragStart: () => {
        this.plusDragStart();
      },
      onDragEnd: () => {
        this.plusDragEnd();
      }
    };

    const insertBefore = this.$host.insertBefore;
    const removeChild = this.$host.removeChild;

    this.$host.insertBefore = () => undefined;
    this.$host.removeChild = () => undefined;

    this.instance?.destroy();

    this.instance = Split(
      panels.map(($panel) => $panel.$host),
      options
    );

    this.$host.insertBefore = insertBefore;
    this.$host.removeChild = removeChild;
  }

  register(child: PlusCore) {
    if (this.children.has(child) == true) return;

    this.children.add(child);

    this.do();
  }

  unregister(child: PlusCore) {
    if (this.children.has(child) != true) return;

    this.children.delete(child);

    this.do();
  }

  updatedCallback() {
    this.do();
  }

  render() {
    return <slot />;
  }
}
