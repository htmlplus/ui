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

import { Animation2 } from '@app/services';

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

  $body!: HTMLElement;

  $header!: HTMLElement;

  get $host() {
    return host(this);
  }

  animate = new Animation2({
    key: 'state',
    source: () => this.$body,
    target: () => this.$host,
    states: {
      enter: 'expand',
      entering: 'expanding',
      entered: 'expanded',
      leave: 'collapse',
      leaving: 'collapsing',
      leaved: 'collapsed'
    },
    onEnter: () => {
      this.opened = this.open = true;
      this.$body.style.height = '0';
    },
    onEntering: () => {
      this.opened = this.open = true;
      this.$body.style.height = `${this.$body.scrollHeight}px`;
    },
    onEntered: (silent) => {
      this.opened = this.open = true;
      this.$body.style.height = '';
      if (silent) return;
      this.plusExpanded();
    },
    onLeave: () => {
      this.opened = this.open = false;
      this.$body.style.height = `${this.$body.scrollHeight}px`;
    },
    onLeaving: () => {
      this.opened = this.open = false;
      this.$body.style.height = '0';
    },
    onLeaved: (silent) => {
      this.opened = this.open = false;
      this.$body.style.height = '';
      if (silent) return;
      this.plusCollapsed();
    }
  });

  opened: boolean = false;

  @Method()
  async hide() {
    this.try(false, true);
  }

  @Method()
  async show() {
    this.try(true, true);
  }

  @Method()
  async toggle() {
    return this.open ? this.hide() : this.show();
  }

  bind() {
    this.animate.initialize((this.opened = this.open) ? 'entered' : 'leaved');
  }

  unbind() {
    this.animate?.dispose();
  }

  try(open: boolean, silent?: boolean) {
    if (this.disabled) return;

    if (this.opened == open) return;

    const event = open ? this.plusExpand : this.plusCollapse;

    if (!silent && event.call(this).defaultPrevented) return;

    this.opened = this.open = open;

    if (this.open) {
      this.animate.enter(silent);
    } else {
      this.animate.leave(silent);
    }
  }

  @Watch(['open'])
  watcher(next, prev, name) {
    switch (name) {
      case 'open':
        this.try(next, true);
        break;
    }
  }

  @Bind()
  onClick() {
    this.try(!this.open);
  }

  @Bind()
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        this.try(!this.open);
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        this.try(false);
        break;

      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        this.try(true);
        break;
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
          onKeyDown={this.onKeyDown as any}
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
