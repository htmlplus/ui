import {Component, ComponentInterface, Host, Prop, h, Watch, Element} from '@stencil/core';
import {GlobalConfig} from '@app/utils';

/**
 * Make the element be displayed in full-screen mode.
 * @internal
 * @slot default - The default slot.
 * @examples default
 */
@Component({
  tag: 'plus-full-screen',
  styleUrl: 'full-screen.scss',
  shadow: true
})
export class FullScreen implements ComponentInterface {
  /**
   * Call full screen function when opened is true
   */
  @Prop()
  opened?: boolean = false;

  @Element()
  $host!: HTMLElement;

  @GlobalConfig('template')
  config?;

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

  bind() {
    if (!this.opened) return;

    if (this.$host.requestFullscreen) {
      this.$host.requestFullscreen().catch(error => console.error(error));
    }
  }

  unbind() {
    if (this.opened) return;

    if (document.exitFullscreen) {
      document.exitFullscreen().catch(error => console.error(error));
    }
  }

  /**
   * Watchers
   */

  @Watch('opened')
  watcher() {
    console.log("opened", this.opened);
    this.opened ? this.bind() : this.unbind();
  }

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  connectedCallback() {
    this.bind();
  }

  disconnectedCallback() {
    this.unbind()
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }

  [memberName: string]: any;
}
