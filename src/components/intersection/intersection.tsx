import {
  Attributes,
  Bind,
  Element,
  Event,
  EventEmitter,
  Property,
  State,
  Watch,
  host
} from '@htmlplus/element';

/**
 * @stable
 * @slot default - The default slot.
 */
@Element()
export class Intersection {
  /**
   * Disables the component functionality.
   */
  @Property()
  disabled?: boolean;

  /**
   * The event fires only once.
   */
  @Property()
  once?: boolean;

  /**
   * The element that is used as the viewport for checking visibility of the target. Must be the
   * ancestor of the target. Defaults to the browser viewport if not specified or if `null`.
   */
  @Property()
  root?: Element;

  /**
   * Margin around the root. Can have values similar to the CSS
   * [margin](https://mdn.io/margin)
   * property, e.g. `"10px 20px 30px 40px"` (top, right, bottom, left). The values can be
   * percentages. This set of values serves to grow or shrink each side of the root element's
   * bounding box before computing intersections. Defaults to all zeros.
   */
  @Property()
  rootMargin?: string;

  /**
   * Either a single number or an array of numbers which indicate at what percentage of the
   * target's visibility the observer's callback should be executed. If you only want to detect
   * when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to
   * run every time visibility passes another 25%, you would specify the array
   * [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the
   * callback will be run). A value of 1.0 means that the threshold isn't considered passed until
   * every pixel is visible.
   */
  @Property()
  threshold?: number | number[];

  /**
   * Fires When the browser detects that the component has been unveiled or obscured.
   */
  @Event()
  plusChange!: EventEmitter<IntersectionObserverEntry>;

  @State()
  isIntersecting?: boolean;

  observer?: IntersectionObserver;

  @Attributes()
  get attributes() {
    return {
      state: this.isIntersecting ? 'in' : 'out'
    };
  }

  get disconnected() {
    return this.once && this.isIntersecting;
  }

  get options() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };
  }

  bind() {
    this.observer = new IntersectionObserver(this.onIntersecting, this.options);
    this.observer.observe(host(this));
  }

  unbind() {
    this.observer?.disconnect();
    delete this.observer;
  }

  @Watch(['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'])
  watcher(next, prev, name) {
    switch (name) {
      case 'disabled':
        if (next) this.unbind();
        else if (!this.disconnected) this.bind();
        break;

      case 'once':
        if (next || this.disabled) break;
        this.unbind();
        this.bind();
        break;

      case 'root':
      case 'rootMargin':
      case 'threshold':
        if (this.disabled || this.disconnected) break;
        this.unbind();
        this.bind();
        break;
    }
  }

  @Bind()
  onIntersecting(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;

    this.isIntersecting = entry.isIntersecting;

    this.plusChange(entry);

    if (!this.isIntersecting || !this.once) return;

    this.unbind();
  }

  connectedCallback() {
    if (this.disabled) return;
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return <slot />;
  }
}
