import { Component, Host, Prop, h } from '@stencil/core';

/**
 * TODO
 * @group tabs
 * @slot - The default slot
 */
@Component({
  tag: 'plus-tabs-bar',
  styleUrl: 'tabs-bar.scss',
  shadow: true,
})
export class TabsBar {

  /**
   * TODO
   */
  @Prop({ reflect: true })
  grow?: boolean;

  /**
   * TODO
   */
  @Prop({ reflect: true })
  justify?: 'start' | 'center' | 'end' = 'start';

  /**
   * TODO
   */
  @Prop({ reflect: true })
  reverse?: boolean;

  render() {
    return (
      <Host role="tablist">
        <slot />
      </Host>
    );
  }
}
