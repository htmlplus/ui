import { Component, Element, Host, Prop, h, forceUpdate } from '@stencil/core';
import { Bind, GlobalConfig } from '@app/services';
import * as Utils from '@app/utils';
import * as BREADCRUMB_SHAPES from './breadcrumb.shapes';
import { BreadcrumbSeparator } from './breadcrumb.types';

/**
 * TODO
 * @internal 
 * @slot - The default slot
 * @examples default
 */
@Component({
  tag: 'plus-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true
})
export class Breadcrumb {

  /**
   * TODO
   */
  @Prop()
  separator?: BreadcrumbSeparator = 'arrow';

  @GlobalConfig('breadcrumb', {
    separator: 'arrow'
  })
  config?;

  @Element()
  $host!: HTMLElement;

  observer?: MutationObserver;

  get $nodes() {
    return Array.from(this.$host.children);
  }

  get attributes() {
    return {
      'aria-label': 'Breadcrumb'
    }
  }

  get isRTL() {
    return Utils.isRTL(this);
  }

  get template() {
    return this.$host.querySelector('template[slot=separator]')?.cloneNode(true)['content'];
  }

  /**
   * Internal Methods
   */

  bind() {
    this.observer = new MutationObserver(this.onChange);
    this.observer.observe(this.$host, { childList: true });
  }

  unbind() {
    this.observer?.disconnect();
  }

  update(force?: boolean) {
    this.$nodes.map(($node, index) => $node.slot = `${index}`);
    force && forceUpdate(this);
  }

  /**
   * Events handler
   */

  @Bind
  onChange() {
    this.update(true);
  }

  /**
   * Lifecycles
   */

  componentDidLoad() {
    this.bind();
    this.update();
  }

  disconnectedCallback() {
    this.unbind();
  }

  node(key) {

    const result = [
      <div key={key}>
        <slot name={key.toString()} />
      </div>
    ];

    if(this.template) {
      console.log(this.template.children[0].outerHTML)
      // Array.from(this.template.children).map(result)
      result.push(<div class="separator reverse" innerHTML={this.template.children[0].outerHTML}></div>);

      return result
    }

    if (this.separator === 'none') return result;

    if (this.$nodes.length - 1 === key) return result;

    const Shape = BREADCRUMB_SHAPES[this.separator];

    if (!Shape) return result;

    result.push(<div key={key} class={`separator ${this.isRTL ? 'reverse' : ''}`}><Shape /></div>);

    return result;
  }

  render() {
    return (
      <Host {...this.attributes}>
        <div class="root">
          {this.$nodes.map(($node, index) => $node && this.node(index))}
        </div>
      </Host>
    )
  }
}
