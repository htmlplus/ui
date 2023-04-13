import {
  Bind,
  Element,
  Event,
  EventEmitter,
  Method,
  Property,
  Watch,
  host
} from '@htmlplus/element';

import { Animation } from '@app/services';

@Element()
export class Accordion {
  /**
   * TODO.
   */
  @Property({ reflect: true })
  disabled?: boolean;

  /**
   * TODO.
   */
  @Property({ reflect: true })
  open?: boolean;

  /**
   * TODO.
   */
  @Property()
  summary?: string;

  /**
   * TODO.
   */
  @Event({ cancelable: true })
  plusCollapse!: EventEmitter<void>;

  /**
   * TODO.
   */
  @Event()
  plusCollapsed!: EventEmitter<void>;

  /**
   * TODO.
   */
  @Event({ cancelable: true })
  plusExpand!: EventEmitter<void>;

  /**
   * TODO.
   */
  @Event()
  plusExpanded!: EventEmitter<void>;

  animate?: Animation;

  isOpen?: boolean;

  $body!: HTMLElement;

  $header!: HTMLElement;

  get $host() {
    return host(this);
  }

  @Method()
  hide() {}

  @Method()
  show() {}

  bind() {
    this.animate = new Animation({
      key: 'state',
      source: () => this.$host,
      target: () => this.$host,
      state: this.open ? 'entered' : 'leaved',
      states: {
        enter: 'expand',
        entering: 'expanding',
        entered: 'expanded',
        leave: 'collapse',
        leaving: 'collapsing',
        leaved: 'collapsed'
      }
    });
  }

  unbind() {
    this.animate?.dispose();
  }

  @Watch(['open'])
  watcher(next, prev, name) {
    switch (name) {
      case 'open':
        break;
    }
  }

  @Bind()
  onClick() {}

  @Bind()
  onKeyDown(event: KeyboardEvent) {
    if (['Enter', ' '].includes(event.key)) {
      event.preventDefault();
      // this.open ? this.hide() : this.show();
    }

    if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      // this.hide();
    }

    if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      // this.show();
    }
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
        <div
          aria-controls="content"
          aria-disabled={!!this.disabled}
          aria-expanded={!!this.open}
          className="header"
          part="header"
          role="button"
          tabIndex={this.disabled ? -1 : 0}
          ref={($element) => (this.$header = $element)}
          onClick={this.onClick}
        >
          <slot className="summary" name="summary" part="summary">
            {this.summary}
          </slot>
          <span className="icon" part="icon">
            <slot name="icon-collapse">+</slot>
            <slot name="icon-expand">-</slot>
          </span>
        </div>
        <div
          aria-labelledby="header"
          className="body"
          role="region"
          ref={($element) => (this.$body = $element)}
        >
          <slot className="content" part="content"></slot>
        </div>
      </>
    );
  }
}
