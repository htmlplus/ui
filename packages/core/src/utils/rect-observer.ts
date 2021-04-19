const props: Array<keyof DOMRect> = ['bottom', 'height', 'left', 'right', 'top', 'width'];

export type RectObserverCallback = (entries: Array<RectObserverEntry>, observer: RectObserver) => void;

export type RectObserverEntry = {
  boundingClientRect: DOMRect;
  target: Element;
};

export class RectObserver {

  private key: number;

  private nodes = new Map<Element, RectObserverEntry>();

  constructor(private callback: RectObserverCallback) { }

  public disconnect() {
    this.nodes.forEach((state, node) => (this.unobserve(node), state));
  }

  public observe(node: Element) {

    const empty = this.nodes.size === 0;

    const entry: RectObserverEntry = {
      boundingClientRect: undefined,
      target: node,
    };

    this.nodes.set(node, entry);

    if (empty) this.do();
  }

  public unobserve(node: Element) {

    this.nodes.delete(node);

    if (!this.nodes.size) cancelAnimationFrame(this.key);
  }

  private changed(a: DOMRect, b: DOMRect) {

    if (typeof a !== typeof b) return true;

    return props.some((prop) => a[prop] !== b[prop]);
  }

  private do() {

    const entries: Array<RectObserverEntry> = [];

    this.nodes.forEach((state, node) => {

      const rect = node.getBoundingClientRect();

      if (!this.changed(rect, state.boundingClientRect)) return;

      state.boundingClientRect = rect;

      entries.push(state);
    });

    if (entries.length) this.callback(entries, this);

    this.key = window.requestAnimationFrame(() => this.do());
  }
}