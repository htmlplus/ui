import {
  Debounce,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Provider
} from '@htmlplus/element';

import Split, { Instance, Options } from 'split.js';

import { PlusCore } from '@/core';

import type { SplitterBar } from '../splitter-bar/splitter-bar';
import type { SplitterPanel } from '../splitter-panel/splitter-panel';
import type { SplitterContext } from './splitter.context';

const SafeSplit: typeof Split = (elements: HTMLElement[], options) => {
  const parentElement = elements.at(0).parentElement;

  const insertBefore = parentElement.insertBefore;

  parentElement.insertBefore = () => undefined;

  const instance = Split(elements, options);

  parentElement.insertBefore = insertBefore;

  const destroy = instance.destroy;

  instance.destroy = (...params) => {
    const removeChild = parentElement.removeChild;

    parentElement.removeChild = () => undefined;

    destroy(...params);

    parentElement.removeChild = removeChild;
  };

  return instance;
};

/**
 * @thirdParty
 * @dependencies split.js
 * @slot default - The default slot.
 */
@Element()
export class Splitter extends PlusCore {
  /**
   * TODO
   */
  @Property()
  gutterSize?: number;

  /**
   * Number of pixels to drag.
   */
  @Property()
  step?: number = 1;

  /**
   * Direction to split.
   */
  @Property({ reflect: true })
  layout?: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * TODO
   */
  @Property({ reflect: true })
  variant?: 'default' | (string & {});

  /**
   * Fire on drag.
   */
  @Event()
  plusDrag!: EventEmitter<void>;

  /**
   * Fire on drag start.
   */
  @Event()
  plusDragStart!: EventEmitter<void>;

  /**
   * Fire on drag end.
   */
  @Event()
  plusDragEnd!: EventEmitter<void>;

  @Provider('splitter')
  state: SplitterContext = {
    register: this.register.bind(this),
    unregister: this.unregister.bind(this)
  };

  children = new Set<PlusCore>();

  instance?: Instance;

  /**
   * TODO
   */
  @Method()
  getSizes(): number[] {
    return this.instance?.getSizes() || [];
  }

  /**
   * TODO
   */
  @Method()
  setSizes(sizes: number[]): void {
    this.instance?.setSizes(sizes);
  }

  @Debounce(0)
  do() {
    if (!this.children.size) return;

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

    const options: Options = {
      gutterSize: this.gutterSize ?? 0,
      cursor: '',
      expandToMin: true,
      direction: this.layout,
      dragInterval: this.step,
      minSize: panels.map(($panel) => $panel.min ?? 0),
      maxSize: panels.map(($panel) => $panel.max ?? Infinity),
      sizes: panels.map(($panel) => $panel.size ?? 100 / panels.length),
      snapOffset: panels.map(($panel) => $panel.snapOffset ?? 0),
      gutter: (index) => {
        return bars[index - 1].$host;
      },
      gutterStyle: (dimension, gutterSize, index) => {
        return {
          [dimension]: gutterSize
            ? `${gutterSize}px`
            : getComputedStyle(bars[index - 1].$host).getPropertyValue(dimension)
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

    this.instance?.destroy();

    this.instance = SafeSplit(
      panels.map(($panel) => $panel.$host),
      options
    );
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

  disconnectedCallback() {
    this.instance?.destroy();
  }

  render() {
    return <slot />;
  }
}
