import { Attributes, Bind, Element, Event, EventEmitter, Property, State, Watch } from '@htmlplus/element';
import * as Helpers from '@app/helpers';
import { StickyState, StickyTop } from './sticky.types';

/**
 * @slot default - The default slot.
 * @slot normal  - The normal slot.
 * @slot stick   - The stick slot.
 */
@Element()
export class Sticky {
  /**
   * Disables the sticky mode.
   */
  @Property()
  disabled?: boolean;

  /**
   * Specifies the space from top.
   */
  @Property()
  top?: StickyTop = 0;

  /**
   * If you use `state` property or `plusChange` event, you shold set this property to `true`.
   */
  @Property()
  watcher?: boolean;

  /**
   * Specifies the z-index of the sticky.
   */
  @Property()
  zIndex?: number;

  /**
   * When the component state is changed this event triggers. 
   * To enable this event you shold set `watcher` property to `true`.
   */
  @Event()
  plusChange!: EventEmitter<StickyState>;

  $element!: HTMLElement;

  @State()
  state?: StickyState;

  observer?: IntersectionObserver;

  @Attributes()
  get attributes() {
    return {
      state: this.watcher ? this.state : null,
      style: this.style
    }
  }

  get sizer() {
    const top = Helpers.toUnit(this.top);

    if (!top) return;

    return {
      top: `calc((${top} + 1px) * -1)`
    }
  }

  get style() {
    return Helpers.styles({
      top: Helpers.toUnit(this.top),
      zIndex: this.zIndex ?? null,
    })
  }

  bind() {
    if (!this.watcher) return;

    if (this.disabled) return;

    this.observer = new IntersectionObserver(this.onIntersecting, { threshold: [1] });

    this.observer.observe(this.$element);
  }

  unbind() {
    // TODO: immediately rerenders after remove `watcher` attribute 
    requestAnimationFrame(() => {
      this.state = undefined;
      this.observer?.disconnect();
    })
  }

  @Watch(['disabled', 'watcher'])
  watchers(next, prev, key) {
    switch (key) {
      case 'disabled':
        next ? this.unbind() : this.bind();
        break;
      case 'watcher':
        next ? this.bind() : this.unbind();
        break;
    }
  }

  @Bind()
  onIntersecting(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;

    this.state = entry.intersectionRatio < 1 ? 'stick' : 'normal';

    this.plusChange(this.state);
  }

  loadedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind();
  }

  render() {
    return (
      <>
        <div className="sizer-wrapper">
          <div
            className="sizer"
            ref={($element) => this.$element = $element}
            style={this.sizer}
          ></div>
        </div>
        <slot />
        {this.state && (
          <div className={this.state}>
            <slot name={this.state} />
          </div>
        )}
      </>
    )
  }
}
